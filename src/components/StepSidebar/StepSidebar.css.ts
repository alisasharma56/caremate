import { style, styleVariants } from "@vanilla-extract/css";
import { vars, space, radii } from "@/styles/theme/tokens.css.ts";

export const sidebar = style({
    display: "flex",
    flexDirection: "column",
    gap: space[2],
    width: 220,
});

export const label = style({
    fontSize: vars.fontSize.xs,
    fontWeight: 400,
    textTransform: "uppercase",
    color: vars.color.gray.light,
    marginBottom: space[2],
});

export const item = style({
    display: "flex",
    alignItems: "center",
    gap: space[3],
    padding: space[3],
    borderRadius: radii.md,
    border: "1px solid transparent",
});

export const itemTone = styleVariants({
    upcoming: {},
    completed: {
        background: vars.color.gray.lightest,
    },
    current: {
        border: `1px solid ${vars.color.primary.main}`,
    },
});

export const circle = style({
    width: 22,
    height: 22,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: vars.fontSize.xs,
    fontWeight: 600,
    flexShrink: 0,
});

export const circleTone = styleVariants({
    upcoming: {
        background: vars.color.gray.lighter,
        color: vars.color.gray.main,
    },
    completed: {
        background: vars.color.primary.main,
        color: vars.color.base.white,
    },
    current: {
        background: vars.color.primary.main,
        color: vars.color.base.white,
    },
});

export const itemLabel = style({
    fontSize: vars.fontSize.sm,
});

export const itemLabelTone = styleVariants({
    upcoming: {
        color: vars.color.base.black,
    },
    completed: {
        color: vars.color.base.black,
    },
    current: {
        color: vars.color.base.black,
        fontWeight: 400,
    },
});