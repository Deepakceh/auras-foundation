'use client';

import { motion } from 'framer-motion';
import HeroSection from '../../components/HeroSection';

const termsData = [
  {
    title: '1. Acceptance of Terms',
    content: 'By accessing or using the Auras Foundation website or services, you agree to abide by these terms and conditions. If you do not agree, please discontinue use.',
  },
  {
    title: '2. Responsible Use',
    content: 'Users must engage with our content respectfully. Harassment, spam, or misuse of our contact forms or services will result in restricted access.',
  },
  {
    title: '3. Donations & Transparency',
    content: 'All donations made to Auras Foundation are voluntary and non-refundable. We use contributions transparently for causes like education, environment, healthcare, and empowering the specially-abled.',
  },
  {
    title: '4. Beware of Fake NGOs',
    content: 'We urge all donors to verify before contributing. In today’s time, fake NGOs exist that misuse public trust. Always confirm the authenticity of any organization — including ours — by reviewing registration details or reaching out directly.',
  },
  {
    title: '5. Intellectual Property',
    content: 'All content, visuals, and written material on our website are owned by Auras Foundation. Unauthorized use, copying, or reproduction is not allowed without written consent.',
  },
  {
    title: '6. Privacy & Data Use',
    content: 'We are committed to safeguarding your personal data. Please refer to our Privacy Policy for how we collect and use information.',
  },
  {
    title: '7. Policy Changes',
    content: 'Auras Foundation reserves the right to update these terms at any time. Any updates will be reflected on this page with the latest revision date.',
  },
  {
    title: '8. Contact Us',
    content: (
      <>
        For any queries, please email us at{' '}
        <a href="mailto:info@aurasfoundation.com" className="text-green-700 underline font-medium">
          aurasfoundation@gmail.com
        </a>.
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      <HeroSection title="Terms & Conditions" currentPage="terms & conditions" />

      {/* Section with curved gradient */}
      <div className="relative bg-gradient-to-br from-green-50 to-white pb-24 px-4 md:px-20 pt-12">
        {/* Decorative curve */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-white rounded-b-full shadow-md"></div>

        <motion.h2
          className="text-center text-3xl md:text-4xl font-bold text-green-800 mb-12 z-10 relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Terms & Policies
        </motion.h2>

        {/* Terms Grid */}
        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {termsData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-green-100 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-green-700 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{item.content}</p>
            </motion.div>
          ))}
        </div>

        {/* Fake NGO Disclaimer Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-20 max-w-4xl mx-auto bg-yellow-100 text-yellow-800 text-sm p-6 rounded-xl border-l-4 border-yellow-400"
        >
          ⚠️ <strong>Important Notice:</strong> With rising online frauds, we urge all well-wishers to verify the identity of any NGO before donating. Auras Foundation operates with full transparency. Always check the official website and confirm details before contributing to any organization.
        </motion.div>
      </div>
    </>
  );
}
