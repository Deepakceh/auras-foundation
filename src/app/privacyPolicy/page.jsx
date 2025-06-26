'use client';

import { motion } from 'framer-motion';
import HeroSection from '../../components/HeroSection';

const privacySections = [
  {
    title: '1. Information We Collect',
    content:
      'We may collect personal details such as your name, email address, phone number, or message when you voluntarily contact us, register, or donate. We also gather non-personal data such as browser type or access time for analytics purposes.',
  },
  {
    title: '2. Why We Collect It',
    content:
      'Your data helps us improve communication, manage volunteer or donor relationships, and enhance user experience. It also helps us send updates about our projects, events, and impact.',
  },
  {
    title: '3. Data Sharing Policy',
    content:
      'We respect your privacy. Auras Foundation does not sell or rent your data to third parties. Information may be shared only with trusted partners or required by law, and always with discretion.',
  },
  {
    title: '4. Data Protection',
    content:
      'We implement industry-standard security measures — including encrypted storage and restricted access — to protect your personal information from unauthorized access.',
  },
  {
    title: '5. Your Rights',
    content:
      'You have full control over your information. You can request access, correction, or deletion of your data by reaching out to us at the contact below.',
  },
  {
    title: '6. Updates to Policy',
    content:
      'We may occasionally revise this policy. The latest version will always be available here, along with the date of the most recent update.',
  },
  {
    title: '7. Contact Us',
    content: (
      <>
        For questions or concerns about this privacy policy, please email us at{' '}
        <a
          href="mailto:info@aurasfoundation.com"
          className="text-green-400 underline"
        >
          aurasfoundation@gmail.com
        </a>.
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <HeroSection title="Privacy Policy" currentPage="privacy policy" />

      <div className="bg-white text-gray-800 py-16 px-4 md:px-20">
        <motion.h1
          className="text-4xl font-bold text-center text-green-700 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Commitment to Your Privacy
        </motion.h1>

        <div className="max-w-4xl mx-auto grid gap-10">
          {privacySections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-green-50 border border-green-200 rounded-xl p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl font-semibold text-green-700 mb-2">{section.title}</h2>
              <p className="text-sm leading-relaxed text-gray-700">{section.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
