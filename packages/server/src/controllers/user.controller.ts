import { Context, Next } from 'koa'

import createUser, {
  Input as CreateUserInput,
} from '../businesses/user/createUser'
import loginUser, { Input as LoginUserInput } from '../businesses/user/login'

export const postUsers = async (ctx: Context, next: Next) => {
  const { name, email, password } = ctx.request.body

  const newUser: CreateUserInput = {
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
    ctx.app.emit('error', err, ctx)
  }

  next()
}

export const postAuth = async (ctx: Context, next: Next) => {
  const { email, password } = ctx.request.body

  const credentials: LoginUserInput = {
    email,
    unhashedPassword: password,
  }

  try {
    const { user, token } = await loginUser(credentials)

    ctx.body = { message: 'Logged in', user, token }
    ctx.status = 201
  } catch (err) {
    ctx.body = { message: err.message }
    ctx.status = 500
    ctx.app.emit('error', err, ctx)
  }

  next()
}

export default {
  postUsers,
  postAuth,
}
