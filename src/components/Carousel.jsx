import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination } from 'swiper/modules'

import HeadJumper from './HeadJumper'

import 'swiper/css'
import 'swiper/css/navigation'
import './carousel.css'

const Carousel = () => {
  return (
    <div className="relative w-full flex lg:gap-3">
      <Swiper
          modules={[Pagination]}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className='mySwiper w-full h-full'
      >
          <SwiperSlide>
              <div className="custom-card flex flex-col items-start justify-center bg-transparent">
                  <h2 className="xl:text-9xl capitalize font-teko font-extrabold mb-2 text-white">sukseskan</h2>
                  <h2 className="xl:text-9xl capitalize font-teko font-extrabold mb-2 text-white">event mu</h2>
                  <h2 className='xl:text-5xl capitalize font-teko text-start font-extrabold mb-2 text-yellow-500 border-b-4 border-yellow-500 pb-2 w-fit'>Dengan peralatan berkualitas dan kru professional</h2>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="custom-card flex flex-col items-start justify-center bg-transparent">
                  <h2 className="xl:text-9xl capitalize font-teko font-extrabold mb-2 text-blue-400">videotron</h2>
                  <h2 className="xl:text-9xl capitalize font-teko font-extrabold mb-2 text-white text-start">mulai <span className='text-red-500'>P4</span> hingga <span className='text-red-500'>P1.5</span></h2>
                  <h2 className='xl:text-5xl capitalize font-teko font-extrabold mb-2 text-yellow-500 border-b-4 border-yellow-500 pb-2 w-fit'>Siap jadi central point acaramu</h2>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="custom-card flex flex-col items-start justify-center bg-transparent">
                  <h2 className="xl:text-9xl capitalize font-teko font-extrabold mb-2 text-blue-400">Paket</h2>
                  <h2 className="xl:text-9xl capitalize font-teko font-extrabold mb-2 text-white">Sound System</h2>
                  <h2 className='xl:text-5xl capitalize font-teko font-extrabold mb-2 text-yellow-500 border-b-4 border-yellow-500 pb-2 w-fit'>Yang mengguncang kemeriahan</h2>

              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="custom-card flex flex-col items-start justify-center bg-transparent">
                  <h2 className="xl:text-9xl capitalize font-teko font-extrabold mb-2 text-blue-400">TV Led</h2>
                  <h2 className="xl:text-8xl text-start capitalize font-teko font-extrabold mb-2 text-white"><span className='text-red-500'>60 inch</span> maupun <span className='text-red-500'>75 inch</span></h2>
                  <h2 className='xl:text-5xl capitalize text-start font-teko font-extrabold mb-2 text-yellow-500 border-b-4 border-yellow-500 pb-2 w-fit'>sempurnakan pidatomu dengan tv matador</h2>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="custom-card flex flex-col items-start justify-center bg-transparent">
                  <h2 className="xl:text-9xl capitalize font-teko font-extrabold mb-2 text-blue-400">video mapping</h2>
                  <h2 className="xl:text-9xl capitalize font-teko font-extrabold mb-2 text-start text-white">ukuran 120 - 300</h2>
                  <h2 className='xl:text-5xl capitalize font-teko font-extrabold mb-2 text-yellow-500 border-b-4 border-yellow-500 pb-2 w-fit'>untuk acara outdoor yang berkelas</h2>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="custom-card flex flex-col items-start justify-center bg-transparent">
                  <h2 className="xl:text-9xl capitalize font-teko font-extrabold mb-2 text-blue-400 text-start">digital promotion</h2>
                  <h2 className="xl:text-9xl capitalize font-teko font-extrabold mb-2 text-white">on <span className='text-red-500'>event</span></h2>
                  <h2 className='xl:text-5xl capitalize font-teko font-extrabold mb-2 text-yellow-500 border-b-4 border-yellow-500 pb-2 w-fit'>iklankan promo-mu di event</h2>
              </div>
          </SwiperSlide>
      </Swiper>
      <HeadJumper />
    </div>
  )
}

export default Carousel