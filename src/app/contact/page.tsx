'use client';

import { motion } from 'framer-motion';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { toast } from 'sonner';
import HeroSection from '../../components/HeroSection';

export default function ContactPage() {
  const initialValues = {
    name: '',
    mobile: '',
    email: '',
    message: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(/^[A-Za-z\s]+$/, "Only letters and spaces allowed")
      .required('Name is required'),
    mobile: Yup.string()
      .matches(/^\d{10}$/, 'Mobile number must be 10 digits')
      .required('Mobile is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    message: Yup.string(),
  });

  const handleSubmit = (values: typeof initialValues, { resetForm }: FormikHelpers<typeof initialValues>) => {
    toast.success("Thanks for reaching out! We'll get back to you shortly.");
    resetForm();
  };

  return (
    <>
      <HeroSection title="Contact Us" currentPage="contact" />
      <section className="bg-gradient-to-br from-green-50 to-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT: Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-2xl font-bold text-green-700 mb-4">Get in Touch</h2>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
              {({ errors, touched }) => (
                <Form className="space-y-5 text-sm">
                  {/* Name */}
                  <div>
                    <Field
                      name="name"
                      type="text"
                      placeholder="Full Name"
                      className={`w-full p-3 rounded-lg border ${errors.name && touched.name ? 'border-red-500' : 'border-gray-300'} focus:border-green-500 focus:outline-none`}
                    />
                    <ErrorMessage name="name" component="div" className="text-xs text-red-500 mt-1" />
                  </div>

                  {/* Mobile */}
                  <div>
                    <Field
                      name="mobile"
                      type="text"
                      placeholder="Mobile Number"
                      maxLength={10}
                      className={`w-full p-3 rounded-lg border ${errors.mobile && touched.mobile ? 'border-red-500' : 'border-gray-300'} focus:border-green-500 focus:outline-none`}
                    />
                    <ErrorMessage name="mobile" component="div" className="text-xs text-red-500 mt-1" />
                  </div>

                  {/* Email */}
                  <div>
                    <Field
                      name="email"
                      type="email"
                      placeholder="Email"
                      className={`w-full p-3 rounded-lg border ${errors.email && touched.email ? 'border-red-500' : 'border-gray-300'} focus:border-green-500 focus:outline-none`}
                    />
                    <ErrorMessage name="email" component="div" className="text-xs text-red-500 mt-1" />
                  </div>

                  {/* Message */}
                  <div>
                    <Field
                      as="textarea"
                      name="message"
                      placeholder="Your message..."
                      rows={3}
                      className={`w-full p-3 rounded-lg border ${errors.message && touched.message ? 'border-red-500' : 'border-gray-300'} focus:border-green-500 focus:outline-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-700 hover:bg-green-800 text-white font-medium py-2.5 rounded-lg transition"
                  >
                    Send Message
                  </button>
                </Form>
              )}
            </Formik>
          </motion.div>

          {/* RIGHT: Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-5 text-sm text-gray-700 leading-relaxed"
          >
            <h3 className="text-2xl font-bold text-gray-800">Why Connect with Auras Foundation?</h3>
            <p>
              Auras Foundation works for education, environment, health, women empowerment, and support for specially-abled people. Whether you want to volunteer, collaborate, or seek help — we’re here to grow with the community.
            </p>

            <ul className="space-y-3">
              <li><strong>🤝 Volunteer:</strong> Help us educate, plant, clean & uplift.</li>
              <li><strong>🌿 Environment:</strong> Join our tree drives and eco campaigns.</li>
              <li><strong>📚 Education:</strong> Spread knowledge to those who need it most.</li>
            </ul>

            <div className="pt-4 border-t space-y-1">
              <p><strong>📍 Address:</strong> C-626 S/F, New Seemapuri, Delhi 110095</p>
              <p><strong>📞 Mobile:</strong> 9718071000</p>
              <p><strong>📧 Email:</strong> info@aurasfoundation.com</p>
            </div>
          </motion.div>
        </div>
      </section>

    </>
  );
}
