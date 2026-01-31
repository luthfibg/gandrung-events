import React, { useRef } from 'react'
import VideoBackground from '../components/VideoBackground.jsx'
import Carousel from '../sections/Carousel.jsx'
import ShortDescription from '../sections/ShortDescription.jsx'
import VIDEO_URL from '../assets/background.mp4';
import WhatsappFloatingButton from '../components/WhatsappFloatingButton.jsx';
import Category from '../sections/Category.jsx';
import Services from '../sections/Services.jsx';
import Customers from '../sections/Customers.jsx';
import Gallery from '../sections/Gallery.jsx';
import Contact from '../sections/Contact.jsx';
import { useFadeInOnScroll, useStaggerAnimation, useTextReveal } from '../hooks/useGSAP.js';

const Home = () => {
    // Refs for animations
    const heroRef = useRef(null);
    const descriptionRef = useRef(null);
    const categoryRef = useRef(null);
    const categoryTitleRef = useRef(null);
    const servicesRef = useRef(null);
    const servicesTitleRef = useRef(null);
    const customersRef = useRef(null);
    const galleryRef = useRef(null);
    const galleryTitleRef = useRef(null);
    const contactRef = useRef(null);

    // Apply animations
    useFadeInOnScroll(heroRef, { y: 100, delay: 0.2 });
    useFadeInOnScroll(descriptionRef, { y: 50, delay: 0.1 });
    useTextReveal(categoryTitleRef, { delay: 0.3 });
    useStaggerAnimation(categoryRef, { stagger: 0.2, delay: 0.5 });
    useTextReveal(servicesTitleRef, { delay: 0.3 });
    useStaggerAnimation(servicesRef, { stagger: 0.15, delay: 0.5 });
    useFadeInOnScroll(customersRef, { y: 30, delay: 0.2 });
    useTextReveal(galleryTitleRef, { delay: 0.3 });
    useStaggerAnimation(galleryRef, { stagger: 0.1, delay: 0.5 });
    useFadeInOnScroll(contactRef, { y: 30, delay: 0.2 });

    return (
        <>
            <div ref={heroRef} className="relative lg:h-screen flex items-center pt-30 justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">

                <WhatsappFloatingButton />
                {/* Lapisan 1: Video Latar Belakang (z-index 0) */}
                <VideoBackground videoSource={VIDEO_URL} />

                {/* Lapisan 2: Konten Carousel/Header (z-index 10) */}
                <div className="relative z-10 lg:p-4 max-w-9/10 text-center">
                    <Carousel />
                </div>

                {/* Overlay gradient for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-5"></div>

            </div>

            {/* Section 2: Short Description */}
            <div ref={descriptionRef} className="relative z-10 w-full text-center bg-gradient-to-r from-amber-50 to-orange-50 py-12 lg:py-16 shadow-lg">
                <ShortDescription />
            </div>

            {/* Category Section */}
            <div ref={categoryRef} className='relative z-10 w-full p-4 lg:px-20 py-16 bg-gradient-to-b from-white to-slate-50' id='category'>
                <h2 ref={categoryTitleRef} className="text-2xl lg:text-5xl py-8 font-mulish text-center tracking-wider font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Kategori Produk
                </h2>
                <Category />
            </div>

            {/* Services Section */}
            <div ref={servicesRef} className='relative z-10 w-full py-16 px-5 lg:px-20 bg-gradient-to-br from-slate-50 to-blue-50' id='services'>
                <h2 ref={servicesTitleRef} className="text-2xl lg:text-5xl font-mulish text-center py-8 font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent tracking-wider">
                    Mengapa Memilih Kami?
                </h2>
                <Services />
            </div>

            {/* Customers Section */}
            <div ref={customersRef} className='relative z-10 w-full py-16 px-5 lg:px-20 bg-gradient-to-b from-white to-slate-50' id='customers'>
                <Customers />
            </div>

            {/* Gallery Section */}
            <div ref={galleryRef} className='relative z-10 w-full p-4 py-16 bg-gradient-to-br from-slate-50 to-indigo-50' id='gallery'>
                <h2 ref={galleryTitleRef} className="text-2xl lg:text-5xl py-8 font-mulish text-center tracking-wider font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Gallery
                </h2>
                <Gallery />
            </div>

            {/* Contact Section */}
            <div ref={contactRef} className='relative z-10 w-full p-4 py-16 bg-gradient-to-b from-white to-slate-50' id='contact'>
                <Contact />
            </div>
        </>
    )
}

export default Home
