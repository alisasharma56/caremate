import { useState, type ReactNode } from 'react'
import {
    PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer,
} from 'recharts'
import {
    COHORT_COLORS, COHORTS, OUTCOME_AXES, OUTCOME_BADGES, type CohortId, type OutcomeIcon,
} from '../../AnalyticsPage/analytics.ts'
import { chartFill } from '../analytics.css.ts'
import {
    card, center, cohortLegend, cohortLegendItem, footer, footerText, header, headerLabel,
    legendDot, scroller, stage, subtitle, title,
} from './ParticipantOutcomesCard.css'
import Accessibility from "@/components/icons/Accessibility";
import Smily from "@/components/icons/Smily";

import GitBranch from "@/components/icons/GitBranch";
import IndependenceArrow from "@/components/icons/IndependeceArrow";
import BarChart from "@/components/icons/ThreeBar";

const ICONS: Record<OutcomeIcon, () => ReactNode> = {
    access: () => <Accessibility />,
    smile: () => <Smily />,
    chart: () => <BarChart />,
    route: () => <GitBranch />,
    trend: () => <IndependenceArrow />,
}

const FILL_OPACITY: Record<CohortId, number> = { A: 0.6, B: 0.55, C: 0.55, D: 0.5, E: 0.5 }
const MAX_VALUE = 125 // the radar's outer ring (cohort values may overshoot 100)

const DATA = OUTCOME_AXES.map((axis, i) => {
    const row: Record<string, string | number> = { axis: axis.label, icon: axis.icon }
    COHORTS.forEach((c) => {
        row[c.id] = c.values[i]
    })
    return row
})

interface TickProps {
    x: number
    y: number
    textAnchor: 'start' | 'middle' | 'end'
    index: number
    compact?: boolean
}

const sideOf = (anchor: TickProps['textAnchor']) => (anchor === 'start' ? 1 : anchor === 'end' ? -1 : 0)

/** Axis label: icon above the text, anchored the way Recharts positions the tick. */
function AxisTick({ x, y, textAnchor, index, compact }: TickProps) {
    const axis = OUTCOME_AXES[index]
    const side = sideOf(textAnchor)
    const isTop = index === 0
    const isBottom = index === 2 || index === 3

    // Small screens: no icons, smaller type, long labels broken over two lines.
    if (compact) {
        const words = axis.label.split(' ')
        const lines = words.length > 1 ? [words[0], words.slice(1).join(' ')] : words
        const cx = x + side * 6
        const top = isTop ? y - 14 : isBottom ? y + 8 : y - 2
        return (
            <text textAnchor={textAnchor} fontSize={8.5} fontWeight={600} fill="#1f1f1f">
                {lines.map((line, i) => (
                    <tspan key={line} x={cx} y={top + i * 10}>
                        {line}
                    </tspan>
                ))}
            </text>
        )
    }

    const Icon = ICONS[axis.icon]

    // Push the label a little away from the chart, then centre the icon over the text.
    const tx = x + side * 12
    const textWidth = axis.label.length * 5.6
    const iconX = tx - 6 + (textAnchor === 'start' ? textWidth / 2 : textAnchor === 'end' ? -textWidth / 2 : 0)
    const textY = isTop ? y - 8 : isBottom ? y + 18 : y + 8
    const iconY = textY - 22

    return (
        <g>
            <g transform={`translate(${iconX}, ${iconY})`} color="#1f1f1f">
                <Icon />
            </g>
            <text x={tx} y={textY} textAnchor={textAnchor} fontSize={10} fontWeight={600} fill="#1f1f1f">
                {axis.label}
            </text>
        </g>
    )
}

/** Score pill drawn on top of a specific cohort point. */
function renderBadge(cohort: CohortId) {
    return function Badge(props: { cx?: number; cy?: number; index?: number }) {
        const badge = OUTCOME_BADGES.find((b) => b.cohort === cohort && b.axis === props.index)
        if (!badge || props.cx == null || props.cy == null) return <g />
        return (
            <g>
                <rect
                    x={props.cx - 12}
                    y={props.cy - 7}
                    width={24}
                    height={14}
                    rx={7}
                    fill={COHORT_COLORS[cohort]}
                    stroke="rgba(255,255,255,0.7)"
                />
                <text x={props.cx} y={props.cy + 3} fontSize={8} fontWeight={700} fill="#fff" textAnchor="middle">
                    {badge.value}
                </text>
            </g>
        )
    }
}

export function ParticipantOutcomesCard() {
    const [width, setWidth] = useState(760)
    const compact = width < 520

    return (
        <section className={card}>
            <h3 className={title}>NDIS Participant Outcomes</h3>
            <p className={subtitle}>
                Illustrative comparison across five participant experience and support dimensions
            </p>

            <div className={header}>
                <span className={headerLabel}>Participant Experience Index</span>
                <div className={cohortLegend}>
                    {COHORTS.map((c) => (
                        <span className={cohortLegendItem} key={c.id}>
                            <span className={legendDot} style={{ background: COHORT_COLORS[c.id] }} />
                            {c.name}
                        </span>
                    ))}
                </div>
            </div>

            <div className={scroller}>
                <div className={stage}>
                    <div className={chartFill}>
                        <ResponsiveContainer width="100%" height="100%" onResize={(w) => setWidth(w)}>
                            <RadarChart
                                data={DATA}
                                outerRadius={compact ? '58%' : '66%'}
                                margin={compact ? { top: 24, right: 36, bottom: 24, left: 36 } : { top: 20, right: 20, bottom: 20, left: 20 }}
                            >
                                <PolarGrid gridType="circle" stroke="#d6d3c9" />
                                <PolarAngleAxis dataKey="axis" tick={(p) => <AxisTick {...(p as TickProps)} compact={compact} />} />
                                <PolarRadiusAxis domain={[0, MAX_VALUE]} ticks={[25, 50, 75, 100, 125]} tick={false} axisLine={false} />
                                {COHORTS.map((c) => (
                                    <Radar
                                        key={c.id}
                                        dataKey={c.id}
                                        name={c.name}
                                        stroke="none"
                                        fill={COHORT_COLORS[c.id]}
                                        fillOpacity={FILL_OPACITY[c.id]}
                                        dot={renderBadge(c.id)}
                                        isAnimationActive={false}
                                    />
                                ))}
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>
                    <span className={center} />
                </div>
            </div>

            <div className={footer}>
                <span className={footerText}>Illustrative data only — placeholder values for design purposes</span>
                <span className={footerText}>NDIS Outcomes Framework · 2024</span>
            </div>
        </section>
    )
}