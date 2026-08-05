import { style } from "@vanilla-extract/css";
import { vars, colors, space, radii } from "@/styles/theme/tokens.css.ts";

export const heading = style({
    display: "flex",
    flexDirection: "column",
    gap: space[2],
    marginBottom: space[6],
});

export const title = style({
    fontSize: vars.fontSize["3xl"],
    fontWeight: 400,
    color: vars.color.base.black,
    margin: 0,
});

export const subtitle = style({
    fontSize: vars.fontSize.sm,
    color: vars.color.gray.main,
    margin: 0,
    fontWeight: 400,
});

export const fieldRow = style({
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: space[4],
    marginBottom: space[6],
});

export const field = style({
    display: "flex",
    flexDirection: "column",
    gap: space[2],
});

export const fieldLabel = style({
    fontSize: vars.fontSize.sm,
    fontWeight: 400,
    color: vars.color.base.black,
});

export const required = style({
    color: vars.color.error.main,
});

export const inputBase = style({
    width: "100%",
    padding: `${space[3]} ${space[3]}`,
    borderRadius: radii.xl,
    border: `1px solid ${colors.border}`,
    fontSize: vars.fontSize.sm,
    color: vars.color.base.black,
    background: colors.surface,
    fontFamily: "inherit",
    ":focus": {
        outline: "none",
        borderColor: vars.color.primary.main,
    },
});

export const input = style([inputBase, {}]);


export const selectWrap = style({
    position: "relative",
    width: "100%",
});

export const select = style([
    inputBase,
    {
        appearance: "none",
        cursor: "pointer",
        paddingRight: space[8],
    },
]);

export const selectIcon = style({
    position: "absolute",
    top: "50%",
    right: space[3],
    transform: "translateY(-50%)",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    color: vars.color.gray.main,
});

export const primaryButton = style({
    width: "100%",
    padding: `${space[3]} ${space[4]}`,
    borderRadius: radii.xl,
    fontSize: vars.fontSize.sm,
    fontWeight: 500,
    cursor: "pointer",
    textAlign: "center",
    background: vars.color.primary.main,
    color: vars.color.base.white,
    border: "none",
    marginTop: space[4],
    ":disabled": {
        opacity: 0.5,
        cursor: "not-allowed",
    },
});