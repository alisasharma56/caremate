import { SideCard } from "../SideCard/SideCard.tsx";
import { StatBox } from "../Statbox/Statbox.tsx";
import * as styles from "../Statbox/Statbox.css.ts";
import useWeeklyStats from "@/features/home/hooks/UseweeklyStats.ts";

function formatLabel(value: string) {
    return value.replaceAll('_', ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function formatDelta(changePct: number) {
    return `${changePct > 0 ? '+' : ''}${changePct}%`;
}

export function ThisWeekCard() {
    const { data, isLoading, isError } = useWeeklyStats();

    if (isLoading) {
        return (
            <SideCard title="This Week">
                <span>Loading…</span>
            </SideCard>
        );
    }

    if (isError || !data) {
        return (
            <SideCard title="This Week">
                <span>Couldn't load this week's stats.</span>
            </SideCard>
        );
    }

    const { articles, urgent_alerts: urgentAlerts, top_key_element: topKeyElement, top_state: topState } = data;

    return (
        <SideCard title="This Week">
            <div className={styles.grid}>
                <StatBox
                    value={String(articles.count)}
                    label="Articles"
                    delta={formatDelta(articles.change_pct)}
                    tone={articles.change_pct >= 0 ? "green" : "red"}
                    trend={articles.change_pct >= 0 ? "up" : "down"}
                />
                <StatBox
                    value={String(urgentAlerts.count)}
                    label="Urgent Alerts"
                    delta={formatDelta(urgentAlerts.change_pct)}
                    tone={urgentAlerts.change_pct >= 0 ? "green" : "red"}
                    trend={urgentAlerts.change_pct >= 0 ? "up" : "down"}
                />
                <StatBox value={String(topKeyElement.count)} label={formatLabel(topKeyElement.type)} />
                <StatBox value={String(topState.count)} label={topState.state} />
            </div>
        </SideCard>
    );
}