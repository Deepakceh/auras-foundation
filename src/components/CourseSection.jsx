'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const courses = [
    {
        type: '1-1 Classes',
        bgColor: 'bg-[#3c1d1d]',
        features: [
            'Personalized Attention',
            'Flexible Schedule',
            'Tournament Preparation',
            'For Young Kids & Serious Players',
            'Faster Growth',
        ],
        description: 'Personalized lessons with one student and the instructor.',
    },
    {
        type: 'Group Classes',
        bgColor: 'bg-[#132049]',
        features: [
            'Fixed Schedule',
            'Social Interaction',
            'Hobby Players',
            'Competitive Environment',
            'Cost Effective',
        ],
        description: 'Classes with 4–6 students, providing a collaborative environment.',
    },
];

export default function CourseSection() {
    return (
        <section id="courses" className="scroll-mt-20 bg-white py-16 px-4 md:px-20 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl mx-auto text-center"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 border-b-4 border-yellow-500 inline-block pb-2">
                    Our Courses
                </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                {courses.map((course, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className={`rounded-xl shadow-lg text-white ${course.bgColor} p-6 md:p-8`}
                    >
                        <h3 className="text-2xl font-bold mb-2 border-b-2 border-white inline-block pb-1">
                            {course.type}
                        </h3>
                        <p className="mb-4 text-sm md:text-base">
                            <strong>Structure:</strong> {course.description}
                        </p>
                        <ul className="space-y-3">
                            {course.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-yellow-400 mt-1" />
                                    <span className="text-sm md:text-base">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
