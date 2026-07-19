import { style } from "@vanilla-extract/css";
import { space } from "@/styles/theme/tokens.css";

export const stack = style({
    display: "flex",
    flexDirection: "column",
    gap: space[4],
    backgroundColor:"White"
});