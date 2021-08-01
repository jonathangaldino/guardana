import UserRouter from './user.routes'
import SpaceRouter from './space.routes'
import Koa from 'koa'

const applyRoutes = (app: Koa) => {
  app.use(UserRouter.routes())
  app.use(SpaceRouter.routes())
}

export default applyRoutes
