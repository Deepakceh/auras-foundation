'use client';

import { motion } from 'framer-motion';

export default function MissionSection() {
  return (
    <section id='mission' className="bg-gray-50 px-6 py-16 md:px-24 text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center max-w-4xl mx-auto mb-12"
      >
        <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-600 text-base leading-relaxed">
          At <strong>Auras Foundation</strong>, our mission is to create lasting impact by uplifting underprivileged
          communities through education, environmental care, women empowerment, livelihood development, and health
          awareness. We believe in equality, sustainability, and opportunity for all.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {missionPoints.map((point, idx) => (
          <motion.div
            key={point.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="text-green-600 text-3xl mb-4">{point.icon}</div>
            <h4 className="font-semibold text-xl mb-2">{point.title}</h4>
            <p className="text-sm text-gray-600">{point.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const missionPoints = [
  {
    title: 'Education Access',
    icon: <i className="fas fa-book-reader"></i>,
    description:
      'Providing quality education and digital learning tools to children and youth who need it most.',
  },
  {
    title: 'Clean & Green Environment',
    icon: <i className="fas fa-leaf"></i>,
    description:
      'Promoting sustainable living through tree plantations, clean-up drives, and awareness programs.',
  },
  {
    title: 'Empowering Women',
    icon: <i className="fas fa-female"></i>,
    description:
      'Supporting women with skills training, financial literacy, and resources to build independent futures.',
  },
  {
    title: 'Livelihood Support',
    icon: <i className="fas fa-briefcase"></i>,
    description:
      'Offering vocational training and job support to help individuals earn and lead stable lives.',
  },
  {
    title: 'Health & Hygiene',
    icon: <i className="fas fa-heartbeat"></i>,
    description:
      'Conducting health checkups, hygiene awareness campaigns, and promoting mental well-being.',
  },
  {
    title: 'Inclusive Growth',
    icon: <i className="fas fa-hand-holding-heart"></i>,
    description:
      'Ensuring that differently-abled individuals receive equal care, training, and community support.',
  },
];
