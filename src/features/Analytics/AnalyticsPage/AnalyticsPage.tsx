import { FILTERS, TOPICS } from '../AnalyticsPage/analytics.ts'
import { SentimentImpactCard } from '../Components/SentimentImpactCard/SentimentImpactCard.tsx'
import { TopicChartCard } from '../Components/TopicChartCard/TopicChartCard.tsx'
import { TopicStatCard } from '../Components/TopicStatcard/TopicStatCard.tsx'
import {
    beta, body, cardRow, filterBtn, filters, header, headerLeft, main, page, title,
} from './AnalyticsPage.css.ts'
import {
    ProviderParticipantCard
} from '@/features/Analytics/Components/ProviderparticipantCard/ProviderParticipantcard.tsx'
import {
    ParticipantOutcomesCard
} from '@/features/Analytics/Components/ParticipantOutcomesCard/ParticipantOutcomesCard.tsx'
import { PublishingPatternCard } from '@/features/Analytics/Components/PublishingPatternCard/PublishingPatternCard.tsx'
import Dropdown from '@/components/icons/Dropdown'

export function AnalyticsPage() {
    return (
        <div className={page}>
            <div className={header}>
                <div className={headerLeft}>
                    <span className={title}>Analytics</span>
                    <span className={beta}>BETA</span>
                </div>
                <div className={filters}>
                    <button type="button" className={filterBtn}>
                        {FILTERS.range}
                        <Dropdown />
                    </button>
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
                    <ProviderParticipantCard />
                    <ParticipantOutcomesCard />
                    <PublishingPatternCard />
                </div>
            </div>
        </div>
    )
}