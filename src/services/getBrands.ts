'use server'

import connectDB from '@/lib/connectDB'

import Brand from '@/models/Brand'

export default async function getBrands() {
  await connectDB()

  return JSON.stringify(await Brand.find())
}
