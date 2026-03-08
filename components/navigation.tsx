'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
// Import the logo directly to handle the unusual double extension safely
import LogoImg from '@/app/assests/logo.jpg.jpeg'; 

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Drone View', href: '#drone' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black shadow-xl border-b border-gray-800'
          : 'bg-black/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo Section */}
          <button
            onClick={() => scrollToSection('#home')}
            className="flex items-center gap-2 sm:gap-3 text-left group transition-all"
          >
            {/* The Circle Container */}
            <div className="relative h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 overflow-hidden rounded-full border-2 border-orange-500 bg-white">
              <Image
                src={LogoImg}
                alt="Creative Group Logo"
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            
            {/* Company Name & Tagline */}
            <div className="flex flex-col justify-center">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-orange-500 leading-none">
                Creative Group
              </h1>
              <p className="text-[9px] sm:text-[11px] text-gray-400 uppercase tracking-tighter sm:tracking-normal mt-1">
                Construction & Builders
              </p>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-gray-300 hover:text-orange-500 transition-colors font-medium text-sm lg:text-base"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Desktop Contact */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:9770747074"
              className="flex items-center text-sm text-gray-400 hover:text-orange-500 transition-colors"
            >
              <Phone className="h-4 w-4 mr-1" />
              <span className="hidden lg:inline">9770747074</span>
            </a>

            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-orange-500 hover:bg-orange-600 text-black font-bold"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-orange-500 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-gray-800 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-6 py-8 space-y-4 text-center">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-xl text-gray-300 hover:text-orange-500 py-2 border-b border-gray-900"
              >
                {link.name}
              </button>
            ))}

            <div className="pt-6 space-y-4">
              <a
                href="tel:9770747074"
                className="flex items-center justify-center text-orange-500 text-lg"
              >
                <Phone className="h-5 w-5 mr-2" />
                9770747074
              </a>
              <Button
                onClick={() => scrollToSection('#contact')}
                className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-6 text-lg"
              >
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}