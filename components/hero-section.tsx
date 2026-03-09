'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown, Building2, HardHat, Star } from 'lucide-react';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Subtle particle canvas — floating dust/construction particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; r: number; speed: number; opacity: number; drift: number }[] = [];
    for (let i = 0; i < 55; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        speed: Math.random() * 0.4 + 0.1,
        opacity: Math.random() * 0.35 + 0.05,
        drift: (Math.random() - 0.5) * 0.3,
      });
    }

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(249, 115, 22, ${p.opacity})`;
        ctx.fill();
        p.y -= p.speed;
        p.x += p.drift;
        if (p.y < -5) { p.y = canvas.height + 5; p.x = Math.random() * canvas.width; }
        if (p.x < -5 || p.x > canvas.width + 5) p.x = Math.random() * canvas.width;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const stats = [
    { value: '150+', label: 'Projects Completed', icon: Building2 },
    { value: '12+',  label: 'Years Experience',   icon: HardHat },
    { value: '30+',  label: 'Skilled Workers',    icon: Star },
    { value: '100%', label: 'Client Satisfaction',icon: Star },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080808]"
    >
      {/* ── Background image ── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      />

      {/* ── Layered overlays for depth ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />

      {/* ── Diagonal orange accent stripe ── */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, #f97316 0px, #f97316 1px, transparent 1px, transparent 60px)',
        }}
      />

      {/* ── Particles canvas ── */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-[1]" />

      {/* ── Orange glow orbs ── */}
      <div className="absolute top-1/4 left-[-80px] w-[420px] h-[420px] bg-orange-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-60px] w-[320px] h-[320px] bg-orange-500/8 rounded-full blur-[80px] pointer-events-none" />

      {/* ── Main content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-24">
        <div className="max-w-4xl">

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 mb-7"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
            }}
          >
            <span className="flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 text-orange-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
              12+ Years of Excellence · Baramati
            </span>
          </div>

          {/* Heading */}
          <h1
            className="font-black leading-[1.05] mb-6 text-white"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
              fontSize: 'clamp(2.6rem, 7vw, 5.5rem)',
              letterSpacing: '-0.02em',
            }}
          >
            We Build{' '}
            <span
              className="relative inline-block text-orange-500"
              style={{ textShadow: '0 0 40px rgba(249,115,22,0.35)' }}
            >
              Dreams
              {/* underline squiggle */}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 6 Q50 0 100 5 Q150 10 200 4"
                  stroke="#f97316"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                  style={{
                    strokeDasharray: 220,
                    strokeDashoffset: mounted ? 0 : 220,
                    transition: 'stroke-dashoffset 1s ease 0.8s',
                  }}
                />
              </svg>
            </span>
            {' '}Into{' '}
            <br className="hidden sm:block" />
            <span className="text-gray-100">Concrete Reality</span>
          </h1>

          {/* Description */}
          <p
            className="text-gray-400 mb-10 leading-relaxed max-w-2xl"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.7s ease 0.35s, transform 0.7s ease 0.35s',
            }}
          >
            Creative Group delivers premium residential & commercial construction
            in Baramati. Strong structures, modern design, and craftsmanship you
            can trust — on time, every time.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 mb-16"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.7s ease 0.45s, transform 0.7s ease 0.45s',
            }}
          >
            {/* Primary */}
            <button
              onClick={() => scrollToSection('#contact')}
              className="group relative inline-flex items-center justify-center gap-2
                         bg-orange-500 hover:bg-orange-400 active:bg-orange-600
                         text-black font-extrabold text-base px-8 py-4 rounded-xl
                         overflow-hidden transition-all duration-200
                         hover:shadow-[0_8px_30px_rgba(249,115,22,0.4)]
                         hover:-translate-y-0.5"
            >
              Get a Free Quote
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            {/* Secondary */}
            <button
              onClick={() => scrollToSection('#projects')}
              className="group inline-flex items-center justify-center gap-2
                         border border-gray-600 hover:border-orange-500/60
                         text-gray-300 hover:text-orange-400
                         font-semibold text-base px-8 py-4 rounded-xl
                         transition-all duration-200
                         hover:bg-orange-500/5
                         hover:-translate-y-0.5"
            >
              View Our Projects
              <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
            </button>
          </div>

          {/* Stats row */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/8"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.7s ease 0.55s, transform 0.7s ease 0.55s',
            }}
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="group flex flex-col items-center justify-center py-6 px-4
                           bg-white/[0.03] hover:bg-orange-500/8
                           transition-colors duration-200 cursor-default"
                style={{
                  transitionDelay: `${0.6 + i * 0.08}s`,
                }}
              >
                <span
                  className="text-3xl md:text-4xl font-black text-orange-500 leading-none mb-1"
                  style={{ textShadow: '0 0 20px rgba(249,115,22,0.3)' }}
                >
                  {stat.value}
                </span>
                <span className="text-xs text-gray-500 group-hover:text-gray-400 text-center transition-colors duration-200 font-medium tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <button
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10
                   flex flex-col items-center gap-2 text-gray-500 hover:text-orange-500
                   transition-colors duration-200 group"
        aria-label="Scroll down"
        style={{
          opacity: mounted ? 1 : 0,
          transition: 'opacity 0.6s ease 1s, color 0.2s',
        }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-semibold">Scroll</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </button>

      {/* ── Bottom fade to next section ── */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
    </section>
  );
}