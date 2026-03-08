'use client';

import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/app/data/testimonialsData';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wide">
            Testimonials
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            What Our Clients Say
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients
            have to say about working with BuildPro.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-white hover:shadow-2xl transition-all duration-300 border-2 hover:border-yellow-400"
            >
              <CardContent className="p-6">

                {/* Quote + Rating */}
                <div className="flex items-center justify-between mb-4">
                  <Quote className="h-10 w-10 text-yellow-500 opacity-20" />

                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>

                {/* Text */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {testimonial.text}
                </p>

                {/* User */}
                <div className="border-t pt-4 mt-4">
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-3">
                      <AvatarImage
                        src={testimonial.image}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </AvatarFallback>
                    </Avatar>

                    <div>
                      <div className="font-bold text-gray-900">
                        {testimonial.name}
                      </div>

                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>

                      <div className="text-xs text-yellow-600 mt-1">
                        {testimonial.project}
                      </div>
                    </div>
                  </div>
                </div>

              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto border-2 border-yellow-200">

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-yellow-600 mb-2">
                  500+
                </div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>

              <div>
                <div className="text-4xl font-bold text-yellow-600 mb-2">
                  98%
                </div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>

              <div>
                <div className="text-4xl font-bold text-yellow-600 mb-2">
                  4.9/5
                </div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>

              <div>
                <div className="text-4xl font-bold text-yellow-600 mb-2">
                  95%
                </div>
                <div className="text-sm text-gray-600">Repeat Clients</div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 pt-8 border-t">
              <p className="text-gray-700 text-lg mb-4">
                Join hundreds of satisfied clients who trusted us with their
                projects
              </p>

              <button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
              >
                Start Your Project Today
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}