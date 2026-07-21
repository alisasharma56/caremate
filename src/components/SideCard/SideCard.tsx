import type {ReactNode } from "react";
import * as styles from "./SideCard.css.ts";

interface SideCardProps {
    title: string;
    meta?: string;
    children: ReactNode;
}

export function SideCard({ title, meta, children }: SideCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <span className={styles.cardLabel}>{title}</span>
                {meta && <span className={styles.timestamp}>{meta}</span>}
            </div>
            <div className={styles.body}>{children}</div>
        </div>
    );
}