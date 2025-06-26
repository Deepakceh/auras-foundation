'use client';

import { motion } from 'framer-motion';

export default function AboutSection({ animateOnScroll = true }) {
  const getMotionProps = (dir = 'left', delay = 0) => {
    const axis = dir === 'left' ? -30 : dir === 'right' ? 30 : 0;
    const base = {
      initial: { opacity: 0, x: axis },
      transition: { duration: 0.6, delay },
    };

    return animateOnScroll
      ? {
          ...base,
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true, amount: 0.2 },
        }
      : {
          ...base,
          animate: { opacity: 1, x: 0 },
        };
  };

  return (
    <section className="relative bg-white text-gray-800 px-6 py-16 md:px-24 flex flex-col lg:flex-row gap-12">
      {/* Left Text Content */}
      <motion.div {...getMotionProps('left')} className="flex-1 space-y-6">
        <span className="text-sm font-semibold text-green-600 uppercase tracking-wide">Who We Are</span>
        <h2 className="text-4xl font-bold leading-snug">Auras Foundation</h2>
        <p className="text-gray-600 text-base leading-relaxed">
          Auras Foundation is a non-profit organization committed to building a brighter future for all. We work across
          key social sectors including education, environment, women empowerment, livelihood development, and healthcare.
          Our mission is to uplift marginalized communities through sustainable support and inclusive opportunities.
        </p>

        {/* Features */}
        <div className="space-y-6">
          {/* Education */}
          <motion.div {...getMotionProps('bottom', 0.2)} className="flex items-start gap-4">
            <div className="bg-green-600 text-white p-3 rounded-full shadow-md">
              <i className="fas fa-book-reader text-xl"></i>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Education for All</h4>
              <p className="text-sm text-gray-600">
                We provide digital education, free learning material, and community classes to help children and youth
                access quality education.
              </p>
            </div>
          </motion.div>

          {/* Environment */}
          <motion.div {...getMotionProps('bottom', 0.3)} className="flex items-start gap-4">
            <div className="bg-green-600 text-white p-3 rounded-full shadow-md">
              <i className="fas fa-leaf text-xl"></i>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Environment Protection</h4>
              <p className="text-sm text-gray-600">
                From tree plantations to clean-up drives, we organize eco-friendly campaigns and awareness programs to
                protect our planet.
              </p>
            </div>
          </motion.div>

          {/* Women Empowerment */}
          <motion.div {...getMotionProps('bottom', 0.4)} className="flex items-start gap-4">
            <div className="bg-green-600 text-white p-3 rounded-full shadow-md">
              <i className="fas fa-female text-xl"></i>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Women Empowerment</h4>
              <p className="text-sm text-gray-600">
                We support women through skill training, awareness sessions, and entrepreneurship programs to help them
                become independent and confident.
              </p>
            </div>
          </motion.div>

          {/* Livelihood */}
          <motion.div {...getMotionProps('bottom', 0.5)} className="flex items-start gap-4">
            <div className="bg-green-600 text-white p-3 rounded-full shadow-md">
              <i className="fas fa-briefcase text-xl"></i>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Livelihood Development</h4>
              <p className="text-sm text-gray-600">
                We train individuals in practical skills and help them find jobs or start small businesses for
                sustainable income.
              </p>
            </div>
          </motion.div>

          {/* Health */}
          <motion.div {...getMotionProps('bottom', 0.6)} className="flex items-start gap-4">
            <div className="bg-green-600 text-white p-3 rounded-full shadow-md">
              <i className="fas fa-heartbeat text-xl"></i>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Health & Wellness</h4>
              <p className="text-sm text-gray-600">
                We organize health camps, provide basic medical aid, and spread awareness about hygiene and mental
                well-being.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Image Grid */}
      <motion.div {...getMotionProps('right')} className="flex-1 grid grid-cols-3 gap-2">
        <img src="/assets/images/about/about2.avif" alt="Classroom" className="w-full h-28 md:h-62 object-cover rounded" />
        <img src="/assets/images/about/about1.svg" alt="Education" className="w-full h-28 md:h-62 object-cover rounded" />
        <img src="/assets/images/tech.jpg" alt="Digital Learning" className="w-full h-28 md:h-62 object-cover rounded" />
        <img src="/assets/images/about/about2.avif" alt="Environment" className="w-full h-28 md:h-62 object-cover rounded" />
        <img src="/assets/images/disabled-help.jpg" alt="Empowerment" className="w-full h-28 md:h-62 object-cover rounded" />
        <img src="/assets/images/health.jpg" alt="Health" className="w-full h-28 md:h-62 object-cover rounded" />
      </motion.div>
    </section>
  );
}
