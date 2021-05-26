import SpaceSchema from '../SpaceSchema'
import { schema as UserSchema } from '../../user'
import { Space, SpaceSize } from '../SpaceTypes'

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
  /** Space Size é valido? */
  if (!Object.values(SpaceSize).includes(size)) {
    throw new Error('Space size isnt valid')
  }

  const user = await UserSchema.findOne({ email: userEmail })

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
