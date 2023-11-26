import express, { Application, Router } from "express"

interface Options {
    PORT: number
    routes: Router
    BASE_URL: string
}

export class AppServer {
    public readonly app = express()
    private readonly PORT: number
    private readonly routes: Router
    private readonly BASE_URL: string
    constructor(options: Options) {
        const { PORT, routes, BASE_URL} = options
        this.PORT = PORT
        this.routes = routes
        this.BASE_URL = BASE_URL
        
    }

    async start () {
        //middlewares
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended: true}))
        //routes
        this.app.use(this.routes)
        await this.app.listen(this.PORT)
        console.log(`Server running in ${this.BASE_URL}:${this.PORT}`)

    }
}