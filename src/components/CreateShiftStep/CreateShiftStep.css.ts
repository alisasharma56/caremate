import { style, styleVariants } from "@vanilla-extract/css";
import { vars, colors, space, radii } from "@/styles/theme/tokens.css.ts";

export const aiCard = style({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: space[4],
    padding: space[4],
    borderRadius: radii.md,
    background: vars.color.primary.main,
    border: "none",
    cursor: "pointer",
    textAlign: "left",
    marginBottom: space[3],
});

export const aiCardText = style({
    display: "flex",
    flexDirection: "column",
    gap: 2,
});

export const aiCardTitle = style({
    fontSize: vars.fontSize.sm,
    fontWeight: 600,
    color: vars.color.base.white,
});

export const aiCardSubtitle = style({
    fontSize: vars.fontSize.xs,
    color: vars.color.primary.lightest,
});

export const aiCardIcon = style({
    flexShrink: 0,
    width: 32,
    height: 32,
    borderRadius: "50%",
    background: "rgba(255,255,255,0.25)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: vars.color.base.white,
});

export const secondaryButton = style({
    width: "100%",
    padding: space[4],
    borderRadius: radii.md,
    background: vars.color.gray.lightest,
    border: "none",
    fontSize: vars.fontSize.sm,
    fontWeight: 500,
    color: colors.foreground,
    cursor: "pointer",
    textAlign: "center",
});

// --- loading state ---

export const loadingCard = style({
    width: "100%",
    padding: space[6],
    borderRadius: radii.md,
    background: vars.color.gray.lightest,
    border: `1px solid ${colors.border}`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
    textAlign: "center",
});

export const loadingTitle = style({
    fontSize: vars.fontSize.sm,
    fontWeight: 600,
    color: colors.foreground,
});

export const loadingSubtitle = style({
    fontSize: vars.fontSize.xs,
    color: vars.color.gray.main,
});

// --- suggestions state ---

export const suggestionsCard = style({
    width: "100%",
    border: `1px solid ${colors.border}`,
    borderRadius: radii.md,
    padding: space[4],
    marginBottom: space[4],
});

export const suggestionsHeader = style({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: vars.fontSize.sm,
    marginBottom: space[3],
});

export const suggestionsHeaderTitle = style({
    fontWeight: 600,
    color: colors.foreground,
});

export const suggestionsHeaderHint = style({
    color: vars.color.gray.main,
    fontSize: vars.fontSize.xs,
});

export const shiftList = style({
    display: "flex",
    flexDirection: "column",
});

export const shiftRow = style({
    display: "flex",
    alignItems: "center",
    gap: space[3],
    padding: `${space[3]} 0`,
    borderTop: `1px solid ${colors.border}`,
    selectors: {
        "&:first-child": { borderTop: "none", paddingTop: 0 },
        "&:last-child": { paddingBottom: 0 },
    },
});

export const shiftAvatar = style({
    width: 36,
    height: 36,
    borderRadius: "50%",
    background: vars.color.primary.main,
    color: vars.color.base.white,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: vars.fontSize.xxs,
    fontWeight: 600,
    flexShrink: 0,
});

export const shiftInfo = style({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 2,
});

export const shiftName = style({
    fontSize: vars.fontSize.sm,
    fontWeight: 600,
    color: colors.foreground,
});

export const shiftMeta = style({
    fontSize: vars.fontSize.xs,
    color: vars.color.gray.main,
});

export const checkbox = style({
    width: 20,
    height: 20,
    borderRadius: 4,
    border: `1px solid ${colors.border}`,
    background: colors.surface,
    cursor: "pointer",
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});

export const checkboxTone = styleVariants({
    checked: {
        background: vars.color.primary.main,
        borderColor: vars.color.primary.main,
        color: vars.color.base.white,
    },
    unchecked: {},
});

export const suggestionsFooter = style({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: space[3],
    fontSize: vars.fontSize.xs,
});

export const acceptedCount = style({
    color: vars.color.gray.main,
});

export const regenerate = style({
    color: colors.foreground,
    background: "none",
    border: "none",
    cursor: "pointer",
    textDecoration: "underline",
    fontSize: vars.fontSize.xs,
});