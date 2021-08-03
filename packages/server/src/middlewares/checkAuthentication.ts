import jwt from 'jsonwebtoken'
import { Context, Next } from 'koa'

import config from '../config'
import { types as AuthTypes } from '../businesses/auth'

const checkAuthentication = async (ctx: Context, next: Next) => {
  const { authToken } = ctx

  if (!authToken) {
    throw new Error(
      'Koa ctx.authToken wasnt set. Use checkTokenPresence middleware first!',
    )
  }

  const { TOKEN_SECRET } = config

  try {
    const content = <AuthTypes.JWTDecoded>jwt.verify(authToken, TOKEN_SECRET, {
      ignoreExpiration: false,
    })

    ctx.authenticated = { email: content.email, token: authToken }
    await next()
  } catch (err) {
    ctx.status = 401

    // TODO: move this to a function, to centralize the handling
    if (err.name === 'TokenExpiredError') {
      ctx.body = { message: 'Token expired, authenticate again' }
    }
    if (err.name === 'JsonWebTokenError') {
      ctx.body = { message: 'Token invalid' }
    }
  }
}

export default checkAuthentication
