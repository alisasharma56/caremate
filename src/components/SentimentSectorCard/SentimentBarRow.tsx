// SentimentBarRow.tsxh
import * as styles from "./SentimentBarRow.css.ts";

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
        <div className={styles.row}>
            <div className={styles.top}>
                <span className={styles.label}>{label}</span>
                <span className={`${styles.delta} ${styles.deltaTone[deltaTone]}`}>{delta}</span>
            </div>
            <div className={styles.track}>
                <span className={styles.segment} style={{ width: `${positivePct}%`, background: styles.colorTokens.sentimentGreen }} />
                <span className={styles.segment} style={{ width: `${neutralPct}%`, background: styles.colorTokens.sentimentBlue }} />
                <span className={styles.segment} style={{ width: `${negativePct}%`, background: styles.colorTokens.sentimentRed }} />
            </div>
        </div>
    );
}