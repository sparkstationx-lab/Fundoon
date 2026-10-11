import React from 'react';
import { Ps5Visual, SnookerVisual, PoolVisual } from './VisualArt';
import { Gamepad, Target, CircleDot, Phone, MessageSquare } from 'lucide-react';

export const GamesSection: React.FC = () => {
  const games = [
    {
      id: 'ps5',
      title: 'PS5 Gaming',
      icon: Gamepad,
      accentColor: 'text-cyan-400',
      glowClass: 'group-hover:border-cyan-500/50',
      description:
        'Immerse yourself in next-generation PlayStation 5 gaming with ultra-fast SSD load times, 4K high refresh rate displays, and DualSense haptic feedback. Play solo campaigns or intense multiplayer battles with friends.',
      features: [
        'Latest PlayStation 5 consoles',
        'High-refresh gaming displays',
        'Multiplayer & co-op titles',
        'Comfortable ergonomic lounge seating',
      ],
      visual: <Ps5Visual className="h-64 sm:h-72" />,
      ctaLabel: 'Book PS5 Station',
      whatsappMessage: 'Hi Fundoon Games & Café, I would like to inquire about PS5 gaming station availability!',
    },
    {
      id: 'snooker',
      title: 'Snooker',
      icon: Target,
      accentColor: 'text-emerald-400',
      glowClass: 'group-hover:border-emerald-500/50',
      description:
        'Experience the precision of cue sports on our full-size snooker tables with high-grade green baize cloth, balanced hardwood cues, and dedicated warm overhead illumination for serious players and enthusiasts.',
      features: [
        'Full-size championship snooker table',
        'High-grade woolen baize felt',
        'Balanced hardwood cues & chalk',
        'Dedicated overhead illumination',
      ],
      visual: <SnookerVisual className="h-64 sm:h-72" />,
      ctaLabel: 'Reserve Snooker Table',
      whatsappMessage: 'Hi Fundoon Games & Café, I would like to inquire about reserving a snooker table!',
    },
    {
      id: 'pool',
      title: 'Pool Tables',
      icon: CircleDot,
      accentColor: 'text-sky-400',
      glowClass: 'group-hover:border-sky-500/50',
      description:
        'Enjoy fast-paced 8-ball and 9-ball pool on modern billiards tables with responsive cushions and smooth cloth. Perfect for casual matches, friendly tournaments, and relaxing with your crew.',
      features: [
        'Modern 8-ball billiards tables',
        'Responsive tournament cushions',
        'Clean cue balls and rack sets',
        'Social & energetic atmosphere',
      ],
      visual: <PoolVisual className="h-64 sm:h-72" />,
      ctaLabel: 'Reserve Pool Table',
      whatsappMessage: 'Hi Fundoon Games & Café, I would like to inquire about pool table availability!',
    },
  ];

  return (
    <section id="games" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#13151b] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-cyan-300 mb-2">
            Top-Tier Entertainment
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
            Games & Activities
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed text-balance">
            From high-octane 4K PS5 console gaming to classic cue sports, Fundoon brings together the finest gaming equipment in Gwalior under one roof.
          </p>
        </div>

        {/* 3 Game Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {games.map((game) => {
            const Icon = game.icon;
            const whatsappUrl = `https://wa.me/919111102728?text=${encodeURIComponent(game.whatsappMessage)}`;

            return (
              <div
                key={game.id}
                className={`group flex flex-col bg-[#1b1d25] rounded-2xl border border-white/[0.09] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60 overflow-hidden ${game.glowClass}`}
              >
                {/* Visual Art Header */}
                <div className="relative border-b border-white/[0.08] bg-[#14161d]">
                  {game.visual}
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header: Title and Icon */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className="p-2.5 rounded-xl bg-[#242732] text-white border border-white/[0.09] shadow-sm">
                        <Icon className={`w-5 h-5 ${game.accentColor}`} />
                      </div>
                      <h3 className="text-2xl font-bold text-white tracking-tight">
                        {game.title}
                      </h3>
                    </div>

                    {/* Feature Highlights */}
                    <div className="space-y-2.5 pt-4 border-t border-white/[0.08] mb-6">
                      {game.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Functional Actions */}
                  <div className="pt-2 flex items-center gap-2.5">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-zinc-100 hover:text-white bg-[#252833] hover:bg-[#2d313e] border border-white/[0.12] hover:border-cyan-400/40 transition-colors shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{game.ctaLabel}</span>
                    </a>
                    <a
                      href="tel:+919111102728"
                      className="p-2.5 rounded-xl bg-[#252833] hover:bg-[#2d313e] text-zinc-300 hover:text-white border border-white/[0.12] transition-colors shrink-0 shadow-sm"
                      aria-label={`Call to book ${game.title}`}
                    >
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
