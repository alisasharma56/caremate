import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '@/styles/theme/tokens.css'

export const page = style({
  minHeight: '100vh',
  padding: '40px',
  background: vars.color.base.white,
  color: vars.color.gray.darkest,
  '@media': {
    '(max-width: 640px)': {
      padding: '24px 20px',
    },
  },
})

export const heading = style({
  margin: '0 0 32px',
  fontSize: 30,
  lineHeight: 1.2,
})

export const newsList = style({
  maxWidth: 760,
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
})

export const message = style({
  color: vars.color.gray.main,
})

globalStyle(`${message} p`, {
  margin: '0 0 12px',
})

globalStyle(`${message} button`, {
  padding: '8px 12px',
  border: `1px solid ${vars.color.gray.lighter}`,
  borderRadius: 6,
  background: vars.color.base.white,
  cursor: 'pointer',
})
