import { style, styleVariants } from '@vanilla-extract/css'
import { colors, radii, space, vars } from '@/styles/theme/tokens.css'

export const wrap = style({
    display: 'flex',
    flexDirection: 'column',
    gap: space[3],
})

export const toolbar = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
})

export const nav = style({
    display: 'flex',
    alignItems: 'center',
    gap: space[2],
})

export const navButton = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 28,
    height: 28,
    borderRadius: radii.sm,
    border: `1px solid ${colors.border}`,
    background: colors.surface,
    color: colors.muted,
    cursor: 'pointer',

    selectors: {
        '&:hover': {
            background: colors.background,
        },
    },
})

export const rangeLabel = style({
    fontSize: vars.fontSize.sm,
    fontWeight: 600,
    color: colors.foreground,
    padding: `0 ${space[2]}`,
})

export const viewToggle = style({
    display: 'flex',
    alignItems: 'center',
    gap: space[1],
    padding: space[1],
    borderRadius: radii.md,
    background: colors.background,
})

export const viewToggleButton = style({
    padding: `${space[2]} ${space[3]}`,
    borderRadius: radii.sm,
    fontSize: vars.fontSize.xs,
    fontWeight: 500,
    color: colors.muted,
    background: 'transparent',
    cursor: 'pointer',
})

export const viewToggleButtonActive = style({
    background: colors.surface,
    color: colors.foreground,
    boxShadow: '0 1px 2px rgba(16, 24, 40, 0.08)',
})

export const grid = style({
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: space[2],
})

export const dayColumn = style({
    display: 'flex',
    flexDirection: 'column',
    gap: space[2],
    minHeight: 180,
    padding: space[2],
    borderRadius: radii.md,
    border: `1px solid ${colors.border}`,
    background: colors.surface,
})

export const dayColumnToday = style({
    borderColor: vars.color.primary.main,
    background: vars.color.primary.lightest,
})

export const dayHeader = style({
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    paddingBottom: space[1],
})

export const dayName = style({
    fontSize: vars.fontSize.xs,
    color: colors.muted,
})

export const dayNumber = style({
    fontSize: vars.fontSize.sm,
    fontWeight: 600,
    color: colors.foreground,
})

export const pillList = style({
    display: 'flex',
    flexDirection: 'column',
    gap: space[1],
})

export const pill = style({
    display: 'flex',
    alignItems: 'center',
    gap: space[1],
    padding: `${space[1]} ${space[2]}`,
    borderRadius: radii.sm,
    background: colors.background,
    fontSize: vars.fontSize.xs,
    color: colors.foreground,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
})

export const pillDot = style({
    width: 6,
    height: 6,
    borderRadius: '9999px',
    flexShrink: 0,
})

export const pillDotTone = styleVariants({
    new: { background: vars.color.info.main },
    conversation: { background: vars.color.warning.main },
    onboarded: { background: vars.color.success.main },
    closed: { background: vars.color.gray.main },
})