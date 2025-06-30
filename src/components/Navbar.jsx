'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const storedScrollState = localStorage.getItem('scrolled');
    if (storedScrollState) {
      setScrolled(JSON.parse(storedScrollState));
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);
      localStorage.setItem('scrolled', JSON.stringify(scrollY > 50));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => pathname === path;

  const linkClass = (path) =>
    `relative transition-colors duration-300 font-medium px-2 py-1 ${isActive(path)
      ? 'text-green-700 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-green-700'
      : 'hover:text-green-700 text-inherit'
    }`;


  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white text-black shadow-md`}>
        <div className="max-w-7xl mx-auto px-2 py-1 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold sm:pl-2 md:pl-5">
            <img src="/assets/images/logo.png" alt="logo" className="h-12" />
            {/* {scrolled ? (
              <img src="/assets/images/logo-white.png" alt="logo" className="h-15" />
            ) : (
              <img src="/assets/images/logo-white.png" alt="logo" className="h-15" />
            )} */}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 items-center text-sm">
            <Link href="/" className={linkClass('/')}>Home</Link>
            <Link href="/#services" className={linkClass('/#services')}>Services</Link>
            {/* <Link href="/gallery" className={linkClass('/gallery')}>Gallery</Link> */}
            <Link href="/about" className={linkClass('/about')}>About</Link>
            <Link href="/contact" className={linkClass('/contact')}>Contact</Link>
          </div>

          {/* Join Button - Styled like “Donate” */}
          <a
            href="/donate"
            className={`ml-4 px-5 py-2 rounded text-sm font-semibold transition-all duration-300  hidden sm:inline-block bg-green-700 text-white hover:bg-green-800`}
          >
            Donate
          </a>

          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(true)} className="md:hidden">
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 md:hidden">
          <div className="w-[75%] bg-white h-full p-6">
            <button onClick={() => setMenuOpen(false)} className="mb-6 font-bold text-xl">✕ Close</button>
            <div className="flex flex-col gap-6 text-black font-medium text-base">
              <Link href="/" onClick={() => setMenuOpen(false)} className={linkClass('/')}>Home</Link>
              <Link href="/#services" onClick={() => setMenuOpen(false)} className={linkClass('/#services')}>Services</Link>
              {/* <Link href="/#gallery" onClick={() => setMenuOpen(false)} className={linkClass('/#gallery')}>Gallery</Link> */}
              <Link href="/about" onClick={() => setMenuOpen(false)} className={linkClass('/about')}>About</Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)} className={linkClass('/contact')}>Contact</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
