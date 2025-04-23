import Link from 'next/link'

export default function ProductCard({ product }: { product: any }) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="border p-4 rounded hover:shadow-md transition-all">
        <img src={product.image} alt={product.title} className="w-full h-48 object-contain" />
        <h2 className="font-semibold mt-2">{product.title}</h2>
        <p className="text-sm text-gray-600">${product.price}</p>
      </div>
    </Link>
  )
}
