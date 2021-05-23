export enum SpaceSize {
  mini,
  little,
  medium,
  large,
}

export type Space = {
  displayName: string
  description: string
  size: SpaceSize
  rating: number
}
