import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '@/styles/theme/tokens.css'

export const header = style({
  display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '48px', flex: '0 0 48px', padding: '0 16px', borderBottom: `1px solid ${vars.color.gray.lighter}`, background: vars.color.base.white, color: vars.color.gray.main,
})
export const breadcrumb = style({ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' })
export const menuButton = style({ display: 'grid', placeItems: 'center', width: '18px', height: '28px', padding: 0, border: 0, background: 'transparent', color: vars.color.gray.main, cursor: 'pointer', selectors: { '&:focus-visible': { outline: `2px solid ${vars.color.primary.main}`, borderRadius: '4px' } } })
export const divider = style({ width: '1px', height: '18px', margin: '0 2px', background: vars.color.gray.lighter })
export const chevron = style({ color: vars.color.gray.light, fontSize: '15px' })
export const current = style({ color: vars.color.primary.main })
export const actions = style({ display: 'flex', alignItems: 'center', gap: '13px' })
export const clock = style({ color: vars.color.gray.main, fontSize: '12px', whiteSpace: 'nowrap', '@media': { '(max-width: 520px)': { display: 'none' } } })
export const notificationButton = style({ position: 'relative', display: 'grid', placeItems: 'center', width: '24px', height: '28px', padding: 0, border: 0, background: 'transparent', color: vars.color.gray.main, cursor: 'pointer' })
export const notificationDot = style({ position: 'absolute', top: '4px', right: '2px', width: '5px', height: '5px', border: '1px solid #fff', borderRadius: '50%', background: vars.color.primary.main })
export const avatar = style({ display: 'grid', placeItems: 'center', width: '26px', height: '26px', padding: 0, border: 0, borderRadius: '50%', background: vars.color.base.black, color: vars.color.base.white, cursor: 'pointer', fontSize: '11px', fontWeight: 600 })

globalStyle(`${notificationButton} svg`, { width: '18px', height: '18px' })
