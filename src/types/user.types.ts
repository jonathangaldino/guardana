import { Space } from './space.types'

export type User = {
  name: string
  email: string
  password: string
  spaces: Space[]
}
