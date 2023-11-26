import { Request, Response } from "express";
import { AuthRepository, RegisterUserDto } from "./domain";

export class AuthController {
    constructor(
        private readonly authRepository: AuthRepository
    ) {
        
    }
    register = (req: Request, res: Response)=>{
        const [ error, registerUserDto] = RegisterUserDto.create(req.body)
        if(error) return res.status(400).json({error: error});
        //console.log(registerUserDto)
    
        this.authRepository.register(registerUserDto!)
          .then(user => res.json(user))
          .catch(error => res.status(500).json({error}))
    
        
    }
    login(req: Request, res: Response) {
        res.status(201).json({message: 'Login de usuario'})
    }
}