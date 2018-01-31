import * as miscModels from "../common/misc.models";

export = class Test {
    constructor (router: miscModels.Router)
    {
        router.get("/", this.testRoot.bind(this));
    }

    private testRoot(req: miscModels.Request, res: miscModels.Response): void
    {
        res.status(200).send("This was a successful test!");
    }
}
