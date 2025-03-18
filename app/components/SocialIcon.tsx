'use client';

import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { usePerformance } from '../context/PerformanceContext';

interface SocialIconProps {
  icon: IconDefinition;
  url: string;
  scroll?: boolean;
}

export default function SocialIcon({ icon, url, scroll = false }: SocialIconProps) {
  // Use the performance context
  const { isHighPerformanceMode } = usePerformance();
  
  const handleClick = (e: React.MouseEvent) => {
    if (!scroll) return;
    
    e.preventDefault();
    const element = document.querySelector(url);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <a 
      href={url} 
      target={scroll ? undefined : "_blank"} 
      rel={scroll ? undefined : "noopener noreferrer"} 
      className="relative z-30 group"
      onClick={handleClick}
    >
      {/* Always render the glow div but conditionally apply styles to maintain consistent positioning */}
      <div className="absolute z-6 w-14 h-14 rounded-full top-0 left-0" 
        style={{
          backgroundColor: isHighPerformanceMode ? 'rgba(52, 211, 153, 0.15)' : 'transparent', 
          filter: isHighPerformanceMode ? 'blur(12px)' : 'none', 
          animation: isHighPerformanceMode ? 'float-slow 15s ease-in-out infinite' : 'none'
        }}
      ></div>
      
      <div 
        className={`w-14 h-14 rounded-full bg-gradient-to-br from-theme-color2/80 to-theme-color2d/90 flex items-center justify-center border border-theme-white/40 transition-transform duration-300 shadow-lg shadow-theme-color2/30 will-change-transform group-hover:scale-105 group-hover:brightness-110 relative z-10`}
        style={{ 
          transform: 'translateZ(0)', // Force GPU acceleration
          animation: isHighPerformanceMode ? 'float-slow 15s ease-in-out infinite' : 'none'
        }}
      >
        <FontAwesomeIcon icon={icon} className="text-theme-white text-2xl" />
      </div>
    </a>
  );
} 