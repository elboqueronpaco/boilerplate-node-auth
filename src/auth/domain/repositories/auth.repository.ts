import { UserEntity, RegisterUserDto } from "..";




export abstract class AuthRepository {

    abstract register(registerUserDto: RegisterUserDto): Promise<UserEntity>
}