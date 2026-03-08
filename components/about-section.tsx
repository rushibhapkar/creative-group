'use client';

import { Award, Users, Target, Shield } from 'lucide-react';
import { features, aboutContent } from "@/app/data/companyData";
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
{aboutContent.title}          </h2>

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
              src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Construction Team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-8 -left-8 bg-zinc-900 p-6 rounded-xl shadow-xl max-w-xs border border-zinc-800">
            <div className="flex items-center space-x-4">
              <div className="bg-orange-500 text-black p-4 rounded-full">
                <Shield className="h-8 w-8" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">ISO Certified</div>
                <div className="text-sm text-gray-400">Quality Assurance</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
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