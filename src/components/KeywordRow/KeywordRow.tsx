import * as styles from "./KeywordRow.css.ts";

interface KeywordRowProps {
    rank: number;
    keyword: string;
    change: string;
}

export function KeywordRow({ rank, keyword, change }: KeywordRowProps) {
    return (
        <div className={styles.row}>
            <span className={styles.rank}>{rank}</span>
            <span className={styles.keyword}>{keyword}</span>
            <span className={styles.change}>{change}</span>
        </div>
    );
}