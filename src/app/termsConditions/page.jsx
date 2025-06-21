'use client'; // Required for using Framer Motion with App Router

import { motion } from 'framer-motion';
import HeroSection from '../../components/HeroSection'; // adjust path as per your project

const termsData = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing or using our chess platform, you agree to be bound by these terms. If you do not agree, please do not use the site.",
  },
  {
    title: "2. User Responsibilities",
    content:
      "Users must maintain respectful communication with coaches and fellow learners. Any form of cheating during online tournaments or training is strictly prohibited.",
  },
  {
    title: "3. Content Ownership",
    content:
      "All lessons, videos, puzzles, and training materials are the intellectual property of our platform and may not be redistributed without permission.",
  },
  {
    title: "4. Payment & Refund Policy",
    content:
      "Payments for coaching or courses are non-refundable unless stated otherwise. In case of cancellations by our team, you may be eligible for a full or partial refund.",
  },
  {
    title: "5. Privacy Policy",
    content:
      "Your personal data will be handled in accordance with our Privacy Policy, available on a separate page.",
  },
  {
    title: "6. Account Suspension",
    content:
      "We reserve the right to suspend or terminate accounts involved in abusive or suspicious activities without prior notice.",
  },
  {
    title: "7. Intellectual Property",
    content:
      "You agree not to copy, distribute, or create derivative works based on any content found on the platform.",
  },
  {
    title: "8. Limitation of Liability",
    content:
      "We are not liable for any damages arising from the use or inability to use our platform.",
  },
  {
    title: "9. Changes to Terms",
    content:
      "These terms may be updated at any time. Continued use of the platform after changes means you accept the new terms.",
  },
  {
    title: "10. Contact Us",
    content: (
      <>
        For any questions about these terms, please contact us at{" "}
        <a
          href="mailto:thechessclasses@gmail.com"
          className="text-yellow-500 font-medium underline"
        >
          thechessclasses@gmail.com
        </a>.
      </>
    ),
  }
  
];

export default function page() {
  return (
    <>
      <HeroSection
        title="Terms & Conditions"
        currentPage="terms & conditions"
      />

      <motion.div
        className="bg-white text-black py-12 px-4 md:px-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl font-bold text-yellow-500 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Terms & Conditions
        </motion.h1>

        <motion.div
          className="space-y-6 text-base leading-relaxed"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {termsData.map((section, index) => (
            <motion.section
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-xl font-semibold text-black mb-2">{section.title}</h2>
              <p className="text-gray-700">{section.content}</p>
            </motion.section>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}
