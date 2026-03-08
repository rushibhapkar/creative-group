'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: 'Thank you for contacting us. We will get back to you within 24 hours.',
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['+91 9770747074'],
    link: 'tel:+919770747074',
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['creativegoup5855@gmail.com'],
    link: 'mailto:creativegoup5855@gmail.com',
  },
  {
    icon: MapPin,
    title: 'Address',
    details: [
      'Flat No.102 Ajinkya Icon',
      'Tandulwadi Road, Satav Chowk, Baramati',
    ],
    link: 'https://maps.google.com/?q=Satav Chowk Baramati',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: [
      'Mon - Sat: 9:00 AM - 7:00 PM',
      'Sunday: Closed',
    ],
    link: null,
  },
];
return (
  <section id="contact" className="py-20 bg-black">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Heading */}
      <div className="text-center mb-16">
        <span className="text-orange-500 font-semibold text-sm uppercase tracking-wide">
          Contact Us
        </span>

        <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
          Let's Build Something Together
        </h2>

        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Ready to start your construction project? Get in touch with us today
          for a free consultation and quote.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {contactInfo.map((info, index) => (
          <div
            key={index}
            className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl hover:border-orange-500 hover:shadow-xl transition-all"
          >
            <div className="bg-orange-500 text-black p-3 rounded-full w-fit mb-4">
              <info.icon className="h-6 w-6" />
            </div>

            <h3 className="text-lg font-bold text-white mb-2">
              {info.title}
            </h3>

            {info.details.map((detail, idx) => (
              <p key={idx} className="text-gray-400">
                {detail}
              </p>
            ))}

            {info.link && (
              <a
                href={info.link}
                className="inline-block mt-2 text-orange-500 hover:text-orange-400 font-semibold text-sm"
              >
                {info.title === 'Phone'
                  ? 'Call Now'
                  : info.title === 'Email'
                  ? 'Send Email'
                  : 'Get Directions'} →
              </a>
            )}
          </div>
        ))}

        {/* WhatsApp Card */}
        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl hover:border-green-500 transition-all">
          <div className="bg-green-500 text-white p-3 rounded-full w-fit mb-4">
            <MessageCircle className="h-6 w-6" />
          </div>

          <h3 className="text-lg font-bold text-white mb-2">WhatsApp</h3>

          <p className="text-gray-400 mb-4">
            Chat with us instantly for quick responses and project updates.
          </p>

          <a
href="https://wa.me/919770747074"            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Form + Map */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Contact Form */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">
            Send Us a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Full Name *
                </label>
                <Input
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="bg-zinc-900 border-zinc-700 text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Email Address *
                </label>
                <Input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="bg-zinc-900 border-zinc-700 text-white"
                />
              </div>
              <div>
  <label className="block text-sm font-semibold text-gray-300 mb-2">
    Phone Number
  </label>
  <Input
    name="phone"
    value={formData.phone}
    onChange={handleChange}
    placeholder="Enter your phone number"
    className="bg-zinc-900 border-zinc-700 text-white"
  />
</div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Message *
              </label>

              <Textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={6}
                placeholder="Tell us about your project..."
                className="bg-zinc-900 border-zinc-700 text-white"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-orange-500 hover:bg-orange-600 text-black"
            >
              <Send className="h-5 w-5 mr-2" />
              Send Message
            </Button>

          </form>
        </div>

        {/* Map + Trust */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">
            Find Us Here
          </h3>

          <div className="rounded-xl overflow-hidden shadow-lg h-[500px] border border-zinc-800">
            <iframe
src="https://www.google.com/maps?q=Baramati Maharashtra&output=embed"              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>

          {/* Response Box */}
          <div className="mt-6 bg-zinc-900 border border-orange-500 rounded-xl p-6">
            <h4 className="font-bold text-white mb-4">
              Quick Response Guarantee
            </h4>

            <p className="text-gray-400 text-sm">
              We respond quickly to all construction inquiries. Our team
              will contact you within a few hours during working days.
            </p>
          </div>

        </div>

      </div>

    </div>
  </section>
);
}
