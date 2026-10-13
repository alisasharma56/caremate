// import { Cell, ReferenceLine, ResponsiveContainer, Scatter, ScatterChart, XAxis, YAxis, ZAxis } from 'recharts'
// import { BUBBLES, LIGHT_COLORS, TONE_COLORS, type TopicTone } from '../../AnalyticsPage/analytics.ts'
// import { card, chartFill } from '../analytics.css.ts'
// import {
//     legend, legendDot, legendItem, legendLabel, legendRow, plot, quad, quadHigh, quadLow,
//     quadNegative, quadPositive, sentimentCard, subtitle, title,
// } from './SentimentImpactCard.css'
//
// const LEGEND = [
//     { label: 'NDIS', tone: 'blue' },
//     { label: 'NDIS Fraud', tone: 'amber' },
//     { label: 'Disability Support', tone: 'green' },
//     { label: 'Reforms', tone: 'purple' },
// ] as const
//
// const TONES: TopicTone[] = ['blue', 'amber', 'green', 'purple']
//
// // BUBBLES are stored as "% from the top"; the chart's Y axis runs bottom-up.
// const POINTS = BUBBLES.map((b) => ({ ...b, y: 100 - b.y }))
// const DIVIDER_X = 28
//
// export function SentimentImpactCard() {
//     return (
//         <div className={`${card} ${sentimentCard}`}>
//             <div>
//                 <div className={title}>SENTIMENT VS IMPACT</div>
//                 <div className={subtitle}>
//                     Operational takeaway: high-impact topics are concentrated in negative and neutral quadrants.
//                 </div>
//             </div>
//             <div className={legend}>
//                 <span className={legendLabel}>Legend</span>
//                 {[LEGEND.slice(0, 2), LEGEND.slice(2)].map((group, i) => (
//                     <div className={legendRow} key={i}>
//                         {group.map((l) => (
//                             <span className={legendItem} key={l.label}>
//                 <span className={legendDot} style={{ background: TONE_COLORS[l.tone] }} />
//                                 {l.label}
//               </span>
//                         ))}
//                     </div>
//                 ))}
//             </div>
//
//             <div className={plot}>
//                 <div className={chartFill}>
//                     <ResponsiveContainer width="100%" height="100%">
//                         <ScatterChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
//                             <XAxis type="number" dataKey="x" domain={[0, 100]} hide />
//                             <YAxis type="number" dataKey="y" domain={[0, 100]} hide />
//                             {/* Dot area is mapped from the size field: 10px ≈ 78, 16px ≈ 201 */}
//                             <ZAxis type="number" dataKey="size" domain={[10, 16]} range={[78, 201]} />
//                             <ReferenceLine x={DIVIDER_X} stroke="#e5e7eb" />
//                             <ReferenceLine y={50} stroke="#e5e7eb" />
//                             {TONES.map((tone) => {
//                                 const pts = POINTS.filter((p) => p.tone === tone)
//                                 return (
//                                     <Scatter key={tone} data={pts} isAnimationActive={false}>
//                                         {pts.map((p, i) => (
//                                             <Cell key={i} fill={p.light ? LIGHT_COLORS[tone] : TONE_COLORS[tone]} />
//                                         ))}
//                                     </Scatter>
//                                 )
//                             })}
//                         </ScatterChart>
//                     </ResponsiveContainer>
//                 </div>
//                 <span className={`${quad} ${quadPositive}`}>Positive</span>
//                 <span className={`${quad} ${quadHigh}`}>High impact</span>
//                 <span className={`${quad} ${quadNegative}`}>Negative</span>
//                 <span className={`${quad} ${quadLow}`}>Low impact</span>
//             </div>
//         </div>
//     )
// }

import { ReferenceLine, ResponsiveContainer, Scatter, ScatterChart, XAxis, YAxis, ZAxis } from 'recharts'
import { BUBBLES, LIGHT_COLORS, TONE_COLORS, type TopicTone } from '../../AnalyticsPage/analytics.ts'
import { card, chartFill } from '../analytics.css.ts'
import {
    legend, legendDot, legendItem, legendLabel, legendRow, plot, quad, quadHigh, quadLow,
    quadNegative, quadPositive, sentimentCard, subtitle, title,
} from './SentimentImpactCard.css'

const LEGEND = [
    { label: 'NDIS', tone: 'blue' },
    { label: 'NDIS Fraud', tone: 'amber' },
    { label: 'Disability Support', tone: 'green' },
    { label: 'Reforms', tone: 'purple' },
] as const

const TONES: TopicTone[] = ['blue', 'amber', 'green', 'purple']

// BUBBLES are stored as "% from the top"; the chart's Y axis runs bottom-up.
const POINTS = BUBBLES.map((b) => ({ ...b, y: 100 - b.y }))
const DIVIDER_X = 28

type DotProps = {
    cx?: number
    cy?: number
    size?: number
    payload?: { tone: TopicTone; light?: boolean }
}

// Draws one dot; replaces <Cell> (deprecated in Recharts 3).
function Dot({ cx = 0, cy = 0, size = 78, payload }: DotProps) {
    if (!payload) return null
    const fill = payload.light ? LIGHT_COLORS[payload.tone] : TONE_COLORS[payload.tone]
    const r = Math.sqrt(size / Math.PI)
    return <circle cx={cx} cy={cy} r={r} fill={fill} />
}

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
                <div className={chartFill}>
                    <ResponsiveContainer width="100%" height="100%">
                        <ScatterChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                            <XAxis type="number" dataKey="x" domain={[0, 100]} hide />
                            <YAxis type="number" dataKey="y" domain={[0, 100]} hide />
                            {/* Dot area is mapped from the size field: 10px ≈ 78, 16px ≈ 201 */}
                            <ZAxis type="number" dataKey="size" domain={[10, 16]} range={[78, 201]} />
                            <ReferenceLine x={DIVIDER_X} stroke="#e5e7eb" />
                            <ReferenceLine y={50} stroke="#e5e7eb" />
                            {TONES.map((tone) => (
                                <Scatter
                                    key={tone}
                                    data={POINTS.filter((p) => p.tone === tone)}
                                    shape={<Dot />}
                                    isAnimationActive={false}
                                />
                            ))}
                        </ScatterChart>
                    </ResponsiveContainer>
                </div>
                <span className={`${quad} ${quadPositive}`}>Positive</span>
                <span className={`${quad} ${quadHigh}`}>High impact</span>
                <span className={`${quad} ${quadNegative}`}>Negative</span>
                <span className={`${quad} ${quadLow}`}>Low impact</span>
            </div>
        </div>
    )
}