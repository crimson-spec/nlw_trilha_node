import { Request, Response } from "express"
import CreateUserService from "../services/CreateUserService";


export default class CreateUserController {
    async create(req: Request, res: Response) {

        const { name, email, admin } = req.body
        const createUserService = new CreateUserService()
        const user = await createUserService.execute({ name, email, admin })

        return res.status(201).json(user)
    }
}