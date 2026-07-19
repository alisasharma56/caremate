import useFeed from '@/features/home/hooks/GetFeed'
import { FeedCard } from '@/components/FeedCard/FeedCard'
import { heading, message, newsList, page } from '@/features/home/HomePage.css'


export function HomePage() {
  const { data, isPending, isError, error, refetch } = useFeed()

  return (
    <main className={page}>
      <h1 className={heading}>News</h1>

      {isPending ? <p className={message}>Loading news…</p> : null}

      {isError ? (
        <div className={message} role="alert">
          <p>Could not load the news. {error.message}</p>
          <button type="button" onClick={() => void refetch()}>
            Try again
          </button>
        </div>
      ) : null}

      {!isPending && !isError && data?.items.length === 0 ? (
        <p className={message}>No news is available.</p>
      ) : null}

      <div className={newsList}>
        {data?.items.map((item) => (
          <FeedCard item={item} key={item.news.id} />
        ))}
      </div>

    </main>
  )
}
