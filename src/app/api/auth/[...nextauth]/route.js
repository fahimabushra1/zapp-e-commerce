import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const { email, password } = credentials

        // 🔥 Replace this with DB check
        if (email === "admin@gmail.com" && password === "123456") {
          return {
            id: "1",
            name: "Admin User",
            email: "admin@gmail.com",
            role: "admin",
          }
        }

        return null
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
      }
      return token
    },
    async session({ session, token }) {
      session.user.role = token.role
      return session
    },
  },
  secret: process.env.NEXT_AUTH_SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }