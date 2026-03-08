'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Orange Glow Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-orange-600/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl">

          {/* Badge */}
          <div className="inline-block mb-4">
            <span className="bg-orange-500 text-black px-4 py-2 rounded-full text-sm font-semibold">
              12+ Years of Excellence
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Building Strong Foundations with{' '}
            <span className="text-orange-500">Strength & Trust</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl">
            Creative Group delivers high-quality residential and commercial
            construction in Baramati. With over 12 years of experience,
            we focus on strong structures, modern design, and reliable
            workmanship.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              onClick={() => scrollToSection('#contact')}
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-black text-lg px-8 py-6 group"
            >
              Get a Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              onClick={() => scrollToSection('#projects')}
              size="lg"
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black text-lg px-8 py-6"
            >
              View Projects
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">150+</div>
              <div className="text-sm text-gray-300">Projects Completed</div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">12+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">30+</div>
              <div className="text-sm text-gray-300">Skilled Workers</div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">100%</div>
              <div className="text-sm text-gray-300">Client Satisfaction</div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-orange-500 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-orange-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}