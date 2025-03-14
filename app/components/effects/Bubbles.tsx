import React from 'react';

export default function Bubbles() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* ===== UNDERLAY BUBBLES (z-4) ===== */}
      {/* These bubbles stay in place as user scrolls */}
      <div className="relative w-full h-full pointer-events-none z-4">
        <div className="relative w-full h-full">
          {/* First section bubbles */}
          <div style={{ top: '12.7%', right: '13.3%' }} className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400/12 float-medium delay-5-5"></div>
          <div style={{ top: '24.8%', right: '31.7%' }} className="absolute w-2 h-2 rounded-full bg-cyan-300/10 float-slow delay-4-5"></div>
          <div style={{ top: '37.3%', right: '52.9%' }} className="absolute w-0.75 h-0.75 rounded-full bg-cyan-400/15 float-fast delay-6"></div>
          <div style={{ top: '51.6%', right: '71.4%' }} className="absolute w-1 h-1 rounded-full bg-cyan-300/12 float-medium delay-7"></div>
          <div style={{ top: '17.3%', left: '23.7%' }} className="absolute w-1.25 h-1.25 rounded-full border border-cyan-400/20 float-slow delay-3-5"></div>
          <div style={{ top: '33.9%', left: '42.3%' }} className="absolute w-1.75 h-1.75 rounded-full border border-emerald-300/15 float-medium delay-2"></div>
          
          {/* Second section bubbles */}
          <div style={{ top: '62.7%', right: '44.3%' }} className="absolute w-2.5 h-2.5 rounded-full bg-cyan-300/15 float-fast delay-4"></div>
          <div style={{ top: '78.2%', right: '64.7%' }} className="absolute w-1.75 h-1.75 rounded-full bg-cyan-400/12 float-medium delay-3"></div>
          <div style={{ top: '69.4%', left: '37.8%' }} className="absolute w-2.25 h-2.25 rounded-full border border-cyan-300/18 float-slow delay-5"></div>
          <div style={{ top: '73.1%', left: '58.2%' }} className="absolute w-1.5 h-1.5 rounded-full border border-emerald-200/14 float-fast delay-6-5"></div>
          
          {/* Third section bubbles */}
          <div style={{ top: '87.3%', right: '27.9%' }} className="absolute w-2 h-2 rounded-full bg-cyan-300/10 float-slow delay-2"></div>
          <div style={{ top: '93.8%', right: '47.3%' }} className="absolute w-0.5 h-0.5 rounded-full bg-cyan-400/15 float-fast delay-1"></div>
          <div style={{ top: '89.6%', right: '67.2%' }} className="absolute w-1 h-1 rounded-full bg-cyan-300/12 float-medium delay-3-5"></div>
          <div style={{ top: '91.7%', left: '33.9%' }} className="absolute w-1.25 h-1.25 rounded-full border border-cyan-400/16 float-slow delay-4"></div>
          <div style={{ top: '96.3%', left: '53.7%' }} className="absolute w-1.75 h-1.75 rounded-full border border-emerald-300/14 float-medium delay-2-5"></div>
          
          {/* Fourth section bubbles */}
          <div style={{ top: '103.7%', left: '9.3%' }} className="absolute w-1.5 h-1.5 rounded-full bg-emerald-300/15 float-fast delay-6"></div>
          <div style={{ top: '108.4%', right: '19.7%' }} className="absolute w-2 h-2 rounded-full bg-cyan-400/10 float-slow delay-2-5"></div>
          <div style={{ top: '112.9%', left: '29.3%' }} className="absolute w-2.5 h-2.5 rounded-full bg-emerald-200/12 float-medium delay-7"></div>
          <div style={{ top: '117.6%', right: '39.4%' }} className="absolute w-1.75 h-1.75 rounded-full bg-cyan-300/15 float-fast delay-4-5"></div>
          <div style={{ top: '121.3%', left: '49.7%' }} className="absolute w-2 h-2 rounded-full bg-emerald-300/10 float-slow delay-1-5"></div>
          <div style={{ top: '126.8%', right: '59.3%' }} className="absolute w-2.25 h-2.25 rounded-full bg-cyan-400/12 float-medium delay-5"></div>
          <div style={{ top: '114.2%', left: '63.8%' }} className="absolute w-2.25 h-2.25 rounded-full border border-cyan-300/20 float-slow delay-3"></div>
          <div style={{ top: '119.7%', right: '73.2%' }} className="absolute w-1.5 h-1.5 rounded-full border border-emerald-200/18 float-fast delay-4"></div>
        </div>
      </div>

      {/* ===== BACKGROUND BUBBLES (z-20) ===== */}
      {/* Background bubbles (behind text elements) */}
      <div className="relative w-full h-full overflow-hidden pointer-events-none z-20">
        <div className="relative w-full h-full">
          {/* Very top section bubbles (extremely transparent) */}
          <div style={{ top: '13.7%', right: '27.3%' }} className="absolute w-2 h-2 rounded-full bg-cyan-400/10 float-medium delay-1"></div>
          <div style={{ top: '18.9%', left: '32.7%' }} className="absolute w-1.75 h-1.75 rounded-full bg-emerald-300/8 float-slow delay-2"></div>
          <div style={{ top: '23.4%', right: '41.9%' }} className="absolute w-1.5 h-1.5 rounded-full border border-cyan-400/12 float-fast delay-3"></div>
          
          {/* Top section bubbles (very transparent) */}
          <div style={{ top: '37.8%', right: '44.3%' }} className="absolute w-2.5 h-2.5 rounded-full bg-cyan-300/20 float-slow delay-6-5"></div>
          <div style={{ top: '42.3%', left: '53.7%' }} className="absolute w-2.25 h-2.25 rounded-full bg-emerald-200/15 float-medium delay-5-5"></div>
          <div style={{ top: '47.9%', right: '62.8%' }} className="absolute w-1.75 h-1.75 rounded-full border border-cyan-300/18 float-fast delay-4-5"></div>
          
          {/* Upper middle section bubbles */}
          <div style={{ top: '63.7%', right: '49.3%' }} className="absolute w-2 h-2 rounded-full bg-cyan-400/35 float-fast delay-3"></div>
          <div style={{ top: '68.2%', left: '57.8%' }} className="absolute w-2.25 h-2.25 rounded-full bg-emerald-300/30 float-medium delay-2"></div>
          <div style={{ top: '72.9%', right: '66.3%' }} className="absolute w-1.5 h-1.5 rounded-full border border-cyan-400/25 float-slow delay-1"></div>
          
          {/* Lower section bubbles */}
          <div style={{ top: '83.7%', left: '38.9%' }} className="absolute w-2.25 h-2.25 rounded-full bg-cyan-300/25 float-medium delay-4"></div>
          <div style={{ top: '87.3%', right: '47.2%' }} className="absolute w-1.75 h-1.75 rounded-full bg-emerald-200/20 float-slow delay-5"></div>
          <div style={{ top: '92.8%', left: '56.7%' }} className="absolute w-2 h-2 rounded-full border border-cyan-300/22 float-fast delay-6"></div>
        </div>
      </div>

      {/* ===== MIDGROUND BUBBLES (z-30) ===== */}
      {/* Midground bubbles (between text elements) */}
      <div className="relative w-full h-full overflow-hidden pointer-events-none z-30">
        <div className="relative w-full h-full">
          {/* Very top section bubbles (extremely transparent) */}
          <div style={{ top: '17.3%', right: '37.8%' }} className="absolute w-2.25 h-2.25 rounded-full bg-cyan-300/15 float-fast delay-2-5"></div>
          <div style={{ top: '22.7%', left: '43.2%' }} className="absolute w-1.75 h-1.75 rounded-full bg-emerald-200/12 float-medium delay-3-5"></div>
          <div style={{ top: '27.9%', right: '52.7%' }} className="absolute w-2 h-2 rounded-full border border-cyan-400/18 float-slow delay-4-5"></div>
          
          {/* Top section bubbles (very transparent) */}
          <div style={{ top: '43.7%', right: '44.3%' }} className="absolute w-2.75 h-2.75 rounded-full bg-cyan-300/25 float-slow delay-6-5"></div>
          <div style={{ top: '48.2%', left: '53.8%' }} className="absolute w-2.25 h-2.25 rounded-full bg-emerald-300/20 float-medium delay-5"></div>
          <div style={{ top: '52.9%', right: '62.3%' }} className="absolute w-1.5 h-1.5 rounded-full border border-cyan-300/22 float-fast delay-3-5"></div>
          
          {/* Upper middle section bubbles */}
          <div style={{ top: '67.3%', right: '49.7%' }} className="absolute w-2.25 h-2.25 rounded-full bg-cyan-400/35 float-fast delay-3"></div>
          <div style={{ top: '72.8%', left: '58.3%' }} className="absolute w-2.5 h-2.5 rounded-full bg-emerald-200/30 float-medium delay-2"></div>
          <div style={{ top: '77.4%', right: '67.9%' }} className="absolute w-1.75 h-1.75 rounded-full border border-cyan-400/28 float-slow delay-1"></div>
          
          {/* Lower section bubbles */}
          <div style={{ top: '87.3%', left: '39.7%' }} className="absolute w-2.5 h-2.5 rounded-full bg-cyan-300/30 float-medium delay-4"></div>
          <div style={{ top: '92.8%', right: '48.3%' }} className="absolute w-2 h-2 rounded-full bg-emerald-300/25 float-slow delay-5"></div>
          <div style={{ top: '97.4%', left: '57.9%' }} className="absolute w-1.5 h-1.5 rounded-full border border-cyan-300/28 float-fast delay-6"></div>
        </div>
      </div>

      {/* ===== FOREGROUND BUBBLES (z-40) ===== */}
      {/* Foreground bubbles (in front of all elements) */}
      <div className="relative w-full h-full overflow-hidden pointer-events-none z-40">
        <div className="relative w-full h-full">
          {/* Very top section bubbles (extremely transparent) */}
          <div style={{ top: '19.7%', right: '37.3%' }} className="absolute w-2.25 h-2.25 rounded-full bg-cyan-300/8 float-fast delay-2-5"></div>
          <div style={{ top: '24.3%', left: '46.8%' }} className="absolute w-1.75 h-1.75 rounded-full bg-emerald-200/6 float-medium delay-3-5"></div>
          <div style={{ top: '29.8%', right: '56.3%' }} className="absolute w-2 h-2 rounded-full border border-cyan-400/10 float-slow delay-4-5"></div>
          
          {/* Top section bubbles (very transparent) */}
          <div style={{ top: '47.3%', right: '34.7%' }} className="absolute w-2.75 h-2.75 rounded-full bg-cyan-300/18 float-slow delay-6-5"></div>
          <div style={{ top: '52.8%', left: '43.2%' }} className="absolute w-2.25 h-2.25 rounded-full bg-emerald-300/15 float-medium delay-5"></div>
          <div style={{ top: '57.4%', right: '52.9%' }} className="absolute w-1.5 h-1.5 rounded-full border border-cyan-300/16 float-fast delay-3-5"></div>
          
          {/* Upper middle section bubbles */}
          <div style={{ top: '68.7%', right: '59.3%' }} className="absolute w-2.25 h-2.25 rounded-full bg-cyan-400/40 float-fast delay-3"></div>
          <div style={{ top: '73.2%', left: '67.8%' }} className="absolute w-2.5 h-2.5 rounded-full bg-emerald-200/35 float-medium delay-2"></div>
          <div style={{ top: '77.9%', right: '76.3%' }} className="absolute w-1.75 h-1.75 rounded-full border border-cyan-400/30 float-slow delay-1"></div>
          
          {/* Middle section bubbles */}
          <div style={{ top: '83.7%', right: '24.3%' }} className="absolute w-2 h-2 rounded-full bg-cyan-400/50 shadow-sm shadow-cyan-400/10 float-medium delay-6-5"></div>
          <div style={{ top: '87.3%', right: '44.7%' }} className="absolute w-2.75 h-2.75 rounded-full bg-cyan-300/55 shadow-sm shadow-cyan-300/10 float-fast delay-7"></div>
          <div style={{ top: '92.8%', left: '74.3%' }} className="absolute w-3.25 h-3.25 rounded-full bg-emerald-200/65 shadow-sm shadow-emerald-200/15 float-fast delay-5-5"></div>
          <div style={{ top: '88.4%', left: '33.7%' }} className="absolute w-2.5 h-2.5 rounded-full border-2 border-cyan-400/45 float-medium delay-4-5"></div>
          <div style={{ top: '93.7%', right: '63.2%' }} className="absolute w-2 h-2 rounded-full border-2 border-emerald-300/50 float-slow delay-3-5"></div>
          
          {/* Lower middle section bubbles */}
          <div style={{ top: '97.3%', left: '19.7%' }} className="absolute w-2.5 h-2.5 rounded-full bg-emerald-300/70 shadow-sm shadow-emerald-300/20 float-slow delay-6"></div>
          <div style={{ top: '102.8%', right: '29.3%' }} className="absolute w-2.25 h-2.25 rounded-full bg-cyan-400/70 shadow-sm shadow-cyan-400/20 float-fast delay-4-5"></div>
          <div style={{ top: '107.4%', left: '38.9%' }} className="absolute w-3 h-3 rounded-full border-2 border-emerald-200/60 shadow-sm shadow-emerald-200/15 float-medium delay-2-5"></div>
          <div style={{ top: '112.7%', right: '48.3%' }} className="absolute w-2.5 h-2.5 rounded-full border-2 border-cyan-300/65 shadow-sm shadow-cyan-300/15 float-slow delay-1-5"></div>
        </div>
      </div>

      {/* ===== VIEWPORT BUBBLES (z-35) ===== */}
      {/* Viewport-following bubbles - these will stay fixed in the viewport as user scrolls */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-35">
        <div className="relative w-full h-full">
          {/* Top section viewport bubbles */}
          <div style={{ top: '14.7%', right: '14.3%' }} className="absolute w-2 h-2 rounded-full bg-cyan-400/20 float-slow delay-4-5"></div>
          <div style={{ top: '19.3%', left: '23.8%' }} className="absolute w-1.75 h-1.75 rounded-full bg-emerald-300/18 float-medium delay-5-5"></div>
          <div style={{ top: '24.8%', right: '33.2%' }} className="absolute w-1.5 h-1.5 rounded-full border border-cyan-400/22 float-fast delay-6-5"></div>
          
          {/* Middle section viewport bubbles */}
          <div style={{ top: '39.7%', right: '29.3%' }} className="absolute w-2.5 h-2.5 rounded-full bg-cyan-300/15 float-medium delay-3-5"></div>
          <div style={{ top: '49.3%', left: '69.7%' }} className="absolute w-1.75 h-1.75 rounded-full bg-emerald-300/20 float-slow delay-6"></div>
          <div style={{ top: '44.8%', left: '49.3%' }} className="absolute w-2.25 h-2.25 rounded-full border border-cyan-300/18 float-fast delay-4"></div>
          <div style={{ top: '54.7%', right: '59.8%' }} className="absolute w-2 h-2 rounded-full border border-emerald-200/22 float-medium delay-5"></div>
          
          {/* Lower section viewport bubbles */}
          <div style={{ top: '64.3%', right: '19.7%' }} className="absolute w-2 h-2 rounded-full bg-cyan-400/25 float-fast delay-2-5"></div>
          <div style={{ top: '74.7%', left: '39.3%' }} className="absolute w-2.5 h-2.5 rounded-full bg-emerald-200/20 float-medium delay-5"></div>
          <div style={{ top: '84.3%', right: '59.7%' }} className="absolute w-2 h-2 rounded-full bg-cyan-300/15 float-slow delay-3"></div>
          <div style={{ top: '69.8%', left: '29.7%' }} className="absolute w-1.75 h-1.75 rounded-full border border-cyan-400/22 float-fast delay-1-5"></div>
          <div style={{ top: '79.3%', right: '49.3%' }} className="absolute w-2.25 h-2.25 rounded-full border border-emerald-300/18 float-medium delay-2-5"></div>
          
          {/* Corner viewport bubbles */}
          <div style={{ top: '89.7%', right: '4.3%' }} className="absolute w-2 h-2 rounded-full bg-cyan-400/15 float-medium delay-1"></div>
          <div style={{ top: '59.3%', right: '84.7%' }} className="absolute w-2.5 h-2.5 rounded-full bg-cyan-300/20 float-fast delay-6-5"></div>
          <div style={{ top: '94.3%', left: '9.7%' }} className="absolute w-1.75 h-1.75 rounded-full border border-emerald-200/18 float-slow delay-3-5"></div>
          <div style={{ top: '7.8%', left: '89.3%' }} className="absolute w-2.25 h-2.25 rounded-full border border-cyan-400/15 float-medium delay-4-5"></div>
        </div>
      </div>
    </div>
  );
} 