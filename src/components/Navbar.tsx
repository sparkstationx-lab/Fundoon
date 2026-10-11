import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import fundoonLogo from '../assets/images/fundoon-removebg-preview.png';

interface NavbarProps {
  onCallClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Games & Activities', href: '#games' },
    { label: 'Café', href: '#cafe' },
    { label: 'Why Fundoon', href: '#why-fundoon' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#15171d]/90 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/40'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6 md:gap-8">
        {/* Zone 1: Brand Logo using transparent fundoon-removebg-preview.png */}
        <a
          href="#home"
          className="group flex items-center whitespace-nowrap shrink-0 transition-transform duration-200 hover:scale-[1.02] active:scale-95 py-1"
          aria-label="Fundoon Games & Café Home"
        >
          <img
            src={fundoonLogo}
            alt="Fundoon Games & Café"
            className="h-10 sm:h-12 w-auto max-w-[190px] sm:max-w-[230px] object-contain drop-shadow-md group-hover:brightness-110 transition-all"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-zinc-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-cyan-300 transition-colors whitespace-nowrap shrink-0 relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-cyan-400 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action (Highlighted Call Now Button) */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href="tel:+919111102728"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 shadow-md shadow-cyan-500/25 hover:shadow-cyan-500/40 active:scale-95 whitespace-nowrap shrink-0"
            aria-label="Call Fundoon Games and Cafe at 091111 02728"
          >
            <Phone className="w-4 h-4 text-white group-hover:rotate-12 transition-transform duration-200" />
            <span>Call Now</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="tel:+919111102728"
            className="sm:hidden p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20 transition-colors"
            aria-label="Call Now"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl text-zinc-300 hover:text-white bg-[#1b1d24] border border-white/[0.08] focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/[0.08] bg-[#16181e]/98 backdrop-blur-xl px-4 pt-4 pb-6 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="pb-3 mb-2 border-b border-white/[0.08] flex items-center justify-between">
            <img
              src={fundoonLogo}
              alt="Fundoon Games & Café Logo"
              className="h-10 w-auto max-w-[190px] object-contain drop-shadow-sm"
              referrerPolicy="no-referrer"
            />
          </div>
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-base font-medium text-zinc-200 hover:text-cyan-400 hover:bg-[#20232c] rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 opacity-40" />
              </a>
            ))}
          </nav>
          <div className="pt-4 mt-3 border-t border-white/[0.08] flex flex-col gap-2.5">
            <a
              href="tel:+919111102728"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/20"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now (091111 02728)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
