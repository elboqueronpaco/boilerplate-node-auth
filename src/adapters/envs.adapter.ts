import 'dotenv/config'
import { get } from 'env-var'

export const envs = {
    PORT : get('PORT').default('8000').asPortNumber(),
    BASE_URL: get('BASE_URL').default('http://localhost').asString()
}