import UserSchema from '../UserSchema'
import { User as User } from '../UserTypes'
import { hashPassword, generateToken } from '../../auth'

export type Input = {
  email: string
  unhashedPassword: string
}

interface Output {
  user: Partial<User>
  token: string
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

  const output: Output = {
    user: {
      name: user.name,
      email: user.email,
    },
    token: generateToken({ email: user.email }),
  }

  return output
}

export default logIn
