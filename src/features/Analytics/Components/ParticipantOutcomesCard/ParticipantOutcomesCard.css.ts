// import { style } from '@vanilla-extract/css'
// import { vars } from '@/styles/theme/tokens.css'
//
// export const card = style({
//     display: 'flex',
//     flexDirection: 'column',
//     boxSizing: 'border-box',
//     minWidth: 0,
//     margin: 0,
//     padding: '28px 20px 16px',
//     background: '#f3f2ed',
//     border: '1px solid #e9e7e0',
//     borderRadius: 20,
//     fontFamily: vars.fontFamily.body,
// })
//
// export const title = style({
//     margin: 0,
//     textAlign: 'center',
//     fontSize: 20,
//     fontWeight: 700,
//     letterSpacing: '0.18em',
//     textTransform: 'uppercase',
//     color: '#1a1a1a',
//     '@media': { 'screen and (max-width: 600px)': { fontSize: 15, letterSpacing: '0.12em' } },
// })
//
// export const subtitle = style({
//     margin: '10px 0 0',
//     textAlign: 'center',
//     fontSize: 11,
//     color: '#8a877f',
// })
//
// export const header = style({
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     flexWrap: 'wrap',
//     gap: 8,
//     marginTop: 14,
// })
//
// export const headerLabel = style({
//     fontSize: 9,
//     fontWeight: 500,
//     letterSpacing: '0.16em',
//     textTransform: 'uppercase',
//     color: '#a09d95',
// })
//
// export const cohortLegend = style({ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 16 })
//
// export const cohortLegendItem = style({
//     display: 'flex',
//     alignItems: 'center',
//     gap: 6,
//     fontSize: 10,
//     color: '#57534e',
// })
//
// export const legendDot = style({ width: 9, height: 9, borderRadius: '9999px' })
//
// // On narrow screens the chart keeps a readable minimum size and scrolls sideways
// // inside the card instead of squashing its labels together.
// export const scroller = style({ overflowX: 'auto', margin: '0 -4px' })
//
// export const stage = style({
//     position: 'relative',
//     width: '100%',
//     minWidth: 500,
//     maxWidth: 680,
//     aspectRatio: '600 / 480',
//     margin: '0 auto',
// })
//
// export const svg = style({ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible' })
//
// export const center = style({})
//
// export const axisLabel = style({
//     position: 'absolute',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     gap: 3,
//     transform: 'translate(-50%, -50%)',
//     color: '#1f1f1f',
//     textAlign: 'center',
//     pointerEvents: 'none',
// })
//
// export const axisText = style({ fontSize: 10, fontWeight: 600, lineHeight: '12px', whiteSpace: 'nowrap' })
//
// export const footer = style({
//     display: 'flex',
//     justifyContent: 'space-between',
//     flexWrap: 'wrap',
//     gap: 8,
//     marginTop: 8,
// })
//
// export const footerText = style({ fontSize: 8.5, color: '#b0ada5' })

import { style } from '@vanilla-extract/css'
import { vars } from '@/styles/theme/tokens.css'

export const card = style({
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    minWidth: 0,
    margin: 0,
    padding: '28px 20px 16px',
    background: '#f3f2ed',
    border: '1px solid #e9e7e0',
    borderRadius: 20,
    fontFamily: vars.fontFamily.body,
})

export const title = style({
    margin: 0,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 700,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: '#1a1a1a',
    '@media': { 'screen and (max-width: 600px)': { fontSize: 15, letterSpacing: '0.12em' } },
})

export const subtitle = style({
    margin: '10px 0 0',
    textAlign: 'center',
    fontSize: 11,
    color: '#8a877f',
})

export const header = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 14,
})

export const headerLabel = style({
    fontSize: 9,
    fontWeight: 500,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    color: '#a09d95',
})

export const cohortLegend = style({ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 16 })

export const cohortLegendItem = style({
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    fontSize: 10,
    color: '#57534e',
})

export const legendDot = style({ width: 9, height: 9, borderRadius: '9999px' })

export const scroller = style({ margin: '0 -4px' })

export const stage = style({
    position: 'relative',
    width: '100%',
    maxWidth: 760,
    aspectRatio: '600 / 480',
    margin: '0 auto',
    '@media': { 'screen and (max-width: 600px)': { aspectRatio: '1 / 1.05' } },
})

// Dark ring marking the middle of the radar
export const center = style({
    position: 'absolute',
    left: '50%',
    top: '50%',
    width: 10,
    height: 10,
    transform: 'translate(-50%, -50%)',
    borderRadius: '9999px',
    background: '#fff',
    border: '4px solid #111',
    boxSizing: 'content-box',
    pointerEvents: 'none',
})

export const footer = style({
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 8,
})

export const footerText = style({ fontSize: 8.5, color: '#b0ada5' })