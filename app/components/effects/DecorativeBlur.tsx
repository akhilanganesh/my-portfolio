'use client';

import React from 'react';
import { usePerformance } from '../../context/PerformanceContext';

interface DecorativeBlurProps {
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function DecorativeBlur({ variant = 'primary', className = '' }: DecorativeBlurProps) {
  // Use the performance context
  const { isHighPerformanceMode } = usePerformance();
  
  // If low performance mode, return a simplified version or nothing
  if (!isHighPerformanceMode) {
    return null; // Don't render anything in low performance mode
  }

  if (variant === 'primary') {
    return (
      <>
        <div className={`absolute -top-24 -right-24 w-48 h-48 bg-theme-color2/15 rounded-full blur-3xl ${className}`} />
        <div className={`absolute -bottom-20 -left-20 w-40 h-40 bg-theme-color1/15 rounded-full blur-3xl ${className}`} />
      </>
    );
  }

  return (
    <>
      <div className={`absolute -top-24 -left-24 w-48 h-48 bg-theme-color2/15 rounded-full blur-3xl ${className}`} />
      <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-theme-color1/15 rounded-full blur-3xl ${className}`} />
    </>
  );
} 