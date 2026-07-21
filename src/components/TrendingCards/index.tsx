import { SideCard } from "../SideCard/SideCard.tsx";
import { BarRow } from "../Barrow/Barrow.tsx";
import useTrendingKeywords from "@/features/home/hooks/TrendingKeywords.ts";

function formatLabel(value: string) {
    return value.replaceAll('_', ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export function TrendingCard() {
    const { data, isLoading, isError } = useTrendingKeywords();

    if (isLoading) {
        return (
            <SideCard title="Trending in NDIS">
                <span>Loading…</span>
            </SideCard>
        );
    }

    if (isError || !data?.length) {
        return (
            <SideCard title="Trending in NDIS">
                <span>Couldn't load trending keywords.</span>
            </SideCard>
        );
    }

    const topKeywords = data.slice(0, 5);

    return (
        <SideCard title="Trending in NDIS">
            {topKeywords.map((item) => (
                <BarRow
                    key={item.keyword}
                    label={formatLabel(item.keyword)}
                    percent={item.score}
                    tone="green"
                    showArrow
                />
            ))}
        </SideCard>
    );
}