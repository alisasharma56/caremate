import { SideCard } from "../SideCard/SideCard.tsx";
import { StatBox } from "../Statbox/Statbox.tsx";
import * as styles from "../Statbox/Statbox.css.ts";

export function ThisWeekCard() {
    return (
        <SideCard title="This Week">
            <div className={styles.grid}>
                <StatBox value="142" label="Articles" delta="+18%" tone="green" trend="up" />
                <StatBox value="23" label="Policy changes" delta="+34%" tone="green" trend="up" />
                <StatBox value="7" label="Urgent alerts" delta="+3" tone="red" trend="down" />
                <StatBox value="6.2K" label="Discussions" delta="+12%" tone="green" trend="up" />
            </div>
        </SideCard>
    );
}