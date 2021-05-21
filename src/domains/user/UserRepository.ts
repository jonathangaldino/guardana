import UserSchema from './UserSchema'
import User from './UserModels'

interface Dependencies {
  userSchema: typeof UserSchema
}

interface CreatePayload {
  name: string
  email: string
  password: string
}

export interface UserRepository {
  create(payload: CreatePayload): Promise<User>
}

function makeUserRepository({ userSchema }: Dependencies): UserRepository {
  const create = async ({ name, email, password }: CreatePayload) => {
    const user = new userSchema({ name, email, password })

    await user.save()

    return user
  }

  return {
    create,
  }
}

export default makeUserRepository
