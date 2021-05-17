import UserModel from '../database/schemas/userSchema'
import User from '../models/User'

interface Dependencies {
  userSchema: typeof UserModel
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
