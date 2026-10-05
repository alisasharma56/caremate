import { keyframes, style } from '@vanilla-extract/css'
import { colors, radii, space, vars } from '@/styles/theme/tokens.css'

const EASE = 'cubic-bezier(0.2, 0, 0, 1)'

// The board itself can need more than the viewport's width once 4 columns
// each need their 240px minimum (e.g. a 14" laptop with a sidebar eating
// into the available width). Scrolling happens here, inside this wrapper,
// instead of the whole page — letting the page overflow sideways is what
// produced the stray gap/scrollbar on narrow screens.
export const boardScroll = style({
    width: '100%',
    overflowX: 'auto',
})

export const board = style({
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(240px, 1fr))',
    gap: space[4],
    alignItems: 'start',
    minWidth: 'fit-content',
})

export const column = style({
    display: 'flex',
    flexDirection: 'column',
    gap: space[3],
})

export const columnHeader = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: space[2],
    height: 48,
    padding: space[3],
    borderRadius: radii.md,
    border: `1px solid ${colors.border}`,
    background: colors.surface,
})

export const columnTitle = style({
    fontSize: vars.fontSize.sm,
    fontWeight: 600,
    color: colors.foreground,
})

export const columnCount = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 24,
    height: 24,
    padding: '0 6px',
    borderRadius: '9999px',
    background: vars.color.gray.lighter,
    color: colors.foreground,
    fontSize: vars.fontSize.xs,
    fontWeight: 600,
})

export const columnList = style({
    display: 'flex',
    flexDirection: 'column',
    gap: space[3],
    minHeight: 80,
    padding: space[1],
    borderRadius: radii.md,
    border: '1px solid transparent',
    transition: `background-color 0.15s ${EASE}, border-color 0.15s ${EASE}`,
})

export const columnListDragOver = style({
    background: vars.color.primary.lightest,
    border: `1px solid ${vars.color.primary.light}`,
})

export const emptyState = style({
    padding: space[2],
    fontSize: vars.fontSize.xs,
    color: colors.muted,
    textAlign: 'center',
})

// Quick pop-in so the clone doesn't just appear at full size the instant
// the drag threshold is crossed.
const floatIn = keyframes({
    from: { opacity: 0, transform: 'scale(0.96)' },
    to: { opacity: 1, transform: 'scale(1.02)' },
})

// Mirrors LeadCard's own `card` styling so the floating clone that follows
// the cursor while dragging looks identical to the real card, just lifted.
export const dragFloatingCard = style({
    position: 'fixed',
    zIndex: 1000,
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'flex-start',
    gap: space[3],
    padding: space[4],
    borderRadius: radii.lg,
    background: colors.surface,
    boxShadow: '0px 8px 20px 0px rgba(0, 0, 0, 0.16)',
    transform: 'scale(1.02)',
    cursor: 'grabbing',
    animation: `${floatIn} 0.12s ${EASE}`,
    willChange: 'transform',
})