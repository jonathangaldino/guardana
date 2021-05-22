import UserSchema from '../UserSchema'
import { User as User } from '../UserModels'
import { hashPassword, generateToken } from '../utils/auth'

export type Input = {
  email: string
  unhashedPassword: string
}

interface Output extends Partial<User> {
  token: string
}

const logIn = async ({ email, unhashedPassword }: Input): Promise<Output> => {
  const user = await UserSchema.findOne({ email })

  if (!user) {
    throw new Error('Email or Password is invalid')
  }

  const hashedPassword = hashPassword(unhashedPassword)
  const passwordMatches = hashedPassword === user.password

  if (!passwordMatches) {
    throw new Error('Email or Password is invalid')
  }

  return {
    name: user.name,
    email: user.email,
    token: generateToken({ email: user.email }),
  }
}

export default logIn
