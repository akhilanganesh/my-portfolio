import React from 'react';

interface SectionDividerProps {
  className?: string;
}

export default function SectionDivider({ className = '' }: SectionDividerProps) {
  return (
    <div className={`w-full flex justify-center items-center py-3 md:py-6 ${className} relative z-30`}>
      <div className="relative w-full max-w-[90%] md:max-w-[80%] flex items-center justify-center">
        {/* Mobile divider (visible on small screens) */}
        <div className="md:hidden w-full flex items-center justify-center space-x-4 relative z-30">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-theme-white/40 to-transparent flex-grow"></div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-theme-color2/80 shadow-sm shadow-theme-color2/30"></div>
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-theme-color1/80 to-theme-color2/60 shadow-sm shadow-theme-color1/30 border border-theme-white/20"></div>
            <div className="w-2 h-2 rounded-full bg-theme-color2/80 shadow-sm shadow-theme-color2/30"></div>
          </div>
          <div className="h-[1px] bg-gradient-to-r from-transparent via-theme-white/40 to-transparent flex-grow"></div>
        </div>
        
        {/* Desktop divider (visible on medium screens and up) */}
        <div className="hidden md:flex w-full items-center justify-center relative z-30">
          <div className="h-[1.5px] bg-gradient-to-r from-transparent via-theme-white/30 to-transparent flex-grow"></div>
          <div className="mx-6 flex items-center">
            <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-theme-color2/60 to-transparent"></div>
            <div className="mx-2 w-3 h-3 rounded-full bg-gradient-to-br from-theme-color1/70 to-theme-color2/50 shadow-sm shadow-theme-color1/30 border border-theme-white/20"></div>
            <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-theme-color2/60 to-transparent"></div>
          </div>
          <div className="h-[1.5px] bg-gradient-to-r from-transparent via-theme-white/30 to-transparent flex-grow"></div>
        </div>
        
      </div>
    </div>
  );
} 