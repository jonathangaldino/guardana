import makeUserRepository from '../repository/usersRepository'
import userSchema from '../database/schemas/userSchema'
import makeUsersBusiness from '../business/userBusiness'

const createInstance = () => {
  const userRepository = makeUserRepository({ userSchema })
  const userBusiness = makeUsersBusiness({ userRepository })

  return userBusiness
}

export default { createInstance }
