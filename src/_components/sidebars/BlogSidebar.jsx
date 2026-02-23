"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const categories = [
  { name: "Home", href: "/home" },
  { name: "All Posts", href: "/home/blog" },
  { name: "Technology", href: "/home/blog/categories/technology" },
  { name: "Business", href: "/home/blog/categories/business" },
  { name: "Lifestyle", href: "/home/blog/categories/lifestyle" },
];

const recentPosts = [
  { title: "Understanding Next.js App Router", href: "/home/blog/1" },
  { title: "Dynamic Routing Explained", href: "/home/blog/2" },
  { title: "Parallel Routes in Depth", href: "/home/blog/3" },
];

export default function SideBar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 p-4 border-r min-h-screen bg-gray-50">
      {/* Categories */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Categories</h2>
        <ul className="space-y-2">
          {categories.map((cat, index) => {
            const isActive = pathname === cat.href;

            return (
              <li key={index}>
                <Link
                  href={cat.href}
                  className={`${
                    isActive
                      ? "text-blue-600 font-semibold underline"
                      : "text-gray-700 hover:text-black hover:underline"
                  }`}
                >
                  {cat.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Recent Posts */}
      <div>
        <h2 className="text-lg font-semibold mb-3">Recent Posts</h2>
        <ul className="space-y-2">
          {recentPosts.map((post, index) => {
            const isActive = pathname === post.href;

            return (
              <li key={index}>
                <Link
                  href={post.href}
                  className={`${
                    isActive
                      ? "text-blue-600 font-semibold underline"
                      : "text-gray-700 hover:text-black hover:underline"
                  }`}
                >
                  {post.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
