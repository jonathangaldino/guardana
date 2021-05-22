import Router from '@koa/router'
import UserController from './UserControllers'

const router: Router = new Router()

router.prefix('/users').post('/', UserController.postUsers)

router.prefix('/auth').post('/', UserController.postAuth)

export default router
