import React from 'react';

/**
 * High-fidelity vector illustrations and visual scenes for Fundoon Games & Café.
 * Designed to be zero-dependency, ultra-crisp across all DPIs, fast-loading,
 * and resilient against external CDN blockages or network issues.
 */

export const Ps5Visual: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative w-full h-full overflow-hidden bg-gradient-to-br from-[#1e212b] via-[#161821] to-[#13141a] flex items-center justify-center ${className}`}>
    {/* Ambient Glow */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/20 via-blue-600/10 to-transparent pointer-events-none" />
    <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
    
    <svg viewBox="0 0 400 300" className="w-full h-full max-h-72 object-contain select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ps5Glow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id="plateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#cbd5e1" />
        </linearGradient>
        <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>
        <filter id="neonBlur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Monitor Display Screen in background */}
      <rect x="70" y="35" width="260" height="150" rx="8" fill="url(#screenGrad)" stroke="#334155" strokeWidth="2" />
      {/* Monitor Stand */}
      <path d="M185 185 L180 220 H220 L215 185 Z" fill="#1e293b" />
      <rect x="155" y="220" width="90" height="6" rx="3" fill="#334155" />
      
      {/* Screen Graphic / Game HUD */}
      <rect x="80" y="45" width="240" height="130" rx="4" fill="#030712" />
      {/* Dynamic Game Scene Glow inside monitor */}
      <circle cx="200" cy="110" r="45" fill="#06b6d4" opacity="0.35" filter="url(#neonBlur)" />
      <path d="M100 150 Q160 80 200 120 T300 90" stroke="url(#ps5Glow)" strokeWidth="3" opacity="0.8" />
      <path d="M120 160 Q180 110 240 145 T310 130" stroke="#a855f7" strokeWidth="2" opacity="0.6" />
      {/* 4K & HDR badge graphic */}
      <rect x="90" y="55" width="28" height="12" rx="2" fill="#0284c7" fillOpacity="0.4" />
      <text x="94" y="64" fill="#38bdf8" fontSize="7" fontWeight="bold" fontFamily="sans-serif">4K 120</text>
      
      {/* Sleek PS5 Console standing on the right */}
      <g transform="translate(250, 70)">
        {/* Blue Inner Channel Light */}
        <path d="M22 15 C20 55 18 100 21 145" stroke="#00d2ff" strokeWidth="4" filter="url(#neonBlur)" />
        <path d="M28 15 C30 55 32 100 29 145" stroke="#00d2ff" strokeWidth="4" filter="url(#neonBlur)" />
        {/* Black Core Body */}
        <rect x="19" y="10" width="12" height="142" rx="4" fill="#090a0f" />
        <rect x="23" y="40" width="4" height="60" rx="1" fill="#1e293b" />
        {/* White Outer Curved Faceplates */}
        <path d="M14 5 C15 50 12 110 16 155 Q20 158 24 153 C22 110 21 55 22 5 Z" fill="url(#plateGrad)" />
        <path d="M36 5 C35 50 38 110 34 155 Q30 158 26 153 C28 110 29 55 28 5 Z" fill="url(#plateGrad)" />
        {/* Base stand */}
        <ellipse cx="25" cy="155" rx="18" ry="5" fill="#1e293b" />
      </g>

      {/* DualSense Controller (Foreground angled) */}
      <g transform="translate(110, 165)">
        {/* Controller Glow */}
        <ellipse cx="65" cy="55" rx="55" ry="30" fill="#06b6d4" opacity="0.2" filter="url(#neonBlur)" />
        {/* Main Body */}
        <path d="M25 45 C15 65 20 90 32 92 C42 94 48 76 56 68 C62 64 68 64 74 68 C82 76 88 94 98 92 C110 90 115 65 105 45 C98 32 78 30 65 30 C52 30 32 32 25 45 Z" fill="#f8fafc" />
        {/* Dark Lower Handles & Touchpad Section */}
        <path d="M45 52 C52 48 78 48 85 52 C82 70 76 82 72 82 C68 82 66 76 65 76 C64 76 62 82 58 82 C54 82 48 70 45 52 Z" fill="#0f172a" />
        {/* Touchpad */}
        <rect x="52" y="34" width="26" height="16" rx="2" fill="#1e293b" stroke="#38bdf8" strokeWidth="0.8" />
        {/* Thumbsticks */}
        <circle cx="53" cy="70" r="9" fill="#1e293b" stroke="#475569" strokeWidth="1" />
        <circle cx="53" cy="70" r="6" fill="#334155" />
        <circle cx="77" cy="70" r="9" fill="#1e293b" stroke="#475569" strokeWidth="1" />
        <circle cx="77" cy="70" r="6" fill="#334155" />
        {/* D-Pad on Left */}
        <path d="M34 44 H38 V48 H34 Z M34 38 H38 V42 H34 Z M30 41 H34 V45 H30 Z M38 41 H42 V45 H38 Z" fill="#334155" />
        {/* Action Buttons on Right (Triangle, Circle, Cross, Square) */}
        <circle cx="95" cy="38" r="2.5" fill="#06b6d4" />
        <circle cx="101" cy="44" r="2.5" fill="#ef4444" />
        <circle cx="95" cy="50" r="2.5" fill="#3b82f6" />
        <circle cx="89" cy="44" r="2.5" fill="#ec4899" />
        {/* PS Light bar line */}
        <path d="M50 48 Q65 46 80 48" stroke="#38bdf8" strokeWidth="1.5" filter="url(#neonBlur)" />
      </g>
    </svg>
  </div>
);

export const SnookerVisual: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative w-full h-full overflow-hidden bg-gradient-to-br from-[#1c221e] via-[#161a18] to-[#121316] flex items-center justify-center ${className}`}>
    {/* Overhead Lamp Glow */}
    <div className="absolute top-2 inset-x-0 h-32 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-400/25 via-emerald-500/10 to-transparent pointer-events-none" />
    
    <svg viewBox="0 0 400 300" className="w-full h-full max-h-72 object-contain select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="clothGreen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#15803d" />
          <stop offset="50%" stopColor="#166534" />
          <stop offset="100%" stopColor="#14532d" />
        </linearGradient>
        <linearGradient id="woodCushion" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#451a03" />
          <stop offset="50%" stopColor="#78350f" />
          <stop offset="100%" stopColor="#451a03" />
        </linearGradient>
        <radialGradient id="redBallShine" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#fca5a5" />
          <stop offset="25%" stopColor="#ef4444" />
          <stop offset="85%" stopColor="#991b1b" />
          <stop offset="100%" stopColor="#450a0a" />
        </radialGradient>
        <radialGradient id="yellowBallShine" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="40%" stopColor="#eab308" />
          <stop offset="100%" stopColor="#713f12" />
        </radialGradient>
        <radialGradient id="blueBallShine" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#93c5fd" />
          <stop offset="40%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </radialGradient>
        <radialGradient id="whiteBallShine" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#94a3b8" />
        </radialGradient>
      </defs>

      {/* Overhead Brass / Green Lamp fixture */}
      <g transform="translate(110, 15)">
        <path d="M90 0 L90 20" stroke="#78350f" strokeWidth="2" />
        <path d="M50 20 L130 20 L150 40 H30 Z" fill="#14532d" stroke="#ca8a04" strokeWidth="1.5" />
        <ellipse cx="90" cy="40" rx="60" ry="8" fill="#fef08a" opacity="0.4" />
      </g>

      {/* Perspective Snooker Table */}
      <g transform="translate(25, 60)">
        {/* Table Wooden Outer Rail */}
        <path d="M50 30 L300 30 L340 180 L10 180 Z" fill="url(#woodCushion)" stroke="#92400e" strokeWidth="2" />
        
        {/* Brass corner pocket plates */}
        <circle cx="50" cy="30" r="10" fill="#ca8a04" />
        <circle cx="300" cy="30" r="10" fill="#ca8a04" />
        <circle cx="10" cy="180" r="12" fill="#ca8a04" />
        <circle cx="340" cy="180" r="12" fill="#ca8a04" />
        <circle cx="175" cy="30" r="8" fill="#ca8a04" />
        <circle cx="175" cy="180" r="10" fill="#ca8a04" />

        {/* Green Baize Cloth Playing Surface */}
        <path d="M60 40 L290 40 L325 170 L25 170 Z" fill="url(#clothGreen)" />
        
        {/* Pocket Holes */}
        <circle cx="60" cy="40" r="7" fill="#090a0f" />
        <circle cx="290" cy="40" r="7" fill="#090a0f" />
        <circle cx="25" cy="170" r="9" fill="#090a0f" />
        <circle cx="325" cy="170" r="9" fill="#090a0f" />
        <circle cx="175" cy="40" r="6" fill="#090a0f" />
        <circle cx="175" cy="170" r="7" fill="#090a0f" />

        {/* Baulk line and 'D' marking */}
        <line x1="85" y1="42" x2="60" y2="168" stroke="#ffffff" strokeWidth="1" strokeDasharray="3,3" opacity="0.3" />

        {/* Snooker Balls: Red Triangle Cluster */}
        <g transform="translate(210, 95)">
          {/* Row 1 */}
          <circle cx="0" cy="0" r="6" fill="url(#redBallShine)" />
          {/* Row 2 */}
          <circle cx="10" cy="-5" r="6" fill="url(#redBallShine)" />
          <circle cx="10" cy="5" r="6" fill="url(#redBallShine)" />
          {/* Row 3 */}
          <circle cx="20" cy="-10" r="6" fill="url(#redBallShine)" />
          <circle cx="20" cy="0" r="6" fill="url(#redBallShine)" />
          <circle cx="20" cy="10" r="6" fill="url(#redBallShine)" />
          {/* Row 4 */}
          <circle cx="30" cy="-15" r="6" fill="url(#redBallShine)" />
          <circle cx="30" cy="-5" r="6" fill="url(#redBallShine)" />
          <circle cx="30" cy="5" r="6" fill="url(#redBallShine)" />
          <circle cx="30" cy="15" r="6" fill="url(#redBallShine)" />
        </g>

        {/* Colored Balls */}
        <circle cx="175" cy="105" r="7" fill="url(#blueBallShine)" />
        <circle cx="270" cy="105" r="7" fill="#0f172a" stroke="#334155" strokeWidth="1" /> {/* Black ball */}
        <circle cx="100" cy="70" r="6" fill="url(#yellowBallShine)" />
        <circle cx="100" cy="140" r="6" fill="#15803d" stroke="#86efac" strokeWidth="0.5" />

        {/* White Cue Ball */}
        <circle cx="115" cy="105" r="6.5" fill="url(#whiteBallShine)" />

        {/* Polished Snooker Cue Stick aiming */}
        <line x1="-10" y1="125" x2="105" y2="107" stroke="#d97706" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="102" y1="108" x2="108" y2="107" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" /> {/* chalked tip */}
      </g>
    </svg>
  </div>
);

export const PoolVisual: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative w-full h-full overflow-hidden bg-gradient-to-br from-[#17202c] via-[#141822] to-[#121316] flex items-center justify-center ${className}`}>
    {/* Ambient Indigo/Blue Glow */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/20 via-cyan-500/10 to-transparent pointer-events-none" />
    
    <svg viewBox="0 0 400 300" className="w-full h-full max-h-72 object-contain select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="poolBlueFelt" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="50%" stopColor="#0369a1" />
          <stop offset="100%" stopColor="#075985" />
        </linearGradient>
        <linearGradient id="darkRail" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="50%" stopColor="#334155" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
        <radialGradient id="eightBall" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="40%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#020617" />
        </radialGradient>
      </defs>

      {/* Modern Billiards Table Top-Down / Angled View */}
      <g transform="translate(30, 45)">
        {/* Sleek Dark Border Frame with Chrome Sights */}
        <rect x="15" y="15" width="310" height="190" rx="16" fill="url(#darkRail)" stroke="#475569" strokeWidth="2" />
        
        {/* Diamond Sights on rail */}
        <circle cx="80" cy="22" r="2" fill="#e2e8f0" />
        <circle cx="170" cy="22" r="2" fill="#e2e8f0" />
        <circle cx="260" cy="22" r="2" fill="#e2e8f0" />
        <circle cx="80" cy="198" r="2" fill="#e2e8f0" />
        <circle cx="170" cy="198" r="2" fill="#e2e8f0" />
        <circle cx="260" cy="198" r="2" fill="#e2e8f0" />

        {/* Electric Tournament Blue Felt */}
        <rect x="30" y="30" width="280" height="160" rx="8" fill="url(#poolBlueFelt)" />
        
        {/* 6 Corner & Side Pockets */}
        <circle cx="32" cy="32" r="10" fill="#090a0f" stroke="#1e293b" strokeWidth="2" />
        <circle cx="308" cy="32" r="10" fill="#090a0f" stroke="#1e293b" strokeWidth="2" />
        <circle cx="32" cy="188" r="10" fill="#090a0f" stroke="#1e293b" strokeWidth="2" />
        <circle cx="308" cy="188" r="10" fill="#090a0f" stroke="#1e293b" strokeWidth="2" />
        <circle cx="170" cy="30" r="9" fill="#090a0f" stroke="#1e293b" strokeWidth="2" />
        <circle cx="170" cy="190" r="9" fill="#090a0f" stroke="#1e293b" strokeWidth="2" />

        {/* Triangle Wooden Rack at Break Spot */}
        <g transform="translate(195, 80)">
          {/* Triangular outline rack */}
          <polygon points="0,30 50,0 50,60" fill="none" stroke="#b45309" strokeWidth="3" opacity="0.4" />
          
          {/* 8-Ball in center */}
          <circle cx="25" cy="30" r="8" fill="url(#eightBall)" />
          <circle cx="25" cy="30" r="3.5" fill="#ffffff" />
          <text x="23.2" y="32.5" fill="#000000" fontSize="5" fontWeight="bold" fontFamily="sans-serif">8</text>

          {/* Solid and Striped Pool Balls */}
          {/* Apex ball */}
          <circle cx="5" cy="30" r="8" fill="#eab308" />
          {/* Row 2 */}
          <circle cx="15" cy="22" r="8" fill="#dc2626" />
          <circle cx="15" cy="38" r="8" fill="#2563eb" />
          {/* Row 3 */}
          <circle cx="25" cy="14" r="8" fill="#ea580c" />
          <circle cx="25" cy="46" r="8" fill="#16a34a" />
          {/* Row 4 */}
          <circle cx="35" cy="8" r="8" fill="#9333ea" />
          <circle cx="35" cy="22" r="8" fill="#eab308" />
          <circle cx="35" cy="38" r="8" fill="#dc2626" />
          <circle cx="35" cy="52" r="8" fill="#2563eb" />
        </g>

        {/* White Cue Ball */}
        <circle cx="95" cy="110" r="8.5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
        <circle cx="93" cy="108" r="2" fill="#ffffff" />

        {/* Cue Sticks Crossed */}
        <line x1="20" y1="210" x2="88" y2="116" stroke="#ca8a04" strokeWidth="3" strokeLinecap="round" />
        <line x1="86" y1="118" x2="90" y2="114" stroke="#0284c7" strokeWidth="3" strokeLinecap="round" /> {/* Chalked tip */}

        {/* Chalk Cube on table edge */}
        <rect x="270" y="160" width="10" height="10" rx="1.5" fill="#0284c7" stroke="#38bdf8" strokeWidth="0.5" />
        <circle cx="275" cy="165" r="2.5" fill="#0369a1" />
      </g>
    </svg>
  </div>
);

export const PizzaVisual: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative w-full h-full overflow-hidden bg-gradient-to-br from-[#241d1a] via-[#1a1615] to-[#121316] flex items-center justify-center ${className}`}>
    {/* Warm Glow */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/20 via-orange-600/10 to-transparent pointer-events-none" />
    
    <svg viewBox="0 0 400 300" className="w-full h-full max-h-72 object-contain select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="crustGrad" cx="50%" cy="50%" r="50%">
          <stop offset="75%" stopColor="#f59e0b" />
          <stop offset="90%" stopColor="#d97706" />
          <stop offset="100%" stopColor="#92400e" />
        </radialGradient>
        <radialGradient id="cheeseGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="60%" stopColor="#fde047" />
          <stop offset="100%" stopColor="#eab308" />
        </radialGradient>
        <radialGradient id="pepGrad" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#f87171" />
          <stop offset="70%" stopColor="#dc2626" />
          <stop offset="100%" stopColor="#991b1b" />
        </radialGradient>
      </defs>

      {/* Dark Slate Platter */}
      <ellipse cx="200" cy="160" rx="140" ry="85" fill="#18181b" stroke="#3f3f46" strokeWidth="2" />
      <ellipse cx="200" cy="160" rx="130" ry="78" fill="#27272a" />

      {/* Pizza Base with Golden Crust */}
      <ellipse cx="200" cy="155" rx="115" ry="68" fill="url(#crustGrad)" />
      {/* Melted Cheese Surface */}
      <ellipse cx="200" cy="155" rx="100" ry="58" fill="url(#cheeseGrad)" />

      {/* Pizza Slices Cut Lines */}
      <line x1="200" y1="97" x2="200" y2="213" stroke="#b45309" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.6" />
      <line x1="100" y1="155" x2="300" y2="155" stroke="#b45309" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.6" />
      <line x1="125" y1="110" x2="275" y2="200" stroke="#b45309" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.6" />
      <line x1="125" y1="200" x2="275" y2="110" stroke="#b45309" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.6" />

      {/* Pepperoni / Toppings */}
      <ellipse cx="160" cy="135" rx="14" ry="9" fill="url(#pepGrad)" />
      <ellipse cx="230" cy="140" rx="15" ry="10" fill="url(#pepGrad)" />
      <ellipse cx="190" cy="170" rx="16" ry="10" fill="url(#pepGrad)" />
      <ellipse cx="240" cy="175" rx="13" ry="8" fill="url(#pepGrad)" />
      <ellipse cx="150" cy="165" rx="14" ry="9" fill="url(#pepGrad)" />
      <ellipse cx="200" cy="120" rx="14" ry="9" fill="url(#pepGrad)" />

      {/* Fresh Basil Leaves */}
      <path d="M175 145 Q185 138 188 148 Q182 153 175 145 Z" fill="#22c55e" />
      <path d="M215 155 Q225 150 226 160 Q218 163 215 155 Z" fill="#16a34a" />
      <path d="M175 178 Q182 172 185 180 Q178 183 175 178 Z" fill="#22c55e" />
      <path d="M210 130 Q218 125 220 133 Q214 135 210 130 Z" fill="#15803d" />

      {/* Olives / Bell peppers */}
      <circle cx="178" cy="125" r="4" fill="#090a0f" stroke="#334155" strokeWidth="1.5" />
      <circle cx="220" cy="170" r="4" fill="#090a0f" stroke="#334155" strokeWidth="1.5" />
      <path d="M135 145 Q140 140 145 143" stroke="#e11d48" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M260 155 Q265 150 270 154" stroke="#e11d48" strokeWidth="2.5" strokeLinecap="round" />

      {/* Rising Savory Steam Lines */}
      <path d="M170 100 Q165 85 175 70" stroke="#fef08a" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M200 90 Q205 75 195 60" stroke="#fef08a" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M230 100 Q235 85 225 70" stroke="#fef08a" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    </svg>
  </div>
);

export const SnacksVisual: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative w-full h-full overflow-hidden bg-gradient-to-br from-[#231f18] via-[#1a1714] to-[#121316] flex items-center justify-center ${className}`}>
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/20 via-yellow-600/10 to-transparent pointer-events-none" />
    
    <svg viewBox="0 0 400 300" className="w-full h-full max-h-72 object-contain select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fryGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
        <linearGradient id="sauceRed" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f87171" />
          <stop offset="100%" stopColor="#b91c1c" />
        </linearGradient>
      </defs>

      {/* Serving Board */}
      <rect x="70" y="170" width="260" height="40" rx="12" fill="#292524" stroke="#44403c" strokeWidth="2" />

      {/* French Fries Basket / Container */}
      <g transform="translate(110, 80)">
        {/* Crispy French Fries sticking up */}
        <rect x="15" y="10" width="7" height="60" rx="2" fill="url(#fryGrad)" transform="rotate(-15 15 10)" />
        <rect x="28" y="5" width="8" height="65" rx="2" fill="url(#fryGrad)" transform="rotate(-5 28 5)" />
        <rect x="42" y="2" width="7.5" height="70" rx="2" fill="url(#fryGrad)" transform="rotate(5 42 2)" />
        <rect x="55" y="8" width="7" height="65" rx="2" fill="url(#fryGrad)" transform="rotate(12 55 8)" />
        <rect x="68" y="15" width="8" height="55" rx="2" fill="url(#fryGrad)" transform="rotate(20 68 15)" />
        <rect x="22" y="18" width="7" height="55" rx="2" fill="url(#fryGrad)" transform="rotate(-8 22 18)" />
        <rect x="36" y="12" width="7.5" height="60" rx="2" fill="url(#fryGrad)" transform="rotate(2 36 12)" />
        <rect x="50" y="14" width="7" height="58" rx="2" fill="url(#fryGrad)" transform="rotate(10 50 14)" />

        {/* Modern Black Steel Mesh Cone Container */}
        <path d="M10 50 L25 110 H65 L80 50 Z" fill="#18181b" stroke="#06b6d4" strokeWidth="1.5" />
        {/* Mesh grid lines */}
        <path d="M15 65 L75 65 M18 80 L72 80 M22 95 L68 95" stroke="#38bdf8" strokeWidth="0.8" opacity="0.6" />
      </g>

      {/* Dipping Sauce Cups (Ketchup & Cheese Dip) */}
      <g transform="translate(225, 135)">
        {/* Red Ketchup cup */}
        <ellipse cx="25" cy="40" rx="22" ry="10" fill="#1c1917" stroke="#57534e" strokeWidth="1.5" />
        <ellipse cx="25" cy="38" rx="18" ry="7" fill="url(#sauceRed)" />
        
        {/* Mayo / Cheese Dip cup */}
        <g transform="translate(45, -15)">
          <ellipse cx="25" cy="40" rx="20" ry="9" fill="#1c1917" stroke="#57534e" strokeWidth="1.5" />
          <ellipse cx="25" cy="38" rx="16" ry="6" fill="#fef08a" />
          <circle cx="23" cy="37" r="1.5" fill="#15803d" /> {/* herb fleck */}
          <circle cx="27" cy="39" r="1" fill="#15803d" />
        </g>
      </g>

      {/* Crispy Garlic Bread / Sliders on side */}
      <g transform="translate(210, 160)">
        <ellipse cx="20" cy="15" rx="25" ry="12" fill="#d97706" stroke="#92400e" strokeWidth="1" />
        <ellipse cx="20" cy="13" rx="22" ry="9" fill="#fbbf24" />
        <path d="M10 12 Q20 8 30 13" stroke="#15803d" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  </div>
);

export const DrinksVisual: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative w-full h-full overflow-hidden bg-gradient-to-br from-[#162127] via-[#131a1f] to-[#121316] flex items-center justify-center ${className}`}>
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/20 via-blue-600/10 to-transparent pointer-events-none" />
    
    <svg viewBox="0 0 400 300" className="w-full h-full max-h-72 object-contain select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shakeCoffee" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fef3c7" />
          <stop offset="20%" stopColor="#d97706" />
          <stop offset="70%" stopColor="#78350f" />
          <stop offset="100%" stopColor="#451a03" />
        </linearGradient>
        <linearGradient id="mintMocktail" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#a7f3d0" />
          <stop offset="40%" stopColor="#34d399" />
          <stop offset="90%" stopColor="#059669" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
      </defs>

      {/* Bar Counter Surface */}
      <rect x="40" y="210" width="320" height="25" rx="4" fill="#0f172a" stroke="#1e293b" strokeWidth="1.5" />

      {/* Drink 1: Thick Cold Coffee / Frappe in Tall Glass */}
      <g transform="translate(110, 50)">
        {/* Glass Outline */}
        <path d="M25 40 L35 155 Q35 165 48 165 H62 Q75 165 75 155 L85 40 Z" fill="#0f172a" fillOpacity="0.3" stroke="#38bdf8" strokeWidth="1.5" />
        {/* Coffee Frappe Liquid */}
        <path d="M28 55 L37 152 Q37 162 48 162 H62 Q73 162 73 152 L82 55 Z" fill="url(#shakeCoffee)" />
        {/* Swirled Whipped Cream Top */}
        <path d="M25 45 C20 30 40 20 55 18 C70 20 90 30 85 45 C75 50 35 50 25 45 Z" fill="#fffbeb" />
        <path d="M40 28 C45 15 65 15 70 28" stroke="#d97706" strokeWidth="1.5" fill="none" /> {/* Caramel drizzle */}
        {/* Chocolate Straw */}
        <line x1="68" y1="5" x2="48" y2="120" stroke="#0284c7" strokeWidth="4" strokeLinecap="round" />
        <line x1="68" y1="5" x2="48" y2="120" stroke="#ffffff" strokeWidth="2" strokeDasharray="6,6" strokeLinecap="round" />
      </g>

      {/* Drink 2: Chilled Mojito / Mocktail with Ice & Lemon */}
      <g transform="translate(205, 75)">
        {/* Glass Tumbler */}
        <path d="M20 30 L30 130 Q30 138 42 138 H68 Q80 138 80 130 L90 30 Z" fill="#0f172a" fillOpacity="0.2" stroke="#34d399" strokeWidth="1.5" />
        {/* Green Refreshing Liquid */}
        <path d="M22 45 L32 128 Q32 135 42 135 H68 Q78 135 78 128 L88 45 Z" fill="url(#mintMocktail)" opacity="0.85" />
        
        {/* Ice Cubes floating inside */}
        <rect x="40" y="60" width="18" height="18" rx="3" fill="#ffffff" fillOpacity="0.4" stroke="#ffffff" strokeWidth="0.8" />
        <rect x="52" y="85" width="16" height="16" rx="3" fill="#ffffff" fillOpacity="0.35" stroke="#ffffff" strokeWidth="0.8" />
        <rect x="35" y="100" width="15" height="15" rx="3" fill="#ffffff" fillOpacity="0.3" stroke="#ffffff" strokeWidth="0.8" />

        {/* Mint leaves floating */}
        <path d="M45 50 Q55 42 58 52 Q50 56 45 50 Z" fill="#14532d" />
        <path d="M60 70 Q68 64 70 72 Q64 75 60 70 Z" fill="#14532d" />

        {/* Lemon Slice perched on rim */}
        <g transform="translate(75, 20)">
          <circle cx="12" cy="12" r="14" fill="#facc15" stroke="#ca8a04" strokeWidth="1" />
          <circle cx="12" cy="12" r="11" fill="#fef08a" />
          {/* Segments */}
          <line x1="12" y1="3" x2="12" y2="21" stroke="#eab308" strokeWidth="0.8" />
          <line x1="3" y1="12" x2="21" y2="12" stroke="#eab308" strokeWidth="0.8" />
        </g>

        {/* Green Straw */}
        <line x1="45" y1="10" x2="62" y2="115" stroke="#10b981" strokeWidth="3.5" strokeLinecap="round" />
      </g>
    </svg>
  </div>
);
