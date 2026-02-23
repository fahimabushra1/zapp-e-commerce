"use client";

import { useRouter } from "next/navigation";

export default function ProductModal({ params }) {
  const router = useRouter();

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
        <h2>Modal Product</h2>
        <p>Product ID: {params.id}</p>
        <button onClick={() => router.back()}>Close</button>
      </div>
    </div>
  );
}
