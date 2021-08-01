import SpaceModel from '../../database/schemas/space.schema'
import { SpaceSize } from '../../types/space.types'

type Filters = {
  size: string
}

export type Input = {
  filters: Filters
}

const listSpaces = async ({ filters }: Input) => {
  const validFilters = validateFilters(filters)

  const spaces = await SpaceModel.find(validFilters)

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
