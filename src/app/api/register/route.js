import bcrypt from "bcryptjs"

export async function POST(req) {
  const { email, password } = await req.json()

  const hashedPassword = await bcrypt.hash(password, 10)

  // save hashedPassword in DB
  console.log(hashedPassword)

  return Response.json({ message: "User created" })
}