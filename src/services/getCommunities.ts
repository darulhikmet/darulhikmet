'use server'

import Community from '@/models/Community'
import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI as string

export default async function getCommunities() {
  await mongoose.connect(MONGODB_URI, {})

  return await Community.find()
}
