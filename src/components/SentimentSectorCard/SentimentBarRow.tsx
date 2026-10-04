// SentimentBarRow.tsxh
import {
  row,
  top,
  label as labelStyle,
  delta as deltaStyle,
  deltaTone as deltaToneStyle,
  track,
  segment,
  colorTokens,
} from "./SentimentBarRow.css.ts";

interface SentimentBarRowProps {
    label: string;
    positivePct: number;
    neutralPct: number;
    negativePct: number;
    delta: string;
    deltaTone: "green" | "red" | "blue";
}

export function SentimentBarRow({ label, positivePct, neutralPct, negativePct, delta, deltaTone }: SentimentBarRowProps) {
    return (
        <div className={row}>
            <div className={top}>
                <span className={labelStyle}>{label}</span>
                <span className={`${deltaStyle} ${deltaToneStyle[deltaTone]}`}>{delta}</span>
            </div>
            <div className={track}>
                <span className={segment} style={{ width: `${positivePct}%`, background: colorTokens.sentimentGreen }} />
                <span className={segment} style={{ width: `${neutralPct}%`, background: colorTokens.sentimentBlue }} />
                <span className={segment} style={{ width: `${negativePct}%`, background: colorTokens.sentimentRed }} />
            </div>
        </div>
    );
}