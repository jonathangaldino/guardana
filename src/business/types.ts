import { UserRepository } from '../repository/usersRepository'

export interface Dependencies {
  userRepository: UserRepository
}

export interface CreateUserPayload {
  name: string
  email: string
  unhashedPassword: string
}

export interface UsersBusiness {
  createUser(payload: CreateUserPayload): Promise<void>
}
