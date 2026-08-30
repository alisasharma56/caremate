import { style } from "@vanilla-extract/css";
import { space } from "@/styles/theme/tokens.css";

export const scrollWrap = style({
    position: "sticky",
    top: space[4],
    alignSelf: "flex-start",
    height: `calc(100dvh - (${space[4]} * 2))`,
    overflowY: "auto",
    flexShrink: 0,
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    '@media': {
        '(max-width: 1100px)': {
            paddingRight: space[4],
        },
    },
    selectors: {
        "&::-webkit-scrollbar": {
            display: "none",
        },
    },
});

export const stack = style({
    display: "flex",
    flexDirection: "column",
    gap: space[4],
    paddingRight: 40,
    paddingBottom: space[4],
    backgroundColor: "White",
});