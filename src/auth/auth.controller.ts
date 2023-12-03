import { Request, Response } from "express";
import { AuthRepository, RegisterUserDto } from "./domain";
import { CustomError } from "../domain";

export class AuthController {
    constructor(
        private readonly authRepository: AuthRepository
    ) {
        
    }
    private handleError = (error: unknown, res: Response) => {
        if( error instanceof CustomError) return res.status(error.statusCode).json({error: error.message});
        console.log(error);
        return res.status(500).json({error: 'Internal Server Error'})

    }
    register = (req: Request, res: Response)=>{
        const [ error, registerUserDto] = RegisterUserDto.create(req.body)
        if(error) return res.status(400).json({error: error});
        //console.log(registerUserDto)
    
        this.authRepository.register(registerUserDto!)
          .then(user => res.json(user))
          .catch(error => this.handleError(error, res))
    
        
    }
    login(req: Request, res: Response) {
        res.status(201).json({message: 'Login de usuario'})
    }
}