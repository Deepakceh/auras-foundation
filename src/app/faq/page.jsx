'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../../components/HeroSection';
import Link from 'next/link';

const faqData = [
  {
    question: 'How is my donation used?',
    answer:
      'Your donation is directly used to support programs like education for underprivileged children, environmental protection, women empowerment, and care for specially-abled individuals. We ensure every rupee is used transparently and responsibly.',
  },
  {
    question: 'Can I volunteer with Auras Foundation?',
    answer:
      'Absolutely! We welcome volunteers for teaching, event organization, awareness drives, and field support. You can apply through our contact form.',
  },
  {
    question: 'Is Auras Foundation a registered NGO?',
    answer:
      'Yes, Auras Foundation is a government-registered non-profit organization. All activities and finances are tracked and compliant with legal norms.',
  },
  {
    question: 'How can I trust this NGO is genuine?',
    answer:
      'In today’s world of rising fake NGOs, we urge you to always verify registration details, past activities, and impact reports. We are happy to provide our credentials and past work data upon request.',
  },
  {
    question: 'What causes does Auras Foundation support?',
    answer:
      'We actively work in sectors like education, environmental care, health, women empowerment, digital literacy, and support for specially-abled individuals.',
  },
  {
    question: 'Can I get a donation receipt for tax purposes?',
    answer:
      'Yes, we issue donation receipts that can be used for tax exemptions under applicable sections. Reach out after donating for a receipt.',
  },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <HeroSection title="FAQs" currentPage="FAQs" />

      <motion.section
        className="min-h-screen bg-gradient-to-br from-white to-green-50 text-black px-6 py-14 md:px-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-4xl font-bold text-green-700 mb-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h1>

        <motion.p
          className="mb-10 text-base text-gray-700 max-w-2xl"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Have questions about donations, volunteering, or our work? You're in the right place.
        </motion.p>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white border border-green-100 rounded-xl shadow-sm hover:shadow-md transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.4 }}
            >
              <div
                onClick={() => handleToggle(index)}
                className="cursor-pointer px-6 py-4 flex justify-between items-center"
              >
                <h3 className="text-lg font-semibold text-green-600">{item.question}</h3>
                <span className="text-green-500">{activeIndex === index ? '−' : '+'}</span>
              </div>
              {activeIndex === index && (
                <div className="px-6 pb-4 text-gray-700 text-sm">{item.answer}</div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 bg-white border-l-4 border-green-500 rounded-lg shadow-md p-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-lg font-bold text-green-800 mb-2">Still need help?</h2>
          <p className="text-gray-600 text-sm">
            Email us at{' '}
            <a
              href="mailto:info@aurasfoundation.com"
              className="text-green-600 font-medium underline"
            >
              aurasfoundation@gmail.com
            </a>{' '}
            and our team will get in touch soon.
          </p>
        </motion.div>

        <div className="mt-10 text-sm">
          <Link href="/" className="text-green-600 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </motion.section>
    </>
  );
}
