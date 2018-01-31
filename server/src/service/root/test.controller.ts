import * as miscModels from "../common/misc.models";
import { middlewareTest } from "../../middleware/test";

export = class Test
{
    constructor(router: miscModels.Router)
    {
        router.get("/", middlewareTest, this.testRoot.bind(this));
    }

    private testRoot(req: miscModels.Request, res: miscModels.Response): void
    {
        res.status(200).send("This was a successful test!");
    }
}
