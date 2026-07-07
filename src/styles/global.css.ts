import { globalStyle } from '@vanilla-extract/css'
import { colors, typography } from '@/styles/theme/tokens.css'

globalStyle('*', {
  boxSizing: 'border-box',
})

globalStyle('html', {
  minHeight: '100%',
  background: colors.background,
  color: colors.foreground,
  fontFamily: typography.body,
})

globalStyle('body', {
  minHeight: '100%',
  margin: 0,
})

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
})

globalStyle('button, input, textarea, select', {
  font: 'inherit',
})
