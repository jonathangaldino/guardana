import Koa from 'koa'

export const postUsers = async (ctx: Koa.Context, next: () => Promise<any>) => {
  const { name, email, password } = ctx.request.body

  ctx.body = { message: 'Everything is OK!' }
  ctx.status = 200

  next()
}

export default {
  postUsers,
}
