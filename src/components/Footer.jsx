
export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-gray-300 pt-10 pb-6 px-4 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src="/assets/images/logo-white.png" alt="logo" className='w-40' />
          </div>
          <p className="text-sm">
            Unlock your true potential in chess with expert guidance and live training sessions.
          </p>
          <div className="mt-3 space-y-2">
            {/* Phone */}
            <a
              href="tel:9999146263"
              className="flex items-center gap-2 text-white hover:text-yellow-500 transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-yellow-500"
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
              <span className="text-sm">+91 9999146263</span>
            </a>

            {/* Email
            <a
              href="mailto:thechessclasses@gmail.com"
              className="flex items-center gap-2 hover:text-yellow-500 transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-yellow-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span className="text-sm">thechessclasses@gmail.com</span>
            </a> */}
          </div>

        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-yellow-500">Home</a></li>
            <li><a href="/about" className="hover:text-yellow-500">About Us</a></li>
            <li><a href="/#courses" className="hover:text-yellow-500">Courses</a></li>
            <li><a href="/services" className="hover:text-yellow-500">Services</a></li>
            <li><a href="/contact" className="hover:text-yellow-500">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-semibold mb-3">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/privacyPolicy" className="hover:text-yellow-500">Privacy Policy</a></li>
            <li><a href="/termsConditions" className="hover:text-yellow-500">Terms & Conditions</a></li>
            <li><a href="/support" className="hover:text-yellow-500">Support</a></li>
            <li><a href="/faq" className="hover:text-yellow-500">FAQ</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        {/*
        <div>
          <h3 className="text-white font-semibold mb-3">Our Social Media</h3>
          <div className="flex gap-16 mt-4">
            <a href="www.facebook.com" className="transition-transform duration-200 hover:scale-110 group">
              <img
                src="assets/icons/facebook.svg"
                alt="Facebook"
                className="h-5 transition-colors duration-200 group-hover:brightness-0 group-hover:invert group-hover:sepia group-hover:hue-rotate-[40deg] group-hover:saturate-[10] group-hover:text-yellow-500"
              />
            </a>
            <a href="www.instagram.com" className="transition-transform duration-200 hover:scale-110 group">
              <img
                src="assets/icons/instagram.svg"
                alt="Instagram"
                className="h-5 transition-colors duration-200 group-hover:brightness-0 group-hover:invert group-hover:sepia group-hover:hue-rotate-[40deg] group-hover:saturate-[10] group-hover:text-yellow-500"
              />
            </a>
            <a href="www.youtube.com" className="transition-transform duration-200 hover:scale-110 group">
              <img
                src="assets/icons/youtube.svg"
                alt="YouTube"
                className="h-5 transition-colors duration-200 group-hover:brightness-0 group-hover:invert group-hover:sepia group-hover:hue-rotate-[40deg] group-hover:saturate-[10]"
              />
            </a>
          </div>

          <form className="flex flex-col gap-2 mt-7">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 px-4 py-2 rounded text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>*/}
      </div>

      <div className="text-center text-sm mt-10 text-gray-500 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} The Chess Classes. All rights reserved.
      </div>
    </footer>
  );
}
