import * as Types from './types'

export default function makeUsersBusiness({
  userRepository,
}: Types.Dependencies) {
  const createUser = async ({
    name,
    email,
    unhashedPassword,
  }: Types.CreateUserPayload) => {
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

  return {
    createUser,
  }
}
