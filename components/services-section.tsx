'use client';

import { services } from '@/app/data/servicesData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wide">
            Our Services
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Comprehensive Construction Solutions
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From concept to completion, we offer a full range of construction
            services tailored to meet your specific needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Card
                key={index}
                className="group bg-zinc-900 border border-zinc-800 hover:border-orange-500 hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                  <div className="absolute top-4 right-4 bg-orange-500 text-black p-3 rounded-full shadow-lg">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white group-hover:text-orange-500 transition-colors">
                    {service.title}
                  </CardTitle>

                  <CardDescription className="text-gray-400">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-orange-500 mr-2">✓</span>
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 md:p-12 text-black">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

            <div>
              <h3 className="text-3xl font-bold mb-4">
                Need a Custom Solution?
              </h3>

              <p className="text-black/80 text-lg">
                Every project is unique. Let&apos;s discuss your specific
                requirements and create a tailored solution that exceeds
                your expectations.
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-black text-orange-500 px-8 py-4 rounded-lg font-semibold hover:bg-zinc-900 transition-colors"
              >
                Contact Us Today
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}