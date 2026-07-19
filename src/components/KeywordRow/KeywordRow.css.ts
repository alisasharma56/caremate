import { style } from "@vanilla-extract/css";
import { vars, colors, space } from "@/styles/theme/tokens.css";

export const row = style({
    display: "flex",
    alignItems: "center",
    gap: space[3],
    padding: `${space[3]} 0`,
    borderBottom: `1px solid ${colors.border}`,
    selectors: {
        "&:last-child": {
            borderBottom: "none",
            paddingBottom: 0,
        },
        "&:first-child": {
            paddingTop: 0,
        },
    },
});

export const rank = style({
    fontSize: vars.fontSize.sm,
    color: vars.color.gray.light,
    width: 14,
    flexShrink: 0,
});

export const keyword = style({
    fontSize: vars.fontSize.md,
    color: colors.foreground,
    flex: 1,
});

export const change = style({
    fontSize: vars.fontSize.sm,
    fontWeight: 700,
    color: vars.color.primary.main,
    whiteSpace: "nowrap",
});