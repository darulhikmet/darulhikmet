'use server'

import { jwtVerify } from 'jose'

export async function tokenVerify(token: string) {
  try {
    await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET_KEY))

    return true
  } catch (error) {
    console.error('JWT verification failed:', error)
    throw error
  }
}
