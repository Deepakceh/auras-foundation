'use client';

import { motion } from 'framer-motion';
import HeroSection from '../../components/HeroSection';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { toast } from "sonner";

export default function page() {

  const initialValues = {
    name: '',
    mobile: '',
    email: '',
    message: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(/^[A-Za-z\s]+$/, "Name must contain only letters and spaces")
      .required("Name is required"),
    mobile: Yup.string()
      .matches(/^\d{10}$/, "Mobile number must be 10 digits")
      .required("Mobile is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    message: Yup.string(),
  });

  const handleSubmit = (values: typeof initialValues, { resetForm }: FormikHelpers<typeof initialValues>) => {
    toast.success("Thanks for reaching out! We'll get back to you shortly.");
    // console.log(values);
    // Redirect after short delay
    resetForm();
  };

  return (
    <>
      <HeroSection title="Contact Us" currentPage="contact" />

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-yellow-50 to-white"
      >
        <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-12 bg-white/60 backdrop-blur-lg rounded-3xl shadow-2xl border border-yellow-100 p-10 md:p-16">

          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-2">Let’s Connect</h2>
              <p className="text-gray-600 text-base">
                Reach out to start your chess journey with personalized coaching and modern training techniques.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-700">
              {[
                { title: "500+ Hours Taught", desc: "Experience that ensures results for all levels — beginners to advanced.", delay: 0.2 },
                { title: "Students from 10+ Cities", desc: "Trusted by parents and students across India & beyond.", delay: 0.3 },
                { title: "Interactive Online Classes", desc: "Live sessions with real-time analysis, puzzles & fun challenges.", delay: 0.4 },
                { title: "Beginner Friendly", desc: "Even if you don’t know the rules, we’ll teach you step-by-step.", delay: 0.5 }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: item.delay, duration: 0.5 }}
                  className="bg-white/70 backdrop-blur border border-yellow-100 rounded-xl p-4 shadow-sm"
                >
                  <h4 className="text-lg font-semibold text-yellow-500 mb-1">{item.title}</h4>
                  <p>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Formik Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form className="space-y-6">
                  {/* Name & Mobile */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Full Name<span className="text-red-500">*</span>
                      </label>
                      <Field
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        className={`w-full mt-1 p-4 rounded-xl bg-white/80 backdrop-blur border ${errors.name && touched.name ? 'border-red-500' : 'border-gray-300'
                          } focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm`}
                      />
                      <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Mobile Number<span className="text-red-500">*</span>
                      </label>
                      <Field
                        name="mobile"
                        type="text"
                        maxLength={10}
                        placeholder="10-digit Mobile"
                        className={`w-full mt-1 p-4 rounded-xl bg-white/80 backdrop-blur border ${errors.mobile && touched.mobile ? 'border-red-500' : 'border-gray-300'
                          } focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm`}
                      />
                      <ErrorMessage name="mobile" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email<span className="text-red-500">*</span>
                    </label>
                    <Field
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className={`w-full mt-1 p-4 rounded-xl bg-white/80 backdrop-blur border ${errors.email && touched.email ? 'border-red-500' : 'border-gray-300'
                        } focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm`}
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Message</label>
                    <Field
                      as="textarea"
                      name="message"
                      rows={4}
                      placeholder="Your message here..."
                      className="w-full mt-1 p-4 rounded-xl bg-white/80 backdrop-blur border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-300"
                  >
                    Send Message
                  </button>
                </Form>
              )}
            </Formik>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
