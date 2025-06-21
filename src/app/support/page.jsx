'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import HeroSection from '../../components/HeroSection'; // adjust path as per your project

const supportTopics = [
    {
        question: "Where can I find course details or syllabus?",
        answer: "You can visit the Course section on our website to see the learning roadmap.",
      },
    {
        question: "Do you offer group classes?",
        answer: "Yes, we offer both group and individual training sessions. You can find upcoming group sessions on the Courses page.",
    },
    {
        question: "What if I miss a class?",
        answer: "Missed classes can be rescheduled if prior notice is given. You can contact your coach or support for assistance.",
    },
    {
        question: "How can I reset my password?",
        answer: "Click on the 'Forgot Password' link on the login page and follow the instructions sent to your registered email.",
    },
]

export default function page() {
    return (
        <>
            <HeroSection
                title="Support"
                currentPage="support"
            />
            <motion.div
                className="min-h-screen bg-yellow-50 text-black px-6 py-12 md:px-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-bold text-black mb-4">Support Center</h1>
                <p className="text-lg text-gray-700 mb-10 max-w-2xl">
                    Need help? Check out our frequently asked questions or reach out to us directly.
                </p>

                <div className="grid gap-6 md:grid-cols-2">
                    {supportTopics.map((topic, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg p-6 border border-yellow-400"
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="text-xl font-semibold text-yellow-500 mb-2">{topic.question}</h3>
                            <p className="text-gray-800">{topic.answer}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 p-6 border-l-4 border-yellow-500 bg-white rounded-lg shadow">
                    <h2 className="text-xl font-bold mb-2 text-black">Still need help?</h2>
                    <p className="text-gray-700">
                        Contact us anytime at{' '}
                        <a
                            href="mailto:thechessclasses@gmail.com"
                            className="text-yellow-600 font-medium underline"
                        >
                            thechessclasses@gmail.com
                        </a>{' '}
                        and we’ll get back to you as soon as possible.
                    </p>
                </div>

                <div className="mt-8">
                    <Link href="/" className="inline-block mt-4 text-sm text-yellow-600 hover:underline">
                        ← Back to Home
                    </Link>
                </div>
            </motion.div>
        </>
    )
}
