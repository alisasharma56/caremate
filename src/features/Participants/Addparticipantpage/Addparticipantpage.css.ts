import { style } from "@vanilla-extract/css";
import { vars, colors, space, radii } from "@/styles/theme/tokens.css";

export const page = style({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    background: colors.surface,
    height: "100%",
    overflowY: "auto",
});

export const header = style({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: space[6],
    borderBottom: `1px solid ${colors.border}`,
});

export const title = style({
    fontSize: vars.fontSize.xl,
    fontWeight: 600,
    color: colors.foreground,
    margin: 0,
});

export const headerActions = style({
    display: "flex",
    gap: space[2],
});

export const cancelButton = style({
    padding: `${space[2]} ${space[4]}`,
    borderRadius: radii.md,
    border: `1px solid ${colors.border}`,
    background: colors.surface,
    fontSize: vars.fontSize.sm,
    fontWeight: 500,
    color: colors.foreground,
    cursor: "pointer",
});

export const saveButton = style({
    padding: `${space[2]} ${space[4]}`,
    borderRadius: radii.md,
    border: "none",
    background: vars.color.primary.main,
    fontSize: vars.fontSize.sm,
    fontWeight: 600,
    color: vars.color.base.white,
    cursor: "pointer",
});

export const form = style({
    padding: space[6],
    display: "flex",
    flexDirection: "column",
    gap: space[4],
    maxWidth: 900,
});

export const fieldRow = style({
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: space[4],
});

export const field = style({
    display: "flex",
    flexDirection: "column",
    gap: space[2],
});

export const fieldLabel = style({
    fontSize: vars.fontSize.sm,
    fontWeight: 500,
    color: colors.foreground,
});

export const inputBase = style({
    width: "100%",
    padding: `${space[3]} ${space[3]}`,
    borderRadius: radii.md,
    border: `1px solid ${colors.border}`,
    fontSize: vars.fontSize.sm,
    color: colors.foreground,
    background: colors.surface,
    fontFamily: "inherit",
    ":focus": {
        outline: "none",
        borderColor: vars.color.primary.main,
    },
});

export const select = style([
    inputBase,
    {
        appearance: "none",
        cursor: "pointer",
        backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%236B7280' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 12px center",
        paddingRight: space[8],
    },
]);

export const textarea = style([
    inputBase,
    {
        resize: "vertical",
        minHeight: 90,
        fontFamily: "inherit",
    },
]);

export const chipRow = style({
    display: "flex",
    flexWrap: "wrap",
    gap: space[2],
});

export const chip = style({
    padding: `${space[2]} ${space[3]}`,
    borderRadius: 999,
    border: `1px solid ${colors.border}`,
    background: colors.surface,
    fontSize: vars.fontSize.sm,
    fontWeight: 500,
    color: colors.foreground,
    cursor: "pointer",
    whiteSpace: "nowrap",
});

export const chipSelected = style({
    borderColor: vars.color.primary.main,
    background: vars.color.primary.lightest,
    color: vars.color.primary.dark,
});