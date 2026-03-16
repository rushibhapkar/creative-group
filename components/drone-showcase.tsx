'use client';

import { useState } from 'react';
import { X, MapPin, Video } from 'lucide-react';
import { droneViews } from '@/app/data/droneData';

export default function DroneShowcase() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const selectedView = droneViews.find((v) => v.id === activeId) ?? null;

  return (
    <section
      id="drone"
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden"
    >
      {/* Dot grid background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-orange-500/20 border border-orange-400/30 rounded-full px-4 py-2 mb-4">
            <Video className="h-4 w-4 mr-2 text-orange-400" />
            <span className="text-orange-300 font-semibold text-sm uppercase tracking-wide">
              Drone Footage
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Drone View Project Showcase
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience our projects from a unique perspective. Explore stunning
            aerial views that showcase the complete scope of our construction work.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {droneViews.map((view) => (
            <div
              key={view.id}
              className="group relative rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-orange-500 transition-all duration-300 max-w-xs mx-auto w-full"
              onClick={() => setActiveId(view.id)}
            >
              {/* 16:9 thumbnail */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <img
                  src={`https://img.youtube.com/vi/${view.videoId}/0.jpg`}
                  alt={view.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-orange-500/90 group-hover:bg-orange-500 p-3 rounded-full transition-all duration-300 group-hover:scale-110">
                    <svg
                      className="h-6 w-6 text-white fill-white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Badge */}
                <div className="absolute top-3 right-3 bg-orange-500 px-2 py-1 rounded-full text-xs font-bold text-white">
                  Shorts
                </div>

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-sm font-bold text-white leading-tight mb-1">
                    {view.title}
                  </h3>
                  <div className="flex items-center text-xs text-gray-300">
                    <MapPin className="h-3 w-3 mr-1 shrink-0" />
                    {view.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Want to See Your Project from Above?
            </h3>
            <p className="text-gray-300 mb-6">
              We provide drone photography and videography for all our major
              projects, giving you a unique perspective of your investment.
            </p>
            <button
              onClick={() => {
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Discuss Your Project
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedView && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setActiveId(null)}
        >
          <div
            className="relative w-full max-w-xs mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveId(null)}
              className="absolute -top-10 right-0 text-white hover:text-orange-400 transition-colors z-10"
            >
              <X className="h-7 w-7" />
            </button>

            {/* Title */}
            <div className="mb-3">
              <h3 className="text-white font-bold text-lg">{selectedView.title}</h3>
              <div className="flex items-center text-sm text-gray-400 mt-1">
                <MapPin className="h-3 w-3 mr-1" />
                {selectedView.location}
              </div>
            </div>

            {/* Shorts iframe — portrait 9:16 */}
            <div
              className="relative w-full rounded-xl overflow-hidden"
              style={{ paddingBottom: '177.78%' }}
            >
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${selectedView.videoId}?autoplay=1&rel=0&modestbranding=1`}
                title={selectedView.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <p className="text-gray-400 text-sm mt-3 text-center">
              {selectedView.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}