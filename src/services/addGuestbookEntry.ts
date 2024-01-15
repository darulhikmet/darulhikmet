'use server'

import connectDB from '@/lib/connectDB'

import Guestbook from '@/models/Guestbook'

export default async function addGuestbookEntry(message: string) {
  await connectDB()

  return JSON.stringify(await new Guestbook({ message: message }).save())
}
