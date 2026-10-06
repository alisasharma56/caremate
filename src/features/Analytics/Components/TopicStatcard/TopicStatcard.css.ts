import { style } from '@vanilla-extract/css'

export const statCard = style({ padding: '20px 16px 16px', gap: 0, height: 185 })

export const count = style({ marginTop: 14, fontSize: 30, fontWeight: 700, lineHeight: '36px', color: '#050505' })

export const mentions = style({ marginTop: 6, fontSize: 12, color: '#9ca3af' })

export const metaRow = style({ display: 'flex', alignItems: 'center', gap: 8, marginTop: 10 })

export const change = style({
    padding: '2px 8px',
    borderRadius: 6,
    background: '#fdecec',
    color: '#ef4444',
    fontSize: 12,
    fontWeight: 500,
})

export const meta = style({ fontSize: 11, color: '#9ca3af', whiteSpace: 'nowrap' })

export const microRow = style({ display: 'flex', alignItems: 'center', gap: 3, marginTop: 14 })

export const microLabel = style({ fontSize: 11, color: '#9ca3af', marginRight: 3 })

export const microDot = style({ width: 5, height: 5, borderRadius: '9999px' })