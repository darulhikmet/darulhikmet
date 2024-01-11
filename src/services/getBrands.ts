'use server'

import Brand from '@/models/Brand'
import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI as string

export default async function getBrands() {
  await mongoose.connect(MONGODB_URI, {})

  return await Brand.find()
}
