'use server'

import connectDB from '@/lib/connectDB'

import Guestbook from '@/models/Guestbook'

export default async function getGuestbook() {
  await connectDB()

  return await JSON.stringify(await Guestbook.find())
}
