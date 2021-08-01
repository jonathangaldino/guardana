import SpaceSchema from '../../database/schemas/space.schema'
import UserModel from '../../database/schemas/user.schema'
import { Space, SpaceSize } from '../../types/space.types'

export type Input = {
  displayName: string
  description: string
  size: string
  userEmail: string
}

export type Output = Partial<Space>

const createSpace = async ({
  displayName,
  description,
  size,
  userEmail,
}: Input) => {
  const sizes = Object.keys(SpaceSize)
  if (!sizes.includes(size)) {
    throw new Error('Space size isnt valid')
  }

  const user = await UserModel.findOne({ email: userEmail })

  if (!user) {
    throw new Error('User not found')
  }

  const space = new SpaceSchema({
    displayName,
    description,
    size,
    owner: user._id,
  })

  user.spaces.push(space._id)

  // Save them both
  await Promise.all([user.save(), space.save()])

  const output: Output = {
    displayName: space.displayName,
    description: space.description,
    size: space.size,
  }

  return output
}

export default createSpace
