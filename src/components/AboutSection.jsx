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
        <span className="text-sm font-semibold text-green-600 uppercase tracking-wide">About Us</span>
        <h2 className="text-4xl font-bold leading-snug">Auras Foundation</h2>
        <p className="text-gray-600 text-base leading-relaxed">
          Auras Foundation is a non-profit organization dedicated to building a better world. We focus on protecting the
          environment, providing education to the underprivileged, and supporting specially-abled individuals with care,
          training, and empowerment.
        </p>

        {/* Features */}
        <div className="space-y-6">
          {/* Feature 1 */}
          <motion.div {...getMotionProps('bottom', 0.2)} className="flex items-start gap-4">
            <div className="bg-green-600 text-white p-3 rounded-full shadow-md">
              <i className="fas fa-tree text-xl"></i>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Environmental Care</h4>
              <p className="text-sm text-gray-600">
                We conduct clean-up drives, tree plantations, and awareness events to keep our planet healthy.
              </p>
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div {...getMotionProps('bottom', 0.3)} className="flex items-start gap-4">
            <div className="bg-green-600 text-white p-3 rounded-full shadow-md">
              <i className="fas fa-book-reader text-xl"></i>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Education Support</h4>
              <p className="text-sm text-gray-600">
                We provide learning materials, classes, and digital education to students in need.
              </p>
            </div>
          </motion.div>

          {/* Feature 3 */}
          <motion.div {...getMotionProps('bottom', 0.4)} className="flex items-start gap-4">
            <div className="bg-green-600 text-white p-3 rounded-full shadow-md">
              <i className="fas fa-hand-holding-heart text-xl"></i>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Specially-Abled Support</h4>
              <p className="text-sm text-gray-600">
                We empower differently-abled individuals with training, tools, and inclusive community support.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Image Grid */}
      <motion.div {...getMotionProps('right')} className="flex-1 grid grid-cols-3 gap-2">
        <img src="/assets/images/about/about1.svg" alt="Environment" className="w-full h-28 md:h-62 object-cover rounded" />
        <img src="/assets/images/about/about2.avif" alt="Education" className="w-full h-28 md:h-62 object-cover rounded" />
        <img src="/assets/images/disabled-help.jpg" alt="Help" className="w-full h-28 md:h-32 object-cover rounded" />
        <img src="/assets/images/tech.jpg" alt="Digital" className="w-full h-28 md:h-32 object-cover rounded" />
        <img src="/assets/images/classroom.jpg" alt="Classroom" className="w-full h-28 md:h-32 object-cover rounded" />
        <img src="/assets/images/hallway.jpg" alt="Facility" className="w-full h-28 md:h-32 object-cover rounded" />
      </motion.div>
    </section>
  );
}
