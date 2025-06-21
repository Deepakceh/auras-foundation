'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function EnrollmentSection() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/assets/images/enrollment.jpg"
          alt="Chess Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="relative z-10 text-center max-w-3xl px-6"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Learn Chess <br />
          <span className="text-yellow-500">From The Best</span>
        </h1>

        <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-6">
          Join expert-led online sessions and take your chess game to the next level from the comfort of your home.
        </p>

        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-yellow-500 text-black font-semibold rounded-md text-sm sm:text-base hover:bg-yellow-400 transition-all duration-300"
        >
          Enroll Now
        </a>
      </motion.div>
    </section>
  );
}
