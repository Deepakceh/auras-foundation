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
      src: '/assets/images/banners/banner1.avif',
      title: 'Master the Game of Kings',
      description: 'Step into a world where strategy meets passion. Learn chess with top mentors at The Chess Classes.',
      buttonText: 'Contact Us',
      buttonLink: '/contact',
    },
    {
      src: '/assets/images/banners/banner2.avif',
      title: 'Our Story & Mission',
      description: 'We believe chess isn’t just a game — it’s a journey of focus, patience, and excellence.',
      // No button for this one
    },
    {
      src: '/assets/images/banners/banner3.avif',
      title: 'What We Offer',
      description: 'From foundational lessons to advanced coaching, explore our chess training programs crafted for all skill levels.'
    },
    {
      src: '/assets/images/banners/banner4',
      title: 'Learn Through a Powerful Curriculum',
      description: 'Our structured curriculum blends theory, practice, and play — designed to bring out the best in every player.',
      buttonText: 'Request a Demo',
      buttonLink: '/contact',
    },
    {
      src: '/assets/images/banners/banner5',
      title: 'The Power of Chess',
      description: 'Boost memory, improve logic, and develop strategic thinking with the ancient game loved worldwide.',
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
          <div className="relative w-full h-[500px] md:h-[550px]">
            <img
              src={banner.src}
              alt={banner.title}
              className="w-full h-full object-cover brightness-[0.6]"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-start px-6 md:px-16">
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
