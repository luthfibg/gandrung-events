import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import './carousel.css'

const Carousel = () => {
  return (
    <Swiper
        modules={Navigation}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
    >
        <SwiperSlide>
            <div class="custom-card"></div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="custom-card"></div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="custom-card"></div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="custom-card"></div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="custom-card"></div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="custom-card"></div>
        </SwiperSlide>
    </Swiper>
  )
}

export default Carousel