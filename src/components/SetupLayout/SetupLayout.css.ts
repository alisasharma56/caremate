import { style } from "@vanilla-extract/css";
import { vars, colors, space, typography } from "@/styles/theme/tokens.css.ts";

export const page = style({
    minHeight: "100vh",
    background: colors.surface,
    fontFamily: typography.body,
    display: "flex",
    flexDirection: "column",
});

export const header = style({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: `${space[6]} ${space[8]}`,
});

export const logo = style({
    alignSelf: "flex-start",
    marginBottom: space[12],
    paddingTop: "30px",
    paddingLeft: "80px",
});

export const skip = style({
    fontSize: vars.fontSize.md,
    color: vars.color.gray.main,
    textDecoration: "underline",
    cursor: "pointer",
    background: "none",
    border: "none",
});

export const body = style({
    display: "flex",
    gap: space[12],
    padding: `${space[8]} ${space[8]}`,
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
});

export const content = style({
    flex: 1,
    maxWidth: 560,
});