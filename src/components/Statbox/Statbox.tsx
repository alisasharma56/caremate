import ArrowUpRight from "@/components/icons/ArrowUpRight";
import ArrowDownRight from "@/components/icons/ArrowRightDown";
import {
  box,
  value as valueStyle,
  label as labelStyle,
  delta as deltaStyle,
  deltaTone,
} from "./Statbox.css.ts";

interface StatBoxProps {
    value: string;
    valueClassName?: string;
    label: string;
    delta?: string;
    tone?: "green" | "red";
    trend?: "up" | "down";
}

export function StatBox({ value, label, delta, tone, trend = "up", valueClassName }: StatBoxProps) {
    const Icon = trend === "up" ? ArrowUpRight : ArrowDownRight;
    return (
        <div className={box}>
            <span className={[valueStyle, valueClassName].filter(Boolean).join(" ")}>{value}</span>
            <span className={labelStyle}>{label}</span>
            {delta && tone && (
                <span className={`${deltaStyle} ${deltaTone[tone]}`}>
                    <Icon />
                    {delta}
                </span>
            )}
        </div>
    );
}