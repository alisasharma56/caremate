import { style, styleVariants } from "@vanilla-extract/css";
import { vars, colors, space } from "@/styles/theme/tokens.css.ts";

export const dayRow = style({
    display: "flex",
    flexWrap: "wrap",
    gap: space[2],
});

export const dayChip = style({
    padding: `${space[2]} ${space[3]}`,
    borderRadius: 999,
    border: `1px solid ${colors.border}`,
    background: colors.surface,
    fontSize: vars.fontSize.sm,
    fontWeight: 500,
    color: colors.foreground,
    cursor: "pointer",
    transition: "background 0.15s ease, border-color 0.15s ease",
    ":hover": {
        background: vars.color.primary.lightest,
    },
});

export const dayChipTone = styleVariants({
    selected: {
        borderColor: vars.color.primary.main,
    },
    default: {},
});