import { Types } from 'mongoose'
import { Schema, model } from 'mongoose'
import { Space as ISpace, SpaceSize } from './SpaceTypes'

export const SpaceSchema = new Schema<ISpace>({
  displayName: { type: String, required: true },
  description: { type: String },
  size: { type: String, required: true, enum: SpaceSize },
  rating: { type: Number },
  owner: { type: Types.ObjectId, ref: 'User' },
})

const SpaceModel = model<ISpace>('Space', SpaceSchema)

export default SpaceModel
