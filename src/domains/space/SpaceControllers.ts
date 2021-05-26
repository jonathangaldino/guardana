import Koa from 'koa'

import createSpace, { Input as CreateSpaceInput } from './business/createSpace'
import listSpaces from './business/listSpaces'

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

export const getSpaces = async (ctx: Koa.Context, next: () => Promise<any>) => {
  const { size } = ctx.query

  const filters = {
    size: <string>size,
  }

  try {
    const spaces = await listSpaces({ filters })

    ctx.body = { message: 'Fetched spaces successfully', spaces }
    ctx.status = 200
  } catch (err) {
    ctx.body = { message: err.message }
    ctx.status = 500
  }

  next()
}
