'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const services = [
  {
    title: 'Beginners Coaching',
    description: 'Master chess basics — rules, piece movements & early tactics to start your journey.',
    image: '/assets/images/services/service1.jpg',
  },
  {
    title: 'Opening Repertoire',
    description: 'Learn powerful opening strategies and traps to dominate from the very first move.',
    image: '/assets/images/services/service2.jpg',
  },
  {
    title: 'Middlegame Tactics',
    description: 'Sharpen your combinations, attack strategies, and positional awareness.',
    image: '/assets/images/services/service3.jpg',
  },
  {
    title: 'Endgame Mastery',
    description: 'Convert advantages to victories — learn key positions and essential techniques.',
    image: '/assets/images/services/service4',
  },
  {
    title: 'Tournament Training',
    description: 'Prepare for competitive games with practical drills and psychological tips.',
    image: '/assets/images/services/service5',
  },
  {
    title: 'Kids Special Batch',
    description: 'Fun-filled interactive sessions tailored to build interest and skill in kids.',
    image: '/assets/images/services/service6',
  },
];

export default function ServiceSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="bg-gradient-to-br from-yellow-50 to-white py-20 px-4 md:px-20 text-center"
    >
      <div className="max-w-5xl mx-auto mb-16">
        <h4 className="text-yellow-500 text-sm font-bold uppercase tracking-widest mb-3">
          Our Services
        </h4>
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Shape Your Chess Journey with Experts
        </h2>
        <p className="text-gray-600 mt-4 text-base md:text-lg max-w-3xl mx-auto">
          From fundamentals to fierce competition, we’ve got training paths designed for every chess enthusiast.
        </p>
      </div>

      {/* Swiper Section with Custom Styling */}
      <div className="relative group service-swiper"> {/* Add service-swiper class for CSS targeting */}
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={1} 
          loop={false}       
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          pagination={{ clickable: true }}
          modules={[Pagination, Navigation]}
          breakpoints={{
            0: { slidesPerView: 1, slidesPerGroup: 1 },
            768: { slidesPerView: 2, slidesPerGroup: 2 },
            1024: { slidesPerView: 3, slidesPerGroup: 3 },
          }}
          className="pb-16"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-[420px] group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-yellow-400 overflow-hidden flex flex-col justify-between"
                >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center min-h-[180px] flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-yellow-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows */}
        <div className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-yellow-400 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-yellow-500 transition duration-300">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <div className="custom-next absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-yellow-400 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-yellow-500 transition duration-300">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </motion.section>
  );
}
