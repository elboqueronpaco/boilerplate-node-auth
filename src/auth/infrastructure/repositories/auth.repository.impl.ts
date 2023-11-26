import { AuthDatasorce, AuthRepository, RegisterUserDto, UserEntity } from "../../domain";

export class AuthRepositoryImpl implements AuthRepository {
    constructor(
        private readonly datasource: AuthDatasorce
    ) {
        
    }
    register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        return this.datasource.register(registerUserDto);
    }
}