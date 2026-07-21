import { SideCard } from "../SideCard/SideCard.tsx";
import { KeywordRow } from "../KeywordRow/KeywordRow.tsx";
import useEmergingKeywords from "@/features/home/hooks/UseEmergingKeyword.ts";

function formatChange(risePct: number) {
    const arrow = risePct >= 90 ? '↑↑' : '↑';
    return `${arrow} ${risePct}%`;
}

export function EmergingKeywordsCard() {
    const { data, isLoading, isError } = useEmergingKeywords();

    if (isLoading) {
        return (
            <SideCard title="Emerging Keywords">
                <span>Loading…</span>
            </SideCard>
        );
    }

    if (isError || !data?.length) {
        return (
            <SideCard title="Emerging Keywords">
                <span>Couldn't load emerging keywords.</span>
            </SideCard>
        );
    }

    const topKeywords = data.slice(0, 5);

    return (
        <SideCard title="Emerging Keywords">
            {topKeywords.map((item, index) => (
                <KeywordRow
                    key={item.keyword}
                    rank={index + 1}
                    keyword={item.keyword}
                    change={formatChange(item.rise_pct)}
                />
            ))}
        </SideCard>
    );
}