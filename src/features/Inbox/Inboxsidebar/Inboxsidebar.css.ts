import { style, styleVariants } from "@vanilla-extract/css";
import { vars, colors, space, radii } from "@/styles/theme/tokens.css.ts";

export const panel = style({
    width: 320,
    display: "flex",
    flexDirection: "column",
    background: colors.surface,
    borderRight: `1px solid ${colors.border}`,
    height: "100%",
});

// --- header ---

export const header = style({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: space[4],
    borderBottom: `1px solid ${colors.border}`,
});

export const title = style({
    fontSize: vars.fontSize.lg,
    fontWeight: 600,
    color: colors.foreground,
});

export const autopilot = style({
    display: "flex",
    alignItems: "center",
    gap: space[2],
});

export const autopilotLabel = style({
    fontSize: vars.fontSize.xs,
    color: vars.color.gray.main,
});

export const toggle = style({
    width: 32,
    height: 18,
    borderRadius: 999,
    border: "none",
    cursor: "pointer",
    position: "relative",
    transition: "background 0.15s ease",
});

export const toggleTone = styleVariants({
    on: { background: vars.color.primary.main },
    off: { background: vars.color.gray.lighter },
});

export const toggleKnob = style({
    position: "absolute",
    top: 2,
    width: 14,
    height: 14,
    borderRadius: "50%",
    background: vars.color.base.white,
    transition: "left 0.15s ease",
});

export const activeBadge = style({
    display: "flex",
    alignItems: "center",
    gap: 4,
    fontSize: vars.fontSize.xs,
    color: vars.color.primary.main,
    whiteSpace: "nowrap",
});

export const activeDot = style({
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: vars.color.primary.main,
});

// --- platform filter pills ---

export const filterRow = style({
    display: "flex",
    gap: space[2],
    padding: `${space[3]} ${space[4]}`,
    borderBottom: `1px solid ${colors.border}`,
    marginBottom: space[3],
});

export const filterPill = style({
    display: "flex",
    alignItems: "center",
    gap: 4,
    padding: `${space[2]} ${space[2]}`,
    borderRadius: radii.md,
    border: `1px solid ${colors.border}`,
    background: colors.surface,
    fontSize: vars.fontSize.xs,
    fontWeight: 500,
    color: colors.foreground,
    cursor: "pointer",
    whiteSpace: "nowrap",
});

export const filterPillActive = style({
    borderColor: vars.color.primary.main,
    background: vars.color.primary.lightest,
    color: vars.color.primary.dark,
});

export const filterPillCount = style({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 18,
    height: 18,
    padding: "0 5px",
    borderRadius: 999,
    background: vars.color.gray.lighter,
    color: colors.foreground,
    fontSize: vars.fontSize.xxs,
    fontWeight: 600,
});

// --- status sub-tabs ---

export const tabRow = style({
    display: "flex",
    gap: space[4],
    padding: `0 ${space[4]}`,
    borderBottom: `1px solid ${colors.border}`,
    marginBottom: space[3],
});

export const tab = style({
    display: "flex",
    alignItems: "center",
    gap: 4,
    padding: `${space[2]} 0`,
    fontSize: vars.fontSize.sm,
    fontWeight: 500,
    color: vars.color.gray.main,
    background: "none",
    border: "none",
    borderBottom: "2px solid transparent",
    cursor: "pointer",
    marginBottom: -1,
});

export const tabActive = style({
    color: vars.color.primary.main,
    borderBottomColor: vars.color.primary.main,
});

export const tabCount = style({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 18,
    height: 18,
    padding: "0 5px",
    borderRadius: 999,
    background: vars.color.gray.lighter,
    color: colors.foreground,
    fontSize: vars.fontSize.xxs,
    fontWeight: 600,
});

// --- search ---

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
    borderRadius: radii.xl,
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

// --- conversation list ---

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

export const platformIcon = style({
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
});

export const itemBody = style({
    flex: 1,
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    gap: 2,
});

export const itemTopRow = style({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: space[2],
});

export const itemNameRow = style({
    display: "flex",
    alignItems: "center",
    gap: 6,
    minWidth: 0,
});

export const itemName = style({
    fontSize: vars.fontSize.sm,
    fontWeight: 600,
    color: colors.foreground,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
});

export const itemStatus = style({
    fontSize: vars.fontSize.xxs,
    color: vars.color.gray.light,
    whiteSpace: "nowrap",
});

export const itemTime = style({
    fontSize: vars.fontSize.xxs,
    color: vars.color.gray.light,
    flexShrink: 0,
});

export const itemPreview = style({
    fontSize: vars.fontSize.xs,
    color: vars.color.gray.main,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
});