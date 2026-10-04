import { globalStyle, style, styleVariants } from '@vanilla-extract/css'
import { colors, radii, space, vars } from '@/styles/theme/tokens.css'

export const card = style({
    display: 'flex',
    alignItems: 'flex-start',
    gap: space[3],
    width: '100%',
    minHeight: 78,
    padding: space[4],
    border: 'none',
    borderRadius: radii.lg,
    background: colors.surface,
    boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.06)',
    cursor: 'grab',
    textAlign: 'left',
    font: 'inherit',
    touchAction: 'none',
    userSelect: 'none',
    outline: 'none',
    WebkitTapHighlightColor: 'transparent',
    transition:
        'box-shadow 0.15s cubic-bezier(0.2, 0, 0, 1), opacity 0.15s cubic-bezier(0.2, 0, 0, 1), transform 0.15s cubic-bezier(0.2, 0, 0, 1)',

    selectors: {
        '&:hover': {
            boxShadow: '0px 0px 12px 0px rgba(0, 0, 0, 0.1)',
        },
        '&:active': {
            cursor: 'grabbing',
        },
        '&:focus': {
            outline: 'none',
        },
        '&:focus-visible': {
            outline: 'none',
        },
    },
})

export const cardDragging = style({
    opacity: 0.4,
    transform: 'scale(0.98)',
    boxShadow: 'none',
})

export const avatar = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    width: 36,
    height: 36,
    marginTop: 2,
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

// Short AI-generated snippet, same pattern as the inbox summary line:
// muted, clamped to two lines so a long summary never blows up the card.
export const summary = style({
    marginTop: 2,
    fontSize: vars.fontSize.xs,
    lineHeight: 1.4,
    color: colors.muted,
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
})