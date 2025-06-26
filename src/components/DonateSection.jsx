'use client';

import { motion } from 'framer-motion';

export default function DonateSection() {
  return (
    <section className="bg-green-50 px-6 py-16 md:px-24 text-gray-800">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center max-w-3xl mx-auto mb-10"
      >
        <h2 className="text-4xl font-bold mb-4">Support Our Mission</h2>
        <p className="text-gray-600 text-base leading-relaxed">
          Your small contribution can bring a big change. Every rupee you donate helps us provide education, care,
          empowerment, and opportunities to those who need it most.
          <br />
          <span className="text-green-600 font-semibold">
            Together, we can give hope, dignity, and a better future.
          </span>
        </p>
      </motion.div>

      {/* Bank Details */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto bg-gray-50 border border-green-100 rounded-lg p-6 shadow"
      >
        <h3 className="text-xl font-semibold mb-4 text-green-700">Bank Account Details</h3>
        <ul className="space-y-3 text-sm text-gray-700">
          <li>
            <strong>Account Name:</strong> Auras Foundation
          </li>
          <li>
            <strong>Account Number:</strong> 123456789012
          </li>
          <li>
            <strong>Bank Name:</strong> State Bank of India (SBI)
          </li>
          <li>
            <strong>Branch:</strong> New Delhi Main Branch
          </li>
          <li>
            <strong>IFSC Code:</strong> SBIN0001234
          </li>
          <li>
            <strong>UPI ID:</strong> aurasfoundation@upi
          </li>
        </ul>
      </motion.div>

      {/* Thank you message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center mt-10 text-sm text-gray-500"
      >
        🙏 Thank you for supporting a cause that truly matters. Your kindness makes a difference.
      </motion.div>
    </section>
  );
}
