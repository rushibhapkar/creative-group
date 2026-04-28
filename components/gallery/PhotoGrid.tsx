'use client';

import { useRef, useEffect, useState } from 'react';
import { GalleryPhoto } from '../../app/data/projectsData';
import { Maximize2, Ruler } from 'lucide-react';

interface PhotoGridProps {
  photos: GalleryPhoto[];
  onPhotoClick: (index: number) => void;
}

export default function PhotoGrid({ photos, onPhotoClick }: PhotoGridProps) {
  const [visible, setVisible] = useState<Set<number>>(new Set());
  const refs = useRef<(HTMLDivElement | null)[]>([]);

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = Number((entry.target as HTMLElement).dataset.idx);
          
          // FIX: Use Array.from to make it safely iterable for TS
          setVisible((prev) => new Set(Array.from(prev).concat(idx)));
          
          // ALTERNATIVE (Cleaner):
          // setVisible((prev) => {
          //   const next = new Set(prev);
          //   next.add(idx);
          //   return next;
          // });
        }
      });
    },
    { threshold: 0.1 }
  );
  refs.current.forEach((el) => el && observer.observe(el));
  return () => observer.disconnect();
}, [photos]);

  // Assign span classes for visual rhythm — tall images span 2 rows
  const getRowSpan = (photo: GalleryPhoto) => {
    const ratio = photo.height / photo.width;
    if (ratio >= 1.3) return 'row-span-2';
    return 'row-span-1';
  };

  return (
    <div
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[220px] gap-2 md:gap-3"
      style={{ gridAutoRows: '220px' }}
    >
      {photos.map((photo, i) => (
        <div
          key={photo.id}
          ref={(el) => { refs.current[i] = el; }}
          data-idx={i}
          onClick={() => onPhotoClick(i)}
          className={`
            group relative overflow-hidden cursor-pointer bg-zinc-900
            ${getRowSpan(photo)}
            transition-all duration-700 ease-out
            ${visible.has(i)
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'}
          `}
          style={{ transitionDelay: `${(i % 8) * 60}ms` }}
        >
          {/* Image */}
          <img
            src={photo.src}
            alt={photo.alt}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Corner accent line */}
          <div className="absolute top-0 left-0 w-0 h-[2px] bg-orange-500 group-hover:w-full transition-all duration-500 ease-out" />
          <div className="absolute top-0 left-0 w-[2px] h-0 bg-orange-500 group-hover:h-full transition-all duration-500 ease-out delay-100" />

          {/* Info overlay */}
{/* Info overlay */}
<div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
  <p className="text-white text-sm font-medium leading-tight truncate" style={{ fontFamily: "'DM Sans', sans-serif" }}>
    {photo.alt}
  </p>
  
  {/* Add the "photo.sqFeet &&" check here */}
  {photo.sqFeet && photo.sqFeet > 0 && (
    <div className="flex items-center gap-1.5 mt-1.5">
      <Ruler className="w-3 h-3 text-orange-400" />
      <span className="text-orange-400 text-xs font-bold tracking-wider">
        {photo.sqFeet.toLocaleString()} sq ft
      </span>
    </div>
  )}
</div>

          {/* Expand icon */}
          <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
            <Maximize2 className="w-3.5 h-3.5 text-white" />
          </div>
        </div>
      ))}
    </div>
  );
}