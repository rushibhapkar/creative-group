'use client';

import { useRef, useState, useEffect } from 'react';
import { ArrowRight, Ruler } from 'lucide-react';
import { GalleryPhoto } from '../../app/data/projectsData';

interface CategoryRowProps {
  label: string;
  photos: GalleryPhoto[];
  accentColor: 'orange' | 'white';
  onPhotoClick: (index: number) => void;
}

export default function CategoryRow({ label, photos, accentColor, onPhotoClick }: CategoryRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft]   = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [headerVisible, setHeaderVisible]   = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  const accent = accentColor === 'orange' ? 'text-orange-500' : 'text-white';
  const badgeBg = accentColor === 'orange' ? 'bg-orange-500 text-black' : 'bg-white text-black';
  const dotColor = accentColor === 'orange' ? 'bg-orange-500' : 'bg-white';

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
  };

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'right' ? 340 : -340, behavior: 'smooth' });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener('scroll', updateScrollState);
    return () => el.removeEventListener('scroll', updateScrollState);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setHeaderVisible(true); }, { threshold: 0.2 });
    if (headerRef.current) obs.observe(headerRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="mb-16">
      {/* Header */}
      <div
        ref={headerRef}
        className={`flex items-center justify-between mb-6 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}
      >
        <div className="flex items-center gap-4">
          <div className={`w-1.5 h-10 rounded-full ${dotColor}`} />
          <div>
            <h3 className={`text-2xl font-black tracking-tight ${accent}`} style={{ fontFamily: "'Syne', sans-serif" }}>
              {label}
            </h3>
            <p className="text-xs text-zinc-500 mt-0.5 tracking-widest uppercase">
              {photos.length} projects
            </p>
          </div>
          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ml-2 ${badgeBg}`}>
            {photos.length}
          </span>
        </div>

        {/* Scroll arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className="w-9 h-9 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:border-orange-500 hover:text-orange-500 disabled:opacity-25 transition-all duration-200"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className="w-9 h-9 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:border-orange-500 hover:text-orange-500 disabled:opacity-25 transition-all duration-200"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {photos.map((photo, i) => {
          const isPortrait = photo.height > photo.width;
          return (
            <div
              key={photo.id}
              onClick={() => onPhotoClick(i)}
              className="group relative flex-none overflow-hidden cursor-pointer bg-zinc-900"
              style={{
                width:  isPortrait ? '200px' : '300px',
                height: '220px',
              }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              {/* Top accent line */}
              <div className={`absolute top-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 ${accentColor === 'orange' ? 'bg-orange-500' : 'bg-white'}`} />

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                <p className="text-white text-xs font-semibold truncate">{photo.alt}</p>
{photo.sqFeet && photo.sqFeet > 0 && (                  <div className="flex items-center gap-1 mt-1">
                    <Ruler className="w-2.5 h-2.5 text-orange-400" />
                    <span className="text-orange-400 text-xs font-bold">{photo.sqFeet.toLocaleString()} sq ft</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Scroll progress indicator */}
      <div className="mt-3 h-px bg-zinc-800 relative overflow-hidden rounded-full">
        <div className={`absolute left-0 top-0 h-full w-1/3 rounded-full ${accentColor === 'orange' ? 'bg-orange-500' : 'bg-white'} opacity-60`} />
      </div>
    </div>
  );
}