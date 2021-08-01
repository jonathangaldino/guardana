import { UserDomain, SpaceDomain } from './domains'
import Koa from 'koa'

const applyRoutes = (app: Koa) => {
  app.use(UserDomain.routes.routes())
  app.use(SpaceDomain.routes.routes())
}

export default applyRoutes
