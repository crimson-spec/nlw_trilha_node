import { NextFunction, Request, Response } from "express"
import { verify } from "jsonwebtoken";


export default function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {

    const tokenAuthorization = req.headers.authorization;

    if (!tokenAuthorization) throw new Error("Invalid token")

    const [, token] = tokenAuthorization.split(" ")

    const { sub } = verify(token, "a0b670f1bc37d8d689cf5f76b28d63d7")

    req.body.id = sub;

    next();
}