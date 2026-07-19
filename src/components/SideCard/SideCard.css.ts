import { style } from "@vanilla-extract/css";
import { vars, colors, space, typography } from "@/styles/theme/tokens.css.ts";

export const card = style({
    width: 340,
    background: colors.surface,
    border: `1px solid ${colors.border}`,
    borderRadius: 20,
    padding: space[6],
    display: "flex",
    flexDirection: "column",
    gap: space[4],
    fontFamily: typography.body,
});

export const cardHeader = style({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
});

export const cardLabel = style({
    fontSize: vars.fontSize.xs,
    fontWeight: 700,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: vars.color.gray.light,
});

export const timestamp = style({
    fontSize: vars.fontSize.xs,
    color: vars.color.gray.light,
});

export const body = style({
    display: "flex",
    flexDirection: "column",
    gap: space[3],
});