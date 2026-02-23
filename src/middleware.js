import { withAuth } from "next-auth/middleware"

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token

    if (req.nextUrl.pathname.startsWith("/admin") && token?.role !== "admin") {
      return new Response("Forbidden", { status: 403 })
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
)

export const config = {
  matcher: ["/admin/:path*"],
}