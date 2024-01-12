import { model, models, Schema } from 'mongoose'

const Community = new Schema({
  name: String,
  avatar: String,
  about: String
})

export default models.Community || model('Community', Community)
