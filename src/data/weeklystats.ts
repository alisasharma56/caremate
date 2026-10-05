export interface WeeklyStatMetric {
    count: number
    change_pct: number
}

export interface WeeklyTopKeyElement {
    type: string
    count: number
}

export interface WeeklyTopState {
    state: string
    count: number
}

export interface WeeklyStats {
    articles: WeeklyStatMetric
    urgent_alerts: WeeklyStatMetric
    top_key_element: WeeklyTopKeyElement
    top_state: WeeklyTopState
}