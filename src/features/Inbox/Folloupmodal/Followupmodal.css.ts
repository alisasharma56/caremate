import { style } from "@vanilla-extract/css";
import { vars, colors, space, radii } from "@/styles/theme/tokens.css";

export const overlay = style({
    position: "fixed",
    inset: 0,
    background: "rgba(0, 0, 0, 0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 50,
});

export const modal = style({
    width: 480,
    maxWidth: "calc(100vw - 32px)",
    background: colors.surface,
    borderRadius: radii.lg,
    padding: space[6],
    display: "flex",
    flexDirection: "column",
    gap: space[4],
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
});

export const header = style({
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
});

export const title = style({
    fontSize: vars.fontSize.md,
    fontWeight: 600,
    color: colors.foreground,
    margin: 0,
});

export const subtitle = style({
    fontSize: vars.fontSize.xs,
    color: vars.color.gray.main,
    margin: 0,
    marginTop: 2,
});

export const closeButton = style({
    background: "none",
    border: "none",
    cursor: "pointer",
    color: vars.color.gray.light,
    display: "flex",
    flexShrink: 0,
});

export const warningBanner = style({
    padding: space[3],
    borderRadius: radii.md,
    background: vars.color.warning.lightest,
    border: `1px solid ${vars.color.warning.lighter}`,
    fontSize: vars.fontSize.xs,
    color: vars.color.warning.dark,
    lineHeight: 1.5,
});

export const sectionLabel = style({
    fontSize: vars.fontSize.xs,
    fontWeight: 600,
    color: colors.foreground,
    marginBottom: space[2],
});

export const messageBox = style({
    padding: space[3],
    borderRadius: radii.md,
    border: `1px solid ${colors.border}`,
    background: colors.surface,
    fontSize: vars.fontSize.sm,
    color: colors.foreground,
    lineHeight: 1.5,
    width: "100%",
    resize: "none",
    fontFamily: "inherit",
    ":focus": {
        outline: "none",
        borderColor: vars.color.primary.main,
    },
});

export const editButton = style({
    marginTop: space[2],
    padding: `${space[2]} ${space[3]}`,
    borderRadius: radii.md,
    border: `1px solid ${colors.border}`,
    background: colors.surface,
    fontSize: vars.fontSize.xs,
    fontWeight: 500,
    color: colors.foreground,
    cursor: "pointer",
});

export const sendVia = style({
    display: "flex",
    flexDirection: "column",
    gap: space[2],
});

export const sendViaRow = style({
    display: "flex",
    gap: space[2],
});

export const channelButton = style({
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