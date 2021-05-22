import UserSchema from '../UserSchema'
import { User as User } from '../UserModels'
import { hashPassword } from '../utils/auth'

export type Input = {
  email: string
  unhashedPassword: string
}

const logIn = async ({ email, unhashedPassword }: Input) => {
  const user = await UserSchema.findOne({ email })

  if (!user) {
    throw new Error('Email or Password is invalid')
  }

  const hashedPassword = hashPassword(unhashedPassword)
  const passwordMatches = hashedPassword === user.password

  if (!passwordMatches) {
    throw new Error('Email or Password is invalid')
  }

  const _user: Partial<User> = {
    name: user.name,
    email: user.email,
  }

  return _user
}

export default logIn
