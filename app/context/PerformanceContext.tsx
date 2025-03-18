'use client'

import { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { shouldEnableHighPerformance, prefersReducedMotion, isMobileOrTablet } from '../utils/mediaQueries';

interface PerformanceContextType {
  isHighPerformanceMode: boolean;
  setHighPerformanceMode: (value: boolean) => void;
  togglePerformanceMode: () => void;
}

const PerformanceContext = createContext<PerformanceContextType | undefined>(undefined);

export function PerformanceProvider({ children }: { children: ReactNode }) {
  const [isHighPerformanceMode, setHighPerformanceMode] = useState(false);
  const [userPreference, setUserPreference] = useState(false);

  useEffect(() => {
    if (!userPreference) {
      setHighPerformanceMode(false);
    }
    
    const motionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handlePreferenceChange = () => {
      if (!userPreference) {
        setHighPerformanceMode(false);
      }
    };
    
    motionMediaQuery.addEventListener('change', handlePreferenceChange);
    
    return () => {
      motionMediaQuery.removeEventListener('change', handlePreferenceChange);
    };
  }, [userPreference]);

  const togglePerformanceMode = () => {
    setHighPerformanceMode(prev => !prev);
    setUserPreference(true);
  };

  return (
    <PerformanceContext.Provider value={{ isHighPerformanceMode, setHighPerformanceMode, togglePerformanceMode }}>
      {children}
    </PerformanceContext.Provider>
  );
}

export function usePerformance() {
  const context = useContext(PerformanceContext);
  if (context === undefined) {
    throw new Error('usePerformance must be used within a PerformanceProvider');
  }
  return context;
} 