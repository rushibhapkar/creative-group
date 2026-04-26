'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
import {
  companyInfo,
  footerLinks,
  socialLinks,
  certifications,
} from "@/app/data/footerData";
import { useEffect, useState } from 'react';

export default function Footer() {
const [currentYear, setCurrentYear] = useState<number | null>(null);

useEffect(() => {
  setCurrentYear(new Date().getFullYear());
}, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-black text-gray-300 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand & Contact Column */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-white">{companyInfo.name}</h2>
              <p className="text-sm text-orange-500 font-medium uppercase tracking-wider">
                {companyInfo.tagline}
              </p>
            </div>

            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              {companyInfo.description}
            </p>

            <div className="space-y-3">
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-center text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Phone className="h-4 w-4 mr-3 text-orange-500" />
                {companyInfo.phone}
              </a>

              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Mail className="h-4 w-4 mr-3 text-orange-500" />
                {companyInfo.email}
              </a>

              <div className="flex items-start text-gray-400">
                <MapPin className="h-4 w-4 mr-3 mt-1 text-orange-500 flex-shrink-0" />
                <span className="text-sm">
                  {companyInfo.address.line1}, {companyInfo.address.line2}
                  <br />
                  {companyInfo.address.line3}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links Columns */}
          <div>
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Socials & Copyright */}
        <div className="border-t border-zinc-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-sm">
© {currentYear ?? new Date().getFullYear()} {companyInfo.name}. All rights reserved.
              </p>
              <p className="text-gray-600 text-xs mt-1">
                Founded by {companyInfo.owner} • {companyInfo.experience}
              </p>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-900 border border-zinc-800 p-2.5 rounded-full hover:bg-orange-500 hover:text-black transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            <div className="flex space-x-6 text-xs font-medium">
              <button className="text-gray-500 hover:text-orange-500 transition-colors">
                Privacy Policy
              </button>
              <button className="text-gray-500 hover:text-orange-500 transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>

        {/* Certifications & Trust Badges */}
        <div className="mt-12 pt-8 border-t border-zinc-800">
          <div className="flex flex-wrap justify-center gap-y-2 gap-x-6 text-[10px] md:text-xs text-gray-600 font-medium uppercase tracking-widest">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-2">
                {index !== 0 && <span className="text-zinc-800">•</span>}
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}