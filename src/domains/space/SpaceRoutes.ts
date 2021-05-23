import Router from '@koa/router'
import * as SpaceControllers from './SpaceControllers'

import { checkTokenPresence, CheckAuthentication } from '../middlewares'

const router: Router = new Router()

router
  .prefix('/spaces')
  .post(
    '/',
    checkTokenPresence,
    CheckAuthentication,
    SpaceControllers.postSpaces,
  )

export default router