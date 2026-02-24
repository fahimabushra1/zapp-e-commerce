'use server'

import bcrypt from 'bcryptjs'
import { redirect } from 'next/navigation'
import { SignupFormSchema } from '@/app/lib/definitions'
import { createSession, deleteSession } from '@/app/lib/session'
import { connectDB } from '@/app/lib/db'
import User from '@/models/User'

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

  await connectDB()

   const user = await User.create({
    name,
    email,
    password: hashedPassword,
  })

  if (!user) {
    return {
      message: 'An error occurred while creating your account.',
    }
  }

    await createSession(user._id.toString())
  redirect('/home')
}

export async function logout() {
  await deleteSession()
  redirect('/login')
}

export async function login(state, formData) {
  const email = formData.get('email')?.toString().trim()
  const password = formData.get('password')?.toString()

  if (!email || !password) {
    return { message: 'Email and password are required.' }
  }

  await connectDB()

  const user = await User.findOne({ email })

  if (!user) {
    return { message: 'Invalid email or password.' }
  }

  const isPasswordValid = await bcrypt.compare(password, user.password)

  if (!isPasswordValid) {
    return { message: 'Invalid email or password.' }
  }

   await createSession(user._id.toString())
  redirect('/dashboard')
}

export async function logout() {
  await deleteSession()
  redirect('/login')
}