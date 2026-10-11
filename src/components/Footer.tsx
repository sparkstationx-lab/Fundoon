import React from 'react';
import { Phone, MessageSquare, MapPin, Navigation } from 'lucide-react';
import fundoonLogo from '../assets/images/fundoon-removebg-preview.png';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const phoneTel = 'tel:+919111102728';
  const whatsappUrl = 'https://wa.me/919111102728';
  const googleMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=Fundoon+Games+%26+Caf%C3%A9+Krishna+Business+Center+City+Center+Gwalior';

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Games & Activities', href: '#games' },
    { label: 'Café & Food', href: '#cafe' },
    { label: 'Why Choose Fundoon', href: '#why-fundoon' },
    { label: 'Location & Map', href: '#location' },
  ];

  return (
    <footer id="contact" className="bg-[#0e0f13] border-t border-white/[0.08] text-zinc-400 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <img
                  src={fundoonLogo}
                  alt="Fundoon Games & Café"
                  className="h-12 sm:h-14 w-auto max-w-[210px] sm:max-w-[250px] object-contain drop-shadow-md hover:brightness-110 transition-all"
                  referrerPolicy="no-referrer"
                />
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed max-w-sm mb-6">
                Your premier entertainment hub in Gwalior for next-generation PlayStation 5 gaming, championship snooker, pool tables, and tasty café food.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={phoneTel}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-zinc-200 hover:text-white bg-[#1c1e26] hover:bg-[#252833] border border-white/[0.09] transition-colors shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>Call 091111 02728</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-zinc-200 hover:text-white bg-[#1c1e26] hover:bg-[#252833] border border-white/[0.09] transition-colors shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-zinc-300 hover:text-cyan-300 transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address & Direct Details (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Visit Us in Gwalior
            </h4>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-3 text-zinc-300">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                <span>
                  Survey No. 697, Krishna Business Center, Shop No. G-2, City Center, Tulsi Vihar Colony, Gwalior, Madhya Pradesh – 474002.
                </span>
              </div>
              <div className="flex items-center gap-3 text-zinc-300">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={phoneTel} className="font-mono hover:text-cyan-300 transition-colors">
                  091111 02728
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-cyan-300 hover:text-cyan-200 font-medium"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get directions on Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            © {currentYear} Fundoon Games & Café. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>City Center, Gwalior (M.P.)</span>
            <span aria-hidden="true">·</span>
            <span>Eat. Play. Chill.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
