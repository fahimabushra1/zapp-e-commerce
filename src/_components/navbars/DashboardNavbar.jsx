import Link from "next/link";

export default function DashboardNavbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <div className="font-bold text-lg">Admin Panel</div>

      <div className="flex gap-6">
        <Link href="/home">Home</Link>
        <Link href="/dashboard">Overview</Link>
      
      </div>
    </nav>
  );
}