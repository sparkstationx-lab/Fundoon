import React from 'react';
import { PizzaVisual, SnacksVisual, DrinksVisual } from './VisualArt';
import { Utensils, Pizza, Coffee, Sparkles } from 'lucide-react';

export const CafeSection: React.FC = () => {
  const foodCards = [
    {
      id: 'pizza',
      title: 'Fresh Artisan Pizzas',
      category: 'Pizzas & Baked Crusts',
      description:
        'Crispy crusts baked to golden perfection, generously layered with rich tomato sauce, melted mozzarella, and savory toppings to fuel your longest gaming sessions.',
      highlights: ['Crisp hand-stretched crust', 'Loaded cheese & toppings', 'Served piping hot', 'Veggie & savory specialties'],
      visual: <PizzaVisual className="h-60 sm:h-64" />,
    },
    {
      id: 'snacks',
      title: 'Quick Bites & Snacks',
      category: 'Finger Food & Munchies',
      description:
        'Easy-to-enjoy finger foods and savory quick bites made fresh. From seasoned crinkle fries and wedges to crispy garlic bites and delicious party platters.',
      highlights: ['Golden crispy fries & wedges', 'Flavorful dips & sauces', 'Perfect for sharing in groups', 'Quick turnaround time'],
      visual: <SnacksVisual className="h-60 sm:h-64" />,
    },
    {
      id: 'refreshments',
      title: 'Chilled Drinks & Shakes',
      category: 'Beverages & Mocktails',
      description:
        'Stay refreshed and energized with thick milkshakes, creamy iced coffees, cooling sodas, and citrus mocktails prepared fresh at our café counter.',
      highlights: ['Thick dessert shakes', 'Chilled iced frappes & cold coffee', 'Refreshing mint & citrus coolers', 'Served ice cold'],
      visual: <DrinksVisual className="h-60 sm:h-64" />,
    },
  ];

  return (
    <section id="cafe" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#161820] to-[#14161c] relative border-t border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-amber-300 mb-2">
            <Utensils className="w-4 h-4" />
            <span>Café & Refreshments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
            Great Food. Epic Gaming. Good Vibes.
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed text-balance">
            Fuel your gaming match with delicious freshly baked pizza, crunchy snacks, and chilled drinks. Sit back, socialize, and relish great food right at Fundoon.
          </p>
        </div>

        {/* 3 Food Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {foodCards.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col bg-[#1c1e26] rounded-2xl border border-white/[0.09] hover:border-amber-400/40 transition-all duration-300 overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60"
            >
              {/* Visual Card Artwork */}
              <div className="relative border-b border-white/[0.08] bg-[#14161d]">
                {item.visual}
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category metadata (unboxed text per zero-pill rule) */}
                  <div className="text-xs font-semibold tracking-wider uppercase text-amber-300 mb-1.5">
                    {item.category}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="pt-4 border-t border-white/[0.08]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-200">
                    {item.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
