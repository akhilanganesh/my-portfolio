'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"

export default function ScrollDownButton() {
  const handleClick = () => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });

  return (
    <>
      <style jsx>{`
        .scroll-button {
          transform: scale(1);
          transition: transform 0.3s ease;
        }
        .scroll-button:hover {
          transform: scale(1.1);
        }
      `}</style>
      <div className="relative cursor-pointer" onClick={handleClick}>
        <div 
          className="scroll-button w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-theme-color2/40 to-theme-color1/25 backdrop-blur-sm flex items-center justify-center border border-theme-white/40 transition-colors duration-300 float-very-slow shadow-lg shadow-theme-color2/20 relative z-10 hover:from-theme-color2/50 hover:to-theme-color1/35"
        >
          <FontAwesomeIcon 
            icon={faArrowDown} 
            className="text-theme-white/90 text-2xl md:text-3xl transition-all duration-300" 
          />
        </div>
        <div className="absolute z-[5] w-12 h-12 md:w-14 md:h-14 rounded-full bg-theme-color2/15 blur-md top-0 left-0 float-very-slow pointer-events-none transition-all duration-300"></div>
      </div>
    </>
  )
} 