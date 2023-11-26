import { Router } from "express";

export class AppRoutes {
    static get router(): Router {
        const router = Router();
        router.get('/', (req, res) => {
            res.status(200).json({message: 'Bienvenido a mi Api Rest'})
        })
        return router
    }
}