import { BUBBLES, TONE_COLORS } from '../../AnalyticsPage/analytics.ts'
import { card } from '../analytics.css.ts'
import {
    bubble, legend, legendItem, legendLabel, legendDot, legendRow, plot, quad, sentimentCard,
    subtitle, title, vLine, hLine,
} from './SentimentImpactCard.css'

const LEGEND = [
    { label: 'NDIS', tone: 'blue' },
    { label: 'NDIS Fraud', tone: 'amber' },
    { label: 'Disability Support', tone: 'green' },
    { label: 'Reforms', tone: 'purple' },
] as const

export function SentimentImpactCard() {
    return (
        <div className={`${card} ${sentimentCard}`}>
            <div>
                <div className={title}>SENTIMENT VS IMPACT</div>
                <div className={subtitle}>
                    Operational takeaway: high-impact topics are concentrated in negative and neutral quadrants.
                </div>
            </div>
            <div className={legend}>
                <span className={legendLabel}>Legend</span>
                {[LEGEND.slice(0, 2), LEGEND.slice(2)].map((group, i) => (
                    <div className={legendRow} key={i}>
                        {group.map((l) => (
                            <span className={legendItem} key={l.label}>
                <span className={legendDot} style={{ background: TONE_COLORS[l.tone] }} />
                                {l.label}
              </span>
                        ))}
                    </div>
                ))}
            </div>
            <div className={plot}>
                <span className={vLine} />
                <span className={hLine} />
                <span className={quad} style={{ left: 40, top: 0 }}>Positive</span>
                <span className={quad} style={{ left: '50%', marginLeft: 12, top: 0 }}>High impact</span>
                {BUBBLES.map((b, i) => (
                    <span
                        key={i}
                        className={bubble}
                        style={{ left: `${b.x}%`, top: `${b.y}%`, width: b.size, height: b.size, background: TONE_COLORS[b.tone] }}
                    />
                ))}
            </div>
        </div>
    )
}