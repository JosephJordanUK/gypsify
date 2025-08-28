// src/styles/index.ts
/**
 * Minimal tokens to satisfy Phase 1.2 scaffolding.
 * Full theme to be added in Phase 1.33.
 */

export const palette = {
  background: '#FFFFFF',
  text: '#111111',
  primary: '#3B82F6',
  secondary: '#22C55E',
  border: '#E5E7EB',
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
} as const;

export type SpacingKey = keyof typeof spacing;