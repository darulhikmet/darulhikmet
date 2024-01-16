import { model, models, Schema } from 'mongoose'

const guestBookSchema = new Schema({
  message: String,
  createdAt: Date
})

export default models.Guestbook || model('Guestbook', guestBookSchema)
