import React from 'react';

export default function AtmosphericEffects() {
  return (
    <div className="relative left-0 w-full h-full overflow-hidden pointer-events-none z-25">
      {/* Atmospheric elements with glows and color variations */}
      <div className="absolute inset-0 w-full h-full">
        {/* Main viewport subtle glows - repositioned to start after down arrow */}
        <div className="absolute top-[3%] left-[20%] w-[25%] h-[25%] rounded-full bg-cyan-700/[0.12] blur-3xl float-medium delay-2-5 glow-pulse"></div>
        <div className="absolute top-[5.5%] left-[30%] w-[30%] h-[30%] rounded-full bg-cyan-700/[0.15] blur-3xl float-slow delay-5-5 glow-pulse-slow"></div>
        <div className="absolute top-[8%] right-[25%] w-[35%] h-[35%] rounded-full bg-emerald-600/[0.14] blur-3xl float-medium delay-3-5 glow-pulse"></div>
        <div className="absolute top-[10.5%] left-[40%] w-[28%] h-[28%] rounded-full bg-cyan-700/[0.18] blur-3xl float-fast delay-1-5 glow-pulse"></div>

        {/* Top section atmospheric elements - repositioned with reduced intensity */}
        <div className="absolute top-[4.25%] left-[10%] w-[35%] h-[35%] rounded-full bg-cyan-700/[0.14] blur-3xl float-slow delay-2-5 glow-pulse-slow"></div>
        <div className="absolute top-[6.75%] right-[15%] w-[40%] h-[40%] rounded-full bg-emerald-600/[0.12] blur-3xl float-medium delay-5 glow-pulse"></div>
        <div className="absolute top-[9.25%] left-[25%] w-[30%] h-[30%] rounded-full bg-cyan-800/[0.16] blur-3xl float-fast delay-1-5 glow-pulse"></div>

        {/* Glows for About Me section transition - with reduced intensity and moved down */}
        <div className="absolute top-[1.75%] right-[20%] w-[45%] h-[45%] rounded-full bg-emerald-600/[0.15] blur-3xl float-medium delay-3 glow-pulse"></div>
        <div className="absolute top-[2.5%] left-[15%] w-[40%] h-[40%] rounded-full bg-cyan-700/[0.18] blur-3xl float-slow delay-6-5 glow-pulse-slow"></div>
        <div className="absolute top-[3.5%] right-[30%] w-[35%] h-[35%] rounded-full bg-emerald-700/[0.14] blur-3xl float-fast delay-2 glow-pulse"></div>

        {/* Brighter glow highlight for About Me section - moved down and reduced intensity */}
        <div className="absolute top-[5.5%] left-[40%] w-[50%] h-[50%] rounded-full bg-white/[0.06] blur-3xl float-medium delay-4-5 glow-pulse"></div>
        <div className="absolute top-[6.75%] right-[35%] w-[30%] h-[30%] rounded-full bg-white/[0.08] blur-3xl float-slow delay-1-5 glow-pulse-slow"></div>
        <div className="absolute top-[8%] left-[45%] w-[20%] h-[20%] rounded-full bg-white/[0.10] blur-2xl float-fast delay-5 glow-pulse"></div>

        {/* Light rays - repositioned and reduced intensity */}
        <div className="absolute top-[4.25%] left-1/5 w-[28%] h-[60%] bg-gradient-to-t from-cyan-900/20 to-transparent rotate-[12deg] blur-3xl float-medium delay-2 glow-pulse"></div>
        <div className="absolute top-[6.75%] right-1/4 w-[32%] h-[70%] bg-gradient-to-t from-emerald-800/20 to-transparent -rotate-[15deg] blur-3xl float-slow delay-5-5 glow-pulse-slow"></div>

        {/* Additional light rays for About Me section - moved down and reduced intensity */}
        <div className="absolute top-[3%] right-1/3 w-[35%] h-[80%] bg-gradient-to-t from-cyan-800/20 to-transparent rotate-[8deg] blur-3xl float-medium delay-3 glow-pulse"></div>
        <div className="absolute top-[5.5%] left-1/3 w-[30%] h-[75%] bg-gradient-to-t from-emerald-700/20 to-transparent -rotate-[10deg] blur-3xl float-slow delay-6 glow-pulse-slow"></div>

        {/* Middle section atmospheric elements - repositioned */}
        <div className="absolute top-[11.75%] right-[20%] w-[45%] h-[45%] rounded-full bg-emerald-700/[0.18] blur-3xl float-medium delay-3-5 glow-pulse"></div>
        <div className="absolute top-[15.5%] left-[15%] w-[38%] h-[38%] rounded-full bg-cyan-700/[0.22] blur-3xl float-slow delay-6 glow-pulse-slow"></div>

        {/* Bottom section atmospheric elements - repositioned */}
        <div className="absolute top-[20.5%] right-[25%] w-[42%] h-[42%] rounded-full bg-emerald-600/[0.20] blur-3xl float-medium delay-4 glow-pulse"></div>
        <div className="absolute top-[24.25%] left-[30%] w-[50%] h-[50%] rounded-full bg-cyan-800/[0.18] blur-3xl float-slow delay-7-5 glow-pulse-slow"></div>

        {/* Light rays - repositioned and reduced intensity */}
        <div className="absolute top-[1.75%] left-1/5 w-[28%] h-[60%] bg-gradient-to-t from-cyan-900/20 to-transparent rotate-[12deg] blur-3xl float-medium delay-2 glow-pulse"></div>
        <div className="absolute top-[4.25%] right-1/4 w-[32%] h-[70%] bg-gradient-to-t from-emerald-800/20 to-transparent -rotate-[15deg] blur-3xl float-slow delay-5-5 glow-pulse-slow"></div>

        {/* Additional light rays for About Me section - moved down and reduced intensity */}
        <div className="absolute top-[0.5%] right-1/3 w-[35%] h-[80%] bg-gradient-to-t from-cyan-800/20 to-transparent rotate-[8deg] blur-3xl float-medium delay-3 glow-pulse"></div>
        <div className="absolute top-[3%] left-1/3 w-[30%] h-[75%] bg-gradient-to-t from-emerald-700/20 to-transparent -rotate-[10deg] blur-3xl float-slow delay-6 glow-pulse-slow"></div>

        {/* Subtle light rays - repositioned */}
        <div className="absolute top-[13%] left-1/4 w-[30%] h-[70%] bg-gradient-to-t from-cyan-900/30 to-transparent rotate-[15deg] blur-3xl float-medium delay-1 glow-pulse"></div>
        <div className="absolute top-[18%] right-1/5 w-[25%] h-[60%] bg-gradient-to-t from-cyan-800/30 to-transparent -rotate-[20deg] blur-3xl float-slow delay-5 glow-pulse-slow"></div>

        {/* Subtle color variations - repositioned */}
        <div className="absolute top-[15.5%] left-[10%] w-[40%] h-[40%] rounded-full bg-emerald-700/[0.20] blur-3xl float-medium delay-3-5 glow-pulse"></div>
        <div className="absolute top-[20.5%] right-[15%] w-[35%] h-[35%] rounded-full bg-cyan-800/[0.20] blur-3xl float-slow delay-6-5 glow-pulse-slow"></div>
        <div className="absolute top-[28%] left-[30%] w-[50%] h-[50%] rounded-full bg-emerald-600/[0.18] blur-3xl float-medium delay-2-5 glow-pulse"></div>

        {/* Larger distant glows - repositioned */}
        <div className="absolute top-[23%] left-[60%] w-[15%] h-[15%] rounded-full bg-cyan-800/[0.18] blur-3xl float-medium delay-6 glow-pulse"></div>
        <div className="absolute top-[33%] right-[50%] w-[20%] h-[20%] rounded-full bg-emerald-700/[0.18] blur-3xl float-slow delay-3 glow-pulse-slow"></div>

        {/* Additional color variations - repositioned */}
        <div className="absolute top-[35.5%] left-[15%] w-[45%] h-[45%] rounded-full bg-cyan-700/[0.20] blur-3xl float-medium delay-7-5 glow-pulse"></div>
        <div className="absolute top-[40.5%] right-[20%] w-[40%] h-[40%] rounded-full bg-emerald-600/[0.18] blur-3xl float-slow delay-4 glow-pulse-slow"></div>
        <div className="absolute top-[45.5%] left-[25%] w-[35%] h-[35%] rounded-full bg-cyan-800/[0.20] blur-3xl float-medium delay-1 glow-pulse"></div>

        {/* Additional light rays - repositioned */}
        <div className="absolute top-[38%] right-1/4 w-[35%] h-[80%] bg-gradient-to-t from-emerald-800/30 to-transparent -rotate-[25deg] blur-3xl float-slow delay-5-5 glow-pulse-slow"></div>
        <div className="absolute top-[43%] left-1/5 w-[30%] h-[70%] bg-gradient-to-t from-cyan-900/30 to-transparent rotate-[20deg] blur-3xl float-medium delay-2-5 glow-pulse"></div>

        {/* Additional larger glows - repositioned */}
        <div className="absolute top-[40.5%] left-[10%] w-[25%] h-[25%] rounded-full bg-cyan-700/[0.18] blur-3xl float-medium delay-5 glow-pulse"></div>
        <div className="absolute top-[48%] right-[15%] w-[30%] h-[30%] rounded-full bg-emerald-600/[0.18] blur-3xl float-slow delay-2 glow-pulse-slow"></div>
        
        {/* New bottom section glows */}
        <div className="absolute top-[55%] left-[25%] w-[38%] h-[38%] rounded-full bg-cyan-700/[0.16] blur-3xl float-medium delay-3 glow-pulse"></div>
        <div className="absolute top-[60%] right-[20%] w-[45%] h-[45%] rounded-full bg-emerald-600/[0.15] blur-3xl float-slow delay-5-5 glow-pulse-slow"></div>
        <div className="absolute top-[65%] left-[18%] w-[32%] h-[32%] rounded-full bg-cyan-800/[0.18] blur-3xl float-fast delay-2 glow-pulse"></div>
        
        {/* New bottom light rays */}
        <div className="absolute top-[58%] right-1/3 w-[30%] h-[75%] bg-gradient-to-t from-cyan-800/25 to-transparent rotate-[15deg] blur-3xl float-medium delay-4 glow-pulse"></div>
        <div className="absolute top-[62%] left-1/4 w-[35%] h-[80%] bg-gradient-to-t from-emerald-700/25 to-transparent -rotate-[12deg] blur-3xl float-slow delay-6 glow-pulse-slow"></div>
        
        {/* New bottom larger glows */}
        <div className="absolute top-[70%] right-[30%] w-[40%] h-[40%] rounded-full bg-cyan-700/[0.20] blur-3xl float-medium delay-2-5 glow-pulse"></div>
        <div className="absolute top-[75%] left-[35%] w-[35%] h-[35%] rounded-full bg-emerald-600/[0.18] blur-3xl float-slow delay-4-5 glow-pulse-slow"></div>
        <div className="absolute top-[80%] right-[25%] w-[28%] h-[28%] rounded-full bg-cyan-800/[0.22] blur-3xl float-fast delay-1-5 glow-pulse"></div>
        
        {/* New bottom subtle color variations */}
        <div className="absolute top-[85%] left-[20%] w-[45%] h-[45%] rounded-full bg-emerald-700/[0.16] blur-3xl float-medium delay-3-5 glow-pulse"></div>
        <div className="absolute top-[90%] right-[15%] w-[38%] h-[38%] rounded-full bg-cyan-700/[0.14] blur-3xl float-slow delay-5 glow-pulse-slow"></div>
      </div>
    </div>
  );
}
