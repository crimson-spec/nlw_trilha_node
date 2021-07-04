import UserRepositories from "../repositories/UsersRepositories";
import { hash } from "bcryptjs"
import { getCustomRepository } from "typeorm"

interface IUserRequest {
    name: string;
    email: string;
    password: string;
    admin?: boolean;
}

export default class CreateUserService {

    async execute({ name, email, password, admin }: IUserRequest) {

        if (!email)
            throw new Error("Email incorrect")

        const userRepository = getCustomRepository(UserRepositories)
        const userAlreadyExists = await userRepository.findOne({ email })

        if (userAlreadyExists)
            throw new Error("User already exists")

        const hashPassword = await hash(password, 8);

        const user = userRepository.create({
            name,
            email,
            password: hashPassword,
            admin
        })

        await userRepository.save(user)

        return user

    }

}