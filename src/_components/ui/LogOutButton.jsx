'use client'

import { signOut } from 'next-auth/react'

export default function LogoutButton() {
  return (
    <button
      type="button"
      onClick={() => signOut({ callbackUrl: '/home' })}
      className="mt-4 rounded bg-black px-3 py-2 text-white"
    >
      Log out
    </button>
  )
}
