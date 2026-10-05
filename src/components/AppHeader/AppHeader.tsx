import { Fragment, useEffect, useState } from 'react'
import { Link, useMatches, useRouterState } from '@tanstack/react-router'
import type { Breadcrumb } from './breadcrumbs'
import {
  header,
  breadcrumb,
  menuButton,
  divider,
  breadcrumbList,
  chevron,
  breadcrumbLink,
  current,
  actions,
  clock,
  notificationButton,
  notificationDot,
  avatar,
} from './AppHeader.css'

const formatDeviceDateTime = (date: Date) => {
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

export const AppHeader = ({ isSidebarCollapsed, onToggleSidebar }: AppHeaderProps) => {
  const matches = useMatches()
  const pathname = useRouterState({ select: state => state.location.pathname })
  const breadcrumbs: Breadcrumb[] = [...matches].reverse().find(match => match.staticData.breadcrumbs)?.staticData.breadcrumbs
    ?? [{ label: pathname.split('/').filter(Boolean).at(-1)?.replaceAll('-', ' ') || 'Home' }]
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
    <header className={header}>
      <div className={breadcrumb}>
        <button aria-expanded={!isSidebarCollapsed} aria-label={isSidebarCollapsed ? 'Expand navigation' : 'Collapse navigation'} className={menuButton} onClick={onToggleSidebar} type="button">
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="2.5" y="3" width="11" height="10" rx="1" stroke="currentColor"/><path d="M6 3v10" stroke="currentColor"/></svg>
        </button>
        <span className={divider} aria-hidden="true" />
        <nav aria-label="Breadcrumb">
          <ol className={breadcrumbList}>
            {breadcrumbs.map((crumb, index) => {
              const isCurrent = index === breadcrumbs.length - 1
              return (
                <Fragment key={`${index}-${crumb.label}`}>
                  {index > 0 && <li className={chevron} aria-hidden="true">›</li>}
                  <li>
                    {crumb.to && !isCurrent
                      ? <Link to={crumb.to} className={breadcrumbLink}>{crumb.label}</Link>
                      : <span className={isCurrent ? current : undefined} aria-current={isCurrent ? 'page' : undefined}>{crumb.label}</span>}
                  </li>
                </Fragment>
              )
            })}
          </ol>
        </nav>
      </div>

      <div className={actions}>
        <time className={clock} dateTime={now.toISOString()}>{formatDeviceDateTime(now)}</time>
        <button aria-label="Notifications" className={notificationButton} type="button">
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M5.5 8.2a4.5 4.5 0 0 1 9 0c0 5 2 5.3 2 5.3h-13s2-.3 2-5.3Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/><path d="M8.2 15.2a2 2 0 0 0 3.6 0" stroke="currentColor" strokeWidth="1.2"/></svg>
          <span className={notificationDot} />
        </button>
        <button aria-label="Open profile" className={avatar} type="button">PG</button>
      </div>
    </header>
  )
}
