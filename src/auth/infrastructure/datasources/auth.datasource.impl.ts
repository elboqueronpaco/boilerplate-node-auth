import { CustomError } from "../../../domain";
import { AuthDatasorce, RegisterUserDto, UserEntity } from "../../domain";
import { randomUUID} from 'crypto'
export class AuthDatasourceImpl implements AuthDatasorce{
    async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        const { name, email, password} = registerUserDto
        try {
            const user = new UserEntity(
                randomUUID(),
                name,
                email,
                password,
                ['USER_ROLE', 'ADMIN_ROLE']
            )
            return  user;
        } catch (error) {
            if (error instanceof CustomError) {
                throw error
            }
            throw CustomError.internalServer()
        }
    }
}