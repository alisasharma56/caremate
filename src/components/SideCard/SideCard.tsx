import type {ReactNode } from "react";
import {
  card,
  cardHeader,
  cardLabel,
  timestamp,
  body,
} from "./SideCard.css.ts";

interface SideCardProps {
    title: string;
    meta?: string;
    children: ReactNode;
}

export const SideCard = ({ title, meta, children }: SideCardProps) => {
    return (
        <div className={card}>
            <div className={cardHeader}>
                <span className={cardLabel}>{title}</span>
                {meta && <span className={timestamp}>{meta}</span>}
            </div>
            <div className={body}>{children}</div>
        </div>
    );
};