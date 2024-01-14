import { model, models, Schema } from 'mongoose'

const postSchema = new Schema({
  content: String
})

const communitySchema = new Schema({
  name: {
    humanReadable: String,
    machineFriendly: { type: String, unique: true }
  },
  avatar: String,
  about: String,
  socialMedia: {
    twitter: String,
    instagram: String,
    youtube: String,
    facebook: String,
    linkedin: String
  },
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }]
})

const Post = models.Post || model('Post', postSchema)
const Community = models.Community || model('Community', communitySchema)

export { Community, Post }
