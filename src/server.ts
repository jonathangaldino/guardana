import Koa from 'koa'
import bodyParser from 'koa-bodyparser'

const app = new Koa()

/** Top-level Middlewares */
app.use(bodyParser())

export default app;