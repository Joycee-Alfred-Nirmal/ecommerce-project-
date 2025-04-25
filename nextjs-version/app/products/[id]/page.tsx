'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { products } from '@/lib/products';

export default function ProductDetail() {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const found = products.find((item) => item.id === id);
    setProduct(found);
  }, [id]);

  if (!product) {
    return (
      <div className="p-6 text-red-600 text-center font-semibold">
        Product not found.
      </div>
    );
  }

  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const updatedCart = [...existingCart, product];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert('Product added to cart!');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <button
        onClick={() => router.push('/')}
        className="mb-6 inline-block px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
      >
        ← Back to Products
      </button>

      <div className="grid md:grid-cols-2 gap-6">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-[400px] object-contain"
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-700 mb-2">{product.description}</p>
          <p className="text-2xl font-semibold text-blue-600 mb-4">
            ${product.price}
          </p>
          <button
            onClick={handleAddToCart}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Add to Cart 🛒
          </button>
        </div>
      </div>
    </div>
  );
}
