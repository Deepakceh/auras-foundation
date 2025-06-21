'use client';

import { useState } from 'react'; // Add this import
import HeroSection from '../../components/HeroSection'; // adjust path as per your project
import { motion } from 'framer-motion'
import Link from 'next/link'; // Ensure Link import if you are using Next.js

const faqData = [
    {
        question: "How can I start my first chess session?",
        answer: "To start your first session, log in to the platform, select a coach, and book a session through the dashboard. Once confirmed, you’ll be all set to begin your first lesson.",
    },
    {
        question: "How do I improve my chess rating?",
        answer: "Improving your chess rating involves practicing regularly, solving puzzles, studying strategies, and playing games with various opponents. Our coaches will provide personalized advice based on your performance.",
    },
    {
        question: "What are the different chess levels for learners?",
        answer: "We offer a variety of chess levels, including beginner, intermediate, and advanced. Each level focuses on different aspects such as openings, middle game tactics, endgames, and overall strategies.",
    },
    {
        question: "Can I play with a coach during a session?",
        answer: "Yes! During a coaching session, you can play games with your coach, who will analyze your moves, give real-time feedback, and help you improve your gameplay.",
    },
    {
        question: "What are the benefits of participating in online tournaments?",
        answer: "Tournaments provide you with the opportunity to challenge yourself, improve your skills under pressure, and track your progress over time. It’s a great way to gain experience and exposure to different playing styles.",
    },
    {
        question: "Can I request a specific coach?",
        answer: "Yes, you can request a specific coach based on their expertise, rating, and teaching style. You can view the list of available coaches on the platform and select one that suits your needs.",
    },
];

export default function page() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <HeroSection
                title="FAQ's"
                currentPage="faq"
            />
            <motion.div
                className="min-h-screen bg-yellow-50 text-black px-6 py-12 md:px-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.h1
                    className="text-4xl font-bold text-black mb-6"
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Frequently Asked Questions
                </motion.h1>

                <motion.div
                    className="mb-8 text-lg text-gray-700 max-w-2xl"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    Get quick answers to your questions related to chess lessons, sessions, and more.
                </motion.div>

                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <motion.div
                            key={index}
                            className="rounded-lg border bg-white shadow-md hover:shadow-lg transition-all"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.4 }}
                        >
                            <div
                                className="px-6 py-4 cursor-pointer"
                                onClick={() => handleToggle(index)}
                            >
                                <motion.h3
                                    className="text-xl font-semibold text-yellow-500"
                                    whileHover={{ scale: 1.01 }}
                                >
                                    {item.question}
                                </motion.h3>
                            </div>
                            {activeIndex === index && (
                                <div className="px-6 pb-4 text-gray-700">
                                    {item.answer}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="mt-12 p-6 border-l-4 border-yellow-500 bg-white rounded-lg shadow"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <h2 className="text-xl font-bold mb-2 text-black">Still need help?</h2>
                    <p className="text-gray-700">
                        For more inquiries, feel free to reach us at{' '}
                        <a
                            href="mailto:thechessclasses@gmail.com"
                            className="text-yellow-600 font-medium underline"
                        >
                            thechessclasses@gmail.com
                        </a>{' '}
                        and we’ll assist you shortly.
                    </p>
                </motion.div>

                <motion.div
                    className="mt-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                >
                    <Link href="/" className="inline-block mt-4 text-sm text-yellow-600 hover:underline">
                        ← Back to Home
                    </Link>
                </motion.div>
            </motion.div>
        </>
    );
}
