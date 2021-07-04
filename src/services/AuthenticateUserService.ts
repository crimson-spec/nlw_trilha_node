import UsersRepositories from "../repositories/UsersRepositories"
import { getCustomRepository } from "typeorm"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"

interface IAuthenticateRequest {
    email: string;
    password: string;
}


export default class AuthenticateUserService {
    async execute({ email, password }: IAuthenticateRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories)
        const user = await usersRepositories.findOne({ email })

        if (!user) throw new Error("Email/password incorrect")

        const hashedPassword = await compare(password, user.password)

        if (!hashedPassword) throw new Error("Email/password incorrect")

        const token = sign({
            email: user.email
        }, "a0b670f1bc37d8d689cf5f76b28d63d7",
            {
                subject: user.id.toString(),
                expiresIn: "1d"
            })

        return token
    }
}