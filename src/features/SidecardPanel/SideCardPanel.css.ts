import { style } from "@vanilla-extract/css";
import { space } from "@/styles/theme/tokens.css";

export const stack = style({
    position: "sticky",
    top: space[4],
    alignSelf: "flex-start",
    height: `calc(100dvh - (${space[4]} * 2))`,
    minHeight: 0,
    flexShrink: 0,
    overflowY: "auto",
    scrollbarGutter: "stable",
    display: "flex",
    flexDirection: "column",
    gap: space[4],
    paddingRight: space[2],
    paddingBottom: space[4],
    backgroundColor: "White",
    selectors: {
        "&::-webkit-scrollbar": {
            width: 6,
        },
        "&::-webkit-scrollbar-thumb": {
            background: "#d7d9de",
            borderRadius: 999,
        },
    },
});
