'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import Link from 'next/link';
// import Login from "../components/Login"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // const [openLogin, setOpenLogin] = useState(false)

  useEffect(() => {
    // Check if the scroll state was saved in localStorage on initial load
    const storedScrollState = localStorage.getItem('scrolled');
    if (storedScrollState) {
      setScrolled(JSON.parse(storedScrollState));  // Convert stored string back to boolean
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);
      localStorage.setItem('scrolled', JSON.stringify(scrollY > 50)); // Save the scroll state
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => pathname === path;

  const linkClass = (path) => `hover:text-yellow-600 transition-colors duration-200 ${isActive(path) ? 'text-yellow-500 font-semibold' : ''}`;


  const whatsappNumber = '919999146263'; // Full number with country code
  const message = "Hi! I'm interested in taking a demo chess class. Could you please share the details?";

  // Ensure the message is properly encoded
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md text-black' : 'bg-transparent text-white'}`} >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            {scrolled ? (
              <img src="/assets/images/logo-black.png" alt="logo" className="w-40 h-10" />
            ) : (
              <img src="/assets/images/logo-white.png" alt="logo" className="w-40 h-10" />
            )}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 font-medium">
            <Link href="/" className={linkClass('/')}>Home</Link>
            <Link href="/about" className={linkClass('/about')}>About</Link>
            <Link href="/#courses" className={linkClass('/#courses')}> Courses</Link>
            <Link href="/services" className={linkClass('/services')}>Services</Link>
            <Link href="/contact" className={linkClass('/contact')}>Contact</Link>
            <Link href={url} className={linkClass('#')}>Free Demo</Link>
          </div>

          {/* Join Button */}
          <a
            href="https://app7.chesslang.com"
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${scrolled
              ? 'bg-black text-white hover:bg-yellow-600 hover:text-black'
              : 'bg-white text-black hover:bg-yellow-600 hover:text-black'
              }`}
          >
            Login
          </a>


          {/* <Login open={openLogin} setOpen={setOpenLogin} /> */}

          {/* Mobile Menu Icon */}
          <button onClick={() => setMenuOpen(true)} className="md:hidden">
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 md:hidden">
          <div className="w-[75%] bg-white h-full p-6">
            <button onClick={() => setMenuOpen(false)} className="mb-6 font-bold text-xl">
              ✕ Close
            </button>
            <div className="flex flex-col gap-6 text-black font-medium">
              <Link href="/" onClick={() => setMenuOpen(false)} className={linkClass('/')}>Home</Link>
              <Link href="/about" onClick={() => setMenuOpen(false)} className={linkClass('/about')}>About</Link>
              <Link href="/#courses" onClick={() => setMenuOpen(false)} className={linkClass('/#courses')}> Courses</Link>
              <Link href="/services" onClick={() => setMenuOpen(false)} className={linkClass('/services')}>Services</Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)} className={linkClass('/contact')}>Contact</Link>
              <Link href={url} onClick={() => setMenuOpen(false)} className={linkClass('#')}>Free Demo</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
