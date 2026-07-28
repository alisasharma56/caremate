import { style, styleVariants } from "@vanilla-extract/css";
import { vars, colors, space } from "@/styles/theme/tokens.css";

export const chipGrid = style({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: space[2],
    width: "100%",
});

export const chip = style({
    background: colors.surface,
    border: `1px solid ${colors.border}`,
    borderRadius: 999,
    padding: `${space[2]} ${space[4]}`,
    fontSize: vars.fontSize.sm,
    fontWeight: 500,
    color: colors.foreground,
    cursor: "pointer",
    whiteSpace: "nowrap",
    transition: "background 0.15s ease, border-color 0.15s ease",
    ":hover": {
        background: vars.color.gray.lightest,
    },
});

export const chipTone = styleVariants({
    selected: {
        borderColor: vars.color.primary.main,
    },
    default: {},
});