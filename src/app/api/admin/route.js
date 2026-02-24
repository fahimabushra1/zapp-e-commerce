import { verifySession } from '@/app/lib/dal'

export async function GET() {
  const session = await verifySession()

  if (!session) {
    return new Response(null, { status: 401 })
  }

  if (session.user?.role !== 'admin') {
    return new Response(null, { status: 403 })
  }

  return Response.json({ ok: true })
}