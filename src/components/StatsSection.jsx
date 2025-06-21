"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const stats = [
  { label: "MEMBER ACTIVE", value: 350, suffix: "+" },
  // { label: "EXPERT TEAM", value: 2000, suffix: "+" },
  // { label: "WINNING COMPETITION", value: 751, suffix: "+" },
  { label: "YEARS OF EXPERIENCE", value: 10, suffix: "+" },
];

export default function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative z-10 -mt-24 bg-white shadow-xl py-8 px-2 sm:px-4 lg:px-8 border-t-4 border-yellow-500 max-w-7xl mx-14"
    >
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 text-center">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 * idx, duration: 0.4 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-yellow-600">
              {inView ? (
                <CountUp end={stat.value} duration={2} separator="," />
              ) : (
                "0"
              )}
              {stat.suffix}
            </h2>
            <p className="text-sm sm:text-base font-semibold mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
