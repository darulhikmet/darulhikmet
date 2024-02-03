'use server'

import bcrypt from 'bcrypt'

import connectDB from '@/lib/connectDB'

import User from '@/models/User'

export async function register(formData: FormData) {
  const username = formData.get('username') as string
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const existingUser = await User.findOne({ username })

  if (existingUser) {
    return { result: false, message: 'Kullanıcı adı zaten kullanılıyor' }
  }

  const hashedPassword = await bcrypt.hash(password, 10)
  const newUser = new User({
    username,
    email,
    password: hashedPassword
  })

  try {
    await connectDB()

    await newUser.save()

    return { result: true, message: 'Kayıt başarılı' }
  } catch (error) {
    console.error('Unable to register user')
    throw error
  }
}
