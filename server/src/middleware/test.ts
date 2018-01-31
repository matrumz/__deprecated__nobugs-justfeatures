import { Request, Response, NextFunction } from "express"

export function middlewareTest(req: Request, res: Response, next: NextFunction): void
{
    res.append("testheader", "testheadervalue");
    next();
}
