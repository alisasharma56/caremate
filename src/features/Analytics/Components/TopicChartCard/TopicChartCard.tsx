import { DAYS, TONE_COLORS, type TopicStat } from '../../AnalyticsPage/analytics.ts'
import { card, dot, risk, riskDot, topicName, topicRow } from '../analytics.css.ts'
import { axis, axisLabel, bar, barSlot, bars, chartCard, grid, plot, takeaway } from './TopicChartCard.css'

export function TopicChartCard({ topic }: { topic: TopicStat }) {
    const color = TONE_COLORS[topic.tone]
    return (
        <div className={`${card} ${chartCard}`}>
            <div className={topicRow}>
        <span className={topicName}>
          <span className={dot} style={{ background: color }} />
            {topic.label}
        </span>
                <span className={risk}>
          <span className={riskDot} />
                    {topic.risk}
        </span>
            </div>
            <p className={takeaway}>{topic.takeaway}</p>
            <div className={plot}>
                <span className={grid} style={{ top: 0 }} />
                <span className={grid} style={{ top: '50%' }} />
                <div className={bars}>
                    {topic.bars.map((h, i) => (
                        <span className={barSlot} key={i}>
              <span className={bar} style={{ height: `${h * 100}%`, background: color }} />
            </span>
                    ))}
                </div>
                <span className={grid} style={{ bottom: 0 }} />
            </div>
            <div className={axis}>
                {DAYS.map((d) => (
                    <span className={axisLabel} key={d}>{d}</span>
                ))}
            </div>
        </div>
    )
}