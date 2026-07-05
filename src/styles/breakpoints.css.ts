export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
} as const

export const media = {
  sm: `screen and (min-width: ${breakpoints.sm})`,
  md: `screen and (min-width: ${breakpoints.md})`,
  lg: `screen and (min-width: ${breakpoints.lg})`,
  xl: `screen and (min-width: ${breakpoints.xl})`,
} as const
