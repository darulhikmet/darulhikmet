'use server'

import connectDB from '@/lib/connectDB'
import { Community } from '@/models/Community'

export default async function getCommunity(slug: string) {
  await connectDB()

  return await Community.findOne({ 'name.machineFriendly': slug }).populate(
    'posts'
  )
}
