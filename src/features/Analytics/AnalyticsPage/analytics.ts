export type TopicTone = 'blue' | 'amber' | 'green' | 'purple'
export type Risk = 'Critical' | 'High risk'

export interface TopicStat {
    id: string
    label: string
    tone: TopicTone
    risk: Risk
    mentions: number
    change: string
    meta: string
    /** 5 dots total, `filled` coloured, rest grey */
    microTrend: { filled: number; color: 'green' | 'red' }
    takeaway: string
    /** Mon..Sun bar heights, 0-1 */
    bars: number[]
}

export const TONE_COLORS: Record<TopicTone, string> = {
    blue: '#629bf8',
    amber: '#f5b744',
    green: '#34c08e',
    purple: '#9271e0',
}

export const LIGHT_COLORS: Record<TopicTone, string> = {
    blue: '#a5cdfc',
    amber: '#fbe8a0',
    green: '#86e8c9',
    purple: '#cdbfff',
}

export const TOPICS: TopicStat[] = [
    {
        id: 'ndis', label: 'NDIS', tone: 'blue', risk: 'High risk', mentions: 58,
        change: '−31.0%', meta: 'High · All States',
        microTrend: { filled: 3, color: 'green' },
        takeaway: 'Operational takeaway: volume is declining, but the topic remains high-risk across all states.',
        bars: [0.4, 0.62, 0.74, 0.92, 0.84, 0.68, 0.55],
    },
    {
        id: 'fraud', label: 'NDIS FRAUD', tone: 'amber', risk: 'Critical', mentions: 10,
        change: '−74%', meta: 'Critical · All States',
        microTrend: { filled: 3, color: 'red' },
        takeaway: 'Operational takeaway: fraud mentions are collapsing, but compliance teams should keep the topic on watch.',
        bars: [0.34, 0.5, 0.65, 0.82, 0.72, 0.58, 0.44],
    },
    {
        id: 'support', label: 'DISABILITY SUPPORT', tone: 'green', risk: 'Critical', mentions: 7,
        change: '−80.0%', meta: 'Critical · All States',
        microTrend: { filled: 2, color: 'red' },
        takeaway: 'Operational takeaway: support mentions are falling sharply and should be monitored for service-access risk.',
        bars: [0.34, 0.52, 0.68, 0.9, 0.78, 0.62, 0.48],
    },
    {
        id: 'reforms', label: 'REFORMS', tone: 'purple', risk: 'High risk', mentions: 6,
        change: '−80.0%', meta: 'High · All States',
        microTrend: { filled: 2, color: 'red' },
        takeaway: 'Operational takeaway: reform mentions are falling, but the topic remains high-risk and should stay on the compliance watchlist.',
        bars: [0.3, 0.48, 0.64, 0.86, 0.74, 0.6, 0.46],
    },
]

export const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export const FILTERS = { range: 'Last 30 days' }

export const RANGE_OPTIONS = [
    { value: '30', label: 'Last 30 days' },
    { value: '60', label: 'Last 60 days' },
    { value: '90', label: 'Last 90 days' },
]


// Positions are % of the plot (x from left, y from top); `light` = faded dot.
export const BUBBLES: { tone: TopicTone; x: number; y: number; size: number; light?: boolean }[] = [
    { tone: 'amber', x: 4.5, y: 21.7, size: 16 },
    { tone: 'amber', x: 5.8, y: 18.1, size: 12 },
    { tone: 'blue', x: 9.7, y: 28.1, size: 16 },
    { tone: 'blue', x: 12.1, y: 33.9, size: 12 },
    { tone: 'blue', x: 6.8, y: 37.1, size: 10, light: true },
    { tone: 'green', x: 18.7, y: 39.4, size: 16 },
    { tone: 'green', x: 19.6, y: 32.6, size: 10, light: true },
    { tone: 'green', x: 21, y: 43.9, size: 12 },
    { tone: 'purple', x: 25.1, y: 28.1, size: 16 },
    { tone: 'purple', x: 23.4, y: 37.1, size: 10, light: true },
    { tone: 'purple', x: 27.1, y: 34.8, size: 12, light: true },
]

/** Segment widths are % of the column width (the provider bar leaves the rest empty). */
export const PERCEPTION = {
    segments: [
        { label: 'NDIS provider', tone: 'blue', light: false, provider: 24.0, participant: 7.5 },
        { label: 'NDIS participant', tone: 'blue', light: true, provider: 12.0, participant: 13.4 },
        { label: 'Fraud provider', tone: 'amber', light: false, provider: 5.6, participant: 14.7 },
        { label: 'Fraud participant', tone: 'amber', light: true, provider: 3.1, participant: 22.9 },
        { label: 'Disab. support provider', tone: 'green', light: false, provider: 10.0, participant: 11.3 },
        { label: 'Disab. support participant', tone: 'green', light: true, provider: 5.9, participant: 7.2 },
        { label: 'Reforms provider', tone: 'purple', light: false, provider: 7.7, participant: 13.4 },
        { label: 'Reforms participant', tone: 'purple', light: true, provider: 4.9, participant: 9.5 },
    ] as { label: string; tone: TopicTone; light: boolean; provider: number; participant: number }[],
    insights: [
        {
            title: 'Perception gap',
            text: 'NDIS Fraud shows the largest gap: providers are 60% more negative than participants.',
        },
        {
            title: 'Watchlist',
            text: 'Disability Support and Reforms have the smallest gaps, but remain high-risk for operations.',
        },
    ],
}

/* ───────────── Participant outcomes (radar) ───────────── */

/* ───────────── Participant outcomes (radar) ───────────── */

export const COHORT_COLORS = {
    A: '#e9a35f',
    B: '#7d9cc6',
    C: '#c4556f',
    D: '#d9714f',
    E: '#9a74b8',
} as const

export type CohortId = keyof typeof COHORT_COLORS

/** Clockwise from the top. */
export const OUTCOME_AXES = [
    { key: 'access', label: 'Access to Services', icon: 'access' },
    { key: 'satisfaction', label: 'Participant Satisfaction', icon: 'smile' },
    { key: 'plan', label: 'Plan Utilisation', icon: 'chart' },
    { key: 'choice', label: 'Provider Choice', icon: 'route' },
    { key: 'independence', label: 'Independence Outcomes', icon: 'trend' },
] as const

export type OutcomeIcon = (typeof OUTCOME_AXES)[number]['icon']

/** Illustrative placeholder values (one per axis, same order as OUTCOME_AXES). */
export const COHORTS: { id: CohortId; name: string; values: number[] }[] = [
    { id: 'A', name: 'Cohort A', values: [90, 78, 95, 70, 82] },
    { id: 'B', name: 'Cohort B', values: [72, 85, 100, 74, 68] },
    { id: 'C', name: 'Cohort C', values: [84, 66, 90, 88, 76] },
    { id: 'D', name: 'Cohort D', values: [76, 72, 80, 80, 70] },
    { id: 'E', name: 'Cohort E', values: [68, 70, 74, 76, 75] },
]

/** Score pills sitting on the shapes (value matches that cohort's data point). */
export const OUTCOME_BADGES: { cohort: CohortId; axis: number; value: number }[] = [
    { cohort: 'A', axis: 0, value: 90 },
    { cohort: 'B', axis: 1, value: 85 },
    { cohort: 'C', axis: 2, value: 90 },
    { cohort: 'D', axis: 3, value: 80 },
    { cohort: 'E', axis: 4, value: 75 },
]
/* ───────────── Publishing pattern ───────────── */

export const PUBLISH_TOPICS = [
    { key: 'ndis', label: 'NDIS', color: '#3b82f6', light: '#6fa0f7', strong: 0.6 },
    { key: 'fraud', label: 'Fraud', color: '#f5a623', light: '#f5b84f', strong: 0.3 },
    { key: 'support', label: 'Disab.', color: '#10b981', light: '#34c08e', strong: 0.1 },
    { key: 'reforms', label: 'Reforms', color: '#8b5cf6', light: '#a37af8', strong: 0.1 },
] as const

/** Posts per day: [NDIS, Fraud, Disab., Reforms]. Thursday = 28 of 100 = 28% of weekly volume. */
export const PUBLISHING: { day: string; values: [number, number, number, number] }[] = [
    { day: 'Mon', values: [6, 4, 3, 2] },
    { day: 'Tue', values: [7, 4, 3, 3] },
    { day: 'Wed', values: [7, 5, 3, 3] },
    { day: 'Thu', values: [11, 7, 6, 4] },
    { day: 'Fri', values: [5, 3, 2, 2] },
    { day: 'Sat', values: [2, 2, 1, 1] },
    { day: 'Sun', values: [2, 1, 1, 0] },
]

export const PUBLISHING_PEAK = {
    title: 'Peak: Thu',
    text: 'Thursday drives 28% of weekly volume. Weekend publishing drops sharply - schedule alerts for Mon morning catch-up.',
}