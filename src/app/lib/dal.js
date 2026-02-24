import 'server-only'

import { cache } from 'react'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { decrypt } from '@/app/lib/session'
import { db } from '@/app/lib/db' 
import { users } from '@/models/User' 
import { eq } from 'drizzle-orm' // replace if using another ORM

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
    const data = await db.query.users.findMany({
      where: eq(users.id, session.userId),
      columns: {
        id: true,
        name: true,
        email: true,
      },
    })

    return data[0] ?? null
  } catch (error) {
    console.log('Failed to fetch user')
    return null
  }
})