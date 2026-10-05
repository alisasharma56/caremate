
import {
  scrollWrap,
  stack,
} from "./SideCardPanel.css.ts";
import {TrendingCard} from "@/components/TrendingCards";
import {ThisWeekCard} from "@/components/ThisWeekcard";
import {SectorSentimentCard} from "@/components/SentimentSectorCard";
import {EmergingKeywordsCard} from "@/components/EmergingKeywordsCard";

export const SideCardPanel = () => {
    return (
        <div className={scrollWrap}>
            <div className={stack}>
                <TrendingCard/>
                <ThisWeekCard />
                <SectorSentimentCard />
                <EmergingKeywordsCard/>
            </div>
        </div>
    );
};
