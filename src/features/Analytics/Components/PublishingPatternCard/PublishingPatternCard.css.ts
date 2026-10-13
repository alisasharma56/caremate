// import { style } from '@vanilla-extract/css'
//
// export const publishCard = style({ padding: '24px 16px 16px' })
//
// export const header = style({
//     display: 'flex',
//     alignItems: 'flex-start',
//     justifyContent: 'space-between',
//     flexWrap: 'wrap',
//     gap: 12,
// })
//
// export const titleBlock = style({ minWidth: 0, flex: '1 1 320px' })
//
// export const title = style({ fontSize: 14, fontWeight: 500, color: '#9ca3af', letterSpacing: 0 })
//
// export const subtitle = style({ marginTop: 6, fontSize: 12, color: '#9ca3af' })
//
// export const legend = style({ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 16 })
//
// export const legendItem = style({ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#374151' })
//
// export const legendDot = style({ width: 10, height: 10, borderRadius: '9999px' })
//
// export const chart = style({ position: 'relative', height: 160, marginTop: 24 })
//
// export const grid = style({ position: 'absolute', inset: 0, pointerEvents: 'none' })
//
// export const gridLine = style({ position: 'absolute', left: 0, right: 0, height: 1, background: '#eef0f2' })
//
// export const axisRow = style({ position: 'absolute', inset: 0, display: 'flex' })
//
// export const dayCol = style({ flex: 1, minWidth: 0, height: '100%' })
//
// export const group = style({
//     display: 'flex',
//     alignItems: 'flex-end',
//     justifyContent: 'space-around',
//     height: '100%',
//     padding: '0 2px',
// })
//
// export const bar = style({
//     display: 'flex',
//     flexDirection: 'column',
//     width: 15,
//     maxWidth: '18%',
//     overflow: 'hidden',
//     borderRadius: '3px 3px 0 0',
//     '@media': { 'screen and (max-width: 600px)': { width: 8 } },
// })
//
// export const barStrong = style({ flexBasis: 0, minHeight: 0 })
//
// export const barLight = style({ flexBasis: 0, minHeight: 0 })
//
// export const dayLabels = style({ display: 'flex', marginTop: 10 })
//
// export const dayLabel = style({ flex: 1, minWidth: 0, textAlign: 'center', fontSize: 10, color: '#9ca3af' })
//
// export const insight = style({
//     display: 'flex',
//     flexDirection: 'column',
//     gap: 4,
//     marginTop: 16,
//     padding: '10px 12px',
//     borderRadius: 12,
//     border: '1px solid #e5e7eb',
//     background: '#f9fafb',
// })
//
// export const insightTitle = style({ fontSize: 13, fontWeight: 600, color: '#111827' })
//
// export const insightText = style({ fontSize: 12, lineHeight: '16px', color: '#6b7280' })

import { style } from '@vanilla-extract/css'

export const publishCard = style({ padding: '24px 16px 16px' })

export const header = style({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 12,
})

export const titleBlock = style({ minWidth: 0, flex: '1 1 320px' })

export const title = style({ fontSize: 14, fontWeight: 500, color: '#9ca3af', letterSpacing: 0 })

export const subtitle = style({ marginTop: 6, fontSize: 12, color: '#9ca3af' })

export const legend = style({ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 16 })

export const legendItem = style({ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#374151' })

export const legendDot = style({ width: 10, height: 10, borderRadius: '9999px' })

export const chart = style({ position: 'relative', height: 190, marginTop: 24 })

export const insight = style({
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    marginTop: 16,
    padding: '10px 12px',
    borderRadius: 12,
    border: '1px solid #e5e7eb',
    background: '#f9fafb',
})

export const insightTitle = style({ fontSize: 13, fontWeight: 600, color: '#111827' })

export const insightText = style({ fontSize: 12, lineHeight: '16px', color: '#6b7280' })