import makeUserRepository from './UserRepository'
import userSchema from './UserSchema'
import makeUsersBusiness from './UserBusiness'

const createInstance = () => {
  const userRepository = makeUserRepository({ userSchema })
  const userBusiness = makeUsersBusiness({ userRepository })

  return userBusiness
}

export default createInstance
