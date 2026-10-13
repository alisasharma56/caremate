// import { style } from '@vanilla-extract/css'
//
// export const sentimentCard = style({ position: 'relative', padding: '24px 16px 16px' })
//
// export const title = style({ fontSize: 14, fontWeight: 500, color: '#9ca3af', letterSpacing: 0 })
//
// export const subtitle = style({
//     marginTop: 6, fontSize: 12, color: '#9ca3af', maxWidth: 'calc(100% - 280px)',
//     '@media': { 'screen and (max-width: 1000px)': { maxWidth: '100%' } },
// })
//
// export const legend = style({
//     position: 'absolute',
//     top: 16,
//     right: 16,
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'flex-end',
//     gap: 6,
//     '@media': {
//         'screen and (max-width: 1000px)': { position: 'static', alignItems: 'flex-start', marginTop: 12 },
//     },
// })
//
// export const legendLabel = style({ fontSize: 11, fontWeight: 600, color: '#374151' })
//
// export const legendRow = style({ display: 'flex', flexWrap: 'wrap', gap: 14 })
//
// export const legendItem = style({ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: '#6b7280' })
//
// export const legendDot = style({ width: 8, height: 8, borderRadius: '9999px' })
//
// export const plot = style({ position: 'relative', height: 221, marginTop: 20 })
//
// export const vLine = style({ position: 'absolute', top: 0, bottom: 0, left: '28%', width: 1, background: '#e5e7eb' })
//
// export const hLine = style({ position: 'absolute', left: 0, right: 0, top: '50%', height: 1, background: '#e5e7eb' })
//
// export const quad = style({ position: 'absolute', fontSize: 11, color: '#9ca3af' })
//
// export const quadPositive = style({ left: 16, top: 12 })
//
// export const quadHigh = style({ left: 'calc(28% + 12px)', top: 12 })
//
// export const quadNegative = style({ left: 16, bottom: 12 })
//
// export const quadLow = style({ left: 'calc(28% + 12px)', bottom: 12 })
//
// export const bubble = style({ position: 'absolute', borderRadius: '9999px', transform: 'translate(-50%, -50%)' })
import { style } from '@vanilla-extract/css'

export const sentimentCard = style({ position: 'relative', padding: '24px 16px 16px' })

export const title = style({ fontSize: 14, fontWeight: 500, color: '#9ca3af', letterSpacing: 0 })

export const subtitle = style({
    marginTop: 6,
    fontSize: 12,
    color: '#9ca3af',
    maxWidth: 'calc(100% - 280px)',
    '@media': { 'screen and (max-width: 1000px)': { maxWidth: '100%' } },
})

export const legend = style({
    position: 'absolute',
    top: 16,
    right: 16,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 6,
    '@media': {
        'screen and (max-width: 1000px)': { position: 'static', alignItems: 'flex-start', marginTop: 12 },
    },
})

export const legendLabel = style({ fontSize: 11, fontWeight: 600, color: '#374151' })

export const legendRow = style({ display: 'flex', flexWrap: 'wrap', gap: 14 })

export const legendItem = style({ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: '#6b7280' })

export const legendDot = style({ width: 8, height: 8, borderRadius: '9999px' })

export const plot = style({
    position: 'relative',
    height: 221,
    marginTop: 20,
    '@media': { 'screen and (max-width: 600px)': { height: 180 } },
})

export const quad = style({ position: 'absolute', fontSize: 11, color: '#9ca3af' })

export const quadPositive = style({ left: 16, top: 12 })

export const quadHigh = style({ left: 'calc(28% + 12px)', top: 12 })

export const quadNegative = style({ left: 16, bottom: 12 })

export const quadLow = style({ left: 'calc(28% + 12px)', bottom: 12 })