'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow p-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">
        ShopEase
      </Link>
      <Link href="/cart" className="text-sm border p-2 rounded hover:bg-gray-100">
        🛒 Cart
      </Link>
    </header>
  )
}
