import SpaceSchema from '../SpaceSchema'
import { SpaceSize } from '../SpaceTypes'

type Filters = {
  size: string
}

export type Input = {
  filters: Filters
}

const listSpaces = async ({ filters }: Input) => {
  const validFilters = validateFilters(filters)

  const spaces = await SpaceSchema.find(validFilters)

  return {
    count: spaces.length,
    items: spaces,
  }
}

type ValidFilters = {
  size?: SpaceSize
}

const validateFilters = (filters: Filters) => {
  const sizes = Object.keys(SpaceSize)

  const validFilters = <ValidFilters>{}

  if (filters.size) {
    if (sizes.includes(filters.size)) {
      validFilters.size = <SpaceSize>filters.size
    }
  }

  return validFilters
}

export default listSpaces
