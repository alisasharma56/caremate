import { SideCard } from "../SideCard/SideCard.tsx";
import { BarRow } from "../Barrow/Barrow.tsx";
import useSectorSentiment from "@/features/home/hooks/UseSectorSentiment.ts";

function formatLabel(value: string) {
    return value.replaceAll('_', ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function formatDelta(net: number) {
    return `${net > 0 ? '+' : ''}${net}%`;
}

export function SectorSentimentCard() {
    const { data, isLoading, isError } = useSectorSentiment();

    if (isLoading) {
        return (
            <SideCard title="Sector Sentiment · 30 Days">
                <span>Loading…</span>
            </SideCard>
        );
    }

    if (isError || !data?.length) {
        return (
            <SideCard title="Sector Sentiment · 30 Days">
                <span>Couldn't load sector sentiment.</span>
            </SideCard>
        );
    }

    const topSectors = data.slice(0, 5);

    return (
        <SideCard title="Sector Sentiment · 30 Days">
            {topSectors.map((item) => (
                <BarRow
                    key={item.topic}
                    label={formatLabel(item.topic)}
                    percent={Math.abs(item.net)}
                    tone={item.net >= 0 ? "green" : "red"}
                    delta={formatDelta(item.net)}
                />
            ))}
        </SideCard>
    );
}