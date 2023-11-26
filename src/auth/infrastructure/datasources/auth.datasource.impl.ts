import { CustomError } from "../../../domain";
import { AuthDatasorce, RegisterUserDto, UserEntity } from "../../domain";
import { randomUUID} from 'crypto'
import { UserModel } from "../../models";
import { BcryptAdapter } from "../../../adapters";

type HashFunction = (password: string) => string
type CompareFunction = (password: string, hashed: string) => boolean
export class AuthDatasourceImpl implements AuthDatasorce{
    constructor(
        private readonly hashPassword: HashFunction =  BcryptAdapter.hash,
        private readonly comparePassword: CompareFunction = BcryptAdapter.compare
    ){}
    async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        const { name, email, password} = registerUserDto
        try {
            const exists = await UserModel.findOne({ email });
        if ( exists ) throw CustomError.badRequest('User already exists');
        
        // 2. Hash de contraseña
        const user = await UserModel.create({
            name: name,
            email: email,
            password: this.hashPassword(password),
        });


        await user.save();

        // 3. Mapear la respuesta a nuestra entidad
        //return UserMapper.userEntityFromObject(user);

            const userEntity = new UserEntity(
                user.id,
                name,
                email,
                user.password,
                user.role
            )
            return  userEntity;
        } catch (error) {
            if (error instanceof CustomError) {
                throw error
            }
            throw CustomError.internalServer()
        }
    }
}