'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Removed Navigation
import Image from 'next/image';
import Iphone  from '../assets/iphone.jpg'
import samsung from '../assets/samsung.jpg'
import xiomi from '../assets/xiomi.jpg'

import 'swiper/css';
import 'swiper/css/autoplay'; // Removed navigation CSS

const brands = [
  {name:"Apple",
  image:Iphone},
  
    {name:"Realme",
    image:samsung},
    {name:"Xiaomi",
    image:xiomi},
]

export default function BrandOffers() {
  return (
    <section className="my-6 mx-4">
      <h3 className="text-xl font-semibold mb-4">Top Electronics Brands</h3>
      <hr className="border-t border-blue-900 w-[250px] mb-4" />

      <Swiper
        modules={[Autoplay]} // No Navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          // 0: { slidesPerView: 1 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 3 },
        }}
        className="!px-1"
      >
        {brands.map((brand, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-orange-100 p-4 rounded shadow text-center">
              <div className="relative w-full h-[100px] mb-2">
                <Image
                  src={brand.image}
                  alt={`${brand.name} logo`}
                  fill
                  className="cover"
                  style={{width:'100%'}}
                />
              </div>
              <h4 className="font-bold">{brand.name}</h4>
              <p className="text-sm text-gray-700">UP TO 80% OFF</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
