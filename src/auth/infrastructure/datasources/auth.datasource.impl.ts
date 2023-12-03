import { CustomError } from "../../../domain";
import { AuthDatasorce, RegisterUserDto, UserEntity } from "../../domain";
import { randomUUID} from 'crypto'
import { UserModel } from "../../models";
import { BcryptAdapter } from "../../../adapters";
import { UserMapper } from "../mappers";
import { Response } from "express";

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
        if ( exists ) throw CustomError.badRequest('Algo salio mal pruebe de nuevo');
        
        // 2. Hash de contraseña
        const user = await UserModel.create({
            name: name,
            email: email,
            password: this.hashPassword(password),
        });


        await user.save();

        // 3. Mapear la respuesta a nuestra entidad
        //return UserMapper.userEntityFromObject(user);

            const userEntity = UserMapper.userEntityFromObject(user)
            return  userEntity;
        } catch (error) {
            if (error instanceof CustomError) {
                throw error
            }
            throw CustomError.internalServer()
        }
    }
}