'use server'

import bcrypt from 'bcrypt'
import { SignJWT } from 'jose'
import { cookies } from 'next/headers'

import getUser from '@/services/user/getUser'

export async function login(formData: FormData) {
  const username = formData.get('username') as string
  const password = formData.get('password') as string

  const user = await getUser(username)

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return { result: false, message: 'Kullanıcı adı veya şifre hatalı' }
  }

  const token = await generateToken({
    username: user.username,
    email: user.email,
    avatar: user.avatar
  })

  cookies().set({ name: 'token', value: token, path: '/' })

  return { result: true, message: 'Giriş başarılı' }
}

export async function generateToken(payload: Record<string, any>) {
  try {
    const token = await new SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('2h')
      .sign(new TextEncoder().encode(process.env.JWT_SECRET_KEY))

    return token
  } catch {
    throw new Error('Token could not be generated')
  }
}
