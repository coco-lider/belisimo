"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './style.css';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function hero() {
  return (
    <div className="mt-2">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        slidesPerView={1.10}
        spaceBetween={15}
        centeredSlides={true}
        loop={true}
      >
        <SwiperSlide>
          <div className='w-[1300px]'>
            <img src="https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F92e57e86-6353-40f3-af75-a191d3779bf1_uz.jpg&w=828&q=75" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-[1300px]'>
            <img src="https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F92e57e86-6353-40f3-af75-a191d3779bf1_uz.jpg&w=828&q=75" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F01c0e754-cb9b-49d5-ad11-ccc05ad69238_uz.jpg&w=828&q=75" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F9d9bc54e-009d-498f-abfe-1c0d0af77b7c_uz.jpg&w=828&q=75" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F303af063-dd09-41ad-a0fd-e7beeb22f4e0_uz.jpg&w=828&q=75" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fa95649d2-ee7e-4606-a65e-262015e5b1c6_uz.jpg&w=828&q=75" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
