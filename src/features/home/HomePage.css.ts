import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '@/styles/theme/tokens.css'

export const page = style({
  minHeight: 'calc(100vh - 48px)',
  padding: 0,
  background: vars.color.base.white,
  color: vars.color.gray.darkest,
  '@media': {
    '(max-width: 640px)': {
      padding: 0,
    },
  },
})

export const heading = style({
  margin: '0 0 32px',
  fontSize: 30,
  lineHeight: 1.2,
})

export const newsList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
})

export const filters = style({
  display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16,
  padding: '12px 20px', borderBottom: `1px solid ${vars.color.gray.lighter}`,
  background: vars.color.base.white,
})

export const primaryFilters = style({ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 8 })
export const secondaryFilters = style([primaryFilters, { marginLeft: 'auto' }])

export const primaryButton = style({
  minHeight: 34, padding: '8px 14px', border: '1px solid transparent', borderRadius: 7,
  background: 'transparent', color: vars.color.gray.main, fontSize: 12, cursor: 'pointer',
  ':hover': { background: vars.color.gray.lightest },
  ':focus-visible': { outline: `2px solid ${vars.color.primary.main}`, outlineOffset: 2 },
})
export const secondaryButton = style([primaryButton, { borderColor: vars.color.gray.lighter }])
export const selectedFilter = style({
  background: vars.color.base.black, borderColor: vars.color.base.black, color: vars.color.base.white,
  ':hover': { background: vars.color.gray.darkest },
})

export const feedLayout = style({
  display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 320px', gap: 16, padding: '16px 20px 32px',
  '@media': { '(max-width: 1100px)': { gridTemplateColumns: 'minmax(0, 1fr)' } },
})
export const feedColumn = style({ minWidth: 0 })
export const sidebar = style({ minWidth: 0 })
globalStyle(`${sidebar} > div`, { height: 'auto', overflowY: 'visible', paddingRight: 0 })
globalStyle(`${sidebar} > div > div`, { paddingRight: 0 })

globalStyle(`${newsList} > *`, {
  maxWidth: 'none',
})

export const message = style({
  color: vars.color.gray.main,
})

export const anchorError = style({
  margin: '0 0 16px',
  color: vars.color.error.main,
  fontSize: vars.fontSize.sm,
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
