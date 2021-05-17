import Router from '@koa/router'
import { usersController } from '../controllers'

const router: Router = new Router()

router.prefix('/users').post('/', usersController.postUsers)

export default router
