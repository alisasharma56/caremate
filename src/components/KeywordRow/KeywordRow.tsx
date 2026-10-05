import {
  row,
  rank as rankStyle,
  keyword as keywordStyle,
  change as changeStyle,
} from "./KeywordRow.css.ts";

interface KeywordRowProps {
    rank: number;
    keyword: string;
    change: string;
}

export const KeywordRow = ({ rank, keyword, change }: KeywordRowProps) => {
    return (
        <div className={row}>
            <span className={rankStyle}>{rank}</span>
            <span className={keywordStyle}>{keyword}</span>
            <span className={changeStyle}>{change}</span>
        </div>
    );
}