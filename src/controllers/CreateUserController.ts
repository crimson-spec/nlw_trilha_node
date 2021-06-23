import CreateUserService from "../services/CreateUserService";
import { Request, Response } from "express"

export default class CreateUserController {
    async handle(req: Request, res: Response) {

        const { name, email, admin } = req.body
        const createUserService = new CreateUserService()
        const user = createUserService.execute({ name, email, admin })

        return res.status(201).json(user)
    }
}