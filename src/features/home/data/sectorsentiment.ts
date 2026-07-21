export interface SectorSentiment {
    topic: string
    positive_pct: number
    negative_pct: number
    neutral_pct: number
    net: number
    total: number
}

export type SectorSentimentResponse = SectorSentiment[]