import { style, styleVariants } from '@vanilla-extract/css'
import { colors, radii, space, vars } from '@/styles/theme/tokens.css'
import { avatarTone } from '../Leadcard/Leadcard.css.ts'

export { avatarTone }

export const wrap = style({
    display: 'flex',
    flexDirection: 'column',
    gap: space[3],
})

export const toolbar = style({
    display: 'flex',
    alignItems: 'center',
    gap: space[3],
    justifyContent: 'flex-start',
})

export const nav = style({
    display: 'flex',
    alignItems: 'center',
    gap: space[1],
})

export const navButton = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 26,
    height: 26,
    borderRadius: '9999px',
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
    border: `1px solid ${colors.border}`,
    background: colors.surface,
})

export const viewToggleButton = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 26,
    padding: `0 ${space[3]}`,
    borderRadius: radii.sm,
    border: 'none',
    fontSize: vars.fontSize.xs,
    fontWeight: 500,
    color: colors.muted,
    background: 'transparent',
    cursor: 'pointer',
    transition: 'background-color 0.12s ease, color 0.12s ease',
})

export const viewToggleButtonActive = style({
    background: vars.color.primary.main,
    color: colors.primaryText,
})

export const calendarTable = style({
    border: `1px solid ${colors.border}`,
    borderRadius: radii.md,
    overflow: 'hidden',
    background: colors.surface,
})

export const headerRow = style({
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    background: vars.color.gray.lighter,
    borderBottom: `1px solid ${colors.border}`,
})

export const headerCell = style({
    padding: `${space[2]} ${space[3]}`,
    textAlign: 'center',
    fontSize: vars.fontSize.xs,
    fontWeight: 600,
    color: colors.muted,

    selectors: {
        '&:not(:last-child)': {
            borderRight: `1px solid ${colors.border}`,
        },
    },
})

export const weekRow = style({
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',

    selectors: {
        '&:not(:last-child)': {
            borderBottom: `1px solid ${colors.border}`,
        },
    },
})

export const dayCell = style({
    display: 'flex',
    flexDirection: 'column',
    gap: space[1],
    minHeight: 118,
    padding: space[2],

    selectors: {
        '&:not(:last-child)': {
            borderRight: `1px solid ${colors.border}`,
        },
    },
})

export const dayCellOutside = style({
    background: colors.background,
})

export const dayNumber = style({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    minWidth: 22,
    height: 22,
    padding: '0 4px',
    borderRadius: '9999px',
    fontSize: vars.fontSize.xs,
    fontWeight: 600,
    color: colors.foreground,
})

export const dayNumberToday = style({
    background: vars.color.primary.main,
    color: colors.primaryText,
})

export const pillList = style({
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
})

export const pill = style({
    display: 'flex',
    alignItems: 'center',
    gap: space[2],
    width: '100%',
    padding: '4px 10px 4px 4px',
    borderRadius: radii.md,
    border: `1px solid ${colors.border}`,
    background: colors.surface,
    cursor: 'pointer',
    textAlign: 'left',
    font: 'inherit',
    transition: 'box-shadow 0.12s ease, border-color 0.12s ease',

    selectors: {
        '&:hover': {
            borderColor: vars.color.gray.light,
            boxShadow: '0px 1px 3px 0px rgba(16, 24, 40, 0.06)',
        },
    },
})

export const pillAvatar = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    width: 22,
    height: 22,
    borderRadius: '9999px',
    color: colors.primaryText,
    fontSize: 10,
    fontWeight: 700,
})

export const pillName = style({
    flex: 1,
    minWidth: 0,
    fontSize: vars.fontSize.sm,
    fontWeight: 500,
    color: colors.foreground,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
})

export const pillDot = style({
    width: 7,
    height: 7,
    borderRadius: '9999px',
    flexShrink: 0,
    marginLeft: 'auto',
})

export const pillDotTone = styleVariants({
    new: { background: vars.color.info.main },
    conversation: { background: vars.color.warning.main },
    onboarded: { background: vars.color.success.main },
    closed: { background: vars.color.gray.main },
})