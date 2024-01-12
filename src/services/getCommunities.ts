'use server'

import connectDB from '@/lib/connectDB'
import Community from '@/models/Community'

export default async function getCommunities() {
  await connectDB()

  return await Community.find()
}
