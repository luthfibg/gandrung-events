import React from 'react'
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

const Home = () => {


    return (
        <>
            <div className="relative lg:h-screen flex items-center pt-30 justify-center">

                <WhatsappFloatingButton />
                {/* Lapisan 1: Video Latar Belakang (z-index 0) */}
                <VideoBackground videoSource={VIDEO_URL} />
                
                {/* Lapisan 2: Konten Carousel/Header (z-index 10) */}
                <div className="relative z-10 lg:p-4 max-w-9/10 text-center">
                    <Carousel />
                </div>

            </div>

            {/* Section 2: Short Description */}
            <div className="relative z-10 w-full text-center bg-[#3d31296b] py-8">
                <ShortDescription />
            </div>
            <div className='relative z-10 w-full p-4 lg:px-20' id='category'>
                <h2 className="text-xl lg:text-4xl py-15 font-mulish text-center tracking-wider">Kategori Produk</h2>
                <Category />
            </div>
            <div className='relative z-10 w-full py-4 px-5 lg:px-20' id='services'>
                <h2 className="text-xl lg:text-4xl font-mulish text-center py-15 dark:text-white tracking-wider">
                Mengapa Memilih Kami?
                </h2>

                <Services />
            </div>
            <div className='relative z-10 w-full py-4 px-5 lg:px-20' id='customers'>
                <Customers />
            </div>
            <div className='relative z-10 w-full p-4' id='gallery'>
                <h2 className="text-xl lg:text-4xl py-15 font-mulish text-center tracking-wider">Gallery</h2>
                <Gallery />
            </div>
            <div className='relative z-10 w-full p-4' id='contact'>
                <Contact />
            </div>
        </>
    )
}

export default Home