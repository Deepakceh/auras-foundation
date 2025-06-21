'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection({ title, currentPage }) {
    const bgImage = '/assets/images/heroSection.avif';

    return (
        <div
            className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[320px] bg-center bg-cover flex items-center justify-center"
            style={{
                backgroundImage: `url(${bgImage})`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 z-0"></div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold"
                >
                    {title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-2 text-sm md:text-base text-gray-200"
                >
                    <Link href="/" className="hover:underline text-yellow-300">
                        Home
                    </Link>{' '}
                    &gt; <span className="capitalize">{currentPage}</span>
                </motion.p>
            </div>
        </div>
    );
}
