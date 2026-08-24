// import { SideCard } from "../SideCard/SideCard.tsx";
// import { BarRow } from "../Barrow/Barrow.tsx";
// import useSectorSentiment from "@/features/home/hooks/UseSectorSentiment.ts";
//
// function formatLabel(value: string) {
//     return value.replaceAll('_', ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());
// }
//
// function formatDelta(net: number) {
//     return `${net > 0 ? '+' : ''}${net}%`;
// }
//
// export function SectorSentimentCard() {
//     const { data, isLoading, isError } = useSectorSentiment();
//
//     if (isLoading) {
//         return (
//             <SideCard title="Sector Sentiment · 30 Days">
//                 <span>Loading…</span>
//             </SideCard>
//         );
//     }
//
//     if (isError || !data?.length) {
//         return (
//             <SideCard title="Sector Sentiment · 30 Days">
//                 <span>Couldn't load sector sentiment.</span>
//             </SideCard>
//         );
//     }
//
//     const topSectors = data.slice(0, 5);
//
//     return (
//         <SideCard title="Sector Sentiment · 30 Days">
//             {topSectors.map((item) => (
//                 <BarRow
//                     key={item.topic}
//                     label={formatLabel(item.topic)}
//                     percent={Math.abs(item.net)}
//                     tone={item.net >= 0 ? "green" : "red"}
//                     delta={formatDelta(item.net)}
//                 />
//             ))}
//         </SideCard>
//     );
// }


/// SectorSentimentCard.tsx
import { SideCard } from "../SideCard/SideCard.tsx";
import { SentimentBarRow } from "./SentimentBarRow.tsx";
import useSectorSentiment from "@/features/home/hooks/UseSectorSentiment.ts";

function formatLabel(value: string) {
    return value.replaceAll('_', ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function formatDelta(net: number) {
    return `${net > 0 ? '+' : ''}${net}%`;
}

function toneFromNet(net: number): "green" | "red" | "blue" {
    if (net > 0) return "green";
    if (net < 0) return "red";
    return "blue";
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
                <SentimentBarRow
                    key={item.topic}
                    label={formatLabel(item.topic)}
                    positivePct={item.positive_pct}
                    neutralPct={item.neutral_pct}
                    negativePct={item.negative_pct}
                    delta={formatDelta(item.net)}
                    deltaTone={toneFromNet(item.net)}
                />
            ))}
        </SideCard>
    );
}