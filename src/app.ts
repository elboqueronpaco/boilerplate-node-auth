import { envs } from "./adapters";
import { AppRoutes, AppServer } from "./presentation";
(async () => {
    await main()
})()
async function main() {
    const {PORT, BASE_URL} = envs
    await new AppServer({
        PORT,
        routes:  AppRoutes.router,
        BASE_URL,
    }).start()

}