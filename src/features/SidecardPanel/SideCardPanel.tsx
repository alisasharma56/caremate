import * as styles from "./SideCardPanel.css.ts";
import {TrendingCard} from "@/components/TrendingCards";
import {ThisWeekCard} from "@/components/ThisWeekcard";
import {SectorSentimentCard} from "@/components/SentimentSectorCard";
import {EmergingKeywordsCard} from "@/components/EmergingKeywordsCard";


export function SideCardPanel() {
    return (
        <div className={styles.stack}>
            <TrendingCard/>
            <ThisWeekCard />
            <SectorSentimentCard />
            <EmergingKeywordsCard/>
        </div>
    );
}