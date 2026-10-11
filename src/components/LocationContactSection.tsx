import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Navigation, Copy, Check, ExternalLink } from 'lucide-react';
import fundoonLogo from '../assets/images/fundoon-removebg-preview.png';

export const LocationContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const fullAddress =
    'Survey No. 697, Krishna Business Center, Shop No. G-2, City Center, Tulsi Vihar Colony, Gwalior, Madhya Pradesh – 474002';
  const phoneDisplay = '091111 02728';
  const phoneTel = 'tel:+919111102728';
  const whatsappUrl = 'https://wa.me/919111102728';
  const googleMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=Fundoon+Games+%26+Caf%C3%A9+Krishna+Business+Center+City+Center+Gwalior';

  const handleCopy = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#15171e] to-[#121316] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-cyan-300 mb-2">
            Visit & Connect
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
            Location & Contact
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed text-balance">
            Conveniently situated in the heart of City Center, Gwalior at Krishna Business Center. Drop by for a game or reach out directly.
          </p>
        </div>

        {/* Content Split: Details & Direct Actions on Left, Map on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Contact Cards & Instant Buttons (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            {/* Address Card */}
            <div className="p-7 sm:p-8 rounded-2xl bg-[#1c1e26] border border-white/[0.09] shadow-2xl shadow-black/50 relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0 shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className="text-xs font-semibold tracking-wider uppercase text-zinc-400">
                      Store Location
                    </span>
                    <img
                      src={fundoonLogo}
                      alt="Fundoon Games & Café"
                      className="h-8 w-auto max-w-[130px] object-contain drop-shadow-sm"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    Fundoon Games & Café
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-4 font-normal">
                    Survey No. 697, Krishna Business Center, Shop No. G-2, City Center, Tulsi Vihar Colony, Gwalior, Madhya Pradesh – 474002.
                  </p>

                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium text-zinc-200 hover:text-white bg-[#252833] hover:bg-[#2d313e] border border-white/[0.12] transition-colors shadow-sm"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-semibold">Address Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-zinc-400" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Direct Phone & Connectivity Card */}
            <div className="p-7 sm:p-8 rounded-2xl bg-[#1c1e26] border border-white/[0.09] shadow-2xl shadow-black/50">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0 shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold tracking-wider uppercase text-zinc-400 mb-1">
                    Direct Contact Number
                  </div>
                  <a
                    href={phoneTel}
                    className="text-2xl sm:text-3xl font-bold tracking-tight text-white hover:text-cyan-300 transition-colors block font-mono"
                  >
                    {phoneDisplay}
                  </a>
                  <p className="text-xs text-zinc-300 mt-1">
                    Available for table reservations, console inquiries, and café orders.
                  </p>
                </div>
              </div>

              {/* 3 Primary Action Buttons as required by Prompt */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/[0.08]">
                {/* 1. Call Now button */}
                <a
                  href={phoneTel}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-sm font-semibold text-white bg-cyan-600 hover:bg-cyan-500 transition-all shadow-md shadow-cyan-950/60 active:scale-95"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>

                {/* 2. Get Directions button */}
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-sm font-semibold text-zinc-100 bg-[#252833] hover:bg-[#2d313e] border border-white/[0.12] transition-all active:scale-95 shadow-sm"
                >
                  <Navigation className="w-4 h-4 text-cyan-400" />
                  <span>Get Directions</span>
                </a>

                {/* 3. WhatsApp button */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-md shadow-emerald-950/60 active:scale-95"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed & Card (5 cols) */}
          <div className="lg:col-span-5 h-full min-h-[360px] sm:min-h-[420px] rounded-2xl overflow-hidden border border-white/[0.09] shadow-2xl shadow-black/50 bg-[#1c1e26] flex flex-col">
            <div className="p-4 bg-[#21242d] border-b border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-200">
                <Navigation className="w-3.5 h-3.5 text-cyan-400" />
                <span>Map Location · City Center Gwalior</span>
              </div>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-cyan-300 hover:text-cyan-200 inline-flex items-center gap-1 font-medium"
              >
                <span>Open in Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="relative flex-1 w-full h-full min-h-[300px]">
              <iframe
                title="Fundoon Games & Cafe Location Map"
                src="https://maps.google.com/maps?q=Krishna+Business+Center,+City+Center,+Gwalior,+Madhya+Pradesh+474002&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter grayscale contrast-125 invert opacity-85 hover:opacity-100 transition-opacity"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-[#171920]/95 backdrop-blur-md border border-white/[0.1] flex items-center justify-between text-xs shadow-lg shadow-black/60">
                <div>
                  <div className="font-semibold text-white">Krishna Business Center, Shop G-2</div>
                  <div className="text-zinc-300">Tulsi Vihar Colony, City Center</div>
                </div>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-cyan-500/25 text-cyan-200 hover:bg-cyan-500/35 border border-cyan-400/30 font-medium transition-colors"
                >
                  Navigate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
