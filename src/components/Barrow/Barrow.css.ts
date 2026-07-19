import { style, styleVariants } from "@vanilla-extract/css";
import { vars, colors } from "@/styles/theme/tokens.css";

export const row = style({
    display: "flex",
    flexDirection: "column",
    gap: 6,
});

export const top = style({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
});

export const label = style({
    fontSize: vars.fontSize.sm,
    fontWeight: 500,
    color: colors.foreground,
});

export const delta = style({
    fontSize: vars.fontSize.sm,
    fontWeight: 700,
});

export const deltaTone = styleVariants({
    green: { color: vars.color.success.main },
    red: { color: vars.color.error.main },
    blue: { color: vars.color.info.main },
});

export const arrow = style({
    color: vars.color.gray.light,
    flexShrink: 0,
});

export const track = style({
    height: 6,
    borderRadius: 999,
    background: vars.color.gray.lighter,
    overflow: "hidden",
});

export const fill = style({
    height: "100%",
    borderRadius: 999,
});

export const fillTone = styleVariants({
    green: { background: vars.color.success.main },
    red: { background: vars.color.error.main },
    blue: { background: vars.color.info.main },
});