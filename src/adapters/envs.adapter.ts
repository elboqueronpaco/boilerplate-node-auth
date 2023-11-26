import 'dotenv/config'
import { get } from 'env-var'

export const envs = {
    PORT : get('PORT').default('8000').asPortNumber()
}