import React from 'react'
import './contact.css'
import { ArrowRight, Cuboid, Headset, Info, Mail, MapPin, Phone, Send } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
     const [formData, setFormData] = useState({
        firstName: "Alfred",
        lastName: "Situmorang",
        email: "nama@emailmu.com",
        phone: "0821-xxxx-xxxx",
        message: ""
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    }
    return (
    <>
        <div className="grid grid-cols-1 lg:grid-cols-3 font-mulish text-xl xl:text-2xl">
            <div className="form-background text-white p-8 lg:p-12 lg:col-span-2">
                <div className="form-content h-full flex flex-col justify-center">
                    <h1 className="text-3xl font-bold mb-10">Hubungi Kami</h1>
                    
                    <form className="space-y-6  font-mulish text-xl xl:text-2xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block font-medium text-blue-100 mb-2" htmlFor="first-name">Nama depan</label>
                                <input 
                                    type="text" 
                                    id="first-name" 
                                    className="form-input bg-white/10 border-white/30 text-white placeholder-white/70 text-2xl"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    style={{backdropFilter: 'blur(5px)'}}
                                />
                            </div>
                            <div>
                                <label className="block font-medium text-blue-100 mb-2" htmlFor="last-name">Nama belakang</label>
                                <input 
                                    type="text" 
                                    id="last-name" 
                                    className="form-input bg-white/10 border-white/30 text-white placeholder-white/70 text-2xl"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    style={{backdropFilter: 'blur(5px)'}}
                                />
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block font-medium text-blue-100 mb-2" htmlFor="email">Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    className="form-input bg-white/10 border-white/30 text-white placeholder-white/70 text-2xl"
                                    value={formData.email}
                                    onChange={handleChange}
                                    style={{backdropFilter: 'blur(5px)'}}
                                />
                            </div>
                            <div>
                                <label className="block font-medium text-blue-100 mb-2" htmlFor="phone">Nomor HP</label>
                                <input 
                                    type="tel" 
                                    id="phone" 
                                    className="form-input bg-white/10 border-white/30 text-white placeholder-white/70 text-2xl"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    style={{backdropFilter: 'blur(5px)'}}
                                />
                            </div>
                        </div>
                        
                        <div>
                            <label className="block font-medium text-blue-100 mb-2" htmlFor="message">Pesan</label>
                            <textarea 
                                id="message" 
                                rows="4" 
                                className="form-input bg-white/10 border-white/30 text-white placeholder-white/70 text-2xl"
                                placeholder="Ketikkan pesan..."
                                onChange={handleChange}
                                style={{backdropFilter: 'blur(5px)'}}
                            ></textarea>
                        </div>
                        
                        <div className="text-blue-100">
                            <p>
                                Dengan mengirimkan formulir ini, Anda menyetujui syarat dan ketentuan serta kebijakan privasi kami yang menjelaskan bagaimana kami dapat mengumpulkan, dan menggunakan informasi pribadi Anda, termasuk kepada pihak ketiga.
                            </p>
                        </div>
                        <div className="flex items-center justify-start gap-2">
                            <button type="submit" className="btn-send bg-white text-blue-600 hover:bg-blue-50 flex items-center justify-between">
                                <Send className="mx-2" size={24} />
                                <span className='me-2'>Kirim</span>
                            </button>
                            <button type="submit" className="btn-send bg-white text-blue-600 hover:bg-blue-50 flex items-center justify-between">
                                <Cuboid className="mx-2" size={24} />
                                <span className='me-2'>Pilih produk dulu</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            
            <div className="p-4 space-y-8">
                {/* Maps Section */}
                <div className="info-card">
                    <div className="flex items-start mb-4">
                        <div className="bg-red-100 p-3 rounded-lg mr-4">
                            <MapPin className="text-red-600" size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Lokasi Kami</h3>
                            <p className="text-gray-600 mb-3">
                                Kunjungi kantor kami atau lihat peta untuk petunjuk arah.
                            </p>
                        </div>
                    </div>
                    
                    {/* Google Maps Embed */}
                    <div className="mt-4 rounded-lg overflow-hidden border border-gray-300">
                        <div className="h-64 bg-gray-200 relative">
                            {/* Placeholder untuk Google Maps */}
                            {/* <div className="w-full h-full flex items-center justify-center bg-gray-100">
                                <div className="text-center">
                                    <MapPin className="text-gray-400 mx-auto mb-2" size={48} />
                                    <p className="text-gray-500">Peta akan ditampilkan di sini</p>
                                </div>
                            </div> */}
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.8529629916909!2d107.61979408724095!3d-6.918327927458386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e62d68c23405%3A0x173e885208f579d7!2sGANDRUNG%20EVENT%20EQUIPMENT!5e1!3m2!1sid!2sid!4v1766978951815!5m2!1sid!2sid" width="600" height="450" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="p-4 bg-gray-50">
                            <p className="font-semibold text-gray-800 mb-1">Gandrung Media Corp</p>
                            <p className="text-gray-600 text-sm">ITC Kosambi Blok F1, Jl. Baranangsiang, Kota Bandung, Indonesia</p>
                            <a 
                                href="https://maps.google.com/?q=Gandrung+Media+Corp" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-blue-600 font-medium hover:underline mt-2 text-sm"
                            >
                                Buka di Google Maps
                                <ArrowRight className="ml-2" size={16} />
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* Info kontak masih tersedia di bagian bawah maps */}
                <div className="info-card">
                    <div className="flex items-start mb-4">
                        <div className="bg-blue-100 p-3 rounded-lg mr-4">
                            <Mail className="text-blue-600" size={24} />
                        </div>
                        <div className='flex flex-col flex-wrap'>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
                            <a href="mailto:gandrungmediacorp@gmail.com" className="text-blue-600 font-medium text-sm xl:text-xl hover:underline block mb-1">gandrungmediacorp@gmail.com</a>
                            <p className="text-gray-600 text-sm">Untuk pertanyaan umum dan kerja sama</p>
                        </div>
                    </div>
                </div>
                
                <div className="info-card">
                    <div className="flex items-start mb-4">
                        <div className="bg-green-100 p-3 rounded-lg mr-4">
                            <Phone className="text-green-600" size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Telepon</h3>
                            <a href="tel:+62818212777" className="text-blue-600 font-medium hover:underline block mb-1">+62 818-212-777</a>
                            <p className="text-gray-600 text-sm">Senin - Sabtu, 09:00 - 17:00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-gray-50 border-t border-gray-200 p-6 text-center text-gray-500 text-xl">
            <p className='text-md'>© 2026 Gandrung.events. All rights reserved.</p>
        </div>


        <script src="src/sections/contact.js"></script>
        
    </>
  )
}

export default Contact