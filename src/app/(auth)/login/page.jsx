"use client";

import { signIn } from "next-auth/react";
import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const registered = searchParams.get("registered") === "1";
  const initialEmail = useMemo(
    () => searchParams.get("email") ?? "",
    [searchParams],
  );

  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (!res?.error) {
      router.push("/dashboard");
      return;
    }
    setError("Invalid email or password");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 min-w-80">
      <h1 className="text-xl font-semibold">Login</h1>
      {registered && (
        <p className="text-green-700 text-sm">
          Sign up successful. Please log in with your new account.
        </p>
      )}
      {error && <p className="text-red-600 text-sm">{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border rounded px-3 py-2"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border rounded px-3 py-2"
        required
      />
      <button type="submit" className="bg-black text-white rounded px-3 py-2">
        Login
      </button>
    </form>
  );
}
