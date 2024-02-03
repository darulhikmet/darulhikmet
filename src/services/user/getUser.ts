'use server'

import connectDB from '@/lib/connectDB'

import User from '@/models/User'

export default async function getUser(username: string) {
  try {
    await connectDB()

    const user = await User.findOne({ username: username })

    return user
  } catch (error) {
    console.error('Unable to fetch user')
    throw error
  }
}
