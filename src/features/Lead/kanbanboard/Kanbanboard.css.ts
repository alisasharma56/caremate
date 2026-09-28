import { style, styleVariants } from '@vanilla-extract/css'
import { colors, radii, space, vars } from '@/styles/theme/tokens.css'

export const board = style({
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(240px, 1fr))',
    gap: space[4],
    alignItems: 'start',
})

export const column = style({
    display: 'flex',
    flexDirection: 'column',
    gap: space[2],
    padding: space[2],
    borderRadius: radii.lg,
    background: colors.background,
    minHeight: 200,
})

export const columnHeader = style({
    display: 'flex',
    alignItems: 'center',
    gap: space[2],
    padding: `${space[1]} ${space[2]}`,
})

export const columnDot = style({
    width: 8,
    height: 8,
    borderRadius: '9999px',
    flexShrink: 0,
})

export const columnDotTone = styleVariants({
    new: { background: vars.color.info.main },
    conversation: { background: vars.color.warning.main },
    onboarded: { background: vars.color.success.main },
    closed: { background: vars.color.gray.main },
})

export const columnTitle = style({
    fontSize: vars.fontSize.sm,
    fontWeight: 600,
    color: colors.foreground,
})

export const columnCount = style({
    fontSize: vars.fontSize.xs,
    color: colors.muted,
})

export const columnList = style({
    display: 'flex',
    flexDirection: 'column',
    gap: space[2],
})

export const emptyState = style({
    padding: space[2],
    fontSize: vars.fontSize.xs,
    color: colors.muted,
    textAlign: 'center',
})