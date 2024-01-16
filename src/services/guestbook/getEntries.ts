'use server'

import connectDB from '@/lib/connectDB'

import Guestbook from '@/models/Guestbook'

export default async function getEntries() {
  try {
    await connectDB()

    const entries = await Guestbook.find()
    return JSON.stringify(entries)
  } catch (error) {
    console.error('Error fetching entries from guestbook:', error)
    throw error
  }
}
