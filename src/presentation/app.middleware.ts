import express, { json, urlencoded } from 'express'
export class AppMiddleware{    
    static middlewares () {
        const app = express()
        app.use(json())
        app.use(urlencoded({extended: true}))
    }
}