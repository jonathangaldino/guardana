import Koa from 'koa'

import createSpace, { Input as CreateSpaceInput } from './business/createSpace'

export const postSpaces = async (
  ctx: Koa.Context,
  next: () => Promise<any>,
) => {
  const { displayName, description, size } = ctx.request.body

  // Provided by `checkAuthenticationMiddleware`
  const { email: userEmail } = ctx.authenticated

  const newSpace: CreateSpaceInput = {
    displayName,
    description,
    size,
    userEmail,
  }

  try {
    const space = await createSpace(newSpace)

    ctx.body = { message: 'Space created!', space }
    ctx.status = 201
  } catch (err) {
    ctx.body = { message: err.message }
    ctx.status = 500
  }

  next()
}
