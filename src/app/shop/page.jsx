"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
// import { useState } from "react";
// import LoginModal from "./@modal/(..)login/[id]/page";

const products = [
  { id: 1, name: "Red Shoes", price: 50, category: "men" },
  { id: 2, name: "Blue Hat", price: 20, category: "women" },
  { id: 3, name: "Green Bag", price: 35, category: "baby" },
];

const categories = ["all", "men", "women", "baby"];

export default function ShopPage({ modal }) {
  const searchParams = useSearchParams();
  const rawCategory = searchParams.get("category");

  const selectedCategory = categories.includes(rawCategory)
    ? rawCategory
    : "all";

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  // const [showModal, setShowModal] = useState(false);
  // const [modalId, setModalId] = useState(null);

  // const openLoginModal = (id) => {
  //   setModalId(id);
  //   setShowModal(true);
  // };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shop</h1>

      <Link href="/shop/(..)login/123" modal={true}>
        <button
          style={{
            padding: "6px 12px",
            background: "#28a745",
            color: "white",
            borderRadius: "4px",
          }}
        >
          Login
        </button>
      </Link>
      {/* <div style={{ marginBottom: "20px" }}>
        <button
          on// Example ID
          style={{
            padding: "6px 12px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </div> */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "14px" }}>
        {categories.map((category) => (
          <Link
            key={category}
            href={category === "all" ? "/shop" : `/shop?category=${category}`}
            style={{
              textTransform: "capitalize",
              padding: "6px 10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              textDecoration: "none",
              background: selectedCategory === category ? "#007bff" : "white",
              color: selectedCategory === category ? "white" : "black",
            }}
          >
            {category}
          </Link>
        ))}
      </div>

      {selectedCategory !== "all" && (
        <p>Selected Category: {selectedCategory}</p>
      )}

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              width: "150px",
              textAlign: "center",
            }}
          >
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <Link href={`/shop/${product.id}`}>
              <button
                style={{
                  cursor: "pointer",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "4px",
                }}
              >
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
      {/* {showModal && (
        <LoginModal id={modalId} onClose={() => setShowModal(false)} />
      )} */}
      {modal}
    </div>
  );
}
