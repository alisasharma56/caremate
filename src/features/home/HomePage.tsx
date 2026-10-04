import { useEffect, useState } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import useFeed from '@/features/home/hooks/GetFeed'
import useAnchorFeed from '@/features/home/hooks/GetAnchorFeed'
import useKeywordFeed, {
  type KeywordFeedItem,
} from '@/features/home/hooks/GetKeywordFeed'
import type { Item, Welcome } from '@/features/home/data/feed'
import { SideCardPanel } from '@/features/SidecardPanel/SideCardPanel'
import { FeedCard } from '@/components/FeedCard/FeedCard'
import { PRIMARY_FILTERS, SECONDARY_FILTERS, filterFeedItems } from './feedFilters'
import {
  page,
  message,
  newsList,
  dialog,
  dialogPanel,
  dialogHeader,
  dialogEyebrow,
  dialogTitle,
  closeButton,
  dialogBody,
  anchorError as anchorErrorStyle,
  dialogNewsList,
  filters,
  primaryFilters,
  secondaryFilters,
  primaryButton,
  secondaryButton,
  selectedFilter,
  feedLayout,
  feedColumn,
  sidebar,
} from '@/features/home/HomePage.css'

function formatKeyword(value: string) {
  return value.replaceAll('_', ' ').replace(/\b\w/g, (letter) => letter.toUpperCase())
}

function keywordItemToFeedItem(item: KeywordFeedItem): Item {
  return {
    news: {
      id: item.news_id,
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
      id: item.news_id,
      news_id: item.news_id,
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
    photo_url: item.photo_url,
  }
}

export function HomePage() {
  const [primaryFilter, setPrimaryFilter] = useState('')
  const [secondaryFilter, setSecondaryFilter] = useState('')
  const [selectedKeyword, setSelectedKeyword] = useState('')
  const [anchorError, setAnchorError] = useState('')
  const queryClient = useQueryClient()
  const feedQuery = useFeed()
  const anchorFeed = useAnchorFeed()
  const keywordFeedQuery = useKeywordFeed(selectedKeyword)
  const keywordItems = keywordFeedQuery.data?.items.map(keywordItemToFeedItem)
  const feedItems = feedQuery.data?.items ?? []
  const visibleItems = filterFeedItems(feedItems, primaryFilter, secondaryFilter)

  const resetFilters = () => {
    setPrimaryFilter('')
    setSecondaryFilter('')
  }

  const scrollToArticle = (newsId: number) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.getElementById(`news-card-${newsId}`)?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
      })
    })
  }

  const goToArticle = async (newsId: number) => {
    setAnchorError('')

    if (feedQuery.data?.items.some((item) => item.news.id === newsId)) {
      setSelectedKeyword('')
      resetFilters()
      scrollToArticle(newsId)
      return
    }

    try {
      const anchoredFeed = await anchorFeed.mutateAsync(newsId)
      if (!anchoredFeed.items.some((item) => item.news.id === newsId)) {
        setAnchorError('The requested article was not included in the anchor feed.')
        return
      }

      queryClient.setQueryData<Welcome>(['feed'], (current) => {
        if (!current) return anchoredFeed

        const existingIds = new Set(current.items.map((item) => item.news.id))
        return {
          ...anchoredFeed,
          items: [
            ...current.items,
            ...anchoredFeed.items.filter((item) => !existingIds.has(item.news.id)),
          ],
        }
      })
      setSelectedKeyword('')
      resetFilters()
      scrollToArticle(newsId)
    } catch (error) {
      setAnchorError(error instanceof Error ? error.message : 'Could not load the article.')
    }
  }

  useEffect(() => {
    if (!selectedKeyword) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [selectedKeyword])

  return (
    <main className={page} aria-label="News feed">
      <section className={filters} aria-label="News filters">
        <div className={primaryFilters} role="group" aria-label="Primary filters">
          <button className={`${primaryButton} ${!primaryFilter && !secondaryFilter ? selectedFilter : ''}`}
            type="button" aria-pressed={!primaryFilter && !secondaryFilter} onClick={resetFilters}>All</button>
          {PRIMARY_FILTERS.map(option => <button key={option.value} type="button"
            className={`${primaryButton} ${primaryFilter === option.value ? selectedFilter : ''}`}
            aria-pressed={primaryFilter === option.value}
            onClick={() => setPrimaryFilter(current => current === option.value ? '' : option.value)}>{option.label}</button>)}
        </div>
        <div className={secondaryFilters} role="group" aria-label="Secondary filters">
          {SECONDARY_FILTERS.map(option => <button key={option.value} type="button"
            className={`${secondaryButton} ${secondaryFilter === option.value ? selectedFilter : ''}`}
            aria-pressed={secondaryFilter === option.value}
            onClick={() => setSecondaryFilter(current => current === option.value ? '' : option.value)}>{option.label}</button>)}
        </div>
      </section>

      <div className={feedLayout}>
      <section className={feedColumn} aria-label="News articles">
      {feedQuery.isPending ? <p className={message}>Loading news…</p> : null}

      {feedQuery.isError ? (
        <div className={message} role="alert">
          <p>Could not load the news. {feedQuery.error.message}</p>
          <button type="button" onClick={() => void feedQuery.refetch()}>
            Try again
          </button>
        </div>
      ) : null}

      {!feedQuery.isPending && !feedQuery.isError && feedQuery.data?.items.length === 0 ? (
        <p className={message}>No news is available.</p>
      ) : null}

      {!feedQuery.isPending && !feedQuery.isError && feedItems.length > 0 && visibleItems.length === 0 ? (
        <p className={message}>No news matches the selected filters. Try another selection or clear the filters.</p>
      ) : null}

      <div className={newsList}>
        {visibleItems.map((item) => (
          <FeedCard
            item={item}
            key={item.news.id}
            onKeywordSelect={setSelectedKeyword}
          />
        ))}
      </div>

      </section>
      <aside className={sidebar} aria-label="News insights"><SideCardPanel /></aside>
      </div>

      {selectedKeyword ? (
        <dialog
          aria-labelledby="keyword-dialog-title"
          className={dialog}
          onCancel={() => setSelectedKeyword('')}
          onClick={(event) => {
            if (event.target === event.currentTarget) setSelectedKeyword('')
          }}
          open
        >
          <section className={dialogPanel}>
            <header className={dialogHeader}>
              <div>
                <span className={dialogEyebrow}>Keyword news</span>
                <h2 className={dialogTitle} id="keyword-dialog-title">
                  {formatKeyword(selectedKeyword)}
                </h2>
              </div>
              <button
                aria-label="Close keyword news"
                className={closeButton}
                onClick={() => setSelectedKeyword('')}
                type="button"
              >
                ×
              </button>
            </header>

            <div className={dialogBody}>
              {keywordFeedQuery.isPending ? (
                <p className={message}>Loading news…</p>
              ) : null}

              {keywordFeedQuery.isError ? (
                <div className={message} role="alert">
                  <p>Could not load keyword news. {keywordFeedQuery.error.message}</p>
                  <button type="button" onClick={() => void keywordFeedQuery.refetch()}>
                    Try again
                  </button>
                </div>
              ) : null}

              {anchorError ? (
                <p className={anchorErrorStyle} role="alert">
                  Could not open this article. {anchorError}
                </p>
              ) : null}

              {!keywordFeedQuery.isPending &&
              !keywordFeedQuery.isError &&
              keywordItems?.length === 0 ? (
                <p className={message}>
                  No news is available for this keyword.
                </p>
              ) : null}

              <div className={dialogNewsList}>
                {keywordItems?.map((item) => (
                  <FeedCard
                    hideImage
                    item={item}
                    key={item.news.id}
                    onArticleSelect={goToArticle}
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
