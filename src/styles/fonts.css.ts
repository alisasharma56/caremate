import { globalFontFace } from '@vanilla-extract/css'

globalFontFace('Inter', {
  src: 'local("Inter")',
  fontDisplay: 'swap',
})

globalFontFace('Quicksand', {
  src: 'local("Quicksand")',
  fontDisplay: 'swap',
})

export const interFont =
  'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'

export const quicksandFont =
  'Quicksand, Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
