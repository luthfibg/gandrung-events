import React from 'react'
import VideoBackground from '../components/VideoBackground.jsx'
import Carousel from '../components/Carousel.jsx'
import VIDEO_URL from '../assets/background.mp4';

const Home = () => {


    return (
        <>
            <div className="relative h-screen flex items-center justify-center">
        
                {/* Lapisan 1: Video Latar Belakang (z-index 0) */}
                <VideoBackground videoSource={VIDEO_URL} />
                
                {/* Lapisan 2: Konten Carousel/Header (z-index 10) */}
                <div className="relative z-10 p-4 max-w-4xl text-center">
                    <Carousel />
                </div>

            </div>
        </>
    )
}

export default Home