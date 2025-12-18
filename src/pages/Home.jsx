import React from 'react'
import VideoBackground from '../components/VideoBackground.jsx'
import Carousel from '../sections/Carousel.jsx'
import ShortDescription from '../sections/ShortDescription.jsx'
import VIDEO_URL from '../assets/background.mp4';
import WhatsappFloatingButton from '../components/WhatsappFloatingButton.jsx';
import Category from '../sections/Category.jsx';

const Home = () => {


    return (
        <>
            <div className="relative h-screen flex items-center justify-center">

                <WhatsappFloatingButton />
                {/* Lapisan 1: Video Latar Belakang (z-index 0) */}
                <VideoBackground videoSource={VIDEO_URL} />
                
                {/* Lapisan 2: Konten Carousel/Header (z-index 10) */}
                <div className="relative z-10 p-4 max-w-9/10 text-center">
                    <Carousel />
                </div>

            </div>

            {/* Section 2: Short Description */}
            <div className="relative z-10 w-full text-center bg-[#3d31296b] py-8">
                <ShortDescription />
            </div>
            <div className='relative z-10 w-full p-4'>
                <h2 className="xl:text-5xl py-15 font-mulish text-center">Kategori Produk</h2>
                <Category />
            </div>
        </>
    )
}

export default Home