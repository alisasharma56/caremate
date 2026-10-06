import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { AUDIENCES, FILTERS, TOPICS } from '../AnalyticsPage/analytics.ts'
import { SentimentImpactCard } from '../Components/SentimentImpactCard/SentimentImpactCard.tsx'
import { TopicChartCard } from '../Components/TopicChartCard/TopicChartCard.tsx'
import { TopicStatCard } from '../Components/TopicStatcard/TopicStatCard.tsx'
import {
    audienceChip, audienceChipActive, audiences, beta, body, cardRow, filterBtn, filters, header,
    headerLeft, main, page, title,
} from './AnalyticsPage.css.ts'
import {SideCardPanel} from "@/features/SidecardPanel/SideCardPanel.tsx";

export function AnalyticsPage() {
    const [audience, setAudience] = useState(AUDIENCES[0])

    return (
        <div className={page}>
            <div className={header}>
                <div className={headerLeft}>
                    <span className={title}>Analytics</span>
                    <span className={beta}>BETA</span>
                </div>
                <div className={filters}>
                    {[FILTERS.range, FILTERS.state, FILTERS.topic].map((f) => (
                        <button type="button" className={filterBtn} key={f}>
                            {f}
                            <ChevronDown size={16} />
                        </button>
                    ))}
                    <div className={audiences}>
                        {AUDIENCES.map((a) => (
                            <button
                                type="button"
                                key={a}
                                className={`${audienceChip} ${audience === a ? audienceChipActive : ''}`}
                                onClick={() => setAudience(a)}
                            >
                                {a}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className={body}>
                <div className={main}>
                    <div className={cardRow}>
                        {TOPICS.map((t) => <TopicStatCard key={t.id} topic={t} />)}
                    </div>
                    <div className={cardRow}>
                        {TOPICS.map((t) => <TopicChartCard key={t.id} topic={t} />)}
                    </div>
                    <SentimentImpactCard />
                </div>
              <SideCardPanel/>
            </div>
        </div>
    )
}