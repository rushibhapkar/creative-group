'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { Aperture } from 'lucide-react';
import {
  galleryPhotos,
  complexPhotos,
  bungalowPhotos,
  GalleryPhoto,
} from '../../app/data/projectsData';
import CategoryRow from './CategoryRow';
import PhotoGrid from './PhotoGrid';
import Lightbox from './Lightbox';

type FilterValue = 'all' | 'complexes' | 'bungalows';

const FILTERS: { value: FilterValue; label: string; count?: number }[] = [
  { value: 'all', label: 'All Projects' },
  { value: 'complexes', label: 'Complexes', count: complexPhotos.length },
  { value: 'bungalows', label: 'Bungalows', count: bungalowPhotos.length },
];

export default function GallerySection() {
  const [filter, setFilter] = useState<FilterValue>('all');
  const [lightboxPhotos, setLightboxPhotos] = useState<GalleryPhoto[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [headingVisible, setHeadingVisible] = useState(false);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setHeadingVisible(true); }, { threshold: 0.2 });
    if (headingRef.current) obs.observe(headingRef.current);
    return () => obs.disconnect();
  }, []);

  const openLightbox = useCallback((photos: GalleryPhoto[], index: number) => {
    setLightboxPhotos(photos);
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  const handleComplexClick = (i: number) => openLightbox(complexPhotos, i);
  const handleBungalowClick = (i: number) => openLightbox(bungalowPhotos, i);

  return (
    <>
      {/* Google Fonts */}
      {/* <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap');
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style> */}

      <section
        id="projects"
        className="relative py-24 overflow-hidden"
        style={{
          background: '#080808',
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {/* Background grid lines */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
          }}
        />

        {/* Radial glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(249,115,22,0.06) 0%, transparent 70%)',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Heading ──────────────────────────────────────────── */}
          <div
            ref={headingRef}
            className={`mb-16 transition-all duration-1000 ease-out ${headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Aperture className="w-4 h-4 text-orange-500" />
                  <span className="text-orange-500 text-xs tracking-[0.3em] uppercase font-bold">
                    Portfolio
                  </span>
                </div>
                <h2
                  className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tight"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Project
                  <br />
                  <span className="text-transparent" style={{
                    WebkitTextStroke: '1px rgba(255,255,255,0.2)',
                  }}>
                    Gallery
                  </span>
                </h2>
              </div>
              <p className="text-zinc-400 max-w-xs text-sm leading-relaxed md:text-right">
                Explore our completed work across residential complexes and premium bungalow projects. Click any image to view full screen.
              </p>
            </div>

            {/* Divider */}
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-orange-500/50 to-transparent" />
              <span className="text-zinc-600 text-xs tracking-widest uppercase">
                {galleryPhotos.length} projects
              </span>
              <div className="h-px flex-1 bg-zinc-800" />
            </div>
          </div>

          {/* ── Filter tabs ──────────────────────────────────────── */}
          <div className="flex gap-1 mb-14 p-1 rounded-xl bg-white/[0.03] border border-white/[0.06] w-full overflow-x-auto scrollbar-hide">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`
                  relative px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 whitespace-nowrap flex-shrink-0
                  ${filter === f.value
                    ? 'bg-orange-500 text-black shadow-lg shadow-orange-500/20'
                    : 'text-zinc-400 hover:text-white'
                  }
                  `}
                style={{ fontFamily: "var(--font-syne), sans-serif" }}
              >
                {f.label}
                {f.count !== undefined && (
                  <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${filter === f.value ? 'bg-black/20 text-black/70' : 'bg-white/10 text-zinc-500'
                    }`}>
                    {f.count}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* ── Content ──────────────────────────────────────────── */}
          <div className="min-h-[400px]">
            {filter === 'all' && (
              <>
                <CategoryRow
                  label="Complexes"
                  photos={complexPhotos}
                  accentColor="orange"
                  onPhotoClick={handleComplexClick}
                />
                <CategoryRow
                  label="Bungalows"
                  photos={bungalowPhotos}
                  accentColor="white"
                  onPhotoClick={handleBungalowClick}
                />
              </>
            )}

            {filter === 'complexes' && (
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-1 h-8 bg-orange-500 rounded-full" />
                  <h3 className="text-2xl font-black text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                    Complexes
                  </h3>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-orange-500 text-black">
                    {complexPhotos.length}
                  </span>
                </div>
                <PhotoGrid photos={complexPhotos} onPhotoClick={handleComplexClick} />
              </div>
            )}

            {filter === 'bungalows' && (
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-1 h-8 bg-white rounded-full" />
                  <h3 className="text-2xl font-black text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                    Bungalows
                  </h3>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-white text-black">
                    {bungalowPhotos.length}
                  </span>
                </div>
                <PhotoGrid photos={bungalowPhotos} onPhotoClick={handleBungalowClick} />
              </div>
            )}
          </div>

          {/* ── CTA ──────────────────────────────────────────────── */}
          <div className="mt-20 relative overflow-hidden rounded-2xl border border-white/[0.06] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6"
            style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.08) 0%, rgba(0,0,0,0) 60%)' }}
          >
            <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-orange-500/50 to-transparent" />
            <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-orange-500/50 to-transparent" />

            <div>
              <p className="text-white/40 text-xs tracking-widest uppercase mb-2">Ready to build?</p>
              <h4 className="text-2xl md:text-3xl font-black text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                Request Full Portfolio
              </h4>
            </div>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-3 bg-orange-500 hover:bg-orange-400 text-black font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/30 hover:-translate-y-0.5 text-sm tracking-wide whitespace-nowrap"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Get In Touch
              <span className="w-5 h-5 rounded-full bg-black/20 flex items-center justify-center transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <Lightbox
            photos={lightboxPhotos}
            initialIndex={lightboxIndex}
            onClose={closeLightbox}
          />
        )}
      </section>
    </>
  );
}