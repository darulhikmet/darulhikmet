'use server'

import connectDB from '@/lib/connectDB'

import Brand from '@/models/Brand'

export default async function getBrands() {
  try {
    await connectDB()

    const brands = await Brand.find()

    return JSON.stringify(brands)
  } catch (error) {
    console.error('Error fetching brands:', error)
    throw error
  }
}
