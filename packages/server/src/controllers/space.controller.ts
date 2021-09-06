import { Context, Next } from 'koa'

import createSpace, {
  Input as CreateSpaceInput,
} from '../businesses/space/createSpace'
import listSpaces from '../businesses/space/listSpaces'

interface PostSpaceRequest {
  displayName: string
  description: string
  size: string
}

export const postSpaces = async (
  ctx: Context,
  next: () => Next,
): Promise<void> => {
  const { displayName, description, size } = ctx.request
    .body as unknown as PostSpaceRequest

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

interface GetSpaceRequest {
  size: string
}

export const getSpaces = async (ctx: Context, next: Next): Promise<void> => {
  const { size } = ctx.query as unknown as GetSpaceRequest

  const filters = {
    size,
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
