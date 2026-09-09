import { style } from "@vanilla-extract/css";
import { vars, colors, space, radii, typography } from "@/styles/theme/tokens.css";

export const section = style({
    display: "flex",
    flexDirection: "column",
    gap: space[3],
    paddingTop: space[3],
    borderTop: `1px solid ${colors.border}`,
});

export const statsRow = style({
    display: "flex",
    alignItems: "center",
    gap: space[1],
    fontSize: vars.fontSize.xs,
    color: colors.muted,
    paddingBottom: space[2],
    borderBottom: `1px solid ${colors.border}`,
});

export const actionsRow = style({
    display: "flex",
    paddingBottom: space[2],
    borderBottom: `1px solid ${colors.border}`,
});

export const actionButton = style({
    flex: 1,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: space[1],
    padding: space[2],
    fontSize: vars.fontSize.sm,
    fontWeight: 600,
    color: colors.muted,
    background: "none",
    border: "none",
    borderRadius: radii.sm,
    cursor: "pointer",
    ":hover": { background: colors.background },
});

export const actionButtonActive = style({
    color: vars.color.error.main,
});

export const commentList = style({
    display: "flex",
    flexDirection: "column",
    gap: space[3],
});

export const commentRow = style({
    display: "flex",
    gap: space[2],
    alignItems: "flex-start",
});

export const replyList = style({
    display: "flex",
    flexDirection: "column",
    gap: space[2],
    marginLeft: 40,
    paddingLeft: space[3],
    borderLeft: `2px solid ${colors.border}`,
    marginTop: space[2],
});

export const commentAvatar = style({
    width: 32,
    height: 32,
    borderRadius: "50%",
    flexShrink: 0,
    display: "grid",
    placeItems: "center",
    color: vars.color.base.white,
    fontSize: vars.fontSize.xs,
    fontWeight: 700,
});

export const commentBody = style({
    display: "flex",
    flexDirection: "column",
    gap: 2,
    flex: 1,
    minWidth: 0,
});

export const commentHeaderRow = style({
    display: "flex",
    alignItems: "center",
    gap: space[2],
});

export const commentAuthorName = style({
    fontSize: vars.fontSize.sm,
    fontWeight: 700,
    color: colors.foreground,
});

export const commentTime = style({
    fontSize: vars.fontSize.xs,
    color: colors.muted,
});

export const youBadge = style({
    fontSize: vars.fontSize.xs,
    color: colors.muted,
    fontWeight: 500,
});

export const menuWrap = style({
    position: "relative",
    marginLeft: "auto",
});

export const menuButton = style({
    background: "none",
    border: "none",
    color: colors.muted,
    padding: 2,
    borderRadius: radii.sm,
    cursor: "pointer",
    display: "flex",
    ":hover": { background: colors.background },
});

export const menuDropdown = style({
    position: "absolute",
    right: 0,
    top: "100%",
    marginTop: 4,
    background: colors.surface,
    border: `1px solid ${colors.border}`,
    borderRadius: radii.md,
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    minWidth: 160,
    zIndex: 20,
    padding: space[1],
    display: "flex",
    flexDirection: "column",
});

export const menuItem = style({
    display: "flex",
    alignItems: "center",
    gap: space[2],
    padding: `${space[2]} ${space[2]}`,
    fontSize: vars.fontSize.sm,
    color: colors.foreground,
    background: "none",
    border: "none",
    textAlign: "left",
    cursor: "pointer",
    borderRadius: radii.sm,
    width: "100%",
    ":hover": { background: colors.background },
});

export const menuItemDanger = style({
    color: vars.color.error.main,
});

export const commentBubble = style({
    background: colors.background,
    borderRadius: radii.md,
    padding: `${space[2]} ${space[3]}`,
    display: "inline-block",
    width: "fit-content",
    maxWidth: "100%",
    transition: "background 200ms ease",
});

export const commentBubbleHighlighted = style({
    background: vars.color.warning.lighter,
});

export const commentText = style({
    fontSize: vars.fontSize.sm,
    color: colors.foreground,
    lineHeight: 1.5,
    margin: 0,
});

export const metaRow = style({
    display: "flex",
    alignItems: "center",
    gap: space[3],
    fontSize: vars.fontSize.xs,
    color: colors.muted,
    paddingLeft: space[1],
});

export const metaAction = style({
    background: "none",
    border: "none",
    padding: 0,
    cursor: "pointer",
    fontSize: vars.fontSize.xs,
    fontWeight: 600,
    color: colors.muted,
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    ":hover": { color: colors.foreground },
});

export const metaActionActive = style({
    color: vars.color.error.main,
});

export const viewMoreReplies = style({
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: vars.fontSize.xs,
    fontWeight: 600,
    color: vars.color.info.main,
    padding: 0,
    marginLeft: 40,
    textAlign: "left",
});

export const viewAllComments = style({
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: vars.fontSize.sm,
    fontWeight: 600,
    color: colors.muted,
    padding: `${space[2]} 0`,
    textAlign: "center",
    borderTop: `1px solid ${colors.border}`,
    ":hover": { color: colors.foreground },
});

export const replyBanner = style({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: vars.fontSize.xs,
    color: vars.color.info.dark,
    background: vars.color.info.lighter,
    borderRadius: radii.sm,
    padding: `${space[1]} ${space[2]}`,
});

export const replyBannerClose = style({
    background: "none",
    border: "none",
    cursor: "pointer",
    color: vars.color.info.dark,
    display: "flex",
});

export const composerWrap = style({
    display: "flex",
    flexDirection: "column",
    gap: space[2],
    paddingTop: space[2],
    borderTop: `1px solid ${colors.border}`,
});

export const composer = style({
    display: "flex",
    alignItems: "center",
    gap: space[2],
});

export const composerInput = style({
    flex: 1,
    border: `1px solid ${colors.border}`,
    borderRadius: 999,
    padding: `${space[2]} ${space[3]}`,
    fontSize: vars.fontSize.sm,
    fontFamily: typography.body,
    outline: "none",
    ":focus": { borderColor: vars.color.info.main },
});

export const composerSend = style({
    width: 32,
    height: 32,
    borderRadius: "50%",
    display: "grid",
    placeItems: "center",
    background: vars.color.primary.main,
    color: vars.color.base.white,
    border: "none",
    cursor: "pointer",
    flexShrink: 0,
    ":disabled": { opacity: 0.5, cursor: "not-allowed" },
});

export const editWrap = style({
    display: "flex",
    flexDirection: "column",
    gap: space[2],
    width: "100%",
});

export const editTextarea = style({
    width: "100%",
    border: `1px solid ${vars.color.info.main}`,
    borderRadius: radii.md,
    padding: space[2],
    fontSize: vars.fontSize.sm,
    fontFamily: typography.body,
    resize: "vertical",
    minHeight: 60,
    outline: "none",
});

export const editActions = style({
    display: "flex",
    gap: space[2],
});

export const editSaveButton = style({
    background: vars.color.primary.main,
    color: vars.color.base.white,
    border: "none",
    borderRadius: radii.sm,
    padding: `${space[1]} ${space[3]}`,
    fontSize: vars.fontSize.sm,
    fontWeight: 600,
    cursor: "pointer",
});

export const editCancelButton = style({
    background: "none",
    border: `1px solid ${colors.border}`,
    color: colors.foreground,
    borderRadius: radii.sm,
    padding: `${space[1]} ${space[3]}`,
    fontSize: vars.fontSize.sm,
    fontWeight: 600,
    cursor: "pointer",
});