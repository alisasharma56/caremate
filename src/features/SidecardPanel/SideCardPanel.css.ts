// import { style } from "@vanilla-extract/css";
// import { space } from "@/styles/theme/tokens.css";
//
// export const stack = style({
//     display: "flex",
//     flexDirection: "column",
//     gap: space[4],
//     backgroundColor:"White"
// });



import { style } from "@vanilla-extract/css";
import { space } from "@/styles/theme/tokens.css";

export const scrollWrap = style({
    position: "sticky",
    top: 0,
    maxHeight: "100vh",
    overflowY: "auto",
    overflowX: "hidden",
    overscrollBehavior: "contain",
    backgroundColor: "white",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    "::-webkit-scrollbar": {
        display: "none",
    },
});

export const stack = style({
    display: "flex",
    flexDirection: "column",
    gap: space[4],
});

