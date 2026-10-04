import { style } from '@vanilla-extract/css'
import { colors, radii, space, vars } from '@/styles/theme/tokens.css'

export const page = style({
    display: 'flex',
    flexDirection: 'column',
    gap: space[6],
    padding: space[6],
    background: colors.surface,
    minHeight: '100%',
})

export const header = style({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: space[4],
    paddingBottom: space[4],
    borderBottom: `1px solid ${colors.border}`,
})

export const headerText = style({
    display: 'flex',
    flexDirection: 'column',
    gap: space[1],
})

export const title = style({
    fontFamily: vars.fontFamily.brand,
    fontWeight: 500,
    fontSize: vars.fontSize.xl,
    lineHeight: 1.35,
    letterSpacing: 0,
    color: colors.foreground,
})

export const subtitle = style({
    fontFamily: vars.fontFamily.brand,
    fontWeight: 400,
    fontSize: vars.fontSize.md,
    lineHeight: 1.5,
    letterSpacing: 0,
    color: vars.color.gray.main,
})

export const modeToggle = style({
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    padding: 4,
    borderRadius: radii.md,
    border: `1px solid ${colors.border}`,
    background: colors.surface,
    flexShrink: 0,
})

export const modeButton = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 26,
    padding: '4px 12px',
    borderRadius: radii.md,
    border: 'none',
    fontFamily: vars.fontFamily.body,
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '18px',
    letterSpacing: 0,
    textAlign: 'center',
    color: vars.color.gray.main,
    background: 'transparent',
    cursor: 'pointer',
})

export const modeButtonActive = style({
    background: vars.color.primary.main,
    color: colors.primaryText,
})