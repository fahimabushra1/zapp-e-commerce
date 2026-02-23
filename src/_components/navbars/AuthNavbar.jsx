import Link from "next/link";

export default function AuthNavbar() {
  return (
    <nav className="p-4 bg-gray-100 flex justify-between">
      <div className="font-bold">Zapp</div>

      <div className="flex gap-4">
        <Link href="/home">Home</Link>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </div>
    </nav>
  );
}