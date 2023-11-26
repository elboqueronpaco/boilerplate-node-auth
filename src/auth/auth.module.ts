import { Router } from "express";
import { AuthController } from "./auth.controller";
import { AuthDatasourceImpl, AuthRepositoryImpl } from "./infrastructure";

export class AuthModule {
    
    static get routes(): Router{
        const router = Router()
        const datasource = new AuthDatasourceImpl()
        const authRepository = new AuthRepositoryImpl(datasource)
        const authController = new AuthController(authRepository)
        router.post('/register', authController.register)
        router.post('/login', authController.login)
        return router
    }
}