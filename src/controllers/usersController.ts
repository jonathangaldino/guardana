import Koa from 'koa'

export default function makeUsersController() {
  const postUsers = async (ctx: Koa.BaseContext, next: () => Promise<any>) => {
    ctx.body = { message: 'Everything is OK!' }
    ctx.status = 200

    next()
  }

  return {
    postUsers,
  }
}
