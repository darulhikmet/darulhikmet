import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI as string

export default async function connectDB() {
  await mongoose.connect(MONGODB_URI, {})
}
