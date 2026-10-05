import { style } from '@vanilla-extract/css'
import { colors,  space, vars } from '@/styles/theme/tokens.css'

export const page = style({
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    width: '100%',
    minWidth: 0,
    boxSizing: 'border-box',
    gap: space[6],
    padding: space[6],
    background: colors.surface,
    minHeight: '100%',
    // The Kanban board scrolls internally once its 4 columns need more room
    // than a narrow (e.g. 14") screen has; this keeps that overflow from
    // ever leaking out and skewing the rest of the page layout sideways.
    overflowX: 'hidden',
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
    borderRadius: 8,
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
    borderRadius: 8,
    border: 'none',
    fontFamily: vars.fontFamily.body,
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '18px',
    letterSpacing: 0,
    textAlign: 'center',
    color: colors.foreground,
    background: 'transparent',
    cursor: 'pointer',
})

export const modeButtonActive = style({
    background: vars.color.primary.main,
    color: colors.primaryText,
})