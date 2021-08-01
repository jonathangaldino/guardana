export enum SpaceSize {
  mini = 'mini',
  little = 'little',
  medium = 'medium',
  large = 'large',
}

export type Space = {
  displayName: string
  description: string
  size: SpaceSize
  rating: number
}
