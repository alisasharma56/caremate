import { style, styleVariants } from "@vanilla-extract/css";
import { vars, colors, space, radii } from "@/styles/theme/tokens.css";

export const grid = style({
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: space[3],
});

export const box = style({
    border: `1px solid ${colors.border}`,
    borderRadius: radii.md,
    padding: space[3],
    display: "flex",
    flexDirection: "column",
    gap: 6,
});

export const value = style({
    fontSize: vars.fontSize["2xl"],
    fontWeight: 700,
    color: colors.foreground,
    lineHeight: 1.1,
});

export const label = style({
    fontSize: vars.fontSize.xs,
    color: vars.color.gray.light,
});

export const delta = style({
    display: "inline-flex",
    alignItems: "center",
    gap: 3,
    fontSize: vars.fontSize.xs,
    fontWeight: 600,
});

export const deltaTone = styleVariants({
    green: { color: vars.color.success.main },
    red: { color: vars.color.error.main },
});