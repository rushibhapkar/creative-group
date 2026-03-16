'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const WHATSAPP_NUMBER = '919770747074';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Constructing a professional-looking WhatsApp message
    const messageLines = [
      `*New Enquiry - Creative Group*`,
      `----------------------------`,
      `*Name:* ${formData.name}`,
      `*Email:* ${formData.email}`,
      formData.phone ? `*Phone:* ${formData.phone}` : '',
      formData.subject ? `*Subject:* ${formData.subject}` : '',
      `*Message:*`,
      formData.message,
    ].filter(Boolean); // Removes empty strings

    const encodedMessage = encodeURIComponent(messageLines.join('\n'));
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Opening in a new tab
    if (typeof window !== 'undefined') {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }

    // Reset form fields
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 9770747074'],
      link: 'tel:+919770747074',
      actionText: 'Call Now',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['creativegoup5855@gmail.com'],
      link: 'mailto:creativegoup5855@gmail.com',
      actionText: 'Send Email',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: [
        'Flat No.102 Ajinkya Icon',
        'Tandulwadi Road, Satav Chowk, Baramati',
      ],
      link: 'https://maps.google.com/?q=Satav+Chowk+Baramati',
      actionText: 'Get Directions',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sunday: Closed'],
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl hover:border-orange-500 hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="bg-orange-500 text-black p-3 rounded-full w-fit mb-4">
                  <info.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-400 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
              
              {info.link && (
                <a
                  href={info.link}
                  target={info.title === 'Address' ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-orange-500 hover:text-orange-400 font-semibold text-sm"
                >
                  {info.actionText} →
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Form + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800">
            <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Full Name *</label>
                  <Input
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="bg-zinc-950 border-zinc-700 text-white focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Email Address *</label>
                  <Input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="bg-zinc-950 border-zinc-700 text-white focus:border-orange-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Phone Number</label>
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="bg-zinc-950 border-zinc-700 text-white focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Message *</label>
                <Textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your project requirements..."
                  className="bg-zinc-950 border-zinc-700 text-white focus:border-orange-500"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold h-12"
              >
                <Send className="h-5 w-5 mr-2" />
                Submit to WhatsApp
              </Button>
            </form>
          </div>

          {/* Map Section */}
          <div className="flex flex-col h-full">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-zinc-800 flex-grow relative min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.5000!2d74.5800!3d18.1500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e13295984d7f%3A0x868d55009a259976!2sBaramati%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%)' }}
                allowFullScreen
                loading="lazy"
                title="Office Location"
              />
            </div>
            <div className="mt-6 bg-orange-500/10 border border-orange-500/50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <MessageCircle className="h-5 w-5 text-orange-500" />
                <h4 className="font-bold text-white">Priority Support</h4>
              </div>
              <p className="text-gray-400 text-sm">
                We typically respond within 2 hours on business days via WhatsApp for all construction and renovation queries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}