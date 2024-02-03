import { model, models, Schema } from 'mongoose'

export const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  avatar: String
})

export default models.User || model('User', userSchema)
