'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';

export default function BannerSection() {
  const banners = [
    {
      src: '/assets/images/banners/banner1.png',
      title: '',
      description: '',
      // buttonText: 'Contact Us',
      // buttonLink: '/contact',
    },
    {
      src: '/assets/images/banners/banner2.avif',
      title: 'Our Story & Mission',
      description: 'Empowering communities through education, environment, and equality — Auras Foundation is dedicated to building a sustainable and inclusive future for all.',
      // No button for this one
    },
    {
      src: '/assets/images/banners/banner3.png',
      title: '',
      description: '',
    },
    {
      src: '/assets/images/banners/banner6.png',
      title: '',
      description: '',
    }
  ];

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop={true}
      speed={1000}
      className="w-full"
    >
      {banners.map((banner, idx) => (
        <SwiperSlide key={idx}>
          <div className="relative w-full h-[230px] sm:h-[400px] md:h-[450px] lg:h-[550px]">
            <img
              src={banner.src}
              alt={banner.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10 flex items-center justify-start px-6 md:px-16">
              <div className="max-w-xl">
                <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">{banner.title}</h2>
                <p className="text-white text-base md:text-lg mb-6">{banner.description}</p>
                {banner.buttonText && banner.buttonLink && (
                  <Link href={banner.buttonLink}>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-full transition duration-300 cursor-pointer">
                      {banner.buttonText}
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
