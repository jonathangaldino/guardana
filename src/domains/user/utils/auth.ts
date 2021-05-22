import { pbkdf2Sync } from 'crypto'
import jwt from 'jsonwebtoken'
import config from '../../../config'

import { User } from '../UserModels'

export const hashPassword = (unhashedPassword: string): string =>
  pbkdf2Sync(unhashedPassword, 'salt', 1000, 64, `sha512`).toString(`hex`)

export const generateToken = (user: Partial<User>) => {
  const token = jwt.sign(
    {
      email: user.email,
    },
    config.TOKEN_SECRET,
  )

  return token
}
