import {
    Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from 'recharts'
import { PUBLISHING, PUBLISHING_PEAK, PUBLISH_TOPICS } from '../../AnalyticsPage/analytics.ts'
import { card as baseCard, chartFill } from '../analytics.css.ts'
import {
    chart, header, insight, insightText, insightTitle, legend, legendDot, legendItem,
    publishCard, subtitle, title, titleBlock,
} from './PublishingPatternCard.css'

/**
 * One row per day. Each topic is its own stack (stackId = topic key) made of a light
 * lower segment and a strong upper segment, so the four topics sit side by side.
 */
const DATA = PUBLISHING.map(({ day, values }) => {
    const row: Record<string, number | string> = { day }
    PUBLISH_TOPICS.forEach((t, i) => {
        row[`${t.key}_light`] = +(values[i] * (1 - t.strong)).toFixed(2)
        row[`${t.key}_strong`] = +(values[i] * t.strong).toFixed(2)
        row[t.key] = values[i]
    })
    return row
})

export function PublishingPatternCard() {
    return (
        <div className={`${baseCard} ${publishCard}`}>
            <div className={header}>
                <div className={titleBlock}>
                    <div className={title}>PUBLISHING PATTERN · BY DAY</div>
                    <div className={subtitle}>
                        Operational takeaway: Thursday drives 28% of weekly volume; weekend publishing drops sharply.
                    </div>
                </div>
                <div className={legend}>
                    {PUBLISH_TOPICS.map((t) => (
                        <span className={legendItem} key={t.key}>
              <span className={legendDot} style={{ background: t.color }} />
                            {t.label}
            </span>
                    ))}
                </div>
            </div>

            <div className={chart}>
                <div className={chartFill}>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={DATA} barGap={4} barCategoryGap="12%" margin={{ top: 12, right: 0, bottom: 0, left: 0 }}>
                            <CartesianGrid vertical={false} stroke="#eef0f2" />
                            <XAxis
                                dataKey="day"
                                interval={0}
                                tickLine={false}
                                axisLine={false}
                                tickMargin={10}
                                tick={{ fontSize: 10, fill: '#9ca3af' }}
                            />
                            <YAxis hide domain={[0, 'dataMax']} />
                            <Tooltip
                                cursor={{ fill: 'rgba(0,0,0,0.03)' }}
                                contentStyle={{ fontSize: 11, borderRadius: 8, border: '1px solid #ececec' }}
                                // Show one line per topic (the total), not the light/strong halves.
                                formatter={(_v, name, item) => {
                                    const key = String(name).replace(/_(light|strong)$/, '')
                                    const topic = PUBLISH_TOPICS.find((t) => t.key === key)
                                    return [(item.payload as Record<string, number>)[key], topic?.label ?? key]
                                }}
                                itemSorter={() => 0}
                                filterNull
                            />
                            {PUBLISH_TOPICS.flatMap((t) => [
                                <Bar
                                    key={`${t.key}_light`}
                                    dataKey={`${t.key}_light`}
                                    stackId={t.key}
                                    fill={t.light}
                                    fillOpacity={0.85}
                                    maxBarSize={15}
                                    isAnimationActive={false}
                                />,
                                <Bar
                                    key={`${t.key}_strong`}
                                    dataKey={`${t.key}_strong`}
                                    stackId={t.key}
                                    fill={t.color}
                                    radius={[3, 3, 0, 0]}
                                    maxBarSize={15}
                                    isAnimationActive={false}
                                />,
                            ])}
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className={insight}>
                <span className={insightTitle}>📅 {PUBLISHING_PEAK.title}</span>
                <span className={insightText}>{PUBLISHING_PEAK.text}</span>
            </div>
        </div>
    )
}