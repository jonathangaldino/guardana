import { Space } from '../space/SpaceTypes'

export type User = {
  name: string
  email: string
  password: string
  spaces: Space[]
}
