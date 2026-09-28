import { globalStyle, style, styleVariants } from '@vanilla-extract/css'
import { colors, radii, space, vars } from '@/styles/theme/tokens.css'

export const card = style({
    display: 'flex',
    alignItems: 'center',
    gap: space[2],
    padding: space[2],
    borderRadius: radii.md,
    border: `1px solid ${colors.border}`,
    background: colors.surface,
    cursor: 'pointer',
    transition: 'border-color 0.15s ease, box-shadow 0.15s ease',

    selectors: {
        '&:hover': {
            borderColor: vars.color.gray.light,
            boxShadow: '0 1px 2px rgba(16, 24, 40, 0.06)',
        },
    },
})

export const avatar = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    width: 36,
    height: 36,
    borderRadius: '9999px',
    color: colors.primaryText,
    fontSize: vars.fontSize.sm,
    fontWeight: 600,
})

// The color contract has no dedicated blue/purple/gold tones, so these
// stay as literal hex values (same approach FeedCard's avatar hash uses).
export const avatarTone = styleVariants({
    blue: { background: '#2E6BE6' },
    green: { background: vars.color.success.main },
    orange: { background: vars.color.warning.main },
    red: { background: vars.color.error.main },
    purple: { background: '#8B5CF6' },
    gold: { background: '#C9971F' },
})

export const body = style({
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    minWidth: 0,
})

export const name = style({
    fontSize: vars.fontSize.sm,
    fontWeight: 500,
    color: colors.foreground,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
})

export const platformRow = style({
    display: 'flex',
    alignItems: 'center',
    gap: space[1],
    color: colors.muted,
    fontSize: vars.fontSize.xs,
})

globalStyle(`${platformRow} svg`, {
    width: 14,
    height: 14,
})