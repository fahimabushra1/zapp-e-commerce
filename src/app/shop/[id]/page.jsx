"use client"
import { useParams } from "next/navigation";

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

export default function ProductDetailPage() {
  const params = useParams();
  const productId = parseInt(params.id, 10);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}
