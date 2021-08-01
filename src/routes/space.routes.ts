import Router from '@koa/router'
import * as SpaceControllers from '../controllers/space.controller'

import { checkTokenPresence, checkAuthentication } from '../middlewares'

const router: Router = new Router()

router
  .prefix('/spaces')
  .post(
    '/',
    checkTokenPresence,
    checkAuthentication,
    SpaceControllers.postSpaces,
  )
  .get('/', checkTokenPresence, checkAuthentication, SpaceControllers.getSpaces)

export default router
