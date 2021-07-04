import { Request, Response } from "express"
import CreateComplimentService from "../services/CreateComplimentService"


export default class CreateComplimentController {
    async handle(req: Request, res: Response) {
        const { id, tag_id, user_receiver, message } = req.body

        const createComplimentService = new CreateComplimentService()

        const compliment = await createComplimentService.execute({
            tag_id,
            user_sender: id,
            user_receiver,
            message
        })

        return res.status(201).json(compliment)
    }
}