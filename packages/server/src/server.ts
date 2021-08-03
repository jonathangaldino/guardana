import Koa from 'koa'
import bodyParser from 'koa-bodyparser'

import applyRoutes from './routes'

const app = new Koa()

app.use(bodyParser())

// Apply each route
applyRoutes(app)

export default app
