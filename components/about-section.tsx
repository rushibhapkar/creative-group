'use client';

import { Award, Users, Target, Shield, Star, HardHat } from 'lucide-react';
import { features, aboutContent } from "@/app/data/about";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <div className="inline-block mb-4">
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-wide">
                {aboutContent.subtitle}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {aboutContent.title}
            </h2>

            <p className="text-lg text-gray-400 mb-6">
              {aboutContent.description1}
            </p>

            <p className="text-lg text-gray-400 mb-8">
              {aboutContent.description2}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {aboutContent.stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-orange-500 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative h-[600px] rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://res.cloudinary.com/demz8cf5k/image/upload/v1773677648/uploads/wwuuqtngu7hschrv8kho.png"
                alt="Sandip Jaypatre - Founder & Director, Creative Group"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Name overlay at bottom of image */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white text-xl font-bold leading-tight">Sandip Jaypatre</p>
                <p className="text-orange-400 text-sm font-medium tracking-wide uppercase mt-1">
                  Founder & Director
                </p>
              </div>
            </div>

            {/* Floating Founder Card */}
            <div className="absolute -bottom-8 -left-8 bg-zinc-900 rounded-xl shadow-2xl border border-zinc-700 overflow-hidden max-w-xs">
              {/* Orange accent top bar */}
              <div className="h-1 w-full bg-orange-500" />
              <div className="p-5">
                <div className="flex items-center gap-4">
                  {/* Icon */}
                  <div className="bg-orange-500/10 border border-orange-500/30 p-3 rounded-full shrink-0">
                    <HardHat className="h-7 w-7 text-orange-400" />
                  </div>
                  {/* Text */}
                  <div>
                    <div className="flex items-center gap-1 mb-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-orange-400 text-orange-400" />
                      ))}
                    </div>
                    <div className="text-white font-bold text-base leading-tight">12+ Years</div>
                    <div className="text-gray-400 text-xs mt-0.5">Industry Experience</div>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-zinc-700 my-3" />

                {/* Tagline */}
                <p className="text-gray-400 text-xs leading-relaxed">
                  Building trust, one project at a time — since <span className="text-orange-400 font-semibold">2013</span>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-orange-500 hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-orange-500 text-black p-3 rounded-full w-fit mb-4">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}