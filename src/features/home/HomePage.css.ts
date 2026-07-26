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

export const dialog = style({
  position: 'fixed',
  inset: 0,
  width: '100%',
  maxWidth: 'none',
  height: '100%',
  maxHeight: 'none',
  margin: 0,
  padding: 0,
  border: 0,
  background: 'rgba(5, 5, 5, 0.52)',
  zIndex: 1000,
})

export const dialogPanel = style({
  width: 'min(820px, calc(100% - 40px))',
  maxHeight: 'calc(100vh - 48px)',
  margin: '24px auto',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 18,
  background: vars.color.base.white,
  boxShadow: '0 24px 70px rgba(0, 0, 0, 0.25)',
  '@media': {
    '(max-width: 640px)': {
      width: 'calc(100% - 24px)',
      maxHeight: 'calc(100vh - 24px)',
      margin: '12px auto',
      borderRadius: 14,
    },
  },
})

export const dialogHeader = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 16,
  padding: '20px 24px',
  borderBottom: `1px solid ${vars.color.gray.lighter}`,
})

export const dialogEyebrow = style({
  display: 'block',
  marginBottom: 4,
  color: vars.color.gray.main,
  fontSize: vars.fontSize.xs,
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
})

export const dialogTitle = style({
  margin: 0,
  color: vars.color.gray.darkest,
  fontSize: vars.fontSize.xl,
})

export const closeButton = style({
  width: 36,
  height: 36,
  padding: 0,
  border: `1px solid ${vars.color.gray.lighter}`,
  borderRadius: '50%',
  background: vars.color.base.white,
  color: vars.color.gray.dark,
  cursor: 'pointer',
  fontSize: 24,
  lineHeight: 1,
  ':hover': {
    background: vars.color.gray.lightest,
  },
})

export const dialogBody = style({
  minHeight: 160,
  padding: 24,
  overflowY: 'auto',
  '@media': {
    '(max-width: 640px)': {
      padding: 12,
    },
  },
})

export const dialogNewsList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
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
