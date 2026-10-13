import { style } from '@vanilla-extract/css'
import { vars } from '@/styles/theme/tokens.css'

const COMPACT = '(min-width: 801px) and (max-width: 1000px)'

export const card = style({
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    minWidth: 0,
    background: '#ffffff',
    border: '1px solid #ececec',
    borderRadius: 20,
    boxShadow: '0px 2px 10px rgba(0,0,0,0.05)',
    fontFamily: vars.fontFamily.body,
})

export const topicRow = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 4,
    rowGap: 4,
    flexWrap: 'wrap',
    // Compact 4-up layout: risk badge always sits under the name so every card lines up.
    '@container': {
        [COMPACT]: { flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' },
    },
})

export const topicName = style({
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: 0,
    textTransform: 'uppercase',
    color: '#4b5563',
    whiteSpace: 'nowrap',
    minWidth: 0,
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
})

export const dot = style({ width: 8, height: 8, borderRadius: '9999px', flexShrink: 0 })

export const risk = style({
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    fontSize: 12,
    fontWeight: 500,
    color: '#ef4444',
    whiteSpace: 'nowrap',
    marginLeft: 'auto',
    '@container': { [COMPACT]: { marginLeft: 0 } },
})

export const riskDot = style({ width: 8, height: 8, borderRadius: '9999px', background: '#ef4444' })

/** Absolutely-fills a sized wrapper so Recharts' ResponsiveContainer has a definite box. */
export const chartFill = style({ position: 'absolute', inset: 0 })