import React from 'react';

export default function LowerBubbles() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* ===== LOWER BACKGROUND BUBBLES (z-15) ===== */}
      {/* Background bubbles for lower sections (behind text elements) */}
      <div className="relative w-full h-full overflow-hidden pointer-events-none z-15">
        <div className="relative w-full h-full">
          {/* About section bubbles (extremely transparent) */}
          <div style={{ top: '8.7%', right: '22.3%' }} className="absolute w-2 h-2 rounded-full bg-cyan-400/8 float-medium delay-1"></div>
          <div style={{ top: '11.9%', left: '36.7%' }} className="absolute w-1.75 h-1.75 rounded-full bg-emerald-300/6 float-slow delay-2"></div>
          <div style={{ top: '14.4%', right: '45.9%' }} className="absolute w-1.5 h-1.5 rounded-full border border-cyan-400/10 float-fast delay-3"></div>
          <div style={{ top: '4.3%', left: '67.8%' }} className="absolute w-2.25 h-2.25 rounded-full bg-emerald-200/7 float-medium delay-4"></div>
          <div style={{ top: '9.2%', right: '78.3%' }} className="absolute w-1.25 h-1.25 rounded-full border border-cyan-300/9 float-slow delay-5"></div>
          
          {/* Projects section bubbles (very transparent) */}
          <div style={{ top: '22.8%', right: '41.3%' }} className="absolute w-2.5 h-2.5 rounded-full bg-cyan-300/12 float-slow delay-6-5"></div>
          <div style={{ top: '25.3%', left: '52.7%' }} className="absolute w-2.25 h-2.25 rounded-full bg-emerald-200/10 float-medium delay-5-5"></div>
          <div style={{ top: '28.9%', right: '63.8%' }} className="absolute w-1.75 h-1.75 rounded-full border border-cyan-300/14 float-fast delay-4-5"></div>
          <div style={{ top: '19.4%', left: '27.9%' }} className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400/9 float-medium delay-3-5"></div>
          <div style={{ top: '26.7%', right: '18.3%' }} className="absolute w-2 h-2 rounded-full border border-emerald-300/11 float-slow delay-2-5"></div>
          
          {/* Skills section bubbles */}
          <div style={{ top: '38.7%', right: '47.3%' }} className="absolute w-2 h-2 rounded-full bg-cyan-400/15 float-fast delay-3"></div>
          <div style={{ top: '41.2%', left: '56.8%' }} className="absolute w-2.25 h-2.25 rounded-full bg-emerald-300/12 float-medium delay-2"></div>
          <div style={{ top: '43.9%', right: '65.3%' }} className="absolute w-1.5 h-1.5 rounded-full border border-cyan-400/18 float-slow delay-1"></div>
          <div style={{ top: '35.3%', left: '32.7%' }} className="absolute w-1.75 h-1.75 rounded-full bg-emerald-200/14 float-fast delay-6"></div>
          <div style={{ top: '40.8%', right: '23.9%' }} className="absolute w-2.25 h-2.25 rounded-full border border-cyan-300/16 float-medium delay-5"></div>
          
          {/* Contact section bubbles */}
          <div style={{ top: '53.7%', left: '37.9%' }} className="absolute w-2.25 h-2.25 rounded-full bg-cyan-300/18 float-medium delay-4"></div>
          <div style={{ top: '57.3%', right: '46.2%' }} className="absolute w-1.75 h-1.75 rounded-full bg-emerald-200/15 float-slow delay-5"></div>
          <div style={{ top: '59.8%', left: '55.7%' }} className="absolute w-2 h-2 rounded-full border border-cyan-300/20 float-fast delay-6"></div>
          <div style={{ top: '49.4%', right: '28.3%' }} className="absolute w-1.5 h-1.5 rounded-full bg-emerald-300/16 float-medium delay-7"></div>
          <div style={{ top: '55.9%', left: '19.7%' }} className="absolute w-2.25 h-2.25 rounded-full border border-cyan-400/18 float-slow delay-4-5"></div>
          
          {/* Footer area bubbles */}
          <div style={{ top: '68.7%', right: '33.3%' }} className="absolute w-2 h-2 rounded-full bg-cyan-400/10 float-medium delay-3"></div>
          <div style={{ top: '72.3%', left: '44.7%' }} className="absolute w-1.75 h-1.75 rounded-full bg-emerald-300/8 float-slow delay-4"></div>
          <div style={{ top: '75.8%', right: '55.9%' }} className="absolute w-1.5 h-1.5 rounded-full border border-cyan-400/12 float-fast delay-5"></div>
          <div style={{ top: '65.3%', left: '66.8%' }} className="absolute w-2.25 h-2.25 rounded-full bg-emerald-200/9 float-medium delay-6"></div>
          <div style={{ top: '70.2%', right: '77.3%' }} className="absolute w-1.25 h-1.25 rounded-full border border-cyan-300/11 float-slow delay-7"></div>
          
          {/* Extended area bubbles */}
          <div style={{ top: '83.7%', right: '29.3%' }} className="absolute w-2.5 h-2.5 rounded-full bg-cyan-300/14 float-slow delay-2-5"></div>
          <div style={{ top: '87.3%', left: '38.7%' }} className="absolute w-2.25 h-2.25 rounded-full bg-emerald-200/12 float-medium delay-3-5"></div>
          <div style={{ top: '90.9%', right: '47.8%' }} className="absolute w-1.75 h-1.75 rounded-full border border-cyan-300/16 float-fast delay-4-5"></div>
          <div style={{ top: '80.4%', left: '57.9%' }} className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400/11 float-medium delay-5-5"></div>
          <div style={{ top: '85.7%', right: '68.3%' }} className="absolute w-2 h-2 rounded-full border border-emerald-300/13 float-slow delay-6-5"></div>
        </div>
      </div>

      {/* ===== LOWER MIDGROUND BUBBLES (z-25) ===== */}
      {/* Midground bubbles for lower sections (between text elements) */}
      <div className="relative w-full h-full overflow-hidden pointer-events-none z-25">
        <div className="relative w-full h-full">
          {/* About section bubbles */}
          <div style={{ top: '10.3%', right: '36.8%' }} className="absolute w-2.25 h-2.25 rounded-full bg-cyan-300/20 float-fast delay-2-5"></div>
          <div style={{ top: '13.7%', left: '45.2%' }} className="absolute w-1.75 h-1.75 rounded-full bg-emerald-200/18 float-medium delay-3-5"></div>
          <div style={{ top: '16.9%', right: '54.7%' }} className="absolute w-2 h-2 rounded-full border border-cyan-400/22 float-slow delay-4-5"></div>
          <div style={{ top: '7.8%', left: '72.3%' }} className="absolute w-2.5 h-2.5 rounded-full bg-emerald-300/16 float-medium delay-5-5"></div>
          <div style={{ top: '11.4%', right: '83.7%' }} className="absolute w-1.75 h-1.75 rounded-full border border-cyan-300/24 float-fast delay-6-5"></div>
          
          {/* Projects section bubbles */}
          <div style={{ top: '26.7%', right: '43.3%' }} className="absolute w-2.75 h-2.75 rounded-full bg-cyan-300/25 float-slow delay-6-5"></div>
          <div style={{ top: '29.2%', left: '54.8%' }} className="absolute w-2.25 h-2.25 rounded-full bg-emerald-300/22 float-medium delay-5"></div>
          <div style={{ top: '31.9%', right: '64.3%' }} className="absolute w-1.5 h-1.5 rounded-full border border-cyan-300/28 float-fast delay-3-5"></div>
          <div style={{ top: '23.9%', left: '33.7%' }} className="absolute w-2 h-2 rounded-full bg-cyan-400/20 float-slow delay-2"></div>
          <div style={{ top: '29.3%', right: '24.8%' }} className="absolute w-2.5 h-2.5 rounded-full border border-emerald-200/26 float-medium delay-1"></div>
          
          {/* Skills section bubbles */}
          <div style={{ top: '40.3%', right: '48.7%' }} className="absolute w-2.25 h-2.25 rounded-full bg-cyan-400/30 float-fast delay-3"></div>
          <div style={{ top: '43.8%', left: '57.3%' }} className="absolute w-2.5 h-2.5 rounded-full bg-emerald-200/28 float-medium delay-2"></div>
          <div style={{ top: '46.4%', right: '66.9%' }} className="absolute w-1.75 h-1.75 rounded-full border border-cyan-400/32 float-slow delay-1"></div>
          <div style={{ top: '37.8%', left: '38.3%' }} className="absolute w-2 h-2 rounded-full bg-emerald-300/25 float-fast delay-6"></div>
          <div style={{ top: '43.2%', right: '29.7%' }} className="absolute w-1.5 h-1.5 rounded-full border border-cyan-300/30 float-medium delay-5"></div>
          
          {/* Contact section bubbles */}
          <div style={{ top: '55.3%', left: '38.7%' }} className="absolute w-2.5 h-2.5 rounded-full bg-cyan-300/35 float-medium delay-4"></div>
          <div style={{ top: '58.8%', right: '47.3%' }} className="absolute w-2 h-2 rounded-full bg-emerald-300/32 float-slow delay-5"></div>
          <div style={{ top: '61.4%', left: '56.9%' }} className="absolute w-1.5 h-1.5 rounded-full border border-cyan-300/38 float-fast delay-6"></div>
          <div style={{ top: '52.9%', right: '34.3%' }} className="absolute w-2.25 h-2.25 rounded-full bg-emerald-200/30 float-medium delay-7"></div>
          <div style={{ top: '57.2%', left: '25.7%' }} className="absolute w-1.75 h-1.75 rounded-full border border-cyan-400/34 float-slow delay-4-5"></div>
          
          {/* Footer area bubbles */}
          <div style={{ top: '70.3%', right: '39.8%' }} className="absolute w-2.25 h-2.25 rounded-full bg-cyan-300/28 float-fast delay-3-5"></div>
          <div style={{ top: '73.7%', left: '48.2%' }} className="absolute w-1.75 h-1.75 rounded-full bg-emerald-200/25 float-medium delay-4-5"></div>
          <div style={{ top: '76.9%', right: '57.7%' }} className="absolute w-2 h-2 rounded-full border border-cyan-400/30 float-slow delay-5-5"></div>
          <div style={{ top: '67.8%', left: '67.3%' }} className="absolute w-2.5 h-2.5 rounded-full bg-emerald-300/22 float-medium delay-6-5"></div>
          <div style={{ top: '72.4%', right: '76.7%' }} className="absolute w-1.75 h-1.75 rounded-full border border-cyan-300/32 float-fast delay-7-5"></div>
          
          {/* Extended area bubbles */}
          <div style={{ top: '85.7%', right: '42.3%' }} className="absolute w-2.75 h-2.75 rounded-full bg-cyan-300/30 float-slow delay-1-5"></div>
          <div style={{ top: '88.2%', left: '51.8%' }} className="absolute w-2.25 h-2.25 rounded-full bg-emerald-300/28 float-medium delay-2-5"></div>
          <div style={{ top: '90.9%', right: '61.3%' }} className="absolute w-1.5 h-1.5 rounded-full border border-cyan-300/34 float-fast delay-3-5"></div>
          <div style={{ top: '82.9%', left: '71.7%' }} className="absolute w-2 h-2 rounded-full bg-cyan-400/26 float-slow delay-4-5"></div>
          <div style={{ top: '87.3%', right: '81.8%' }} className="absolute w-2.5 h-2.5 rounded-full border border-emerald-200/32 float-medium delay-5-5"></div>
        </div>
      </div>

      {/* ===== LOWER FOREGROUND BUBBLES (z-35) ===== */}
      {/* Foreground bubbles for lower sections (in front of some elements) */}
      <div className="relative w-full h-full overflow-hidden pointer-events-none z-35">
        <div className="relative w-full h-full">
          {/* About section bubbles */}
          <div style={{ top: '11.7%', right: '35.3%' }} className="absolute w-2.25 h-2.25 rounded-full bg-cyan-300/25 float-fast delay-2-5"></div>
          <div style={{ top: '14.3%', left: '44.8%' }} className="absolute w-1.75 h-1.75 rounded-full bg-emerald-200/22 float-medium delay-3-5"></div>
          <div style={{ top: '17.8%', right: '53.3%' }} className="absolute w-2 h-2 rounded-full border border-cyan-400/28 float-slow delay-4-5"></div>
          <div style={{ top: '9.3%', left: '73.8%' }} className="absolute w-2.5 h-2.5 rounded-full bg-emerald-300/20 float-medium delay-5-5"></div>
          <div style={{ top: '12.7%', right: '84.3%' }} className="absolute w-1.75 h-1.75 rounded-full border border-cyan-300/30 float-fast delay-6-5"></div>
          
          {/* Projects section bubbles */}
          <div style={{ top: '28.3%', right: '33.7%' }} className="absolute w-2.75 h-2.75 rounded-full bg-cyan-300/35 float-slow delay-6-5"></div>
          <div style={{ top: '31.8%', left: '42.2%' }} className="absolute w-2.25 h-2.25 rounded-full bg-emerald-300/30 float-medium delay-5"></div>
          <div style={{ top: '34.4%', right: '51.9%' }} className="absolute w-1.5 h-1.5 rounded-full border border-cyan-300/38 float-fast delay-3-5"></div>
          <div style={{ top: '25.2%', left: '62.8%' }} className="absolute w-2 h-2 rounded-full bg-cyan-400/28 float-slow delay-2"></div>
          <div style={{ top: '32.7%', right: '73.3%' }} className="absolute w-2.5 h-2.5 rounded-full border border-emerald-200/34 float-medium delay-1"></div>
          
          {/* Skills section bubbles with shadows */}
          <div style={{ top: '41.7%', right: '38.3%' }} className="absolute w-2.25 h-2.25 rounded-full bg-cyan-400/45 shadow-sm shadow-cyan-400/10 float-fast delay-3"></div>
          <div style={{ top: '44.2%', left: '47.8%' }} className="absolute w-2.5 h-2.5 rounded-full bg-emerald-200/40 shadow-sm shadow-emerald-200/10 float-medium delay-2"></div>
          <div style={{ top: '46.9%', right: '57.3%' }} className="absolute w-1.75 h-1.75 rounded-full border-2 border-cyan-400/42 shadow-sm shadow-cyan-400/8 float-slow delay-1"></div>
          <div style={{ top: '39.4%', left: '67.8%' }} className="absolute w-2 h-2 rounded-full bg-emerald-300/38 shadow-sm shadow-emerald-300/10 float-fast delay-6"></div>
          <div style={{ top: '44.9%', right: '78.3%' }} className="absolute w-1.5 h-1.5 rounded-full border-2 border-cyan-300/40 shadow-sm shadow-cyan-300/8 float-medium delay-5"></div>
          
          {/* Contact section bubbles with shadows */}
          <div style={{ top: '56.7%', right: '23.3%' }} className="absolute w-2 h-2 rounded-full bg-cyan-400/55 shadow-sm shadow-cyan-400/15 float-medium delay-6-5"></div>
          <div style={{ top: '59.3%', right: '43.7%' }} className="absolute w-2.75 h-2.75 rounded-full bg-cyan-300/60 shadow-sm shadow-cyan-300/15 float-fast delay-7"></div>
          <div style={{ top: '61.8%', left: '53.3%' }} className="absolute w-3.25 h-3.25 rounded-full bg-emerald-200/50 shadow-sm shadow-emerald-200/12 float-fast delay-5-5"></div>
          <div style={{ top: '54.4%', left: '32.7%' }} className="absolute w-2.5 h-2.5 rounded-full border-2 border-cyan-400/48 shadow-sm shadow-cyan-400/10 float-medium delay-4-5"></div>
          <div style={{ top: '58.7%', right: '62.2%' }} className="absolute w-2 h-2 rounded-full border-2 border-emerald-300/52 shadow-sm shadow-emerald-300/12 float-slow delay-3-5"></div>
          <div style={{ top: '63.3%', left: '72.7%' }} className="absolute w-2.5 h-2.5 rounded-full bg-emerald-300/58 shadow-sm shadow-emerald-300/15 float-slow delay-6"></div>
          <div style={{ top: '60.8%', right: '83.3%' }} className="absolute w-2.25 h-2.25 rounded-full bg-cyan-400/62 shadow-sm shadow-cyan-400/15 float-fast delay-4-5"></div>
          
          {/* Footer area bubbles with shadows */}
          <div style={{ top: '72.7%', right: '28.3%' }} className="absolute w-2 h-2 rounded-full bg-cyan-400/50 shadow-sm shadow-cyan-400/12 float-medium delay-2"></div>
          <div style={{ top: '75.3%', right: '48.7%' }} className="absolute w-2.75 h-2.75 rounded-full bg-cyan-300/55 shadow-sm shadow-cyan-300/12 float-fast delay-3"></div>
          <div style={{ top: '77.8%', left: '58.3%' }} className="absolute w-3.25 h-3.25 rounded-full bg-emerald-200/45 shadow-sm shadow-emerald-200/10 float-fast delay-4"></div>
          <div style={{ top: '70.4%', left: '37.7%' }} className="absolute w-2.5 h-2.5 rounded-full border-2 border-cyan-400/44 shadow-sm shadow-cyan-400/8 float-medium delay-5"></div>
          <div style={{ top: '74.7%', right: '67.2%' }} className="absolute w-2 h-2 rounded-full border-2 border-emerald-300/48 shadow-sm shadow-emerald-300/10 float-slow delay-6"></div>
          <div style={{ top: '79.3%', left: '77.7%' }} className="absolute w-2.5 h-2.5 rounded-full bg-emerald-300/52 shadow-sm shadow-emerald-300/12 float-slow delay-7"></div>
          <div style={{ top: '76.8%', right: '87.3%' }} className="absolute w-2.25 h-2.25 rounded-full bg-cyan-400/58 shadow-sm shadow-cyan-400/12 float-fast delay-1-5"></div>
          
          {/* Extended area bubbles with shadows */}
          <div style={{ top: '87.7%', right: '31.3%' }} className="absolute w-2 h-2 rounded-full bg-cyan-400/48 shadow-sm shadow-cyan-400/10 float-medium delay-2-5"></div>
          <div style={{ top: '90.3%', right: '51.7%' }} className="absolute w-2.75 h-2.75 rounded-full bg-cyan-300/52 shadow-sm shadow-cyan-300/10 float-fast delay-3-5"></div>
          <div style={{ top: '92.8%', left: '61.3%' }} className="absolute w-3.25 h-3.25 rounded-full bg-emerald-200/42 shadow-sm shadow-emerald-200/8 float-fast delay-4-5"></div>
          <div style={{ top: '85.4%', left: '41.7%' }} className="absolute w-2.5 h-2.5 rounded-full border-2 border-cyan-400/40 shadow-sm shadow-cyan-400/8 float-medium delay-5-5"></div>
          <div style={{ top: '89.7%', right: '71.2%' }} className="absolute w-2 h-2 rounded-full border-2 border-emerald-300/45 shadow-sm shadow-emerald-300/10 float-slow delay-6-5"></div>
          <div style={{ top: '94.3%', left: '81.7%' }} className="absolute w-2.5 h-2.5 rounded-full bg-emerald-300/50 shadow-sm shadow-emerald-300/12 float-slow delay-7-5"></div>
          <div style={{ top: '91.8%', right: '91.3%' }} className="absolute w-2.25 h-2.25 rounded-full bg-cyan-400/55 shadow-sm shadow-cyan-400/12 float-fast delay-1"></div>
        </div>
      </div>
    </div>
  );
} 