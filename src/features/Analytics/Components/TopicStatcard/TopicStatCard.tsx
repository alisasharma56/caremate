import { TONE_COLORS, type TopicStat } from '../../AnalyticsPage/analytics.ts'
import { card, dot, risk, riskDot, topicName, topicRow } from '../analytics.css.ts'
import { change, count, meta, microDot, microLabel, microRow, mentions, metaRow, statCard } from './TopicStatcard.css.ts'

export function TopicStatCard({ topic }: { topic: TopicStat }) {
    const color = topic.microTrend.color === 'green' ? '#22c55e' : '#ef4444'
    return (
        <div className={`${card} ${statCard}`}>
            <div className={topicRow}>
        <span className={topicName}>
          <span className={dot} style={{ background: TONE_COLORS[topic.tone] }} />
            {topic.label}
        </span>
                <span className={risk}>
          <span className={riskDot} />
                    {topic.risk}
        </span>
            </div>
            <span className={count}>{topic.mentions}</span>
            <span className={mentions}>mentions</span>
            <div className={metaRow}>
                <span className={change}>{topic.change}</span>
                <span className={meta}>{topic.meta}</span>
            </div>
            <div className={microRow}>
                <span className={microLabel}>Micro trend:</span>
                {[0, 1, 2, 3, 4].map((i) => (
                    <span key={i} className={microDot} style={{ background: i < topic.microTrend.filled ? color : '#d1d5db' }} />
                ))}
            </div>
        </div>
    )
}