import { style, styleVariants } from "@vanilla-extract/css";
import { vars, colors, space, radii } from "@/styles/theme/tokens.css.ts";

export const grid = style({
    display: "grid",
    gridTemplateColumns: "repeat(2, 242px)",
    rowGap: space[3],
    columnGap: "16px",
});

export const card = style({
    height:'95px',
    width:'242px',
    textAlign: "left",
    background: colors.surface,
    border: `1px solid ${colors.border}`,
    borderRadius: radii.xl,
    padding: space[4],
    display: "flex",
    flexDirection: "column",
    gap:4,
    cursor: "pointer",
    transition: "background 0.15s ease, border-color 0.15s ease",
    ":hover": {
        background: vars.color.primary.lightest,
    },
});

export const cardTone = styleVariants({
    default: {},
    selected: {
        borderColor: vars.color.primary.main,
    },
});

export const cardTitle = style({
    fontSize: vars.fontSize.sm,
    fontWeight: 500,
    color: vars.color.base.black,
});

export const cardDescription = style({
    fontSize: vars.fontSize.xs,
    color: vars.color.gray.main,
    fontWeight: 400,
    lineHeight: 1.4,
});

