"use client";
import { useParams } from "next/navigation";

export default function CategoriesPage() {
  const params = useParams(); // { slug: [...] }
  const segments = params.ctgries || []; // handle undefined

  console.log("segments:", segments);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Categories Page</h2>
      <p>Segments:</p>
      {segments.length === 0 ? (
        <p>No extra segments</p>
      ) : (
        <ul>
          {segments.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}