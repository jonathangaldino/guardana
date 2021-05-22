import UserSchema from '../UserSchema'
import { User as User } from '../UserModels'

export type Input = {
  name: string
  email: string
  unhashedPassword: string
}

const createUser = async ({ name, email, unhashedPassword }: Input) => {
  const userExists = await UserSchema.findOne({ email })

  if (userExists) {
    throw new Error('User already exists')
  }

  // create user
  const user = new UserSchema({ name, email, password: unhashedPassword })
  await user.save()

  const _user: Partial<User> = {
    name: user.name,
    email: user.email,
  }

  return _user
}

export default createUser
