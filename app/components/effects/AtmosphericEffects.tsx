"use client";

import React from 'react';
import { usePerformance } from '../../context/PerformanceContext';

export default function AtmosphericEffects() {
  // Use the performance context
  const { isHighPerformanceMode } = usePerformance();
  
  // Use a stable ID for the filter
  const filterId = "atmospheric-blur-filter";

  // Enhanced version for low performance mode with more static glows
  if (!isHighPerformanceMode) {
    return (
      <div className="relative left-0 w-full h-full overflow-hidden pointer-events-none z-25">
        {/* Static atmospheric elements with no animations but matching high performance mode */}
        <div className="absolute inset-0 w-full h-full">
          {/* Main viewport subtle glows - matching high performance mode */}
          <div className="absolute top-[5%] left-[25%] w-[40%] h-[40%] rounded-full bg-cyan-700/[0.12]" 
               style={{ filter: 'blur(40px)' }}></div>
          <div className="absolute top-[8%] left-[35%] w-[35%] h-[35%] rounded-full bg-cyan-700/[0.15]" 
               style={{ filter: 'blur(40px)' }}></div>
          <div className="absolute top-[12%] right-[30%] w-[45%] h-[45%] rounded-full bg-emerald-600/[0.14]" 
               style={{ filter: 'blur(40px)' }}></div>
          
          {/* Light rays - matching high performance mode */}
          <div className="absolute top-[5%] left-1/5 w-[30%] h-[60%] bg-gradient-to-t from-cyan-900/20 to-transparent rotate-[12deg]" 
               style={{ filter: 'blur(40px)' }}></div>
          <div className="absolute top-[10%] right-1/4 w-[35%] h-[70%] bg-gradient-to-t from-emerald-800/20 to-transparent -rotate-[15deg]" 
               style={{ filter: 'blur(40px)' }}></div>
          
          {/* Middle section - matching high performance mode */}
          <div className="absolute top-[30%] right-[25%] w-[45%] h-[45%] rounded-full bg-emerald-700/[0.18]" 
               style={{ filter: 'blur(40px)' }}></div>
          <div className="absolute top-[35%] left-[20%] w-[40%] h-[40%] rounded-full bg-cyan-700/[0.22]" 
               style={{ filter: 'blur(40px)' }}></div>
          
          {/* Bottom section - matching high performance mode */}
          <div className="absolute top-[60%] right-[30%] w-[45%] h-[45%] rounded-full bg-emerald-600/[0.20]" 
               style={{ filter: 'blur(40px)' }}></div>
          <div className="absolute top-[65%] left-[35%] w-[50%] h-[50%] rounded-full bg-cyan-800/[0.18]" 
               style={{ filter: 'blur(40px)' }}></div>
          
          {/* Additional light rays - matching high performance mode */}
          <div className="absolute top-[40%] right-1/3 w-[35%] h-[80%] bg-gradient-to-t from-cyan-800/25 to-transparent rotate-[8deg]" 
               style={{ filter: 'blur(40px)' }}></div>
          <div className="absolute top-[45%] left-1/3 w-[30%] h-[75%] bg-gradient-to-t from-emerald-700/25 to-transparent -rotate-[10deg]" 
               style={{ filter: 'blur(40px)' }}></div>
          
          {/* Larger distant glows - matching high performance mode */}
          <div className="absolute top-[75%] left-[25%] w-[40%] h-[40%] rounded-full bg-emerald-700/[0.16]" 
               style={{ filter: 'blur(40px)' }}></div>
          <div className="absolute top-[80%] right-[20%] w-[35%] h-[35%] rounded-full bg-cyan-800/[0.20]" 
               style={{ filter: 'blur(40px)' }}></div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative left-0 w-full h-full overflow-hidden pointer-events-none z-25">
      {/* SVG Filter Definition */}
      <svg width="0" height="0">
        <defs>
          <filter id={filterId}>
            <feGaussianBlur in="SourceGraphic" stdDeviation="40" />
          </filter>
        </defs>
      </svg>

      {/* Optimized atmospheric elements with reduced count */}
      <div className="absolute inset-0 w-full h-full">
        {/* Main viewport subtle glows - reduced count and optimized */}
        <div className="absolute top-[5%] left-[25%] w-[40%] h-[40%] rounded-full bg-cyan-700/[0.12] float-medium delay-2-5 glow-pulse" 
             style={{ filter: `url(#${filterId})` }}></div>
        <div className="absolute top-[8%] left-[35%] w-[35%] h-[35%] rounded-full bg-cyan-700/[0.15] float-slow delay-5-5 glow-pulse-slow" 
             style={{ filter: `url(#${filterId})` }}></div>
        <div className="absolute top-[12%] right-[30%] w-[45%] h-[45%] rounded-full bg-emerald-600/[0.14] float-medium delay-3-5 glow-pulse" 
             style={{ filter: `url(#${filterId})` }}></div>
        
        {/* Combined light rays - reduced count */}
        <div className="absolute top-[5%] left-1/5 w-[30%] h-[60%] bg-gradient-to-t from-cyan-900/20 to-transparent rotate-[12deg] float-medium delay-2 glow-pulse" 
             style={{ filter: `url(#${filterId})` }}></div>
        <div className="absolute top-[10%] right-1/4 w-[35%] h-[70%] bg-gradient-to-t from-emerald-800/20 to-transparent -rotate-[15deg] float-slow delay-5-5 glow-pulse-slow" 
             style={{ filter: `url(#${filterId})` }}></div>
        
        {/* Middle section - combined and reduced */}
        <div className="absolute top-[30%] right-[25%] w-[45%] h-[45%] rounded-full bg-emerald-700/[0.18] float-medium delay-3-5 glow-pulse" 
             style={{ filter: `url(#${filterId})` }}></div>
        <div className="absolute top-[35%] left-[20%] w-[40%] h-[40%] rounded-full bg-cyan-700/[0.22] float-slow delay-6 glow-pulse-slow" 
             style={{ filter: `url(#${filterId})` }}></div>
        
        {/* Bottom section - combined and reduced */}
        <div className="absolute top-[60%] right-[30%] w-[45%] h-[45%] rounded-full bg-emerald-600/[0.20] float-medium delay-4 glow-pulse" 
             style={{ filter: `url(#${filterId})` }}></div>
        <div className="absolute top-[65%] left-[35%] w-[50%] h-[50%] rounded-full bg-cyan-800/[0.18] float-slow delay-7-5 glow-pulse-slow" 
             style={{ filter: `url(#${filterId})` }}></div>
        
        {/* Additional light rays - combined and reduced */}
        <div className="absolute top-[40%] right-1/3 w-[35%] h-[80%] bg-gradient-to-t from-cyan-800/25 to-transparent rotate-[8deg] float-medium delay-3 glow-pulse" 
             style={{ filter: `url(#${filterId})` }}></div>
        <div className="absolute top-[45%] left-1/3 w-[30%] h-[75%] bg-gradient-to-t from-emerald-700/25 to-transparent -rotate-[10deg] float-slow delay-6 glow-pulse-slow" 
             style={{ filter: `url(#${filterId})` }}></div>
        
        {/* Larger distant glows - combined and reduced */}
        <div className="absolute top-[75%] left-[25%] w-[40%] h-[40%] rounded-full bg-emerald-700/[0.16] float-medium delay-3-5 glow-pulse" 
             style={{ filter: `url(#${filterId})` }}></div>
        <div className="absolute top-[80%] right-[20%] w-[35%] h-[35%] rounded-full bg-cyan-800/[0.20] float-slow delay-6-5 glow-pulse-slow" 
             style={{ filter: `url(#${filterId})` }}></div>
      </div>
    </div>
  );
}
