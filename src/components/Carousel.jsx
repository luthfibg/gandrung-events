import React from 'react'

const Carousel = () => {
  return (
    <div className="bg-white/80 p-8 rounded-lg shadow-2xl">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
        Judul Carousel/Header
        </h2>
        <p className="text-gray-600">
        Konten ini tampil di atas video latar belakang.
        </p>
        <button className="mt-4 px-6 py-2 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700 transition">
        Aksi Utama
        </button>
    </div>
  )
}

export default Carousel