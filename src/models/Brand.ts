import { model, models, Schema } from 'mongoose'

const brandSchema = new Schema({
  name: String,
  description: String,
  logo: String,
  isAddedNew: Boolean
})

export default models.Brand || model('Brand', brandSchema)
