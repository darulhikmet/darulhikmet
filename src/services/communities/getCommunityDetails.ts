'use server'

import connectDB from '@/lib/connectDB'

import { Community } from '@/models/Community'

export default async function getCommunityDetails(slug: string) {
  try {
    await connectDB()

    const communityDetails = await Community.findOne({
      'name.machineFriendly': slug
    }).populate('posts')

    return communityDetails
  } catch (error) {
    console.error('Error fetching community details:', error)
    throw error
  }
}
