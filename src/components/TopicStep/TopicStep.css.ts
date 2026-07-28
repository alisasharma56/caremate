import { style, styleVariants } from "@vanilla-extract/css";
import {vars, colors, space, radii} from "@/styles/theme/tokens.css.ts";

export const chipGrid = style({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "16px",
    width: "100%",
    alignItems: "flex-start",
    maxWidth: "480px",
});

export const chip = style({
    minHeight: "44px",
    background: colors.surface,
    border: `1px solid ${colors.border}`,
    borderRadius: radii.xl,
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