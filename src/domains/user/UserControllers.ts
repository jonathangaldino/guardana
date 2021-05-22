import Koa from 'koa'

import createUser, { Input } from './business/createUser'

export const postUsers = async (ctx: Koa.Context, next: () => Promise<any>) => {
  const { name, email, password } = ctx.request.body

  const newUser: Input = {
    name,
    email,
    unhashedPassword: password,
  }

  try {
    const user = await createUser(newUser)

    ctx.body = { message: 'User created!', user }
    ctx.status = 201
  } catch (err) {
    ctx.body = { message: err.message }
    ctx.status = 500
  }

  next()
}

export default {
  postUsers,
}
