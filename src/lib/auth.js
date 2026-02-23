import bcrypt from "bcryptjs"

async authorize(credentials) {
  const user = await db.user.findUnique({
    where: { email: credentials.email }
  })

  if (!user) return null

  const isValid = await bcrypt.compare(
    credentials.password,
    user.password
  )

  if (!isValid) return null

  return user
}