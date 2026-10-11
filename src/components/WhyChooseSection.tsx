import React from 'react';
import { Gamepad2, Users, UtensilsCrossed, Armchair, CheckCircle2 } from 'lucide-react';

export const WhyChooseSection: React.FC = () => {
  const reasons = [
    {
      icon: Gamepad2,
      accent: 'text-cyan-400',
      bgGlow: 'from-cyan-500/10 to-transparent',
      borderColor: 'group-hover:border-cyan-500/40',
      title: 'Gaming & Entertainment Under One Roof',
      description:
        'No need to hop between spots. Fundoon combines modern PlayStation 5 gaming setups, full-size snooker tables, and tournament pool tables in one complete entertainment venue.',
      points: ['PS5 consoles with top titles', 'Championship snooker & 8-ball pool', 'High-end gaming accessories'],
    },
    {
      icon: Users,
      accent: 'text-blue-400',
      bgGlow: 'from-blue-500/10 to-transparent',
      borderColor: 'group-hover:border-blue-500/40',
      title: 'Perfect for Hanging Out With Friends',
      description:
        'Designed as a vibrant social hub where friend groups, college companions, and gaming buddies can team up, challenge each other, or celebrate weekend breaks.',
      points: ['Spacious group-friendly seating', 'Friendly competitive multiplayer', 'Great for parties and casual meetups'],
    },
    {
      icon: UtensilsCrossed,
      accent: 'text-amber-400',
      bgGlow: 'from-amber-500/10 to-transparent',
      borderColor: 'group-hover:border-amber-500/40',
      title: 'Fresh Food & Refreshments',
      description:
        'Never play on an empty stomach. Enjoy freshly made hot pizzas, crispy finger snacks, and ice-cold shakes and coolers served straight to your game station or café table.',
      points: ['Pizzas baked fresh on order', 'Crispy finger foods & dips', 'Chilled coolers & signature shakes'],
    },
    {
      icon: Armchair,
      accent: 'text-emerald-400',
      bgGlow: 'from-emerald-500/10 to-transparent',
      borderColor: 'group-hover:border-emerald-500/40',
      title: 'Relaxed Café Atmosphere',
      description:
        'Comfortable air-conditioned spaces, tasteful ambient lighting, comfortable seating, and curated music that lets you relax and unwind comfortably for hours.',
      points: ['Clean, modern air-conditioned lounge', 'Ambient lighting with neon accents', 'Welcoming and friendly hospitality'],
    },
  ];

  return (
    <section id="why-fundoon" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#121316] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-cyan-300 mb-2">
            The Fundoon Experience
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
            Why Choose Fundoon?
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed text-balance">
            Whether you want an intense gaming showdown, a relaxed snooker frame, or great food with close friends, here is why Gwalior chooses Fundoon Games & Café.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`group relative p-7 sm:p-8 rounded-2xl bg-[#1a1c24] border border-white/[0.09] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60 ${item.borderColor}`}
              >
                {/* Subtle Ambient Background Gradient */}
                <div
                  className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${item.bgGlow} rounded-2xl pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity`}
                />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-[#242732] border border-white/[0.09] flex items-center justify-center mb-5 shadow-sm">
                      <Icon className={`w-6 h-6 ${item.accent}`} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Bullet Points */}
                  <div className="pt-4 border-t border-white/[0.08] space-y-2">
                    {item.points.map((pt, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-zinc-200 font-medium">
                        <CheckCircle2 className={`w-4 h-4 ${item.accent} shrink-0`} />
                        <span>{pt}</span>
                      </div>
                    ))}
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
