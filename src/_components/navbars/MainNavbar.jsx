import Link from "next/link";

export default function MainNavbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between">
      <div className="font-bold text-lg">Zapp</div>

      <div className="flex gap-6">
        <Link href="/home">Home</Link>
        <Link href="/home/categories">Categories</Link>
        <Link href="/home/blog">Blog</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/login">login</Link>
        <Link href="/register">register</Link>
        <Link href="/dashboard" prefetch={false}>
          Dashboard
        </Link>
      </div>
    </nav>
  );
}
