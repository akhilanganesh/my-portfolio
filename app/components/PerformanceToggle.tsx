'use client'

import React from 'react';
import { usePerformance } from "../context/PerformanceContext"

interface PerformanceToggleProps {
  className?: string;
  showLabel?: boolean;
  fixed?: boolean;
}

export default function PerformanceToggle({ className = "", showLabel = true, fixed = true }: PerformanceToggleProps) {
  const { isHighPerformanceMode, togglePerformanceMode } = usePerformance();

  const baseClasses = "flex items-center space-x-2 text-xs text-theme-white/90";
  const fixedClasses = fixed ? "fixed bottom-4 right-4 z-[100] bg-theme-black/60 px-3 py-2 rounded-full shadow-md border border-theme-white/10" : "";
  
  return (
    <div className={`${baseClasses} ${fixedClasses} ${className}`}>
      {showLabel && <span>Performance Mode:</span>}
      <button 
        onClick={togglePerformanceMode}
        className={`px-2 py-1 rounded-full text-xs transition-colors duration-300 ${isHighPerformanceMode ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'}`}
        aria-label={`Toggle performance mode, currently ${isHighPerformanceMode ? 'high' : 'low'}`}
      >
        {isHighPerformanceMode ? 'High' : 'Low'}
      </button>
    </div>
  );
} 