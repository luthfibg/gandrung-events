import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import './carousel.css'

const Carousel = () => {
  return (
    <Swiper
        modules={[Pagination]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
    >
        <SwiperSlide>
            <div className="custom-card flex flex-col items-start justify-center bg-transparent">
                <h2 className="xl:text-9xl capitalize font-mulish font-extrabold mb-2 text-blue-950">sukseskan</h2>
                <h2 className="xl:text-9xl capitalize font-mulish font-extrabold mb-2 text-blue-950">event mu</h2>
                <h2 className='xl:text-5xl capitalize font-mulish font-extrabold mb-2 text-blue-950'>Dengan peralatan berkualitas dan kru professional</h2>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="custom-card flex items-center justify-center">
              <h2 className="text-4xl font-bold mb-2 text-gray-950">Welcome to Gandrung Event</h2>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="custom-card"></div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="custom-card"></div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="custom-card"></div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="custom-card"></div>
        </SwiperSlide>
    </Swiper>
  )
}

export default Carousel