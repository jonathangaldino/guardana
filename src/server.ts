import Koa from 'koa'
import bodyParser from 'koa-bodyparser'

import routes from './routes'

const app = new Koa()

/** Top-level Middlewares */
app.use(bodyParser())
/** ---------------------- */

/**
 * Load each route
 */
routes.forEach((route) => app.use(route.routes()))

export default app
