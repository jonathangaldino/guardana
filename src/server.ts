import Koa from 'koa'
import bodyParser from 'koa-bodyparser'

import routes from './routes'

const app = new Koa()

/** Top-level Middlewares */
app.use(bodyParser())
/** ---------------------- */

app.use(routes.routes())

export default app
