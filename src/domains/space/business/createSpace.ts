import SpaceSchema from '../SpaceSchema'
import { Space, SpaceSize } from '../SpaceTypes'

export type Input = {
  displayName: string
  description: string
  size: string
}

export type Output = Partial<Space>

const createSpace = async ({ displayName, description, size }: Input) => {
  /** Space Size é valido? */

  if (!Object.values(SpaceSize).includes(size)) {
    throw new Error('Space size isnt valid')
  }

  const space = new SpaceSchema({ displayName, description, size })

  await space.save()

  const output: Output = {
    displayName: space.displayName,
    description: space.description,
    size: space.size,
  }

  return output
}

export default createSpace
