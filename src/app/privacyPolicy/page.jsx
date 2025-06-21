'use client';

import { motion } from 'framer-motion';
import HeroSection from '../../components/HeroSection'; // Update path if needed

const privacySections = [
  {
    title: '1. Information We Collect',
    content:
      'We collect personal information like name, email, and activity data to improve user experience. This may include analytics, cookies, and voluntary user inputs.',
  },
  {
    title: '2. How We Use Your Information',
    content:
      'The data collected helps us personalize lessons, offer better support, and improve features. We do not sell or rent your information.',
  },
  {
    title: '3. Sharing of Information',
    content:
      'Your information is never shared with third parties without consent, unless required by law or in the event of a legal investigation.',
  },
  {
    title: '4. Data Security',
    content:
      'We use encryption, secure servers, and access controls to protect your personal data from unauthorized access.',
  },
  {
    title: '5. Your Choices',
    content:
      'You can choose to opt-out of certain communications and data collection tools like cookies. Account deletion requests can be submitted via email.',
  },
  {
    title: '6. Policy Changes',
    content:
      'We may update this privacy policy periodically. Updates will be posted on this page with a revised effective date.',
  },
  {
    title: '7. Contact Us',
    content: (
      <>
        For any privacy-related concerns, please email us at  <a
          href="mailto:thechessclasses@gmail.com"
          className="text-yellow-500 font-medium underline"
        >
          thechessclasses@gmail.com
        </a>.'
      </>
    )
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <HeroSection
        title="Privacy Policy"
        currentPage="privacy policy"
      />

      <div className="bg-black text-white py-16 px-4 md:px-20">
        <motion.h1
          className="text-4xl font-bold text-yellow-400 mb-10 text-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Privacy Policy
        </motion.h1>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {privacySections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h2 className="text-xl font-semibold text-yellow-300 mb-2">
                {section.title}
              </h2>
              <p className="text-gray-300">{section.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
