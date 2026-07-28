import { style } from "@vanilla-extract/css";
import { vars, colors, space, radii } from "@/styles/theme/tokens.css";

export const cardWrap = style({
    position: "relative",
});

export const card = style({
    background: colors.surface,
    border: `1px solid ${colors.border}`,
    borderRadius: radii.lg,
    padding: space[6],
    display: "flex",
    flexDirection: "column",
    gap: space[4],
    height: "100%",
    cursor: "pointer",
    transition: "border-color 0.15s ease",
    ":hover": {
        borderColor: vars.color.primary.main,
    },
});

export const cardSelected = style({
    borderColor: vars.color.primary.main,
});

export const badge = style({
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: vars.color.primary.main,
    color: vars.color.base.white,
    fontSize: vars.fontSize.xs,
    fontWeight: 400,
    padding: `4px ${space[3]}`,
    borderRadius: 999,
    whiteSpace: "nowrap",
});

export const tier = style({
    fontSize: vars.fontSize.xs,
    fontWeight: 400,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: vars.color.gray.light,
});

export const priceRow = style({
    display: "flex",
    alignItems: "baseline",
    gap: 4,
});

export const price = style({
    fontSize: vars.fontSize["4xl"],
    fontWeight: 700,
    color: colors.foreground,
});

export const period = style({
    fontSize: vars.fontSize.sm,
    color: vars.color.gray.light,
    fontWeight: 400,
});

export const description = style({
    fontSize: vars.fontSize.sm,
    color: vars.color.gray.main,
    fontWeight: 400,
    margin: 0,
});

export const featureList = style({
    display: "flex",
    flexDirection: "column",
    gap: space[2],
    margin: 0,
    padding: space[3] ,
    listStyle: "none",
    flex: 1,
});

export const featureRow = style({
    display: "flex",
    alignItems: "center",
    gap: space[2],
    fontSize: vars.fontSize.sm,
    fontWeight: 400,
});

export const featureIcon = style({
    flexShrink: 0,
    display: "inline-flex",
});

export const featureIconTone = {
    included: style({ color: vars.color.base.black }),
    excluded: style({ color: vars.color.gray.light }),
};

export const featureLabel = style({
    color: colors.foreground,
});

export const featureLabelExcluded = style({
    color: vars.color.gray.light,
    textDecoration: "line-through",
});

export const ctaButton = style({
    width: "100%",
    padding: `${space[3]} ${space[4]}`,
    borderRadius: radii.md,
    fontSize: vars.fontSize.sm,
    fontWeight: 500,
    cursor: "pointer",
    textAlign: "center",
    background: colors.surface,
    color: vars.color.base.black,
    border: `1px solid ${colors.border}`,
    transition: "background 0.15s ease, color 0.15s ease, border-color 0.15s ease",
    selectors: {
        [`${card}:hover &`]: {
            background: vars.color.primary.main,
            color: vars.color.base.white,
            borderColor: vars.color.primary.main,
        },
    },
});

// Persistent "selected" look for the button, independent of hover.
export const ctaButtonSelected = style({
    background: vars.color.primary.main,
    color: vars.color.base.white,
    border: "none",
});