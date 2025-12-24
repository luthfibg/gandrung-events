import React from 'react'
import ProductCard from '../components/ProductCard'

const ProductSection = ({ category }) => {
  // Simulasi Data (Idealnya ini datang dari API atau file konstanta)
  const products = [
    { id: 1, title: "P3 LED Display", cat: "led", price: "Contact us" },
    { id: 2, title: "P2.5 Indoor LED", cat: "led", price: "Contact us" },
    { id: 3, title: "Smart TV 55 Inch", cat: "tv", price: "Contact us" },
    // Tambahkan data lainnya sesuai kategori
  ]

  // Filter produk berdasarkan kategori yang diklik di sidebar
  const filteredProducts = products.filter(p => p.cat === category)

  return (
    // Grid yang responsif dan rapi
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))
      ) : (
        <p className="col-span-full text-center py-20 text-gray-400">
          Produk untuk kategori "{category}" belum tersedia.
        </p>
      )}
    </div>
  )
}

export default ProductSection