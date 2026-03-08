'use client';

import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import {
  companyInfo,
  footerLinks,
  socialLinks,
  certifications,
} from "@/app/data/footerData";
export default function Footer() {
  const currentYear = new Date().getFullYear();

 

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
return (
<footer className="bg-black text-gray-300">    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
        
        <div className="lg:col-span-2">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-white">BuildPro</h2>
            <p className="text-sm text-yellow-400">Construction & Builders</p>
          </div>

          <p className="text-gray-400 mb-6 max-w-md">
            Building excellence since 1998. We deliver premium construction
            solutions with quality, trust, and innovation at the core of
            everything we do.
          </p>

          <div className="space-y-3">
            <a
              href="tel:+1234567890"
              className="flex items-center text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              +1 (234) 567-890
            </a>

            <a
              href="mailto:info@buildpro.com"
              className="flex items-center text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <Mail className="h-4 w-4 mr-2" />
              info@buildpro.com
            </a>

            <div className="flex items-start text-gray-400">
              <MapPin className="h-4 w-4 mr-2 mt-1" />
              <span>
                123 Construction Ave
                <br />
                Los Angeles, CA 90001
              </span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            {footerLinks.company.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4">Services</h3>
          <ul className="space-y-2">
            {footerLinks.services.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4">Resources</h3>
          <ul className="space-y-2">
            {footerLinks.resources.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-700 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center">

          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} BuildPro Construction & Builders. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-4 mb-4 md:mb-0">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
className="bg-gray-700 p-2 rounded-full hover:bg-yellow-500 transition-colors"                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <div className="flex space-x-4 text-sm">
            <button className="text-gray-400 hover:text-yellow-400 transition-colors">
              Privacy Policy
            </button>

            <span className="text-gray-600">|</span>

            <button className="text-gray-400 hover:text-yellow-400 transition-colors">
              Terms of Service
            </button>
          </div>

        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-gray-700 text-center">
        <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
          <span>ISO 9001:2015 Certified</span>
          <span>•</span>
          <span>LEED Accredited</span>
          <span>•</span>
          <span>Licensed & Insured</span>
          <span>•</span>
          <span>Member: National Association of Home Builders</span>
        </div>
      </div>

    </div>
  </footer>
);
}