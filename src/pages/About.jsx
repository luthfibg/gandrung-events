import React, { useRef } from 'react'
import Layout from '../components/Layout.jsx'
import { useFadeInOnScroll, useTextReveal, useStaggerAnimation } from '../hooks/useGSAP.js'

const About = () => {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const statsRef = useRef(null);

  useTextReveal(titleRef, { delay: 0.2 });
  useFadeInOnScroll(contentRef, { y: 50, delay: 0.4 });
  useStaggerAnimation(statsRef, { stagger: 0.2, delay: 0.6 });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16">
      <div className="container mx-auto px-4 lg:px-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 ref={titleRef} className="text-4xl lg:text-6xl font-bold font-mulish mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Tentang Kami
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div ref={contentRef} className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
                  Perusahaan Rental Equipment Terpercaya
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Gandrung Events adalah perusahaan terdepan dalam penyediaan peralatan event berkualitas tinggi.
                  Dengan pengalaman lebih dari 10 tahun, kami telah melayani berbagai acara mulai dari wedding,
                  corporate event, hingga event skala besar.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Komitmen kami adalah memberikan pelayanan terbaik dengan peralatan yang selalu dalam kondisi prima,
                  didukung oleh tim profesional yang siap membantu Anda mewujudkan acara impian.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                  <div className="text-6xl">🎯</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Event Berhasil</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
              <div className="text-gray-600">Tahun Pengalaman</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl font-bold text-green-600 mb-2">1000+</div>
              <div className="text-gray-600">Pelanggan Puas</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Misi Kami</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Menyediakan peralatan event berkualitas tinggi dengan pelayanan profesional,
                membantu pelanggan mewujudkan acara yang memorable dan sukses.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">👁️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Visi Kami</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Menjadi perusahaan rental equipment terdepan di Indonesia yang dikenal
                atas inovasi, kualitas, dan pelayanan yang luar biasa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
