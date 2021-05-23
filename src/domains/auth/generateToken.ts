import jwt from 'jsonwebtoken'

import config from '../../config'
import { User } from '../user/UserTypes'
import { JWTEncode } from '../auth/AuthTypes'

const generateToken = (user: Partial<User>) => {
  const tokenData: JWTEncode = {
    email: <string>user.email,
  }

  const token = jwt.sign(tokenData, config.TOKEN_SECRET, {
    expiresIn: '1h',
  })

  return token
}

export default generateToken
