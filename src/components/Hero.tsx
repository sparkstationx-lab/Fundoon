import React from 'react';
import { Gamepad2, Navigation, ChevronDown, Sparkles } from 'lucide-react';
import fundoonLogo from '../assets/images/fundoon-removebg-preview.png';

export const Hero: React.FC = () => {
  const directionsUrl =
    'https://www.google.com/maps/search/?api=1&query=Fundoon+Games+%26+Caf%C3%A9+Krishna+Business+Center+City+Center+Gwalior';

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#191b22] via-[#14161c] to-[#121316]"
    >
      {/* Visual Gaming Café Atmosphere Background with Charcoal Depth */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle Charcoal & Cool Grey Radial Diffusers */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[42rem] h-[30rem] bg-gradient-to-b from-zinc-700/10 to-transparent rounded-full blur-[120px]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/12 rounded-full blur-[130px]" />
        <div className="absolute top-1/3 right-1/4 w-[26rem] h-[26rem] bg-indigo-600/10 rounded-full blur-[140px]" />
        
        {/* Subtle Matte Architectural Grid Texture */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Soft Vignette Scrim */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#14161c]/40 to-[#121316]" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center z-10 flex flex-col items-center">
        {/* Prominent Fundoon Brand Logo (Transparent) */}
        <div className="mb-6 flex flex-col items-center">
          <img
            src={fundoonLogo}
            alt="Fundoon Games & Café"
            className="h-20 sm:h-24 md:h-28 w-auto max-w-[320px] sm:max-w-[420px] md:max-w-[500px] object-contain drop-shadow-[0_12px_30px_rgba(0,0,0,0.6)] hover:scale-[1.02] transition-transform duration-300"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Location & Brand kicker - Clean unboxed text with typographic separator */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-cyan-300 mb-6 drop-shadow-sm">
          <span>City Center</span>
          <span aria-hidden="true" className="text-zinc-500">·</span>
          <span>Gwalior, Madhya Pradesh</span>
          <span aria-hidden="true" className="text-zinc-500">·</span>
          <span className="flex items-center gap-1.5 text-zinc-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Gaming Lounge & Café
          </span>
        </div>

        {/* Marquee Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6 leading-[1.08] text-balance drop-shadow-md">
          Eat. Play. <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300">Chill.</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl md:text-2xl text-zinc-200 font-normal max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
          Your ultimate gaming and café destination in Gwalior.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14">
          <a
            href="#games"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 shadow-xl shadow-cyan-950/50 hover:shadow-cyan-500/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Gamepad2 className="w-5 h-5" />
            <span>Explore Games</span>
          </a>

          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-zinc-100 bg-[#1f222b] hover:bg-[#272b36] border border-white/[0.12] hover:border-white/[0.22] shadow-lg shadow-black/40 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Navigation className="w-5 h-5 text-cyan-400" />
            <span>Get Directions</span>
          </a>
        </div>

        {/* Unboxed Feature Strip */}
        <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-zinc-300 font-medium">
          <span>PlayStation 5 Stations</span>
          <span aria-hidden="true" className="text-zinc-600">/</span>
          <span>Championship Snooker</span>
          <span aria-hidden="true" className="text-zinc-600">/</span>
          <span>8-Ball Pool Tables</span>
          <span aria-hidden="true" className="text-zinc-600">/</span>
          <span>Pizzas & Café Bites</span>
        </div>

        {/* Subtle Scroll Hint */}
        <a
          href="#games"
          aria-label="Scroll down to games section"
          className="mt-12 text-zinc-400 hover:text-cyan-300 transition-colors flex flex-col items-center gap-1 group"
        >
          <span className="text-xs tracking-wider uppercase">Scroll to explore</span>
          <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};
