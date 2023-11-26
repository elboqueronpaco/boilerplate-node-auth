import { UserEntity, RegisterUserDto } from "..";




export abstract class AuthDatasorce {

    abstract register(registerUserDto: RegisterUserDto): Promise<UserEntity>
}