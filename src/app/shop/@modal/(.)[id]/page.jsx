"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const products = [
  {
    id: 1,
    name: "Red Shoes",
    price: 50,
    description: "Comfortable red shoes.",
  },
  { id: 2, name: "Blue Hat", price: 20, description: "Stylish blue hat." },
  { id: 3, name: "Green Bag", price: 35, description: "Spacious green bag." },
];

export default function ProductModal({ params }) {
  const router = useRouter();

  const productId = Number(params.id);
  console.log(productId, "id in modal");
  const product = products.find((item) => item.id === productId);

  if (!product) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "300px",
        }}
      >
        <h2>{product.name}</h2>
        <p>Price: ${product.price}</p>
        <p>{product.description}</p>
        <div style={{ display: "flex", gap: "0.75rem", marginTop: "1rem" }}>
          <button onClick={() => router.back()}>Close</button>
          <Link href={`/shop/${product.id}`}>Open full page</Link>
        </div>
      </div>
    </div>
  );
}
