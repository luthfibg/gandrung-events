import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

import HeadJumper from '../components/HeadJumper'

import 'swiper/css'
import 'swiper/css/pagination'
import './carousel.css'

const Carousel = () => {

  return (
    <div className="relative w-full flex flex-col lg:flex-row lg:gap-3 pb-10 lg:pb-0">
      <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          loop={true}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className='mySwiper w-full pt-20 lg:pt-0'
      >
          <SwiperSlide>
              <div className="custom-card flex flex-col items-start justify-center">
                  <h2 className="xl:text-9xl text-6xl capitalize font-teko font-extrabold mb-2 text-white">sukseskan</h2>
                  <h2 className="xl:text-9xl text-6xl capitalize font-teko font-extrabold mb-2 text-white">event mu</h2>
                  <h2 className='xl:text-5xl text-4xl capitalize font-teko text-start font-extrabold mb-2 text-yellow-500 border-b-4 border-yellow-500 pb-2 w-fit'>Dengan peralatan berkualitas dan kru professional</h2>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="custom-card flex flex-col items-start justify-center bg-transparent">
                  <h2 className="xl:text-9xl text-6xl capitalize font-teko font-extrabold mb-2 text-blue-400">videotron</h2>
                  <h2 className="xl:text-9xl text-6xl capitalize font-teko font-extrabold mb-2 text-white text-start">mulai <span className='text-red-500'>P4</span> hingga <span className='text-red-500'>P1.5</span></h2>
                  <h2 className='xl:text-5xl text-4xl capitalize font-teko text-start font-extrabold mb-2 text-yellow-500 border-b-4 border-yellow-500 pb-2 w-fit'>Siap jadi central point acaramu</h2>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="custom-card flex flex-col items-start justify-center bg-transparent">
                  <h2 className="xl:text-9xl text-6xl capitalize font-teko font-extrabold mb-2 text-blue-400">Paket</h2>
                  <h2 className="xl:text-9xl text-6xl capitalize font-teko font-extrabold mb-2 text-white">Sound System</h2>
                  <h2 className='xl:text-5xl text-4xl capitalize font-teko font-extrabold mb-2 text-yellow-500 border-b-4 border-yellow-500 pb-2 text-start w-fit'>Yang mengguncang kemeriahan</h2>

              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="custom-card flex flex-col items-start justify-center bg-transparent">
                  <h2 className="xl:text-9xl text-6xl capitalize font-teko font-extrabold mb-2 text-blue-400">TV Led</h2>
                  <h2 className="xl:text-8xl text-6xl text-start capitalize font-teko font-extrabold mb-2 text-white"><span className='text-red-500'>60 inch</span> maupun <span className='text-red-500'>75 inch</span></h2>
                  <h2 className='xl:text-5xl text-4xl capitalize text-start font-teko font-extrabold mb-2 text-yellow-500 border-b-4 border-yellow-500 pb-2 w-fit'>sempurnakan pidatomu dengan tv matador</h2>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="custom-card flex flex-col items-start justify-center bg-transparent">
                  <h2 className="xl:text-9xl text-6xl text-start capitalize font-teko font-extrabold mb-2 text-blue-400">video mapping</h2>
                  <h2 className="xl:text-9xl text-6xl capitalize font-teko font-extrabold mb-2 text-start text-white">ukuran 120 - 300</h2>
                  <h2 className='xl:text-5xl text-4xl capitalize font-teko font-extrabold mb-2 text-yellow-500 border-b-4 border-yellow-500 pb-2 w-fit text-start'>untuk acara outdoor yang berkelas</h2>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="custom-card flex flex-col items-start justify-center bg-transparent">
                  <h2 className="xl:text-9xl text-6xl capitalize font-teko font-extrabold mb-2 text-blue-400 text-start">digital promotion</h2>
                  <h2 className="xl:text-9xl text-6xl capitalize font-teko font-extrabold mb-2 text-white">on <span className='text-red-500'>event</span></h2>
                  <h2 className='xl:text-5xl text-4xl capitalize font-teko font-extrabold mb-2 text-yellow-500 border-b-4 border-yellow-500 pb-2 w-fit text-start'>iklankan promo-mu di event</h2>
              </div>
          </SwiperSlide>
      </Swiper>
      <HeadJumper />
    </div>
  )
}

export default Carousel