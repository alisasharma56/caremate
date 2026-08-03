import { style } from "@vanilla-extract/css";
import { vars, colors, space, typography } from "@/styles/theme/tokens.css";

export const page = style({
    minHeight: "100vh",
    background: colors.surface,
    fontFamily: typography.body,
    padding: `${space[8]} ${space[4]}`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
});

export const logo = style({
    alignSelf: "flex-start",
    marginBottom: space[12],
    paddingTop:"30px",
    paddingLeft:"80px",
});

export const heading = style({
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: space[2],
    marginBottom: space[8],
});

export const title = style({
    fontSize: vars.fontSize["4xl"],
    fontWeight: 400,
    color: vars.color.base.black,
    paddingBottom:"3px",
    margin: 0,
});

export const subtitle = style({
    fontSize: vars.fontSize.sm,
    color: vars.color.gray.main,
    fontWeight:400,
    margin: 0,
});

export const grid = style({
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 260px))",
    gap: space[6],
    width: "100%",
    maxWidth: 900,
});
