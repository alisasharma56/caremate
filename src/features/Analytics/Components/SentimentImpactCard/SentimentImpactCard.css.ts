import { style } from '@vanilla-extract/css'

export const sentimentCard = style({ position: 'relative', padding: '28px 20px 20px', minHeight: 330 })

export const title = style({ fontSize: 14, fontWeight: 500, color: '#9ca3af', letterSpacing: 0 })

export const subtitle = style({ marginTop: 6, fontSize: 12, color: '#9ca3af', maxWidth: 'calc(100% - 280px)' })

export const legend = style({
    position: 'absolute',
    top: 20,
    right: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 6,
})

export const legendLabel = style({ fontSize: 11, fontWeight: 600, color: '#374151' })

export const legendRow = style({ display: 'flex', gap: 14 })

export const legendItem = style({ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: '#6b7280' })

export const legendDot = style({ width: 8, height: 8, borderRadius: '9999px' })

export const plot = style({ position: 'relative', flex: 1, marginTop: 24, minHeight: 220 })

export const vLine = style({ position: 'absolute', top: 0, bottom: 0, left: '50%', width: 1, background: '#e5e7eb' })

export const hLine = style({ position: 'absolute', left: 0, right: 0, top: '50%', height: 1, background: '#e5e7eb' })

export const quad = style({ position: 'absolute', fontSize: 11, color: '#9ca3af' })

export const bubble = style({ position: 'absolute', borderRadius: '9999px', opacity: 0.95 })