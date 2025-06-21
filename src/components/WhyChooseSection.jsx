'use client';

import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: '🕒',
    title: 'Flexible Scheduling',
    desc: 'Learn at your own pace with classes available to suit your routine.',
  },
  {
    icon: '💰',
    title: 'Cost Effective',
    desc: 'Online classes reduce commuting and material costs — more value for less!',
  },
  {
    icon: '🎓',
    title: 'Expert Instructors',
    desc: 'Train under experienced chess coaches with global exposure.',
  },
  {
    icon: '🌍',
    title: 'Learn from Anywhere',
    desc: 'All you need is a device and internet – study from home, school, or travel.',
  },
];

export default function WhyChooseSection() {
  return (
    <section className="relative bg-black text-white py-20 px-4 md:px-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/chess-bg.jpg"
          alt="Chess Background"
          className="w-full h-full object-cover object-center opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-yellow-500 font-semibold text-sm uppercase mb-2"
        >
          Why Choose Online Classes?
        </motion.h3>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-4xl font-bold mb-4"
        >
          Discover Why Online Chess Classes Are The Best Choice.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Unlock your full chess potential from the comfort of your home. Whether you're a beginner or advanced player,
          our virtual classroom brings expert training right to your screen.
        </motion.p>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white text-black p-6 rounded-lg shadow-md flex flex-col items-start hover:shadow-xl transition duration-300 hover:-translate-y-1"
            >
              <div className="text-yellow-500 text-3xl mb-4">{item.icon}</div>
              <h4 className="text-lg font-bold mb-2">{item.title}</h4>
              <p className="text-sm text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
