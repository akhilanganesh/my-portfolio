'use client'

import { useState, useEffect, useCallback, useRef, TouchEvent } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface SkillCarouselProps {
  children: React.ReactNode[];
  autoScrollInterval?: number;
}

export default function SkillCarousel({ children, autoScrollInterval = 5000 }: SkillCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  // Update content height when slides change or on mount
  useEffect(() => {
    const updateHeight = () => {
      const heights = slideRefs.current
        .filter((ref): ref is HTMLDivElement => ref !== null)
        .map(ref => ref.offsetHeight);
      const maxHeight = Math.max(...heights);
      if (maxHeight > 0) {
        setContentHeight(maxHeight);
      }
    };

    updateHeight();
    // Add resize listener to handle window size changes
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [children]);

  const resetAutoScroll = useCallback(() => {
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 100);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
  }, [children.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + children.length) % children.length);
    resetAutoScroll();
  };

  const handleNextClick = () => {
    nextSlide();
    resetAutoScroll();
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    resetAutoScroll();
  };

  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    resetAutoScroll();
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      handleNextClick();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(nextSlide, autoScrollInterval);
    return () => clearInterval(interval);
  }, [isAutoScrolling, autoScrollInterval, nextSlide]);

  return (
    <div className="relative flex flex-col">
      {/* Carousel content with navigation arrows */}
      <div className="relative flex items-center w-full max-w-full sm:max-w-xl md:max-w-2xl mx-auto">
        <button 
          onClick={prevSlide}
          className="absolute -left-2 sm:-left-6 md:-left-10 z-40 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-theme-black/30 border border-theme-white/20 flex items-center justify-center text-theme-white/70 hover:bg-theme-black/40 hover:text-theme-white transition-all duration-200 backdrop-blur-sm hover:scale-110"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="text-sm sm:text-lg" />
        </button>
        
        <div 
          className="w-full overflow-hidden px-2 sm:px-4"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {children.map((child, index) => (
              <div 
                key={index} 
                ref={el => slideRefs.current[index] = el}
                className="w-full flex-shrink-0 flex items-center justify-center"
                style={{ minHeight: contentHeight > 0 ? `${contentHeight}px` : 'auto' }}
              >
                {child}
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={handleNextClick}
          className="absolute -right-2 sm:-right-6 md:-right-10 z-40 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-theme-black/30 border border-theme-white/20 flex items-center justify-center text-theme-white/70 hover:bg-theme-black/40 hover:text-theme-white transition-all duration-200 backdrop-blur-sm hover:scale-110"
        >
          <FontAwesomeIcon icon={faChevronRight} className="text-sm sm:text-lg" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center space-x-2 mt-4">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-theme-color2 w-6'
                : 'bg-theme-white/30 hover:bg-theme-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
} 