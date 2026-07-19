import { SideCard } from "../SideCard/SideCard.tsx";
import { BarRow } from "../Barrow/Barrow.tsx";

export function SectorSentimentCard() {
    return (
        <SideCard title="Sector Sentiment · 30 Days">
            <BarRow label="Funding" percent={55} tone="green" delta="+68%" />
            <BarRow label="Policy" percent={55} tone="red" delta="-69%" />
            <BarRow label="Workforce" percent={70} tone="red" delta="-86%" />
            <BarRow label="SIL/SDA" percent={42} tone="green" delta="+52%" />
        </SideCard>
    );
}