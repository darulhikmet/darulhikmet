import { model, models, Schema } from 'mongoose'

const communitySchema = new Schema({
  name: String,
  avatar: String,
  about: String,
  socialMedia: {
    twitter: String,
    instagram: String,
    youtube: String,
    facebook: String,
    linkedin: String
  }
})

export default models.Community || model('Community', communitySchema)
