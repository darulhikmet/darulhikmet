'use server'

import connectDB from '@/lib/connectDB'

import Guestbook from '@/models/Guestbook'

export default async function addEntry(message: string) {
  try {
    await connectDB()

    const newEntry = new Guestbook({ message, createdAt: new Date() })
    const savedEntry = await newEntry.save()

    return JSON.stringify(savedEntry)
  } catch (error) {
    console.error('Error adding entry to guestbook:', error)
    throw error
  }
}
