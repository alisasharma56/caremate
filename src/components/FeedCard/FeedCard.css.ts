import { style, styleVariants, keyframes } from "@vanilla-extract/css";


const color = {
    pageBg: "#F4F5F7",
    cardBg: "#FFFFFF",
    border: "#EAEBEE",
    borderSoft: "#F0F1F3",
    textPrimary: "#16181D",
    textSecondary: "#6B7280",
    textTertiary: "#9AA0A8",
    hot: "#E5484D",
    blueBg: "#E8F3FF",
    blueText: "#1E7FE0",
    grayBg: "#F1F2F4",
    grayText: "#5B5F66",
    redBg: "#FDEAEB",
    redText: "#E5484D",
    orangeBg: "#FFF1E3",
    orangeText: "#F0883E",
    green: "#1FA774",
    softBg: "#F7F8FA",
    sentimentGreen: "#2FBF71",
    sentimentBlue: "#3B82F6",
    sentimentRed: "#EF4444",
};

const fadeIn = keyframes({
    from: { opacity: 0, transform: "translateY(4px)" },
    to: { opacity: 1, transform: "translateY(0)" },
});

export const page = style({
    background: color.pageBg,
    padding: "24px 0",
    minHeight: "100%",
});

export const list = style({
    display: "flex",
    flexDirection: "column",
    gap: 16,
    width: "100%",
    maxWidth: 560,
    margin: "0 auto",
});

export const card = style({
    background: color.cardBg,
    border: `1px solid ${color.border}`,
    borderRadius: 16,
    padding: 16,
    display: "flex",
    flexDirection: "column",
    gap: 14,
    animation: `${fadeIn} 0.35s ease both`,
});

// ---- header ----
export const header = style({
    display: "flex",
    alignItems: "flex-start",
    gap: 10,
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
    fontSize: 14,
    fontWeight: 700,
    color: color.textPrimary,
    lineHeight: 1.3,
});

export const metaRow = style({
    display: "flex",
    alignItems: "center",
    gap: 6,
    fontSize: 12.5,
    color: color.textTertiary,
    lineHeight: 1.3,
});

export const dot = style({
    width: 3,
    height: 3,
    borderRadius: "50%",
    background: color.textTertiary,
    flexShrink: 0,
});

export const hotBadge = style({
    display: "inline-flex",
    alignItems: "center",
    gap: 3,
    color: color.hot,
    fontWeight: 600,
});

// ---- tags ----
export const tagRow = style({
    display: "flex",
    flexWrap: "wrap",
    gap: 6,
});

export const tagBase = style({
    fontSize: 12,
    fontWeight: 600,
    padding: "4px 10px",
    borderRadius: 7,
    lineHeight: 1.4,
    whiteSpace: "nowrap",
});

export const tagTone = styleVariants({
    blue: { background: color.blueBg, color: color.blueText },
    gray: { background: color.grayBg, color: color.grayText },
    red: { background: color.redBg, color: color.redText },
    orange: { background: color.orangeBg, color: color.orangeText },
});

// ---- filter chips ----
export const filterRow = style({
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
});

export const filterChip = style({
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    fontSize: 12.5,
    fontWeight: 500,
    color: color.textPrimary,
    background: "transparent",
    border: `1px solid ${color.border}`,
    borderRadius: 999,
    padding: "6px 10px 6px 12px",
    cursor: "pointer",
    transition: "background 0.15s ease, border-color 0.15s ease",
    ":hover": {
        background: color.softBg,
        borderColor: "#DEE0E3",
    },
});

// ---- media ----
export const media = style({
    width: "100%",
    aspectRatio: "16 / 9",
    borderRadius: 12,
    overflow: "hidden",
    background: color.grayBg,
});

export const mediaImg = style({
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
});

// ---- headline / body ----
export const headline = style({
    fontSize: 17,
    fontWeight: 700,
    color: color.textPrimary,
    lineHeight: 1.35,
    margin: 0,
});

export const description = style({
    fontSize: 14,
    color: color.textSecondary,
    lineHeight: 1.55,
    margin: 0,
});

// ---- rate change block ----
export const rateBox = style({
    background: color.softBg,
    borderRadius: 12,
    padding: "12px 14px",
    display: "flex",
    flexDirection: "column",
    gap: 10,
});

export const rateHeader = style({
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontSize: 13,
});

export const rateDot = style({
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: color.orangeText,
    flexShrink: 0,
});

export const rateTitle = style({
    fontWeight: 700,
    color: color.textPrimary,
});

export const rateEffective = style({
    color: color.textTertiary,
});

export const rateRow = style({
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontSize: 13.5,
});

export const rateLabel = style({
    color: color.textSecondary,
    minWidth: 82,
    flexShrink: 0,
});

export const rateOld = style({
    color: color.textTertiary,
    textDecoration: "line-through",
});

export const rateArrow = style({
    color: color.textTertiary,
});

export const rateNew = style({
    fontWeight: 700,
    color: color.textPrimary,
});

export const rateDelta = style({
    color: color.green,
    fontWeight: 700,
    marginLeft: "auto",
});

// ---- sentiment ----
export const sentimentWrap = style({
    display: "flex",
    flexDirection: "column",
    gap: 8,
});

export const sentimentTop = style({
    display: "flex",
    alignItems: "center",
    gap: 10,
});

export const sentimentLabel = style({
    fontSize: 12.5,
    fontWeight: 600,
    color: color.textSecondary,
    flexShrink: 0,
});

export const sentimentBar = style({
    flex: 1,
    height: 6,
    borderRadius: 999,
    overflow: "hidden",
    display: "flex",
    background: color.grayBg,
});

export const sentimentSegment = style({
    height: "100%",
});

export const sentimentPct = style({
    fontSize: 12.5,
    fontWeight: 600,
    flexShrink: 0,
});

// ---- footer ----
export const footer = style({
    display: "flex",
    alignItems: "center",
    paddingTop: 10,
    borderTop: `1px solid ${color.borderSoft}`,
});

export const footerActions = style({
    display: "flex",
    alignItems: "center",
    gap: 18,
});

export const footerItem = style({
    display: "inline-flex",
    alignItems: "center",
    gap: 5,
    fontSize: 13,
    color: color.textSecondary,
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
    fontSize: 13,
    fontWeight: 600,
    color: color.textSecondary,
    background: "none",
    border: "none",
    padding: 0,
    cursor: "pointer",
    ":hover": {
        color: color.textPrimary,
    },
});

export const colorTokens = color;