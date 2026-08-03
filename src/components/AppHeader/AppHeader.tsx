import { useEffect, useState } from 'react'
import * as styles from './AppHeader.css'

function formatDeviceDateTime(date: Date) {
  const dateText = new Intl.DateTimeFormat(undefined, {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
  }).format(date)
  const timeText = new Intl.DateTimeFormat(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(date)

  return `${dateText} · ${timeText}`
}

type AppHeaderProps = {
  isSidebarCollapsed: boolean
  onToggleSidebar: () => void
}

export function AppHeader({ isSidebarCollapsed, onToggleSidebar }: AppHeaderProps) {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const updateClock = () => setNow(new Date())
    const interval = window.setInterval(updateClock, 30_000)
    window.addEventListener('focus', updateClock)

    return () => {
      window.clearInterval(interval)
      window.removeEventListener('focus', updateClock)
    }
  }, [])

  return (
    <header className={styles.header}>
      <div className={styles.breadcrumb} aria-label="Breadcrumb">
        <button aria-expanded={!isSidebarCollapsed} aria-label={isSidebarCollapsed ? 'Expand navigation' : 'Collapse navigation'} className={styles.menuButton} onClick={onToggleSidebar} type="button">
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="2.5" y="3" width="11" height="10" rx="1" stroke="currentColor"/><path d="M6 3v10" stroke="currentColor"/></svg>
        </button>
        <span className={styles.divider} aria-hidden="true" />
        <span>Discover</span>
        <span className={styles.chevron} aria-hidden="true">›</span>
        <span className={styles.current}>Feed</span>
      </div>

      <div className={styles.actions}>
        <time className={styles.clock} dateTime={now.toISOString()}>{formatDeviceDateTime(now)}</time>
        <button aria-label="Notifications" className={styles.notificationButton} type="button">
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M5.5 8.2a4.5 4.5 0 0 1 9 0c0 5 2 5.3 2 5.3h-13s2-.3 2-5.3Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/><path d="M8.2 15.2a2 2 0 0 0 3.6 0" stroke="currentColor" strokeWidth="1.2"/></svg>
          <span className={styles.notificationDot} />
        </button>
        <button aria-label="Open profile" className={styles.avatar} type="button">PG</button>
      </div>
    </header>
  )
}

