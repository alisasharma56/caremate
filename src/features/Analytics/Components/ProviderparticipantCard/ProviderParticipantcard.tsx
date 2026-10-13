import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import { LIGHT_COLORS, PERCEPTION, TONE_COLORS } from '../../AnalyticsPage/analytics.ts'
import { card, chartFill } from '../analytics.css.ts'
import {
    barArea, column, columnLabel, columns, gridLine, insight, insightText, insightTitle,
    legend, legendDot, legendItem, legendLabel, perceptionCard, subtitle, title,
} from './ProviderParticipantCard.css'

type Segment = (typeof PERCEPTION.segments)[number]

const colorOf = (s: Segment) => (s.light ? LIGHT_COLORS[s.tone] : TONE_COLORS[s.tone])

/** One horizontal bar split into 8 stacked segments (widths are % of the column). */
function SegmentedBar({ side }: { side: 'provider' | 'participant' }) {
    const row = PERCEPTION.segments.reduce<Record<string, number | string>>(
        (acc, s, i) => ({ ...acc, [`s${i}`]: s[side] }),
        { name: side },
    )

    return (
        <div className={barArea}>
            {[25, 50, 75].map((top) => (
                <span className={gridLine} style={{ top: `${top}%` }} key={top} />
            ))}
            <div className={chartFill}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart layout="vertical" data={[row]} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                        <XAxis type="number" domain={[0, 100]} hide />
                        <YAxis type="category" dataKey="name" hide />
                        {PERCEPTION.segments.map((s, i) => (
                            <Bar
                                key={s.label}
                                dataKey={`s${i}`}
                                name={s.label}
                                stackId="a"
                                fill={colorOf(s)}
                                barSize={123}
                                isAnimationActive={false}
                            />
                        ))}
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export function ProviderParticipantCard() {
    return (
        <div className={`${card} ${perceptionCard}`}>
            <div>
                <div className={title}>PROVIDER VS PARTICIPANT SENTIMENT</div>
                <div className={subtitle}>
                    Operational takeaway: paired diverging composition shows perception gaps by stakeholder group.
                </div>
            </div>

            <div className={legend}>
                <span className={legendLabel}>Legend</span>
                {[0, 2, 4, 6].map((i) => (
                    <div key={i} style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                        {PERCEPTION.segments.slice(i, i + 2).map((s) => (
                            <span className={legendItem} key={s.label}>
                <span className={legendDot} style={{ background: colorOf(s) }} />
                                {s.label}
              </span>
                        ))}
                    </div>
                ))}
            </div>

            <div className={columns}>
                {(['provider', 'participant'] as const).map((side, i) => (
                    <div className={column} key={side}>
                        <span className={columnLabel}>{side === 'provider' ? 'Provider' : 'Participant'}</span>
                        <SegmentedBar side={side} />
                        <div className={insight}>
                            <span className={insightTitle}>📊 {PERCEPTION.insights[i].title}</span>
                            <span className={insightText}>{PERCEPTION.insights[i].text}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}