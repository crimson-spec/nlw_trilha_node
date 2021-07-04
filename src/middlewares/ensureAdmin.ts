import { Request, Response, NextFunction } from "express"
import { getCustomRepository } from "typeorm";
import UserRepositories from "../repositories/UsersRepositories";

export default async function ensureAdmin(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const userRepository = getCustomRepository(UserRepositories)

    const { admin } = await userRepository.findOne(req.body.id)

    if (admin)
        return next();

    return res.status(401).json({
        error: "Unauthorized for this"
    })
}