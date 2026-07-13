import type { Item } from '@/features/home/data/feed'
import Dropdown from '@/components/icons/Dropdown'
import ExternalLink from '@/components/icons/ExternalLink'
import Flame from '@/components/icons/Flame'
import * as styles from './FeedCard.css'

interface FeedCardProps {
  item: Item
}

function formatLabel(value: string) {
  return value.replaceAll('_', ' ').replace(/\b\w/g, (letter) => letter.toUpperCase())
}

function formatDate(value: string) {
  if (!value) return ''

  const date = new Date(value)
  return Number.isNaN(date.getTime())
    ? value
    : new Intl.DateTimeFormat('en-AU', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }).format(date)
}

function readingTime(text: string) {
  return Math.max(1, Math.ceil(text.trim().split(/\s+/).filter(Boolean).length / 200))
}

export function FeedCard({ item }: FeedCardProps) {
  const { news, analytics, time_ago: timeAgo } = item
  const description = news.summary || news.snippet
  const states = analytics.affected_states.join(', ') || 'All States'
  const primaryTags = analytics.primary_filter.length
    ? analytics.primary_filter
    : (news.categories ?? [])
  const deadline = formatDate(analytics.action_deadline)
  const effectiveDate = formatDate(analytics.key_element.effective_date)
  const hasKeyElement = Boolean(
    analytics.key_element.description ||
      analytics.key_element.old_value ||
      analytics.key_element.new_value,
  )
  const sourceInitial = news.source.trim().charAt(0).toUpperCase() || 'N'

  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <span className={styles.avatar} aria-hidden="true">
          {sourceInitial}
        </span>
        <div className={styles.headerText}>
          <span className={styles.authorName}>{news.source}</span>
          <span className={styles.metaRow}>
            <span>{states}</span>
            <span className={styles.dot} />
            <span>{timeAgo}</span>
            <span className={styles.dot} />
            <span>{readingTime(description)} min read</span>
            {analytics.urgency.toLowerCase() === 'high' ? (
              <span className={styles.hotBadge}>
                <Flame />
                Hot
              </span>
            ) : null}
          </span>
        </div>
      </div>

      <div className={styles.tagRow}>
        {primaryTags.map((tag, index) => (
          <span
            className={`${styles.tagBase} ${index === 0 ? styles.tagTone.blue : styles.tagTone.gray}`}
            key={`primary-${tag}-${index}`}
          >
            {formatLabel(tag)}
          </span>
        ))}
        {analytics.target_audience.map((audience, index) => (
          <span
            className={`${styles.tagBase} ${styles.tagTone.gray}`}
            key={`audience-${audience}-${index}`}
          >
            {formatLabel(audience)}
          </span>
        ))}
        {analytics.action_required ? (
          <span className={`${styles.tagBase} ${styles.tagTone.red}`}>
            {deadline ? `Action by ${deadline}` : 'Action required'}
          </span>
        ) : null}
        <span className={`${styles.tagBase} ${styles.tagTone.orange}`}>
          Impact {analytics.impactness}/10
        </span>
      </div>

      {analytics.secondary_filter.length ? (
        <div className={styles.filterRow}>
          {analytics.secondary_filter.map((filter, index) => (
            <span className={styles.filterChip} key={`${filter}-${index}`}>
              {formatLabel(filter)}
              <Dropdown />
            </span>
          ))}
        </div>
      ) : null}

      <h2 className={styles.headline}>{news.title}</h2>
      {description ? <p className={styles.description}>{description}</p> : null}

      {hasKeyElement ? (
        <div className={styles.rateBox}>
          <div className={styles.rateHeader}>
            <span className={styles.rateDot} />
            <span className={styles.rateTitle}>
              {formatLabel(analytics.key_element.type || 'Key update')}
            </span>
            {effectiveDate ? (
              <span className={styles.rateEffective}>Effective {effectiveDate}</span>
            ) : null}
          </div>

          {analytics.key_element.description ? (
            <p className={styles.keyDescription}>{analytics.key_element.description}</p>
          ) : null}

          {analytics.key_element.old_value || analytics.key_element.new_value ? (
            <div className={styles.rateRow}>
              {analytics.key_element.old_value ? (
                <span className={styles.rateOld}>{analytics.key_element.old_value}</span>
              ) : null}
              {analytics.key_element.old_value && analytics.key_element.new_value ? (
                <span className={styles.rateArrow}>›</span>
              ) : null}
              {analytics.key_element.new_value ? (
                <span className={styles.rateNew}>{analytics.key_element.new_value}</span>
              ) : null}
              {analytics.key_element.financial_impact ? (
                <span className={styles.rateDelta}>
                  {analytics.key_element.financial_impact}
                </span>
              ) : null}
            </div>
          ) : null}
        </div>
      ) : null}

      <div className={styles.sentimentWrap}>
        <div className={styles.sentimentTop}>
          <span className={styles.sentimentLabel}>Sentiment</span>
          <div className={styles.sentimentBar}>
            <span
              className={styles.sentimentSegment}
              style={{
                width: `${analytics.sentiment.positive_pct}%`,
                background: styles.colorTokens.sentimentGreen,
              }}
            />
            <span
              className={styles.sentimentSegment}
              style={{
                width: `${analytics.sentiment.neutral_pct}%`,
                background: styles.colorTokens.sentimentBlue,
              }}
            />
            <span
              className={styles.sentimentSegment}
              style={{
                width: `${analytics.sentiment.negative_pct}%`,
                background: styles.colorTokens.sentimentRed,
              }}
            />
          </div>
          <span className={styles.sentimentValue}>{formatLabel(analytics.sentiment.overall)}</span>
        </div>
      </div>

      <div className={styles.footer}>
        <span className={styles.publishedDate}>{formatDate(news.published_at)}</span>
        <span className={styles.footerSpacer} />
        <a
          className={styles.fullArticle}
          href={news.url}
          target="_blank"
          rel="noreferrer"
        >
          <ExternalLink />
          Full article
        </a>
      </div>
    </article>
  )
}
