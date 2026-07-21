import * as styles from "./Barrow.css.ts";
import ArrowUpRight from "@/components/icons/ArrowUpRight";

type Tone = "green" | "red" | "blue";

interface BarRowProps {
    label: string;
    percent: number;
    tone: Tone;
    showArrow?: boolean;
    delta?: string;
    deltaTone?: Tone;
}

export function BarRow({ label, percent, tone, showArrow, delta, deltaTone }: BarRowProps) {
    return (
        <div className={styles.row}>
            <div className={styles.top}>
                <span className={styles.label}>{label}</span>
                {showArrow && <ArrowUpRight/>}
                {delta && (
                    <span className={`${styles.delta} ${styles.deltaTone[deltaTone ?? tone]}`}>
            {delta}
          </span>
                )}
            </div>
            <div className={styles.track}>
                <div className={`${styles.fill} ${styles.fillTone[tone]}`} style={{ width: `${percent}%` }} />
            </div>
        </div>
    );
}