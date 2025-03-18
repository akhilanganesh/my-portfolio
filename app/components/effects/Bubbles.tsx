'use client';

import React from 'react';
import { usePerformance } from '../../context/PerformanceContext';

export default function Bubbles() {
  // Use the performance context
  const { isHighPerformanceMode } = usePerformance();
  
  // No bubbles in low performance mode
  if (!isHighPerformanceMode) {
    return null;
  }

  // Only show bubbles in high performance mode
  return (
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
  );
} 