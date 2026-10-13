import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { DAYS, TONE_COLORS, type TopicStat } from '../../AnalyticsPage/analytics.ts'
import { card, chartFill, dot, risk, riskDot, topicName, topicRow } from '../analytics.css.ts'
import { chartCard, plot, takeaway } from './TopicChartCard.css'

export function TopicChartCard({ topic }: { topic: TopicStat }) {
    const color = TONE_COLORS[topic.tone]
    const data = DAYS.map((day, i) => ({ day, mentions: Math.round(topic.bars[i] * 100) }))

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
                <div className={chartFill}>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data} margin={{ top: 4, right: 2, bottom: 0, left: 2 }}>
                            <CartesianGrid vertical={false} stroke="#f0f0f0" />
                            <XAxis
                                dataKey="day"
                                interval={0}
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                tick={{ fontSize: 10, fill: '#9ca3af' }}
                            />
                            <YAxis hide domain={[0, 100]} />
                            <Tooltip
                                cursor={{ fill: 'rgba(0,0,0,0.03)' }}
                                contentStyle={{ fontSize: 11, borderRadius: 8, border: '1px solid #ececec' }}
                            />
                            <Bar dataKey="mentions" fill={color} radius={[3, 3, 0, 0]} maxBarSize={14} isAnimationActive={false} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}