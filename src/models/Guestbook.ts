import { model, models, Schema } from 'mongoose'

const guestBookSchema = new Schema({
  message: String
})

export default models.Guestbook || model('Guestbook', guestBookSchema)
