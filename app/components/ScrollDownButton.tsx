'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { usePerformance } from '../context/PerformanceContext';

export default function ScrollDownButton() {
  // Use the performance context
  const { isHighPerformanceMode } = usePerformance();
  
  const handleClick = () => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });

  return (
    <>
      <div className="relative cursor-pointer group" onClick={handleClick}>
        {/* Always render the background glow element but conditionally style it */}
        <div className="absolute z-[5] w-12 h-12 md:w-14 md:h-14 rounded-full top-0 left-0 pointer-events-none transition-all duration-300"
          style={{
            backgroundColor: isHighPerformanceMode ? 'rgba(52, 211, 153, 0.15)' : 'transparent',
            filter: isHighPerformanceMode ? 'blur(12px)' : 'none',
            animation: isHighPerformanceMode ? 'float-very-slow 18s ease-in-out infinite' : 'none'
          }}
        ></div>
        
        <div 
          className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-theme-color2/60 to-theme-color1/45 flex items-center justify-center border border-theme-white/40 transition-transform duration-300 shadow-lg shadow-theme-color2/20 relative z-10 will-change-transform group-hover:scale-110 group-hover:brightness-110"
          style={{ 
            transform: 'translateZ(0)', // Force GPU acceleration
            animation: isHighPerformanceMode ? 'float-very-slow 18s ease-in-out infinite' : 'none'
          }}
        >
          <FontAwesomeIcon 
            icon={faArrowDown} 
            className="text-theme-white/90 text-2xl md:text-3xl transition-all duration-300" 
          />
        </div>
      </div>
    </>
  )
} 