import { Request, Response } from "express";
import { RegisterUserDto } from "./domain";

export class AuthController {
    constructor() {
        
    }
    register(req: Request, res: Response) {
        const [ error, registerUserDto] = RegisterUserDto.create(req.body)
        if(error) return res.status(400).json({error: error});
        res.status(201).json(registerUserDto!)
    }
    login(req: Request, res: Response) {
        res.status(201).json({message: 'Login de usuario'})
    }
}