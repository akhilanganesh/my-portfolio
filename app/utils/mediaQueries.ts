'use client'

/**
 * Media query utility functions for responsive design and performance optimizations
 */

/**
 * Check if the user prefers reduced motion
 * @returns boolean indicating if reduced motion is preferred
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Check if the device is likely a mobile or tablet based on screen width
 * @param breakpoint - Width in pixels to consider as mobile/tablet threshold (default: 1024)
 * @returns boolean indicating if the device is likely mobile/tablet
 */
export const isMobileOrTablet = (breakpoint: number = 1024): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < breakpoint;
};

/**
 * Check if the device has a high-performance GPU
 * This is a heuristic based on screen size and device pixel ratio
 * @returns boolean indicating if the device likely has a high-performance GPU
 */
export const hasHighPerformanceGPU = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  // Check for high pixel ratio (retina displays)
  const highPixelRatio = window.devicePixelRatio > 1;
  
  // Check for large screen (likely desktop)
  const largeScreen = window.innerWidth >= 1440;
  
  // Assume high performance if both conditions are met
  return highPixelRatio && largeScreen;
};

/**
 * Determine if high performance mode should be enabled based on device capabilities
 * @returns boolean indicating if high performance mode should be enabled
 */
export const shouldEnableHighPerformance = (): boolean => {
  // Always default to low performance mode (return false)
  return false;
}; 