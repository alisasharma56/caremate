import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '@/styles/theme/tokens.css'

const border = '#e7e9ee'
const muted = '#737b8e'

export const content = style({ width: 'min(100%, 540px)', margin: '67px auto 0' })
export const intro = style({ margin: '10px 0 32px', color: muted, fontSize: '14px', textAlign: 'center' })
export const business = style({ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '352px', height: '44px', margin: '0 auto 31px', padding: '0 15px', border: `1px solid ${border}`, borderRadius: '16px', background: '#f7f8f8', fontSize: '14px' })
export const currentBusiness = style({ padding: '5px 13px', border: `1px solid ${border}`, borderRadius: '8px', background: '#fff', fontSize: '10px' })
export const channels = style({ display: 'grid', gap: '16px' })
export const channel = style({ display: 'grid', gridTemplateColumns: '40px 1fr auto', alignItems: 'center', gap: '16px', minHeight: '76px', padding: '16px', border: `1px solid ${border}`, borderRadius: '16px' })
export const icon = style({ display: 'grid', placeItems: 'center', width: '40px', height: '40px', padding: '8px', border: `1px solid ${border}`, borderRadius: '8px' })
export const channelCopy = style({})
export const connectButton = style({ minWidth: '74px', height: '35px', padding: '0 13px', border: `1px solid ${border}`, borderRadius: '9px', background: '#fff', color: '#101114', cursor: 'pointer', fontSize: '12px' })
export const connectedButton = style([connectButton, { border: 0, background: vars.color.primary.main, color: '#fff' }])
export const continueButton = style({ width: '100%', height: '45px', marginTop: '32px', border: 0, borderRadius: '14px', background: vars.color.primary.main, color: '#fff', cursor: 'pointer', fontSize: '14px', selectors: { '&:hover': { background: '#e99b0f' } } })

globalStyle(`${icon} img`, { display: 'block', width: '22px', height: '22px' })
globalStyle(`${channelCopy} h2`, { margin: 0, fontSize: '14px', fontWeight: 500 })
globalStyle(`${channelCopy} p`, { margin: '6px 0 0', color: muted, fontSize: '12px' })
