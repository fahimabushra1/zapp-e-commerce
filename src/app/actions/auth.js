'use server'

import bcrypt from 'bcryptjs'
import { redirect } from 'next/navigation'
import { SignupFormSchema } from '@/app/lib/definitions'
import { createSession, deleteSession } from '@/app/lib/session'
import { db } from '@/app/lib/db'
import { users } from '@/models/User'

export async function signup(state, formData) {
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { name, email, password } = validatedFields.data
  const hashedPassword = await bcrypt.hash(password, 10)

  const data = await db
    .insert(users)
    .values({ name, email, password: hashedPassword })
    .returning({ id: users.id })

  const user = data[0]

  if (!user) {
    return {
      message: 'An error occurred while creating your account.',
    }
  }

  await createSession(user.id)
  redirect('/home')
}

export async function logout() {
  await deleteSession()
  redirect('/login')
}