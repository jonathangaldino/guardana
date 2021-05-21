import { UserRepository } from './UserRepository'
import createUser, { Input as createUserInput } from './business/createUser'

type Dependencies = {
  userRepository: UserRepository
}

const makeUserBusiness = ({ userRepository }: Dependencies) => ({
  createUser: (input: createUserInput) => createUser(userRepository, input),
})

export default makeUserBusiness
