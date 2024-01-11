import { Schema, model, models } from 'mongoose'

const brandSchema = new Schema({
  name: String,
  description: String,
  logo: String,
  isNew: Boolean
})

const Brand = models.brand || model('brand', brandSchema)

export default Brand
