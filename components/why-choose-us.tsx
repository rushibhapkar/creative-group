'use client';

import { CircleCheck as CheckCircle2 } from 'lucide-react';
import { reasons, commitments } from '@/app/data/whyChooseUsData';

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wide">
            Why Choose Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            What Sets Us Apart
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine expertise, innovation, and dedication to deliver exceptional
            construction solutions that exceed expectations.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <div
                key={index}
                className="group bg-gray-50 p-6 rounded-xl hover:bg-yellow-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-yellow-100 group-hover:bg-white text-yellow-600 p-4 rounded-full w-fit mb-4 transition-colors">
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors">
                  {reason.title}
                </h3>

                <p className="text-gray-600 group-hover:text-yellow-100 transition-colors">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Commitment Section */}
        <div className="mt-20 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl p-8 md:p-12">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Left */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Our Commitment to Excellence
              </h3>

              <div className="space-y-5">

                {commitments.map((item, i) => (

                  <div key={i} className="flex items-start">

                    <div className="bg-yellow-500 text-white p-2 rounded-full mr-4 mt-1 shadow-md">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">
                        {item.title}
                      </h4>

                      <p className="text-gray-700">
                        {item.desc}
                      </p>
                    </div>

                  </div>

                ))}

              </div>
            </div>

            {/* Right Image */}
            <div className="relative">

              <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Construction Quality"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Floating Stat */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs border border-gray-100">

                <div className="text-4xl font-bold text-yellow-600 mb-2">
                  98%
                </div>

                <div className="text-gray-800 font-semibold">
                  Client Satisfaction Rate
                </div>

                <div className="text-sm text-gray-600 mt-1">
                  Based on 150+ completed projects
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}