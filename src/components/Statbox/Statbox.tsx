import ArrowUpRight from "@/components/icons/ArrowUpRight";
import ArrowDownRight from "@/components/icons/ArrowRightDown";
import * as styles from "./Statbox.css.ts";
interface StatBoxProps {
    value: string;
    label: string;
    delta: string;
    tone: "green" | "red";
    trend?: "up" | "down";
}

export function StatBox({ value, label, delta, tone, trend = "up" }: StatBoxProps) {
    const Icon = trend === "up" ? ArrowUpRight : ArrowDownRight; // ✅ component reference, no JSX
    return (
        <div className={styles.box}>
            <span className={styles.value}>{value}</span>
            <span className={styles.label}>{label}</span>
            <span className={`${styles.delta} ${styles.deltaTone[tone]}`}>
        <Icon />
                {delta}
      </span>
        </div>
    );
}