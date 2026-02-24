import 'server-only'

import { cache } from 'react'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { decrypt } from '@/app/lib/session'
import { connectDB } from '@/app/lib/db'
import User from '@/models/User'

export const verifySession = cache(async () => {
  const cookie = (await cookies()).get('session')?.value
  const session = await decrypt(cookie)

  if (!session?.userId) {
    redirect('/login')
  }

  return { isAuth: true, userId: session.userId }
})

export const getUser = cache(async () => {
  const session = await verifySession()
  if (!session) return null

  try {
      await connectDB()

    const user = await User.findById(session.userId)
      .select('_id name email')
      .lean()

    if (!user) return null

    return {
      id: user._id.toString(),
      name: user.name,
      email: user.email,
    }
  } catch (error) {
    console.log('Failed to fetch user')
    return null
  }
})