import { style, styleVariants } from "@vanilla-extract/css";
import { vars, colors, space, radii } from "@/styles/theme/tokens.css";

export const panel = style({
    width: 280,
    display: "flex",
    flexDirection: "column",
    background: colors.surface,
    borderRight: `1px solid ${colors.border}`,
    height: "100%",
});

export const header = style({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: space[4],
});

export const title = style({
    fontSize: vars.fontSize.lg,
    fontWeight: 600,
    color: colors.foreground,
});

export const addButton = style({
    display: "flex",
    alignItems: "center",
    gap: 4,
    padding: `${space[2]} ${space[3]}`,
    borderRadius: radii.md,
    border: "none",
    background: vars.color.primary.main,
    color: vars.color.base.white,
    fontSize: vars.fontSize.xs,
    fontWeight: 600,
    cursor: "pointer",
});

export const searchWrap = style({
    position: "relative",
    padding: `0 ${space[4]}`,
    marginBottom: space[3],
});

export const searchIcon = style({
    position: "absolute",
    left: 28,
    top: "50%",
    transform: "translateY(-50%)",
    color: vars.color.gray.light,
    pointerEvents: "none",
    display: "flex",
});

export const searchInput = style({
    width: "100%",
    padding: `${space[2]} ${space[3]} ${space[2]} 36px`,
    borderRadius: radii.md,
    border: `1px solid ${colors.border}`,
    fontSize: vars.fontSize.sm,
    color: colors.foreground,
    fontFamily: "inherit",
    background: colors.surface,
    ":focus": {
        outline: "none",
        borderColor: vars.color.primary.main,
    },
});

export const list = style({
    flex: 1,
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
});

export const item = style({
    display: "flex",
    alignItems: "flex-start",
    gap: space[3],
    padding: space[4],
    cursor: "pointer",
    textAlign: "left",
    border: "none",
    background: "none",
    borderBottom: `1px solid ${colors.border}`,
    width: "100%",
});

export const itemSelected = style({
    background: vars.color.gray.lightest,
});

export const avatar = style({
    width: 36,
    height: 36,
    borderRadius: "50%",
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: vars.fontSize.xs,
    fontWeight: 600,
    color: vars.color.base.white,
});

export const itemBody = style({
    flex: 1,
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    gap: 4,
});

export const itemTopRow = style({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: space[2],
});

export const itemName = style({
    fontSize: vars.fontSize.sm,
    fontWeight: 600,
    color: colors.foreground,
});

export const itemCategory = style({
    fontSize: vars.fontSize.xs,
    color: vars.color.gray.main,
});

export const itemBottomRow = style({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: space[2],
});

export const statusBadge = style({
    display: "inline-flex",
    alignItems: "center",
    padding: `2px ${space[2]}`,
    borderRadius: 999,
    fontSize: vars.fontSize.xxs,
    fontWeight: 600,
});

export const statusBadgeTone = styleVariants({
    active: {
        background: vars.color.success.lightest,
        color: vars.color.success.dark,
    },
    reviewDue: {
        background: vars.color.warning.lightest,
        color: vars.color.warning.dark,
    },
});

export const itemSince = style({
    fontSize: vars.fontSize.xxs,
    color: vars.color.gray.light,
    whiteSpace: "nowrap",
});