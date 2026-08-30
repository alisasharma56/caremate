import { style, styleVariants } from "@vanilla-extract/css";
import { vars, colors, space, radii } from "@/styles/theme/tokens.css";

export const panel = style({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    background: colors.surface,
    minWidth: 0,
    height: "100%",
});

// --- header ---

export const header = style({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: space[4],
    borderBottom: `1px solid ${colors.border}`,
    flexShrink: 0,
});

export const headerLeft = style({
    display: "flex",
    alignItems: "center",
    gap: space[3],
});

export const headerAvatar = style({
    width: 40,
    height: 40,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: vars.fontSize.sm,
    fontWeight: 600,
    color: vars.color.base.white,
    flexShrink: 0,
});

export const headerNameRow = style({
    display: "flex",
    alignItems: "center",
    gap: 6,
});

export const headerName = style({
    fontSize: vars.fontSize.md,
    fontWeight: 600,
    color: colors.foreground,
});

export const headerStatus = style({
    fontSize: vars.fontSize.xs,
    color: vars.color.gray.light,
});

export const headerVia = style({
    fontSize: vars.fontSize.xs,
    color: vars.color.gray.main,
});

export const headerActions = style({
    display: "flex",
    alignItems: "center",
    gap: space[2],
});

export const actionButton = style({
    display: "flex",
    alignItems: "center",
    gap: 6,
    padding: `${space[2]} ${space[3]}`,
    borderRadius: radii.md,
    border: `1px solid ${colors.border}`,
    background: colors.surface,
    fontSize: vars.fontSize.xs,
    fontWeight: 500,
    color: colors.foreground,
    cursor: "pointer",
    whiteSpace: "nowrap",
});

export const primaryActionButton = style({
    padding: `${space[2]} ${space[3]}`,
    borderRadius: radii.md,
    border: "none",
    background: vars.color.primary.main,
    fontSize: vars.fontSize.xs,
    fontWeight: 600,
    color: vars.color.base.white,
    cursor: "pointer",
    whiteSpace: "nowrap",
});

// --- banners ---

export const suggestedBanner = style({
    margin: space[4],
    marginBottom: 0,
    padding: space[3],
    borderRadius: radii.md,
    border: `1px solid ${colors.border}`,
    background: colors.surface,
});

export const suggestedBannerTop = style({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 6,
});

export const suggestedBannerTitle = style({
    display: "flex",
    alignItems: "center",
    gap: 6,
    fontSize: vars.fontSize.sm,
    fontWeight: 600,
    color: colors.foreground,
});

export const suggestedBannerClose = style({
    background: "none",
    border: "none",
    cursor: "pointer",
    color: vars.color.gray.light,
    display: "flex",
});

export const suggestedBannerText = style({
    fontSize: vars.fontSize.xs,
    color: vars.color.gray.main,
    lineHeight: 1.5,
    margin: 0,
});

export const aiManagingBanner = style({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: `${space[2]} ${space[4]}`,
    borderBottom: `1px solid ${colors.border}`,
    flexShrink: 0,
});

export const aiManagingText = style({
    display: "flex",
    alignItems: "center",
    gap: 6,
    fontSize: vars.fontSize.xs,
    color: vars.color.gray.main,
});

export const aiManagingTakeOver = style({
    fontSize: vars.fontSize.xs,
    fontWeight: 600,
    color: vars.color.primary.main,
    background: "none",
    border: "none",
    cursor: "pointer",
});

// --- message list ---

export const messageList = style({
    flex: 1,
    overflowY: "auto",
    padding: space[4],
    display: "flex",
    flexDirection: "column",
    gap: space[3],
});

export const dateDivider = style({
    textAlign: "center",
    fontSize: vars.fontSize.xs,
    color: vars.color.gray.light,
    margin: `${space[2]} 0`,
});

export const statusDivider = style({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    fontSize: vars.fontSize.xs,
    color: vars.color.primary.main,
    margin: `${space[2]} 0`,
});

export const statusDividerDot = style({
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: vars.color.primary.main,
});

export const bubbleRow = style({
    display: "flex",
    flexDirection: "column",
    maxWidth: "70%",
});

export const bubbleRowTone = styleVariants({
    contact: { alignSelf: "flex-start", alignItems: "flex-start" },
    outgoing: { alignSelf: "flex-end", alignItems: "flex-end" },
});

export const bubble = style({
    padding: `${space[3]} ${space[3]}`,
    borderRadius: radii.md,
    fontSize: vars.fontSize.sm,
    lineHeight: 1.5,
});

export const bubbleTone = styleVariants({
    contact: {
        background: colors.surface,
        border: `1px solid ${colors.border}`,
        color: colors.foreground,
    },
    outgoing: {
        background: vars.color.gray.lightest,
        color: colors.foreground,
    },
});

export const bubbleMeta = style({
    fontSize: vars.fontSize.xxs,
    color: vars.color.gray.light,
    marginTop: 4,
});

// --- footer ---

export const footer = style({
    flexShrink: 0,
    borderTop: `1px solid ${colors.border}`,
    padding: space[4],
});

export const footerChannel = style({
    display: "flex",
    alignItems: "center",
    gap: 6,
    fontSize: vars.fontSize.xs,
    color: vars.color.gray.light,
    marginBottom: space[2],
});

export const replyRow = style({
    display: "flex",
    alignItems: "center",
    gap: space[2],
});

export const replyInputWrap = style({
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: space[2],
    padding: `${space[3]} ${space[4]}`,
    borderRadius: radii.xl,
    border: `1px solid ${colors.border}`,
});

export const replyInput = style({
    flex: 1,
    border: "none",
    outline: "none",
    fontSize: vars.fontSize.sm,
    color: colors.foreground,
    fontFamily: "inherit",
    background: "none",
});

export const letAiReply = style({
    fontSize: vars.fontSize.xs,
    color: vars.color.gray.light,
    whiteSpace: "nowrap",
    flexShrink: 0,
});

export const sendButton = style({
    width: 36,
    height: 36,
    borderRadius: "50%",
    border: "none",
    background: vars.color.primary.main,
    color: vars.color.base.white,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    flexShrink: 0,
});

export const takeOverButton = style({
    padding: `${space[3]} ${space[4]}`,
    borderRadius: radii.xl,
    border: "none",
    background: vars.color.primary.main,
    color: vars.color.base.white,
    fontSize: vars.fontSize.sm,
    fontWeight: 600,
    cursor: "pointer",
    whiteSpace: "nowrap",
    flexShrink: 0,
});

export const footerHint = style({
    display: "flex",
    alignItems: "center",
    gap: 6,
    fontSize: vars.fontSize.xxs,
    color: vars.color.gray.light,
    marginTop: space[2],
});

export const footerHintDot = style({
    width: 5,
    height: 5,
    borderRadius: "50%",
    background: vars.color.primary.main,
    flexShrink: 0,
});