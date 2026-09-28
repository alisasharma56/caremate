import { style } from '@vanilla-extract/css'
import { colors, radii, space, vars } from '@/styles/theme/tokens.css'

export const page = style({
    display: 'flex',
    flexDirection: 'column',
    gap: space[6],
    padding: space[6],
})

export const header = style({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: space[4],
})

export const headerText = style({
    display: 'flex',
    flexDirection: 'column',
    gap: space[1],
})

export const title = style({
    fontSize: vars.fontSize.xl,
    fontWeight: 600,
    color: colors.foreground,
})

export const subtitle = style({
    fontSize: vars.fontSize.sm,
    color: colors.muted,
})

export const modeToggle = style({
    display: 'flex',
    alignItems: 'center',
    gap: space[1],
    padding: space[1],
    borderRadius: radii.md,
    background: colors.background,
    flexShrink: 0,
})

export const modeButton = style({
    padding: `${space[2]} ${space[3]}`,
    borderRadius: radii.sm,
    fontSize: vars.fontSize.sm,
    fontWeight: 500,
    color: colors.muted,
    background: 'transparent',
    cursor: 'pointer',
})

export const modeButtonActive = style({
    background: colors.surface,
    color: colors.foreground,
    boxShadow: '0 1px 2px rgba(16, 24, 40, 0.08)',
})