import { Router } from "express";
import { AuthModule } from "../auth";

export class AppRoutes {
    static get router(): Router {
        const router = Router();
        router.get('/', (req, res) => {
            res.status(200).json({message: 'Bienvenido a mi Api Rest'})
        })
        router.use('/api/v/1/auth', AuthModule.routes)
        return router
    }
}