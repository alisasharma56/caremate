import {
  row,
  top,
  label as labelStyle,
  delta as deltaStyle,
  deltaTone as deltaToneStyle,
  track,
  fill,
  fillTone,
} from "./Barrow.css.ts";
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

export const BarRow = ({ label, percent, tone, showArrow, delta, deltaTone }: BarRowProps) => {
    return (
        <div className={row}>
            <div className={top}>
                <span className={labelStyle}>{label}</span>
                {showArrow && <ArrowUpRight/>}
                {delta && (
                    <span className={`${deltaStyle} ${deltaToneStyle[deltaTone ?? tone]}`}>
            {delta}
          </span>
                )}
            </div>
            <div className={track}>
                <div className={`${fill} ${fillTone[tone]}`} style={{ width: `${percent}%` }} />
            </div>
        </div>
    );
};


