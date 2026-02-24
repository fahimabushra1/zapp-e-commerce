'use server'

import { verifySession } from '@/app/lib/dal'

export async function adminOnlyAction(formData) {
  const session = await verifySession()
  const userRole = session?.user?.role

  if (userRole !== 'admin') {
    return null
  }
