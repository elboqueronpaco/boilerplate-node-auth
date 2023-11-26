import { envs } from "./adapters";
import { MongodbDatabase } from "./data";
import { AppMiddleware, AppRoutes, AppServer } from "./presentation";

(async () => {
    await main()
})()
async function main() {
    const {PORT, BASE_URL, MONGO_URL, MONGO_DB_NAME} = envs
    await MongodbDatabase.connect({
        mongoUrl: MONGO_URL,
        dbName: MONGO_DB_NAME
    })
    await new AppServer({
        PORT,
        routes:  AppRoutes.router,
        BASE_URL,
    }).start()

}