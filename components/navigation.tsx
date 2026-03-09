'use client';

import { useState, useEffect, useCallback } from 'react';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Drone View', href: '#drone' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const scrollToSection = useCallback((href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
      setActiveLink(href);
      setIsMobileMenuOpen(false);
    }
  }, []);

  return (
    <>
      <div className="h-[72px] w-full" aria-hidden="true" />

      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a] shadow-[0_2px_20px_rgba(0,0,0,0.65)] border-b border-orange-500/20">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[70px]">

            {/* Logo Section */}
            <button
              onClick={() => scrollToSection('#home')}
              className="flex items-center gap-3 group outline-none"
              aria-label="Go to home"
            >
              <div className="relative h-11 w-11 flex-shrink-0 overflow-hidden rounded-full border-2 border-orange-500 bg-white shadow-[0_0_10px_rgba(249,115,22,0.2)] transition-all duration-200 group-hover:ring-2 group-hover:ring-orange-500/40">
                <Image
                  src="/assests/logo.jpeg" // Updated path to point to public/assests/logo.jpeg
                  alt="Creative Group Logo"
                  fill
                  priority
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-extrabold tracking-tight text-orange-500 group-hover:text-orange-400 transition-colors duration-150">
                  Creative Group
                </span>
                <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-[0.18em] mt-[3px]">
                  Construction & Builders
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`relative px-3 py-1.5 text-sm font-semibold tracking-wide rounded-md transition-colors duration-150 group outline-none ${
                    activeLink === link.href ? 'text-orange-500' : 'text-gray-300 hover:text-orange-400'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-orange-500 rounded-full transition-all duration-200 ${
                    activeLink === link.href ? 'w-4/5' : 'w-0 group-hover:w-4/5'
                  }`} />
                </button>
              ))}
            </div>

            {/* Desktop Contact CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a href="tel:9770747074" className="flex items-center gap-1.5 text-sm text-gray-300 hover:text-orange-500 transition-colors duration-150 group">
                <div className="p-1.5 rounded-full bg-orange-500/10 group-hover:bg-orange-500/20">
                  <Phone className="h-3.5 w-3.5 text-orange-500" />
                </div>
                <span className="hidden lg:inline font-medium">9770747074</span>
              </a>
              <button
                onClick={() => scrollToSection('#contact')}
                className="relative px-5 py-2 bg-orange-500 text-black text-sm font-bold rounded-md overflow-hidden group hover:shadow-[0_0_18px_rgba(249,115,22,0.4)] transition-shadow duration-200 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-1">
                  Get Quote
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-150" />
                </span>
                <span className="absolute inset-0 bg-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="md:hidden relative z-[60] flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 bg-gray-900 text-gray-300 hover:text-orange-500 transition-colors duration-150"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        onClick={() => setIsMobileMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-[2px] md:hidden transition-opacity duration-200 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[275px] md:hidden bg-[#0d0d0d] border-l border-orange-500/20 flex flex-col transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-800/80">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-orange-500" />
            <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Navigation</span>
          </div>
          <button onClick={() => setIsMobileMenuOpen(false)} className="p-1.5 rounded-full text-gray-400 hover:text-orange-500"><X className="h-5 w-5" /></button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-5 space-y-1">
          {navLinks.map((link, i) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              style={{
                transitionDelay: isMobileMenuOpen ? `${i * 35}ms` : '0ms',
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(14px)',
                transition: 'opacity 0.22s ease, transform 0.22s ease',
              }}
              className={`w-full flex items-center justify-between px-4 py-3.5 rounded-lg text-sm font-semibold border ${
                activeLink === link.href ? 'bg-orange-500/15 text-orange-500 border-orange-500/25' : 'text-gray-300 border-transparent'
              }`}
            >
              <span>{link.name}</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          ))}
        </nav>

        <div className="px-5 py-5 border-t border-gray-800/80 space-y-3">
          <a href="tel:9770747074" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-800/50 text-gray-300">
            <Phone className="h-4 w-4 text-orange-500" />
            <span className="font-semibold text-sm">9770747074</span>
          </a>
          <button onClick={() => scrollToSection('#contact')} className="w-full py-3.5 bg-orange-500 text-black font-extrabold text-sm rounded-lg">
            Get a Free Quote
          </button>
        </div>
      </div>
    </>
  );
}