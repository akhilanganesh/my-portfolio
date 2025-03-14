'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

interface SocialIconProps {
  icon: IconDefinition;
  url: string;
  scroll?: boolean;
}

export default function SocialIcon({ icon, url, scroll = false }: SocialIconProps) {
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
      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-theme-color2/70 to-theme-color2d/80 backdrop-blur-sm flex items-center justify-center border border-theme-white/40 transition-all duration-300 float-slow shadow-lg shadow-theme-color2/30 group-hover:from-theme-color2b/80 group-hover:to-theme-color2c/90 group-hover:scale-110">
        <FontAwesomeIcon icon={icon} className="text-theme-white text-2xl" />
      </div>
      <div className="absolute z-6 w-14 h-14 rounded-full bg-theme-color2/15 blur-md top-0 left-0 float-slow"></div>
    </a>
  );
} 