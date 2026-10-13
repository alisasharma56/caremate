import { style } from '@vanilla-extract/css'

export const perceptionCard = style({ position: 'relative', padding: '24px 16px 16px' })

export const title = style({ fontSize: 14, fontWeight: 500, color: '#9ca3af', letterSpacing: 0 })

export const subtitle = style({
    marginTop: 6,
    fontSize: 12,
    color: '#9ca3af',
    maxWidth: 'calc(100% - 300px)',
    '@media': { 'screen and (max-width: 1000px)': { maxWidth: '100%' } },
})

export const legend = style({
    position: 'absolute',
    top: 16,
    right: 16,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 4,
    '@media': {
        'screen and (max-width: 1000px)': { position: 'static', alignItems: 'flex-start', marginTop: 12 },
    },
})

export const legendLabel = style({ fontSize: 11, fontWeight: 600, color: '#374151' })

export const legendItem = style({ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, lineHeight: '14px', color: '#6b7280' })

export const legendDot = style({ width: 8, height: 8, borderRadius: '9999px' })

export const columns = style({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: 14,
    marginTop: 24,
    '@container': {
        '(max-width: 640px)': { gridTemplateColumns: 'minmax(0, 1fr)' },
    },
})

export const column = style({ display: 'flex', flexDirection: 'column', minWidth: 0 })

export const columnLabel = style({ fontSize: 12, fontWeight: 600, color: '#374151' })

export const barArea = style({ position: 'relative', height: 123, marginTop: 12 })

export const gridLine = style({ position: 'absolute', left: 0, right: 0, height: 1, background: '#eef0f2' })

export const insight = style({
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    marginTop: 12,
    padding: '10px 12px',
    borderRadius: 12,
    border: '1px solid #e5e7eb',
    background: '#f9fafb',
})

export const insightTitle = style({ fontSize: 12, fontWeight: 600, color: '#111827' })

export const insightText = style({ fontSize: 11, lineHeight: '14px', color: '#6b7280' })