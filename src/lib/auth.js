import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import { connectDB } from "./db"
import User from "@/models/user"

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},

      async authorize(credentials) {
        await connectDB()

        const { email, password } = credentials

        const user = await User.findOne({ email })

        if (!user) {
          throw new Error("User not found")
        }

        const isValid = await bcrypt.compare(
          password,
          user.password
        )

        if (!isValid) {
          throw new Error("Invalid password")
        }

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          role: user.role,
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
        token.id = user.id
      }
      return token
    },

    async session({ session, token }) {
      session.user.role = token.role
      session.user.id = token.id
      return session
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
}