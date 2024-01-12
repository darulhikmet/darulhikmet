import { model, models, Schema } from 'mongoose'

const Brand = new Schema({
  name: String,
  description: String,
  logo: String,
  isAddedNew: Boolean
})

export default models.Brand || model('Brand', Brand)
