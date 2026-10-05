export interface KeywordFeedItem {
  news_id: number
  headline: string
  snippet: string
  published_date: string
  time_ago: string
  sentiment_overall: string
  sentiment_positive_pct: number
  sentiment_negative_pct: number
  sentiment_neutral_pct: number
  keywords: string[]
  urgency: string
  impactness: number
  url: string
  photo_url: string | null
}

export interface KeywordFeedResponse {
  keyword: string
  items: KeywordFeedItem[]
  next_cursor: number
  has_more: boolean
}
