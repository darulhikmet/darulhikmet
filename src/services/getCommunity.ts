'use server'

import connectDB from '@/lib/connectDB'
import Community from '@/models/Community'

export default async function getCommunity(name: string) {
  await connectDB()

  return await Community.findOne({ name: decodeURIComponent(name) })
}
