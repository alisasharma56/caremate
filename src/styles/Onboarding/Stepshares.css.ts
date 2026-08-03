import { style } from "@vanilla-extract/css";
import { vars, colors, space, radii } from "@/styles/theme/tokens.css";

export const stepWrap = style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: space[8],
    width: "100%",
    maxWidth: 620,
    padding: `0 ${space[4]}`,
});

export const heading = style({
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: space[2],
});

export const title = style({
    fontSize: vars.fontSize["4xl"],
    fontWeight: 400,
    color:vars.color.base.black ,
    margin: 0,
});

export const subtitle = style({
    fontSize: vars.fontSize.sm,
    color: vars.color.gray.main,
    fontWeight: 400,
    padding:'8px',
    margin: 0,
});

export const actions = style({
    display: "flex",
    margin: space[3],
    height: "44px",
    width: "100%",
    gap: space[3],
});

export const buttonBase = style({
    flex: 1,
    padding: `${space[3]} ${space[4]}`,
    borderRadius: radii.lg,
    fontSize: vars.fontSize.sm,
    fontWeight: 600,
    cursor: "pointer",
    textAlign: "center",
    border: "none",
    ":disabled": {
        opacity: 0.5,
        cursor: "not-allowed",
    },
});

export const primaryButton = style([
    buttonBase,
    {
        background: vars.color.primary.main,
        color: vars.color.base.white,
        fontSize: vars.fontSize.sm,
        fontWeight: 500,
        border: "none",
    },
]);

export const secondaryButton = style([
    buttonBase,
    {
        background: colors.surface,
        color: vars.color.base.black,
        border: `1px solid ${vars.color.primary.main}`,
        fontSize: vars.fontSize.sm,
        fontWeight: 500,
    },
]);