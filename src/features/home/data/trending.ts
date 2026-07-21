export interface TrendingKeyword {
    keyword: string
    mentions: number
    score: number
}

export type TrendingKeywordsResponse = TrendingKeyword[]