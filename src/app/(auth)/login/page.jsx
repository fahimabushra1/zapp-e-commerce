"use client";

import { login } from "@/app/actions/auth";
import { useMemo } from "react";
import { useActionState } from "react";
import { useSearchParams } from "next/navigation";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const registered = searchParams.get("registered") === "1";
  const initialEmail = useMemo(
    () => searchParams.get("email") ?? "",
    [searchParams],
  );
  const [state, action, pending] = useActionState(login, undefined);

  return (
    <form action={action} className="flex min-w-80 flex-col gap-3">
      <h1 className="text-xl font-semibold">Login</h1>
      {registered && (
        <p className="text-sm text-green-700">
          Sign up successful. Please log in with your new account.
        </p>
      )}
      {state?.message && (
        <p className="text-sm text-red-600">{state.message}</p>
      )}
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="border rounded px-3 py-2"
        defaultValue={initialEmail}
        required
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        className="rounded border px-3 py-2"
        required
      />
      <button
        type="submit"
        className="rounded bg-black px-3 py-2 text-white"
        disabled={pending}
      >
        {pending ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}
