'use client';

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Chess Fundamentals',
    desc: 'Master the rules, piece movements, board setup, and core tactics like pins and forks.',
  },
  {
    title: 'Opening Theory',
    desc: 'Study classical and modern openings, traps, and principles to control the game early.',
  },
  {
    title: 'Middlegame Strategy',
    desc: 'Learn how to build plans, handle tension, coordinate pieces, and attack the king.',
  },
  {
    title: 'Endgame Technique',
    desc: 'Master key endgame themes like opposition, pawn promotion, and simple checkmates.',
  },
  {
    title: 'Tactical Vision',
    desc: 'Sharpen your mind with puzzles, tactics training, and real-game combinations.',
  },
  {
    title: 'Tournament Preparation',
    desc: 'Build confidence with timed games, psychological tips, and practical tournament formats.',
  },
];

export default function CurriculumSection() {
  return (
    <section className="bg-white py-20 px-4 md:px-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 border-b-4 border-yellow-500 inline-block pb-2">
          Our Curriculum: From Beginner to Advance
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-start gap-4 bg-white hover:shadow-md transition-shadow duration-300 p-2 rounded-md"
          >
            <div className="bg-yellow-500 text-white font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center shadow-md">
              {index + 1}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
