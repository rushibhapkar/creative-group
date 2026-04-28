'use client';

import { useEffect, useCallback, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Ruler, ZoomIn, ZoomOut } from 'lucide-react';
import { GalleryPhoto } from '../../app/data/projectsData';

interface LightboxProps {
  photos: GalleryPhoto[];
  initialIndex: number;
  onClose: () => void;
}

export default function Lightbox({ photos, initialIndex, onClose }: LightboxProps) {
  const [index, setIndex]       = useState(initialIndex);
  const [zoomed, setZoomed]     = useState(false);
  const [animDir, setAnimDir]   = useState<'left' | 'right' | null>(null);
  const [imgVisible, setImgVisible] = useState(false);
  const [mounted, setMounted]   = useState(false);

  const current = photos[index];

  // Mount animation
  useEffect(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setMounted(true);
        setTimeout(() => setImgVisible(true), 120);
      });
    });
  }, []);

  const navigate = useCallback(
    (dir: 'prev' | 'next') => {
      setZoomed(false);
      setImgVisible(false);
      setAnimDir(dir === 'next' ? 'right' : 'left');
      setTimeout(() => {
        setIndex((prev) =>
          dir === 'next'
            ? (prev + 1) % photos.length
            : (prev - 1 + photos.length) % photos.length
        );
        setAnimDir(null);
        setTimeout(() => setImgVisible(true), 60);
      }, 200);
    },
    [photos.length]
  );

  const handleClose = useCallback(() => {
    setMounted(false);
    setTimeout(onClose, 300);
  }, [onClose]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape')     handleClose();
      if (e.key === 'ArrowRight') navigate('next');
      if (e.key === 'ArrowLeft')  navigate('prev');
    };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [navigate, handleClose]);

  const slideClass = animDir === 'right'
    ? '-translate-x-8 opacity-0'
    : animDir === 'left'
    ? 'translate-x-8 opacity-0'
    : imgVisible
    ? 'translate-x-0 opacity-100'
    : 'translate-y-4 opacity-0';

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col transition-all duration-300 ${mounted ? 'opacity-100' : 'opacity-0'}`}
      style={{ background: 'rgba(0,0,0,0.97)', backdropFilter: 'blur(12px)' }}
    >
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Top bar */}
      <div className="relative z-10 flex items-center justify-between px-6 py-4 border-b border-white/5">
        {/* Brand / category */}
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          <span className="text-white/40 text-xs tracking-[0.2em] uppercase font-medium" style={{ fontFamily: "'Syne', sans-serif" }}>
            {current.category}
          </span>
        </div>

        {/* Counter */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1">
          {photos.map((_, i) => (
            <button
              key={i}
              onClick={() => { setImgVisible(false); setTimeout(() => { setIndex(i); setTimeout(() => setImgVisible(true), 60); }, 200); }}
              className={`rounded-full transition-all duration-300 ${
                i === index
                  ? 'w-6 h-1.5 bg-orange-500'
                  : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setZoomed((z) => !z)}
            className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all duration-200"
          >
            {zoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
          </button>
          <button
            onClick={handleClose}
            className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-orange-500 hover:text-orange-400 transition-all duration-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main image area */}
      <div className="relative flex-1 flex items-center justify-center overflow-hidden">
        {/* Prev button */}
        <button
          onClick={() => navigate('prev')}
          className="absolute left-4 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/40 border border-white/10 backdrop-blur-sm flex items-center justify-center text-white/60 hover:text-white hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-200 group"
        >
          <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
        </button>

        {/* Image */}
        <div
          className={`relative max-w-5xl max-h-full mx-16 transition-all duration-300 ease-out ${slideClass}`}
          onClick={() => setZoomed((z) => !z)}
        >
          <img
            key={current.id}
            src={current.src}
            alt={current.alt}
            className={`max-h-[72vh] w-auto max-w-full object-contain transition-transform duration-500 ${
              zoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
            }`}
            style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.8)' }}
          />

          {/* Frame accent */}
          <div className="absolute -inset-px border border-white/5 pointer-events-none" />
          <div className="absolute top-0 left-0 w-8 h-[2px] bg-orange-500 pointer-events-none" />
          <div className="absolute top-0 left-0 w-[2px] h-8 bg-orange-500 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-8 h-[2px] bg-orange-500/40 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[2px] h-8 bg-orange-500/40 pointer-events-none" />
        </div>

        {/* Next button */}
        <button
          onClick={() => navigate('next')}
          className="absolute right-4 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/40 border border-white/10 backdrop-blur-sm flex items-center justify-center text-white/60 hover:text-white hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-200 group"
        >
          <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>

      {/* Bottom info strip */}
      <div className="relative z-10 px-6 py-4 border-t border-white/5 flex items-center justify-between">
        <div>
          <p className="text-white font-semibold text-sm" style={{ fontFamily: "'Syne', sans-serif" }}>
            {current.alt}
          </p>
{/* Change the condition to check if current.sqFeet exists first */}
{current.sqFeet !== undefined && current.sqFeet > 0 ? (
  <div className="flex items-center gap-1.5 mt-1">
    <Ruler className="w-3 h-3 text-orange-500" />
    <span className="text-orange-400 text-xs font-bold tracking-wider">
      {current.sqFeet.toLocaleString()} sq ft
    </span>
  </div>
) : (
  <p className="text-white/30 text-xs mt-1 tracking-widest uppercase">Area not specified</p>
)}
        </div>

        <div className="text-right">
          <span className="text-white/20 text-xs tracking-widest">
            {String(index + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Click outside to close */}
      <div className="absolute inset-0 -z-10" onClick={handleClose} />
    </div>
  );
}