import Router from '@koa/router'

import usersRoutes from './usersRoutes'

const router: Router = new Router()

router.use(usersRoutes.routes())
router.use(usersRoutes.allowedMethods())

export default router
