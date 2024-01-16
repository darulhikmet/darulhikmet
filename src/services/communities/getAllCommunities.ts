'use server'

import connectDB from '@/lib/connectDB'

import { Community } from '@/models/Community'

export default async function getAllCommunities() {
  try {
    await connectDB()

    const communities = await Community.find()

    return communities
  } catch (error) {
    console.error('Error fetching communities:', error)
    throw error
  }
}
