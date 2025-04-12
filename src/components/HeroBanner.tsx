'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Removed Navigation
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/autoplay'; // Removed navigation CSS

import banner1 from '@/assets/banner1.jpg';
import banner2 from '@/assets/banner2.jpg';
import banner3 from '@/assets/banner3.jpg';

const banners = [banner1, banner2, banner3];

export default function HeroBanner() {
  return (
    <section className="w-full mx-auto my-6">
      <Swiper
        modules={[Autoplay]} // Removed Navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        spaceBetween={20}
        slidesPerView={1}
        className="rounded-lg overflow-hidden"
      >
        {banners.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
              <Image
                src={img}
                alt={`Banner ${index + 1}`}
                layout="fill"
                objectFit="cover"
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
