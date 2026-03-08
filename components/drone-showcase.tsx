'use client';

import { useState } from 'react';
import { Play, X, Eye, MapPin } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

export default function DroneShowcase() {
  const [selectedMedia, setSelectedMedia] = useState<number | null>(null);

  const droneViews = [
    {
      id: 1,
      title: 'Luxury Villa Complex - Aerial View',
      location: 'Beverly Hills, CA',
      type: 'image',
      thumbnail: 'https://images.pexels.com/photos/2131967/pexels-photo-2131967.jpeg?auto=compress&cs=tinysrgb&w=800',
      fullImage: 'https://images.pexels.com/photos/2131967/pexels-photo-2131967.jpeg?auto=compress&cs=tinysrgb&w=1920',
      description: 'Stunning aerial view showcasing the complete villa layout with landscaping',
    },
    {
      id: 2,
      title: 'Corporate Office Tower',
      location: 'Downtown LA',
      type: 'image',
      thumbnail: 'https://images.pexels.com/photos/681368/pexels-photo-681368.jpeg?auto=compress&cs=tinysrgb&w=800',
      fullImage: 'https://images.pexels.com/photos/681368/pexels-photo-681368.jpeg?auto=compress&cs=tinysrgb&w=1920',
      description: 'Bird\'s eye view of the modern office complex with surrounding infrastructure',
    },
    {
      id: 3,
      title: 'Residential Community',
      location: 'San Diego, CA',
      type: 'image',
      thumbnail: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=800',
      fullImage: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1920',
      description: 'Complete neighborhood development with parks and amenities',
    },
    {
      id: 4,
      title: 'Waterfront Development',
      location: 'Miami Beach, FL',
      type: 'image',
      thumbnail: 'https://images.pexels.com/photos/2412609/pexels-photo-2412609.jpeg?auto=compress&cs=tinysrgb&w=800',
      fullImage: 'https://images.pexels.com/photos/2412609/pexels-photo-2412609.jpeg?auto=compress&cs=tinysrgb&w=1920',
      description: 'Luxury beachfront property development from above',
    },
    {
      id: 5,
      title: 'Shopping Mall Complex',
      location: 'Las Vegas, NV',
      type: 'image',
      thumbnail: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=800',
      fullImage: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1920',
      description: 'Expansive retail complex with parking and access roads',
    },
    {
      id: 6,
      title: 'Tech Campus',
      location: 'Silicon Valley, CA',
      type: 'image',
      thumbnail: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800',
      fullImage: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1920',
      description: 'Modern tech campus with sustainable green spaces',
    },
  ];
return (
  <section
    id="drone"
    className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden"
  >
    <div className="absolute inset-0 opacity-10">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      ></div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-16">
        <div className="inline-flex items-center bg-yellow-500/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-4 py-2 mb-4">
          <Eye className="h-4 w-4 mr-2 text-yellow-400" />
          <span className="text-yellow-300 font-semibold text-sm uppercase tracking-wide">
            Exclusive Feature
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Drone View Project Showcase
        </h2>

        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Experience our projects from a unique perspective. Explore stunning
          aerial views that showcase the complete scope and magnificence of our
          construction work.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {droneViews.map((view) => (
          <div
            key={view.id}
            className="group relative rounded-xl overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300"
            onClick={() => setSelectedMedia(view.id)}
          >
            <div className="aspect-video relative overflow-hidden">
              <img
                src={view.thumbnail}
                alt={view.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full border-2 border-white/50">
                  {view.type === "video" ? (
                    <Play className="h-8 w-8 text-white" />
                  ) : (
                    <Eye className="h-8 w-8 text-white" />
                  )}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-bold text-white mb-1">
                  {view.title}
                </h3>

                <div className="flex items-center text-sm text-gray-200">
                  <MapPin className="h-3 w-3 mr-1" />
                  {view.location}
                </div>
              </div>

              <div className="absolute top-4 right-4 bg-yellow-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-black">
                {view.type === "video" ? "Video" : "360° View"}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">
            Want to See Your Project from Above?
          </h3>

          <p className="text-gray-300 mb-6">
            We provide complimentary drone photography and videography for all
            our major projects, giving you a unique perspective of your
            investment.
          </p>

          <button
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
          >
            Discuss Your Project
          </button>
        </div>
      </div>
    </div>
  </section>
);
}