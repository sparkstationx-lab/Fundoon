/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { GamesSection } from './components/GamesSection';
import { CafeSection } from './components/CafeSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { LocationContactSection } from './components/LocationContactSection';
import { Footer } from './components/Footer';
import { Phone, MessageSquare } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#121316] text-zinc-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200 bg-matte-charcoal">
      {/* 1. Header / Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Games & Activities Section */}
        <GamesSection />

        {/* 4. Café & Food Section */}
        <CafeSection />

        {/* 5. Why Choose Fundoon? */}
        <WhyChooseSection />

        {/* 6. Location & Contact Section */}
        <LocationContactSection />
      </main>

      {/* 7. Footer */}
      <Footer />

      {/* Floating Action Buttons for Mobile Screen Quick-Connect */}
      <aside
        aria-label="Quick contact"
        className="fixed bottom-4 right-4 z-40 flex items-center gap-2.5 sm:hidden"
      >
        <a
          href="https://wa.me/919111102728"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-emerald-600 text-white shadow-xl shadow-black/60 hover:bg-emerald-500 transition-all active:scale-95 border border-emerald-400/40"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-5 h-5" />
        </a>
        <a
          href="tel:+919111102728"
          className="p-3 rounded-full bg-cyan-600 text-white shadow-xl shadow-black/60 hover:bg-cyan-500 transition-all active:scale-95 border border-cyan-400/40"
          aria-label="Call Fundoon directly"
        >
          <Phone className="w-5 h-5" />
        </a>
      </aside>
    </div>
  );
}

