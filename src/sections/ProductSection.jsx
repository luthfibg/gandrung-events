import React, { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import { productService } from '../services/ProductService'
import { Link } from 'react-router-dom'

const ProductSection = ({ category, searchQuery, onLoadingChange }) => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    loadProducts()
  }, [category])

  useEffect(() => {
    if (searchQuery) {
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.specifications.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.type.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setFilteredProducts(filtered)
    } else {
      setFilteredProducts(products)
    }
  }, [searchQuery, products])

  const loadProducts = async () => {
    try {
      setLoading(true)
      if (onLoadingChange) onLoadingChange(true)
      
      const data = await productService.getAll()
      
      // Filter by category
      const filtered = category === 'all' 
        ? data 
        : data.filter(product => 
            product.type.toLowerCase().includes(category.toLowerCase()) ||
            (category === 'led' && product.type.toLowerCase().includes('led'))
          )
      
      setProducts(filtered)
      setFilteredProducts(filtered)
    } catch (err) {
      setError(err.message)
      console.error('Error loading products:', err)
    } finally {
      setLoading(false)
      if (onLoadingChange) onLoadingChange(false)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
        <svg className="w-12 h-12 text-red-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-lg font-semibold text-red-800 mb-2">Error Loading Products</h3>
        <p className="text-red-600 mb-4">{error}</p>
        <button 
          onClick={loadProducts}
          className="bg-red-100 text-red-700 hover:bg-red-200 px-4 py-2 rounded-lg font-medium transition-colors"
        >
          Try Again
        </button>
      </div>
    )
  }

  return (
    <>
      {/* Product Stats */}
      <div className="mb-6 flex items-center justify-between">
        <p className="text-gray-600">
          Menampilkan <span className="font-semibold">{filteredProducts.length}</span> produk
          {searchQuery && ` untuk pencarian "${searchQuery}"`}
        </p>
        
        {/* Sort Options (if needed) */}
        <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
          <option>Sort by: Recommended</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Name: A to Z</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))
        ) : (
          <div className="col-span-full text-center py-16">
            <div className="max-w-md mx-auto">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {searchQuery ? 'Produk tidak ditemukan' : 'Belum ada produk'}
              </h3>
              <p className="text-gray-500 mb-6">
                {searchQuery 
                  ? `Tidak ada produk yang cocok dengan "${searchQuery}". Coba kata kunci lain.`
                  : `Belum ada produk tersedia untuk kategori "${category}".`
                }
              </p>
              {searchQuery && (
                <button 
                  onClick={() => window.location.reload()}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                >
                  Lihat Semua Produk
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Admin Quick Action (only if no products) */}
      {products.length === 0 && (
        <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg text-center">
          <h4 className="text-lg font-semibold text-blue-800 mb-2">Ingin menambahkan produk?</h4>
          <p className="text-blue-600 mb-4">Anda bisa menambahkan produk baru melalui halaman admin.</p>
          <Link 
            to="/admin"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Tambah Produk Baru
          </Link>
        </div>
      )}
    </>
  )
}

export default ProductSection