import * as miscModels from "../common/misc.models";
import { middlewareTest } from "../../middleware/test";
import * as jwt from "jsonwebtoken";
import * as bc from "bcryptjs";
const DAY = 86400;

export = class Test
{
    constructor(router: miscModels.Router)
    {
        this.testUser = { id: 0, name: null, email: null, password: null };
        router.get("/", middlewareTest, this.testRoot.bind(this));
        router.post("/register", this.registerTest.bind(this));
        router.get("/getUser", this.getTestUser.bind(this));
    }

    private testUser: any;

    private tokenSecret = "superSecret"

    private testRoot(req: miscModels.Request, res: miscModels.Response): void
    {
        res.status(200).send("This was a successful test!");
    }

    private registerTest(req: miscModels.Request, res: miscModels.Response): void
    {
        this.testUser.id += 1;
        this.testUser.name = req.body.rname;
        this.testUser.email = req.body.remail;
        this.testUser.password = bc.hashSync(req.body.rpassword || "");

        var token = jwt.sign({ id: this.testUser.id }, this.tokenSecret, { expiresIn: DAY });

        res.status(200).send({ auth: true, token: token });
    }

    private getTestUser(req: miscModels.Request, res: miscModels.Response): void
    {
        var token = req.headers['x-access-token'] as string;

        if (!token)
            res.status(401).send({ auth: false, message: "No token provided" });
        else {
            jwt.verify(token, this.tokenSecret, (e: any, decoded: any): void =>
            {
                if (e) res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
                else {
                    if (this.testUser.id == decoded.id) {
                        var resUser = {
                            name: this.testUser.name,
                            email: this.testUser.email
                        }
                        res.status(200).send(resUser);
                    }
                    else res.status(404).send("User not found");
                }
            })
        }
    }
}
