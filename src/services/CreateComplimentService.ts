import { getCustomRepository } from "typeorm";
import ComplimentsRepositories from "../repositories/ComplimentsRepositories";
import UserRepositories from "../repositories/UsersRepositories";

interface IComplimentRequest {
    tag_id: number;
    user_sender: number;
    user_receiver: number;
    message: string;
}


export default class CreateComplimentService {
    async execute({ tag_id, user_sender, user_receiver, message }: IComplimentRequest) {

        const complimentsRepositories = getCustomRepository(ComplimentsRepositories)

        const userRepositories = getCustomRepository(UserRepositories)

        if (user_sender === user_receiver) throw new Error("You can't send to yourself.")

        const userReceiver = userRepositories.findOne(user_receiver)

        if (!user_receiver) throw new Error("User does not exist!")

        const compliment = await complimentsRepositories.create({
            tag_id,
            user_sender,
            user_receiver,
            message
        })

        return await complimentsRepositories.save(compliment)

    }
}