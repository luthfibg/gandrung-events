import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productService } from '../services/ProductService';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [orderData, setOrderData] = useState({
    dimensions: { width: '', height: '' },
    eventDate: '',
    venueName: '',
    venueAddress: '',
    picName: '',
    quantity: 1,
    duration: 1 // days
  });

  useEffect(() => {
    if (id) {
      loadProduct();
    }
  }, [id]);

  const loadProduct = async () => {
    try {
      setLoading(true);
      const data = await productService.getById(id);
      setProduct(data);
    } catch (err) {
      setError(err.message);
      console.error('Error loading product:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'width' || name === 'height') {
      setOrderData({
        ...orderData,
        dimensions: {
          ...orderData.dimensions,
          [name]: value
        }
      });
    } else {
      setOrderData({
        ...orderData,
        [name]: value
      });
    }
  };

  const calculateTotalPrice = () => {
    if (!product) return 0;
    
    const { width, height } = orderData.dimensions;
    const area = parseFloat(width) * parseFloat(height);
    
    if (!area || area <= 0) return product.rent * orderData.duration * orderData.quantity;
    
    // Assuming price per square meter is rent per panel (adjust based on your pricing)
    return product.rent * area * orderData.duration * orderData.quantity;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Create order data
      const orderPayload = {
        productId: product.id,
        productTitle: product.title,
        ...orderData,
        totalPrice: calculateTotalPrice(),
        orderDate: new Date().toISOString(),
        status: 'pending'
      };

      // Save order to JSON Server (create new orders endpoint)
      const response = await fetch('http://localhost:3001/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderPayload)
      });

      if (response.ok) {
        alert('Order berhasil dikirim! Kami akan menghubungi Anda segera.');
        navigate('/');
      } else {
        throw new Error('Gagal mengirim order');
      }
    } catch (error) {
      console.error('Error submitting order:', error);
      alert('Terjadi kesalahan. Silakan coba lagi.');
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto p-4 flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold text-red-500">Produk tidak ditemukan</h1>
        <button 
          onClick={() => navigate('/')}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Kembali ke Katalog
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <button 
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-500 hover:text-blue-700 flex items-center"
      >
        ← Kembali
      </button>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product Image & Info */}
        <div className="lg:w-1/2">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={product.image} 
              alt={product.title}
              className="w-full h-96 object-cover"
              onError={(e) => {
                e.target.src = '/uploads/default-product.jpg';
                e.target.onerror = null;
              }}
            />
            
            <div className="p-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {product.title}
              </h1>
              
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded">
                  {product.type}
                </span>
              </div>
              
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-1">Spesifikasi Teknis</h3>
                  <p className="text-gray-600">{product.specifications}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-1">Harga Sewa</h3>
                  <p className="text-2xl font-bold text-blue-600">
                    Rp {product.rent.toLocaleString()} / panel / hari
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    *Harga dapat berubah sesuai dengan luas dan durasi sewa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Form */}
        <div className="lg:w-1/2">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Form Pemesanan</h2>
            
            <form onSubmit={handleSubmit}>
              {/* Dimensions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Lebar (meter)
                  </label>
                  <input
                    type="number"
                    name="width"
                    step="0.5"
                    min="0.5"
                    value={orderData.dimensions.width}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Contoh: 3"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tinggi (meter)
                  </label>
                  <input
                    type="number"
                    name="height"
                    step="0.5"
                    min="0.5"
                    value={orderData.dimensions.height}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Contoh: 2"
                  />
                </div>
              </div>

              {/* Quantity & Duration */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Jumlah Unit
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    min="1"
                    value={orderData.quantity}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Durasi Sewa (hari)
                  </label>
                  <input
                    type="number"
                    name="duration"
                    min="1"
                    value={orderData.duration}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Event Details */}
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tanggal Acara
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={orderData.eventDate}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Venue
                  </label>
                  <input
                    type="text"
                    name="venueName"
                    value={orderData.venueName}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Contoh: Hotel Grand City"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Alamat Venue
                  </label>
                  <textarea
                    name="venueAddress"
                    value={orderData.venueAddress}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Alamat lengkap venue acara"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama PIC
                  </label>
                  <input
                    type="text"
                    name="picName"
                    value={orderData.picName}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Nama penanggung jawab"
                    required
                  />
                </div>
              </div>

              {/* Price Summary */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Ringkasan Harga</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Harga per panel:</span>
                    <span>Rp {product.rent.toLocaleString()}</span>
                  </div>
                  
                  {orderData.dimensions.width && orderData.dimensions.height && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Luas total:</span>
                      <span>
                        {(parseFloat(orderData.dimensions.width) * parseFloat(orderData.dimensions.height)).toFixed(1)} m²
                      </span>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Durasi:</span>
                    <span>{orderData.duration} hari</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Jumlah unit:</span>
                    <span>{orderData.quantity}</span>
                  </div>
                  
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total Biaya:</span>
                      <span className="text-blue-600">
                        Rp {calculateTotalPrice().toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg text-lg transition-colors duration-300"
              >
                Kirim Permintaan Sewa
              </button>
              
              <p className="text-sm text-gray-500 text-center mt-4">
                Setelah mengirim form, tim kami akan menghubungi Anda dalam 1x24 jam untuk konfirmasi.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;