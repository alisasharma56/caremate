import { style, styleVariants } from "@vanilla-extract/css";
import { vars, colors, space, typography } from "@/styles/theme/tokens.css.ts";

export const page = style({
    minHeight: "100vh",
    background: colors.surface,
    display: "flex",
    flexDirection: "column",
    fontFamily: typography.body,
});

export const header = style({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: `${space[6]} ${space[8]}`,
});

export const logo = style({
    fontSize: vars.fontSize.lg,
    fontWeight: 500,
    letterSpacing: "0.08em",
    color: colors.foreground,
});

export const progress = style({
    display: "flex",
    alignItems: "center",
    gap: space[2],
});

export const progressLabel = style({
    fontSize: vars.fontSize.md,
    color: vars.color.gray.main,
    fontWeight:400,
    marginRight: space[2],
});

export const progressTrack = style({
    display: "flex",
    gap: 6,
});

export const progressDot = style({
    width: 28,
    height: 4,
    borderRadius: 999,
    background: vars.color.gray.lighter,
});

export const progressDotTone = styleVariants({
    filled: { background: vars.color.primary.main },
    empty: { background: vars.color.gray.lighter },
});

export const skip = style({
    fontSize: vars.fontSize.md,
    color: vars.color.gray.main,
    textDecoration: "underline",
    cursor: "pointer",
    background: "none",
    border: "none",
});

export const content = style({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: space[12],
});
