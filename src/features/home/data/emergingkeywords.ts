export interface EmergingKeyword {
    keyword: string
    recent_count: number
    rise_pct: number
}

export type EmergingKeywordsResponse = EmergingKeyword[]