import UserRepositories from "../repositories/UsersRepositories";
import { getCustomRepository } from "typeorm"

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}

export default class CreateUserService {

    async execute({ name, email, admin }: IUserRequest) {

        if (!email)
            throw new Error("Email incorrect")

        const userRepository = getCustomRepository(UserRepositories)
        const userAlreadyExists = await userRepository.findOne({ email })
        console.log(userAlreadyExists)


        if (userAlreadyExists)
            throw new Error("User already exists")

        const user = userRepository.create({
            name,
            email,
            admin
        })

        await userRepository.save(user)

        return user

    }

}