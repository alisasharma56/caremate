import { style, styleVariants, keyframes } from "@vanilla-extract/css";
import { vars, colors, space, radii, typography } from "@/styles/theme/tokens.css";

const fadeIn = keyframes({
    from: { opacity: 0, transform: "translateY(4px)" },
    to: { opacity: 1, transform: "translateY(0)" },
});


export const card = style({
    width: 724,
    height: 796,
    background: colors.surface,
    border: `1px solid ${colors.border}`,
    borderRadius: 16,
    padding: space[4],
    display: "flex",
    flexDirection: "column",
    gap: space[4],
    fontFamily: typography.body,
    animation: `${fadeIn} 0.35s ease both`,
});

// ---- header ----
export const header = style({
    display: "flex",
    alignItems: "flex-start",
    gap: space[2],
});

export const avatar = style({
    width: 36,
    height: 36,
    borderRadius: "50%",
    flexShrink: 0,
});

export const headerText = style({
    display: "flex",
    flexDirection: "column",
    gap: 2,
    minWidth: 0,
});

export const authorName = style({
        fontSize: vars.fontSize.xs, // 12px — matches your xs token exactly
        fontWeight: 700,
        lineHeight: "18px",
        letterSpacing: "0%",
        color: colors.foreground,

});

export const metaRow = style({
    display: "flex",
    alignItems: "center",
    gap: space[1],
    fontSize: vars.fontSize.xs,
    color: vars.color.gray.main,
    lineHeight: 1.3,
});

export const dot = style({
    width: 3,
    height: 3,
    borderRadius: "50%",
    background: vars.color.gray.light,
    flexShrink: 0,
});

export const hotBadge = style({
    display: "inline-flex",
    alignItems: "center",
    gap: 3,
    color: vars.color.error.main,
    fontWeight: 600,
});

// ---- tags ----
export const tagRow = style({
    display: "flex",
    flexWrap: "wrap",
    gap: space[2],
});

export const tagBase = style({
    fontSize: vars.fontSize.xs,
    fontWeight: 600,
    padding: `${space[1]} ${space[2]}`,
    borderRadius: radii.sm,
    lineHeight: 1.4,
    whiteSpace: "nowrap",
});

export const tagTone = styleVariants({
    blue: { background: vars.color.info.lighter, color: vars.color.info.dark },
    gray: { background: vars.color.gray.lighter, color: vars.color.gray.dark },
    red: { background: vars.color.error.lighter, color: vars.color.error.dark },
    orange: { background: vars.color.warning.lighter, color: vars.color.warning.dark },
});

// ---- filter chips ----
export const filterRow = style({
    display: "flex",
    flexWrap: "wrap",
    gap: space[2],
});

export const filterChip = style({
    display: "inline-flex",
    alignItems: "center",
    gap: space[1],
    fontSize: vars.fontSize.xs,
    fontWeight: 500,
    color: colors.foreground,
    background: "transparent",
    border: `1px solid ${colors.border}`,
    borderRadius: 999,
    padding: `${space[2]} ${space[3]}`,
    cursor: "pointer",
    transition: "background 0.15s ease, border-color 0.15s ease",
    ":hover": {
        background: colors.background,
        borderColor: vars.color.gray.light,
    },
});

// ---- media ----
export const media = style({
    width: "100%",
    aspectRatio: "16 / 9",
    borderRadius: radii.lg,
    overflow: "hidden",
    background: vars.color.gray.lighter,
});

export const mediaImg = style({
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
});

// ---- headline / body ----
export const headline = style({
    fontSize: vars.fontSize.lg,
    fontWeight: 700,
    color: colors.foreground,
    lineHeight: 1.35,
    margin: 0,
});

export const description = style({
    fontSize: vars.fontSize.sm,
    color: colors.muted,
    lineHeight: 1.55,
    margin: 0,
});

// ---- rate change block ----
export const rateBox = style({
    background: colors.background,
    borderRadius: radii.lg,
    padding: `${space[3]} ${space[3]}`,
    display: "flex",
    flexDirection: "column",
    gap: space[2],
});

export const rateHeader = style({
    display: "flex",
    alignItems: "center",
    gap: space[2],
    fontSize: vars.fontSize.sm,
});

export const rateDot = style({
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: vars.color.warning.main,
    flexShrink: 0,
});

export const rateTitle = style({
    fontWeight: 700,
    color: colors.foreground,
});

export const rateEffective = style({
    color: vars.color.gray.light,
});

export const rateRow = style({
    display: "flex",
    alignItems: "center",
    gap: space[2],
    fontSize: vars.fontSize.sm,
});

export const rateLabel = style({
    color: colors.muted,
    minWidth: 82,
    flexShrink: 0,
});

export const rateOld = style({
    color: vars.color.gray.light,
    textDecoration: "line-through",
});

export const rateArrow = style({
    color: vars.color.gray.light,
});

export const rateNew = style({
    fontWeight: 700,
    color: colors.foreground,
});

export const rateDelta = style({
    color: vars.color.success.main,
    fontWeight: 700,
    marginLeft: "auto",
});

// ---- sentiment ----
export const sentimentWrap = style({
    display: "flex",
    flexDirection: "column",
    gap: space[2],
});

export const sentimentTop = style({
    display: "flex",
    alignItems: "center",
    gap: space[3],
});

export const sentimentLabel = style({
    fontSize: vars.fontSize.xs,
    fontWeight: 600,
    color: colors.muted,
    flexShrink: 0,
});

export const sentimentBar = style({
    flex: 1,
    height: 6,
    borderRadius: 999,
    overflow: "hidden",
    display: "flex",
    background: vars.color.gray.lighter,
});

export const sentimentSegment = style({
    height: "100%",
});

export const sentimentPct = style({
    fontSize: vars.fontSize.xs,
    fontWeight: 600,
    flexShrink: 0,
});

// ---- footer ----
export const footer = style({
    display: "flex",
    alignItems: "center",
    paddingTop: space[2],
    borderTop: `1px solid ${colors.border}`,
});

export const footerActions = style({
    display: "flex",
    alignItems: "center",
    gap: space[4],
});

export const footerItem = style({
    display: "inline-flex",
    alignItems: "center",
    gap: 5,
    fontSize: vars.fontSize.sm,
    color: colors.muted,
    background: "none",
    border: "none",
    padding: 0,
    cursor: "pointer",
});

export const footerSpacer = style({
    flex: 1,
});

export const fullArticle = style({
    display: "inline-flex",
    alignItems: "center",
    gap: 5,
    fontSize: vars.fontSize.sm,
    fontWeight: 600,
    color: colors.muted,
    background: "none",
    border: "none",
    padding: 0,
    cursor: "pointer",
    ":hover": {
        color: colors.foreground,
    },
});

export const colorTokens = {
    sentimentGreen: vars.color.success.main,
    sentimentBlue: vars.color.info.main,
    sentimentRed: vars.color.error.main,
};