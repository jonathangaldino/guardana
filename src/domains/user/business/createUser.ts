import { UserRepository } from '../UserRepository'

export type Input = {
  name: string
  email: string
  unhashedPassword: string
}

const createUser = async (
  userRepository: UserRepository,
  { name, email, unhashedPassword }: Input,
) => {
  const userExists = false

  if (userExists) {
    // throw app error with status code and message
  }

  await userRepository.create({
    name,
    email,
    password: unhashedPassword,
  })
}

export default createUser
