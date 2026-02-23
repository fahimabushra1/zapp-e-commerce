// import Link from "next/link";

// export default async function BlogPage({ params }) {
//   const resolvedParams = await params;
//   console.log("params.slug:", resolvedParams.slug);
//   if (!params.slug) {
//     return <h2>Blog Home (No Slug)</h2>;
//   }

//   return (
//     <div>
//       <Link href="/login">Open Login</Link>
//       <h2>Optional Catch-All</h2>

//       {params.slug.map((item, index) => (
//         <p key={index}>{item}</p>
//       ))}
//     </div>
//   );
// }
"use client";
// import Link from "next/link";
import { useParams } from "next/navigation";

export default function BlogPage() {
  const params = useParams(); // now params is a normal object
  console.log("params.slug:", params.slug);
  if (!params.slug) {
    return <h2>Blog Home (No Slug)</h2>;
  }

  return (
    <div>
      {/* <Link href="/login">Open Login</Link>
      <h2>Optional Catch-All</h2> */}

      {params.slug.map((item, index) => (
        <p key={index}>Showing params.slug {item}</p>
      ))}
    </div>
  );
}
