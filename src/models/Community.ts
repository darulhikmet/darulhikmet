import { Schema, model, models } from 'mongoose'

const communitySchema = new Schema({
  name: String,
  avatar: String,
  slug: String
})
const Community = models.community || model('community', communitySchema)

export default Community
