import Link from "next/link";

export default function ShopNavbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <div className="font-bold text-lg">Zapp Shop</div>

      <div className="flex gap-6">
        <Link href="/home">Home</Link>
        <Link href="/shop">All Products</Link>
        <Link href="/shop?category=men">Men</Link>
        <Link href="/shop?category=women">Women</Link>
        <Link href="/shop?category=baby">Baby</Link>
      </div>
    </nav>
  );
}