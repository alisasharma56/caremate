import { useState } from 'react'
import type { Item } from '@/features/home/data/feed'
import ExternalLink from '@/components/icons/ExternalLink'
import Flame from '@/components/icons/Flame'
import {
  authorName,
  avatar,
  avatarTone as avatarToneStyle,
  card,
  colorTokens,
  description as descriptionStyle,
  dot,
  filterChip,
  filterRow,
  footer,
  footerSpacer,
  fullArticle,
  header,
  headerText,
  headline,
  hotBadge,
  keyDescription,
  keywordLabel,
  media,
  mediaImg,
  metaRow,
  publishedDate,
  rateArrow,
  rateBox,
  rateDelta,
  rateDot,
  rateEffective,
  rateHeader,
  rateNew,
  rateOld,
  rateRow,
  rateTitle,
  sentimentBar,
  sentimentLabel,
  sentimentSegment,
  sentimentTop,
  sentimentValue,
  sentimentWrap,
  tagBase,
  tagRow,
  tagTone,
} from './FeedCard.css'

interface FeedCardProps {
  item: Item
  onKeywordSelect?: (keyword: string) => void
  onArticleSelect?: (newsId: number) => void
  hideImage?: boolean
}

const avatarTones = ['blue', 'green', 'orange', 'red', 'gold'] as const

function avatarTone(value: string) {
  const hash = Array.from(value).reduce(
    (total, character) => total + character.codePointAt(0)!,
    0,
  )

  return avatarTones[hash % avatarTones.length]
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

export function FeedCard({
  item,
  onKeywordSelect,
  onArticleSelect,
  hideImage = false,
}: FeedCardProps) {
  const { news, analytics, time_ago: timeAgo } = item
  const [imageFailed, setImageFailed] = useState(false)
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
  const sourceAvatarTone = avatarTone(news.source || String(news.id))
  const keywordOptions = [...new Set(analytics.keywords.filter(Boolean))]

  return (
    <article
      aria-label={onArticleSelect ? `Go to ${news.title}` : undefined}
      className={`${styles.card} ${onArticleSelect ? styles.clickableCard : ''}`}
      id={`news-card-${news.id}`}
      onClick={(event) => {
        if (!(event.target as HTMLElement).closest('a, button')) {
          onArticleSelect?.(news.id)
        }
      }}
      onKeyDown={(event) => {
        if (event.target === event.currentTarget && (event.key === 'Enter' || event.key === ' ')) {
          event.preventDefault()
          onArticleSelect?.(news.id)
        }
      }}
      role={onArticleSelect ? 'button' : undefined}
      tabIndex={onArticleSelect ? 0 : undefined}
    >
      <div className={styles.header}>
        <span
          className={`${avatar} ${avatarToneStyle[sourceAvatarTone]}`}
          aria-hidden="true"
        >
          {sourceInitial}
        </span>
        <div className={headerText}>
          <span className={authorName}>{news.source}</span>
          <span className={metaRow}>
            <span>{states}</span>
            <span className={dot} />
            <span>{timeAgo}</span>
            <span className={dot} />
            <span>{readingTime(description)} min read</span>
            {analytics.urgency.toLowerCase() === 'high' ? (
              <span className={hotBadge}>
                <Flame />
                Hot
              </span>
            ) : null}
          </span>
        </div>
      </div>

      <div className={tagRow}>
        {primaryTags.map((tag, index) => (
          <span
            className={`${tagBase} ${index === 0 ? tagTone.blue : tagTone.gray}`}
            key={`primary-${tag}-${index}`}
          >
            {formatLabel(tag)}
          </span>
        ))}
        {analytics.target_audience.map((audience, index) => (
          <span
            className={`${tagBase} ${tagTone.gray}`}
            key={`audience-${audience}-${index}`}
          >
            {formatLabel(audience)}
          </span>
        ))}
        {analytics.action_required ? (
          <span className={`${tagBase} ${tagTone.red}`}>
            {deadline ? `Action by ${deadline}` : 'Action required'}
          </span>
        ) : null}
        <span className={`${tagBase} ${tagTone.orange}`}>
          Impact {analytics.impactness}/10
        </span>
      </div>

      {keywordOptions.length ? (
        <div className={filterRow}>
          <span className={keywordLabel}>Keywords</span>
          {keywordOptions.map((keyword) => (
            <button
              type="button"
              className={filterChip}
              key={keyword}
              onClick={() => onKeywordSelect?.(keyword)}
            >
              {formatLabel(keyword)}
            </button>
          ))}
        </div>
      ) : null}

      {!hideImage && item.photo_url && !imageFailed ? (
        <div className={styles.media}>
          <img
            alt=""
            className={styles.mediaImg}
            decoding="async"
            loading="lazy"
            onError={() => setImageFailed(true)}
            src={item.photo_url}
          />
        </div>
      ) : null}

      {item.photo_url ? (
        <div className={media}>
          <img
            className={mediaImg}
            src={item.photo_url}
            alt=""
            loading="lazy"
          />
        </div>
      ) : null}

      <h2 className={headline}>{news.title}</h2>
      {description ? <p className={descriptionStyle}>{description}</p> : null}

      {hasKeyElement ? (
        <div className={rateBox}>
          <div className={rateHeader}>
            <span className={rateDot} />
            <span className={rateTitle}>
              {formatLabel(analytics.key_element.type || 'Key update')}
            </span>
            {effectiveDate ? (
              <span className={rateEffective}>Effective {effectiveDate}</span>
            ) : null}
          </div>

          {analytics.key_element.description ? (
            <p className={keyDescription}>{analytics.key_element.description}</p>
          ) : null}

          {analytics.key_element.old_value || analytics.key_element.new_value ? (
            <div className={rateRow}>
              {analytics.key_element.old_value ? (
                <span className={rateOld}>{analytics.key_element.old_value}</span>
              ) : null}
              {analytics.key_element.old_value && analytics.key_element.new_value ? (
                <span className={rateArrow}>›</span>
              ) : null}
              {analytics.key_element.new_value ? (
                <span className={rateNew}>{analytics.key_element.new_value}</span>
              ) : null}
              {analytics.key_element.financial_impact ? (
                <span className={rateDelta}>
                  {analytics.key_element.financial_impact}
                </span>
              ) : null}
            </div>
          ) : null}
        </div>
      ) : null}

      <div className={sentimentWrap}>
        <div className={sentimentTop}>
          <span className={sentimentLabel}>Sentiment</span>
          <div className={sentimentBar}>
            <span
              className={sentimentSegment}
              style={{
                width: `${analytics.sentiment.positive_pct}%`,
                background: colorTokens.sentimentGreen,
              }}
            />
            <span
              className={sentimentSegment}
              style={{
                width: `${analytics.sentiment.neutral_pct}%`,
                background: colorTokens.sentimentBlue,
              }}
            />
            <span
              className={sentimentSegment}
              style={{
                width: `${analytics.sentiment.negative_pct}%`,
                background: colorTokens.sentimentRed,
              }}
            />
          </div>
          <span className={sentimentValue}>{formatLabel(analytics.sentiment.overall)}</span>
        </div>
      </div>

      <div className={footer}>
        <span className={publishedDate}>{formatDate(news.published_at)}</span>
        <span className={footerSpacer} />
        <a
          className={fullArticle}
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
