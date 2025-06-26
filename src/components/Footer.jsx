export default function Footer() {
  return (
    <footer className="bg-green-700 text-white pt-10 pb-6 px-4 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo & About */}
        <div>
          {/* <div className="flex items-center gap-2 mb-3">
            <img src="/assets/images/logo.png" alt="Auras Foundation logo" className="w-40" />
          </div> */}
          <p className="text-sm">
            Auras Foundation is a non-profit organization working in education, environment, women empowerment, health,
            and support for specially-abled individuals.
          </p>
        </div>

        <div>
         

          <div className="mt-4 space-y-2">
            {/* Phone */}
            <a
              href="tel:9718071000"
              className="flex items-center gap-2 hover:text-green-50 transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                />
              </svg>
              <span className="text-sm">+91 9718071000</span>
            </a>

            {/* Email */}
            <a
              href="mailto:info@aurasfoundation.com"
              className="flex items-center gap-2 hover:text-green-50 transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h16v16H4z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 6 12 13 2 6" />
              </svg>
              <span className="text-sm">info@aurasfoundation.com</span>
            </a>

            {/* Address */}
            <p className="flex items-start gap-2 text-sm mt-2">
              <span className="mt-0.5">📍</span>
              <span>C-626 S/F, New Seemapuri, Delhi 110095</span>
            </p>
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-yellow-500">Home</a></li>
            <li><a href="/services" className="hover:text-yellow-500">Services</a></li>
            <li><a href="/about" className="hover:text-yellow-500">About Us</a></li>
            <li><a href="/mission" className="hover:text-yellow-500">Our Mission</a></li>
            <li><a href="/donate" className="hover:text-yellow-500">Donate</a></li>
            <li><a href="/contact" className="hover:text-yellow-500">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-semibold mb-3">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/privacyPolicy" className="hover:text-yellow-500">Privacy Policy</a></li>
            <li><a href="/termsConditions" className="hover:text-yellow-500">Terms & Conditions</a></li>
            <li><a href="/faq" className="hover:text-yellow-500">FAQ</a></li>
          </ul>
        </div>

        {/* Optional: Social / Newsletter */}
        {/* Uncomment if needed */}
      </div>

      <div className="text-center text-sm mt-10 text-white border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Auras Foundation. All rights reserved.
      </div>
    </footer>
  );
}
