import { style } from "@vanilla-extract/css";
import { vars, colors, space, radii } from "@/styles/theme/tokens.css";

export const panel = style({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    background: colors.surface,
    minWidth: 0,
    height: "100%",
    overflowY: "auto",
    padding: space[6],
    gap: space[6],
});

export const header = style({
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: space[4],
});

export const headerLeft = style({
    display: "flex",
    alignItems: "center",
    gap: space[3],
});

export const avatar = style({
    width: 48,
    height: 48,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: vars.fontSize.md,
    fontWeight: 600,
    color: vars.color.base.white,
    flexShrink: 0,
});

export const name = style({
    fontSize: vars.fontSize.xl,
    fontWeight: 600,
    color: colors.foreground,
    margin: 0,
});

export const tags = style({
    fontSize: vars.fontSize.sm,
    color: vars.color.gray.main,
    margin: 0,
    marginTop: 2,
});

export const headerActions = style({
    display: "flex",
    alignItems: "center",
    gap: space[2],
    flexShrink: 0,
});

export const actionButton = style({
    padding: `${space[2]} ${space[3]}`,
    borderRadius: radii.md,
    border: `1px solid ${colors.border}`,
    background: colors.surface,
    fontSize: vars.fontSize.xs,
    fontWeight: 500,
    color: colors.foreground,
    cursor: "pointer",
    whiteSpace: "nowrap",
});

export const primaryActionButton = style({
    padding: `${space[2]} ${space[3]}`,
    borderRadius: radii.md,
    border: "none",
    background: vars.color.primary.main,
    fontSize: vars.fontSize.xs,
    fontWeight: 600,
    color: vars.color.base.white,
    cursor: "pointer",
    whiteSpace: "nowrap",
});

export const infoGrid = style({
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: space[4],
});

export const infoBox = style({
    border: `1px solid ${colors.border}`,
    borderRadius: radii.md,
    padding: space[4],
    display: "flex",
    flexDirection: "column",
    gap: 4,
});

export const infoLabel = style({
    fontSize: vars.fontSize.xxs,
    fontWeight: 600,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    color: vars.color.gray.light,
});

export const infoValue = style({
    fontSize: vars.fontSize.md,
    fontWeight: 600,
    color: colors.foreground,
});

export const infoNote = style({
    fontSize: vars.fontSize.xs,
    color: vars.color.warning.dark,
});

export const sectionTitle = style({
    fontSize: vars.fontSize.sm,
    fontWeight: 600,
    color: colors.foreground,
    margin: 0,
});

export const section = style({
    display: "flex",
    flexDirection: "column",
    gap: space[3],
});

export const fundingRow = style({
    display: "flex",
    flexDirection: "column",
    gap: 6,
});

export const fundingTopRow = style({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: vars.fontSize.sm,
});

export const fundingLabel = style({
    color: colors.foreground,
});

export const fundingAmount = style({
    fontWeight: 600,
    color: colors.foreground,
});

export const fundingTrack = style({
    height: 8,
    borderRadius: 999,
    background: vars.color.gray.lighter,
    overflow: "hidden",
});

export const fundingFill = style({
    height: "100%",
    borderRadius: 999,
});

export const documentRow = style({
    display: "flex",
    alignItems: "center",
    gap: space[3],
    padding: space[3],
    border: `1px solid ${colors.border}`,
    borderRadius: radii.md,
});

export const documentIcon = style({
    width: 36,
    height: 36,
    borderRadius: radii.sm,
    background: vars.color.gray.lightest,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: vars.color.gray.main,
    flexShrink: 0,
});

export const documentBody = style({
    flex: 1,
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    gap: 2,
});

export const documentTitle = style({
    fontSize: vars.fontSize.sm,
    fontWeight: 600,
    color: colors.foreground,
});

export const documentMeta = style({
    fontSize: vars.fontSize.xs,
    color: vars.color.gray.main,
});

export const documentActions = style({
    display: "flex",
    gap: space[2],
    flexShrink: 0,
});

export const uploadRow = style({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    padding: space[4],
    border: `1px dashed ${colors.border}`,
    borderRadius: radii.md,
    background: "none",
    fontSize: vars.fontSize.sm,
    color: vars.color.gray.light,
    cursor: "pointer",
});