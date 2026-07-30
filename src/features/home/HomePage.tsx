import { useEffect, useState } from 'react'
import useFeed from '@/features/home/hooks/GetFeed'
import useKeywordFeed, {
  type KeywordFeedItem,
} from '@/features/home/hooks/GetKeywordFeed'
import type { Item } from '@/features/home/data/feed'
import { FeedCard } from '@/components/FeedCard/FeedCard'
import * as styles from '@/features/home/HomePage.css'

function formatKeyword(value: string) {
  return value.replaceAll('_', ' ').replace(/\b\w/g, (letter) => letter.toUpperCase())
}

function keywordItemToFeedItem(item: KeywordFeedItem): Item {
  return {
    news: {
      id: item.id,
      title: item.headline,
      source: 'News',
      snippet: item.snippet,
      summary: '',
      author: '',
      published_at: item.published_date,
      published_date: item.published_date,
      categories: null,
      url: item.url,
      item_type: 'news',
    },
    analytics: {
      id: item.id,
      news_id: item.id,
      headline: item.headline,
      keywords: item.keywords,
      impactness: item.impactness,
      urgency: item.urgency,
      sentiment: {
        overall: item.sentiment_overall,
        positive_pct: item.sentiment_positive_pct,
        negative_pct: item.sentiment_negative_pct,
        neutral_pct: item.sentiment_neutral_pct,
      },
      action_required: false,
      action_summary: '',
      action_deadline: '',
      target_audience: [],
      affected_states: [],
      primary_filter: [],
      secondary_filter: item.keywords.length ? ['keywords'] : [],
      key_element: {
        type: '',
        description: '',
        effective_date: '',
        old_value: '',
        new_value: '',
        financial_impact: '',
        geographic_scope: '',
      },
    },
    time_ago: item.time_ago,
    photo_url: '',
  }
}

export function HomePage() {
  const [selectedKeyword, setSelectedKeyword] = useState('')
  const feedQuery = useFeed()
  const keywordFeedQuery = useKeywordFeed(selectedKeyword)
  const keywordItems = keywordFeedQuery.data?.items.map(keywordItemToFeedItem)

  useEffect(() => {
    if (!selectedKeyword) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [selectedKeyword])

  return (
    <main className={styles.page}>
      <h1 className={styles.heading}>News</h1>

      {feedQuery.isPending ? <p className={styles.message}>Loading news…</p> : null}

      {feedQuery.isError ? (
        <div className={styles.message} role="alert">
          <p>Could not load the news. {feedQuery.error.message}</p>
          <button type="button" onClick={() => void feedQuery.refetch()}>
            Try again
          </button>
        </div>
      ) : null}

      {!feedQuery.isPending && !feedQuery.isError && feedQuery.data?.items.length === 0 ? (
        <p className={styles.message}>No news is available.</p>
      ) : null}

      <div className={styles.newsList}>
        {feedQuery.data?.items.map((item) => (
          <FeedCard
            item={item}
            key={item.news.id}
            onKeywordSelect={setSelectedKeyword}
          />
        ))}
      </div>

      {selectedKeyword ? (
        <dialog
          aria-labelledby="keyword-dialog-title"
          className={styles.dialog}
          onCancel={() => setSelectedKeyword('')}
          onClick={(event) => {
            if (event.target === event.currentTarget) setSelectedKeyword('')
          }}
          open
        >
          <section className={styles.dialogPanel}>
            <header className={styles.dialogHeader}>
              <div>
                <span className={styles.dialogEyebrow}>Keyword news</span>
                <h2 className={styles.dialogTitle} id="keyword-dialog-title">
                  {formatKeyword(selectedKeyword)}
                </h2>
              </div>
              <button
                aria-label="Close keyword news"
                className={styles.closeButton}
                onClick={() => setSelectedKeyword('')}
                type="button"
              >
                ×
              </button>
            </header>

            <div className={styles.dialogBody}>
              {keywordFeedQuery.isPending ? (
                <p className={styles.message}>Loading news…</p>
              ) : null}

              {keywordFeedQuery.isError ? (
                <div className={styles.message} role="alert">
                  <p>Could not load keyword news. {keywordFeedQuery.error.message}</p>
                  <button type="button" onClick={() => void keywordFeedQuery.refetch()}>
                    Try again
                  </button>
                </div>
              ) : null}

              {!keywordFeedQuery.isPending &&
              !keywordFeedQuery.isError &&
              keywordItems?.length === 0 ? (
                <p className={styles.message}>
                  No news is available for this keyword.
                </p>
              ) : null}

              <div className={styles.dialogNewsList}>
                {keywordItems?.map((item) => (
                  <FeedCard
                    item={item}
                    key={item.news.id}
                    onKeywordSelect={setSelectedKeyword}
                  />
                ))}
              </div>
            </div>
          </section>
        </dialog>
      ) : null}
    </main>
  )
}
