import { SideCard } from "../SideCard/SideCard.tsx";
import { BarRow } from "../Barrow/Barrow.tsx";

export function TrendingCard() {
    return (
        <SideCard title="Trending in NDIS" meta="14 min ago">
            <BarRow label="SIL Funding" percent={85} tone="green" showArrow />
            <BarRow label="Price Guide 2026" percent={55} tone="red" showArrow />
            <BarRow label="Registration Reform" percent={35} tone="green" showArrow />
            <BarRow label="Workforce Crisis" percent={15} tone="blue" showArrow />
            <BarRow label="AAT Appeals" percent={15} tone="green" showArrow />
        </SideCard>
    );
}