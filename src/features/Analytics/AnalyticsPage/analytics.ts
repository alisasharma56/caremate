export type TopicTone = 'blue' | 'amber' | 'green' | 'purple'
export type Risk = 'Critical' | 'High risk'
export type TrendDir = 'up' | 'down' | 'flat'

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

export const FILTERS = { range: 'Last 30 days', state: 'All States', topic: 'All Topics' }

export const AUDIENCES = ['Provider', 'Participant', 'Support Coord.', 'Allied Health']

export interface TrendingItem {
    label: string
    fill: number
    tone: 'green' | 'red' | 'cyan'
    dir: TrendDir
}

export const TRENDING: TrendingItem[] = [
    { label: 'SIL Funding', fill: 1, tone: 'green', dir: 'up' },
    { label: 'Price Guide 2026', fill: 0.55, tone: 'red', dir: 'down' },
    { label: 'Registration Reform', fill: 0.33, tone: 'green', dir: 'up' },
    { label: 'Workforce Crisis', fill: 0.226, tone: 'cyan', dir: 'flat' },
    { label: 'AAT Appeals', fill: 0.18, tone: 'green', dir: 'up' },
]

// ASSUMPTION: the right side of these two cards is cut off in the design.
export const SECTORS = [
    { label: 'Funding', value: 42 },
    { label: 'Policy', value: 31 },
    { label: 'Workforce', value: 24 },
    { label: 'SIL/SDA', value: 18 },
    { label: 'Appeals', value: 11 },
]

export const EMERGING = [
    { label: 'SIL funding', tag: '+120%' },
    { label: 'Price guide', tag: '+86%' },
    { label: 'Registration reform', tag: '+64%' },
    { label: 'AAT appeals', tag: '+41%' },
    { label: 'Independent assessments', tag: '+28%' },
]

// Positions are % of the plot. Only the top of the plot was visible in the design.
export const BUBBLES: { tone: TopicTone; x: number; y: number; size: number }[] = [
    { tone: 'amber', x: 7, y: 22, size: 20 },
    { tone: 'blue', x: 17, y: 42, size: 20 },
    { tone: 'blue', x: 8, y: 58, size: 12 },
    { tone: 'blue', x: 20, y: 52, size: 14 },
    { tone: 'green', x: 38, y: 50, size: 12 },
    { tone: 'purple', x: 52, y: 38, size: 20 },
    { tone: 'purple', x: 58, y: 56, size: 14 },
]