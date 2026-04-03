'use client';

import { useState, useRef, useEffect } from 'react';
import { X, MapPin, Video, Play, Building2, Maximize2, Volume2, VolumeX } from 'lucide-react';
import { droneViews, DroneView } from '@/app/data/droneData';

// ─────────────────────────────────────────────────────────────────────────────
// Lightbox
// ─────────────────────────────────────────────────────────────────────────────
function VideoModal({ view, onClose }: { view: DroneView; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { requestAnimationFrame(() => requestAnimationFrame(() => setMounted(true))); }, []);

  const handleClose = () => { setMounted(false); setTimeout(onClose, 300); };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose(); };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', handler); document.body.style.overflow = ''; };
  }, []);

  // FIX: treat cloudinary office tour (featured) as portrait too,
  // since the actual video is a vertical reel.
  const isPortrait = view.type === 'youtube-short' || view.type === 'cloudinary';

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${mounted ? 'opacity-100' : 'opacity-0'}`}
      style={{ background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(16px)' }}
      onClick={handleClose}
    >
      {/* Noise */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/*
        FIX: replaced p-4 with pt-16 pb-6 px-4 so there's always room
        above the card for the close button + header without going off-screen.
        overflow-y-auto lets the whole modal scroll if the viewport is short.
      */}
      <div
        className="relative w-full flex flex-col items-center overflow-y-auto max-h-screen pt-16 pb-6 px-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Close button ─────────────────────────────────────────────────
            FIX: positioned inside the scrollable container instead of
            -top-12 (which was cut off). Now sits at top-4 right-4 of the
            viewport, always visible.
        ──────────────────────────────────────────────────────────────── */}
        <button
          onClick={handleClose}
          className="fixed top-4 right-4 z-50 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-orange-500 transition-all duration-200 bg-black/60 backdrop-blur-sm"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Inner card — constrained width based on orientation */}
        <div
          className={`
            relative transition-all duration-300 w-full
            ${mounted ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}
            ${isPortrait ? 'max-w-xs sm:max-w-sm' : 'max-w-4xl'}
          `}
        >
          {/* Header */}
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="text-orange-500 text-xs font-bold tracking-widest uppercase"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {view.badge}
                </span>
                <span className="w-1 h-1 rounded-full bg-zinc-600" />
                <span className="text-zinc-500 text-xs">{view.location}</span>
              </div>
              <h3
                className="text-white font-black text-xl leading-tight"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {view.title}
              </h3>
            </div>
          </div>

          {/* Video container
              FIX: portrait uses 177.78% padding (9:16), landscape uses 56.25% (16:9) */}
          <div
            className="relative w-full overflow-hidden rounded-xl"
            style={{
              paddingBottom: isPortrait ? '177.78%' : '56.25%',
              boxShadow: '0 40px 100px rgba(0,0,0,0.9)',
            }}
          >
            {/* Corner brackets */}
            <div className="absolute top-0 left-0 w-8 h-[2px] bg-orange-500 z-10 pointer-events-none" />
            <div className="absolute top-0 left-0 w-[2px] h-8 bg-orange-500 z-10 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-8 h-[2px] bg-orange-500/40 z-10 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[2px] h-8 bg-orange-500/40 z-10 pointer-events-none" />

            {view.type === 'cloudinary' ? (
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src={view.videoUrl}
                controls
                autoPlay
                playsInline
              />
            ) : (
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${view.videoId}?autoplay=1&rel=0&modestbranding=1&playlist=${view.videoId}&loop=1`}
                title={view.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>

          <p className="text-zinc-400 text-sm mt-4 text-center max-w-lg mx-auto leading-relaxed">
            {view.description}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Featured office tour card
// ─────────────────────────────────────────────────────────────────────────────
function FeaturedCard({ view, onClick }: { view: DroneView; onClick: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted((m) => !m);
    }
  };

  return (
    <div
      ref={ref}
      className={`relative w-full max-w-md mx-auto transition-all duration-1000 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {/* Label above */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-1 h-8 rounded-full bg-orange-500" />
        <div>
          <p className="text-orange-500 text-xs font-black tracking-[0.25em] uppercase" style={{ fontFamily: "'Syne', sans-serif" }}>
            Featured
          </p>
          <p className="text-zinc-500 text-xs tracking-wider mt-0.5">Office Walkthrough</p>
        </div>
      </div>

      {/* Card */}
      <div
        className="group relative w-full overflow-hidden rounded-2xl cursor-pointer"
        style={{ aspectRatio: '9/16', boxShadow: '0 32px 80px rgba(0,0,0,0.7)' }}
        onMouseEnter={() => { setHovered(true); videoRef.current?.play(); }}
        onMouseLeave={() => { setHovered(false); videoRef.current?.pause(); }}
        onClick={onClick}
      >
        {/* Video preview (muted loop) */}
        <video
          ref={videoRef}
          src={view.videoUrl}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${hovered ? 'scale-105' : 'scale-100'}`}
          muted
          loop
          playsInline
          preload="metadata"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

        {/* Animated scan line */}
        <div className={`absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent transition-all duration-1000 ${hovered ? 'top-1/3 opacity-100' : 'top-0 opacity-0'}`} />

        {/* Top bar */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-5">
          <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-white text-xs font-bold tracking-wider" style={{ fontFamily: "'Syne', sans-serif" }}>
              OFFICE TOUR
            </span>
          </div>

          <button
            onClick={toggleMute}
            className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-orange-500 transition-all duration-200"
          >
            {muted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Center play */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-400 ${hovered ? 'opacity-100 scale-100' : 'opacity-80 scale-90'}`}>
          <div className="relative">
            {hovered && (
              <>
                <div className="absolute inset-0 rounded-full bg-orange-500/20 animate-ping scale-150" />
                <div className="absolute inset-0 rounded-full bg-orange-500/10 animate-ping scale-200 animation-delay-150" />
              </>
            )}
            <div className="relative w-20 h-20 rounded-full bg-orange-500/90 backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-orange-500/40">
              <Play className="w-8 h-8 text-white fill-white ml-1" />
            </div>
          </div>
        </div>

        {/* Bottom info */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-white text-2xl md:text-3xl font-black leading-tight mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
            {view.title}
          </h3>
          <p className="text-zinc-300 text-sm leading-relaxed max-w-lg mb-4">
            {view.description}
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-zinc-400 text-xs">
              <MapPin className="w-3 h-3 text-orange-500" />
              {view.location}
            </div>
            <div className="flex items-center gap-1.5 text-zinc-400 text-xs">
              <Building2 className="w-3 h-3 text-orange-500" />
              Full Walkthrough
            </div>
          </div>
        </div>

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-10 h-[2px] bg-orange-500" />
        <div className="absolute top-0 left-0 w-[2px] h-10 bg-orange-500" />
        <div className="absolute bottom-0 right-0 w-10 h-[2px] bg-orange-500/40" />
        <div className="absolute bottom-0 right-0 w-[2px] h-10 bg-orange-500/40" />

        {/* Expand icon */}
        <div className={`absolute top-16 right-5 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
          <Maximize2 className="w-3.5 h-3.5 text-white" />
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Drone short card
// ─────────────────────────────────────────────────────────────────────────────
function DroneCard({ view, index, onClick }: { view: DroneView; index: number; onClick: () => void }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div
        className="group relative overflow-hidden rounded-xl cursor-pointer bg-zinc-900"
        style={{ aspectRatio: '9/16' }}
        onClick={onClick}
      >
        {/* Thumbnail */}
        <img
          src={`https://img.youtube.com/vi/${view.videoId}/0.jpg`}
          alt={view.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10" />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

        {/* Top accent line */}
        <div className="absolute top-0 left-0 h-[2px] w-0 bg-orange-500 group-hover:w-full transition-all duration-500" />

        {/* Badge */}
        <div
          className="absolute top-3 left-3 bg-orange-500 text-black text-[10px] font-black px-2 py-0.5 rounded-full tracking-wider"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          DRONE
        </div>

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-orange-500/30">
            <Play className="w-4 h-4 text-white fill-white ml-0.5" />
          </div>
        </div>

        {/* Info */}
        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
          <h4 className="text-white text-sm font-black leading-tight mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>
            {view.title}
          </h4>
          <div className="flex items-center gap-1 text-zinc-400 text-[11px]">
            <MapPin className="w-2.5 h-2.5 text-orange-500 shrink-0" />
            <span className="truncate">{view.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main section
// ─────────────────────────────────────────────────────────────────────────────
export default function DroneShowcase() {
  const [activeView, setActiveView] = useState<DroneView | null>(null);

  const featuredView = droneViews.find((v) => v.featured)!;
  const droneGrid    = droneViews.filter((v) => !v.featured);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap');
      `}</style>

      <section
        id="drone"
        className="relative py-24 overflow-hidden"
        style={{ background: '#080808', fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* Grid lines bg */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
        {/* Glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, rgba(249,115,22,0.06) 0%, transparent 70%)' }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Heading ──────────────────────────────────── */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Video className="w-4 h-4 text-orange-500" />
                  <span className="text-orange-500 text-xs tracking-[0.3em] uppercase font-bold">
                    Video Showcase
                  </span>
                </div>
                <h2
                  className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tight"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  See Our
                  <br />
                  <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
                    Work Live
                  </span>
                </h2>
              </div>
              <p className="text-zinc-400 max-w-xs text-sm leading-relaxed md:text-right">
                From our office to the sky — explore behind-the-scenes footage and stunning aerial views of every project.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-orange-500/50 to-transparent" />
              <span className="text-zinc-600 text-xs tracking-widest uppercase">
                {droneViews.length} videos
              </span>
              <div className="h-px flex-1 bg-zinc-800" />
            </div>
          </div>

          {/* ── Featured video ───────────────────────────── */}
          <FeaturedCard view={featuredView} onClick={() => setActiveView(featuredView)} />

          {/* ── Drone shorts section ─────────────────────── */}
          <div className="mt-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-1 h-8 bg-orange-500 rounded-full" />
              <div>
                <h3 className="text-2xl font-black text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Drone Footage
                </h3>
                <p className="text-zinc-500 text-xs mt-0.5 tracking-wider">Aerial project documentation</p>
              </div>
              <span className="ml-2 text-xs font-bold px-2.5 py-1 rounded-full bg-orange-500 text-black">
                {droneGrid.length}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {droneGrid.map((view, i) => (
                <DroneCard
                  key={view.id}
                  view={view}
                  index={i}
                  onClick={() => setActiveView(view)}
                />
              ))}
            </div>
          </div>

          {/* ── CTA ──────────────────────────────────────── */}
          <div
            className="mt-20 relative overflow-hidden rounded-2xl border border-white/[0.06] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6"
            style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.08) 0%, rgba(0,0,0,0) 60%)' }}
          >
            <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-orange-500/50 to-transparent" />
            <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-orange-500/50 to-transparent" />
            <div>
              <p className="text-white/40 text-xs tracking-widest uppercase mb-2">Ready to document?</p>
              <h4 className="text-2xl md:text-3xl font-black text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                Want Aerial Coverage<br />for Your Project?
              </h4>
            </div>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-3 bg-orange-500 hover:bg-orange-400 text-black font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/30 hover:-translate-y-0.5 text-sm tracking-wide whitespace-nowrap"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Discuss Your Project
              <span className="w-5 h-5 rounded-full bg-black/20 flex items-center justify-center transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>

        {/* Lightbox */}
        {activeView && (
          <VideoModal view={activeView} onClose={() => setActiveView(null)} />
        )}
      </section>
    </>
  );
}