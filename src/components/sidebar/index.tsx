import analyticsIcon from '@/assets/icon1/analytics/index.svg'
import alertsIcon from '@/assets/icon1/alerts/index.svg'
import eventsIcon from '@/assets/icon1/events/index.svg'
import clientsIcon from '@/assets/icon1/clients/index.svg'
import feedIcon from '@/assets/icon1/feed/index.svg'
import inboxIcon from '@/assets/icon1/inbox/index.svg'
import leadsIcon from '@/assets/icon1/leads/index.svg'
import newsletterIcon from '@/assets/icon1/newsletter/index.svg'
import placeJobIcon from '@/assets/icon1/place-job/index.svg'
import rosterIcon from '@/assets/icon1/roster/index.svg'
import settingIcon from '@/assets/icon1/setting/index.svg'
import socialListeningIcon from '@/assets/icon1/social-listening/index.svg'
import workersIcon from '@/assets/icon1/workers/index.svg'
import { styles } from '@/components/sidebar/Sidebar.style'
import useFeed from '@/api/hooks/GetFeed'
import { Link, useNavigate, type LinkProps } from '@tanstack/react-router'

type SidebarItem = {
  label: string
  icon: string
  to: LinkProps['to']
}

type SidebarSection = {
  label: string
  items: SidebarItem[]
}

const sections: SidebarSection[] = [
  {
    label: 'Discover',
    items: [
      { label: 'Feed', icon: feedIcon, to: '/' },
      { label: 'Events', icon: eventsIcon, to: '/events' },
      { label: 'Analytics', icon: analyticsIcon, to: '/analytics' },
    ],
  },
  {
    label: 'Workspace',
    items: [
      { label: 'Inbox', icon: inboxIcon, to: '/inbox' },
      { label: 'Leads', icon: leadsIcon, to: '/leads' },
      { label: 'Participants', icon: clientsIcon, to: '/participants' },
      { label: 'Roster', icon: rosterIcon, to: '/roster' },
      { label: 'Workers', icon: workersIcon, to: '/workers' },
      { label: 'Place Job', icon: placeJobIcon, to: '/place-job' },
      { label: 'Newsletter', icon: newsletterIcon, to: '/newsletter' },
      { label: 'Alerts', icon: alertsIcon, to: '/alerts' },
      { label: 'Social Listening', icon: socialListeningIcon, to: '/social-listening' },
    ],
  },
  {
    label: 'Account',
    items: [{ label: 'Settings', icon: settingIcon, to: '/settings' }],
  },
]

type SidebarProps = {
  collapsed?: boolean
}

export const Sidebar = ({ collapsed = false }: SidebarProps) => {
  const navigate = useNavigate()
  const { data: feed } = useFeed()
  const feedCount = feed?.items.length ?? 0
  const badges: Record<string, string | undefined> = {
    Feed: feedCount ? `${feedCount}${feed?.has_more ? '+' : ''}` : undefined,
  }
  return (
      <aside style={{ ...styles.aside, ...(collapsed ? styles.collapsedAside : undefined) }} aria-label="Primary navigation">
        <div style={{ ...styles.brand, ...(collapsed ? styles.collapsedBrand : undefined) }}>
          {collapsed ? <span aria-label="CareMate">C</span> : <>CARE<span style={styles.brandAccent}>MATE</span></>}
        </div>

        <nav style={{ ...styles.navigation, ...(collapsed ? styles.collapsedNavigation : undefined) }}>
          {sections.map((section) => (
              <div key={section.label} style={styles.section}>
                {!collapsed ? <div style={styles.sectionLabel}>{section.label}</div> : null}
                {section.items.map((item) => (
                    <Link
                        aria-label={collapsed ? item.label : undefined}
                        key={item.label}
                        title={collapsed ? item.label : undefined}
                        to={item.to}
                        activeOptions={{ exact: true }}
                        style={{
                          ...styles.item,
                          ...(collapsed ? styles.collapsedItem : undefined),
                        }}
                        activeProps={{ style: styles.activeItem }}
                    >
                      <img src={item.icon} alt="" aria-hidden="true" style={styles.icon} />
                      {!collapsed ? <span>{item.label}</span> : null}
                      {!collapsed && badges[item.label] ? <span style={styles.badge}>{badges[item.label]}</span> : null}
                    </Link>
                ))}
              </div>
          ))}
        </nav>

        {!collapsed ? <section style={styles.proCard} aria-label="Upgrade plan">
          <h2 style={styles.proTitle}>Upgrade to Pro</h2>
          <p style={styles.proText}>CRM, roster, AI chat &amp; more.</p>
          <button type="button" style={styles.proButton} onClick={() => navigate({ to: '/payment' })}>
            Upgrade Now
          </button>
        </section> : null}

        <div style={{ ...styles.profile, ...(collapsed ? styles.collapsedProfile : undefined) }}>
          <button
              type="button"
              style={{ padding: 0, border: 'none', background: 'none', cursor: 'pointer' }}
              onClick={() => navigate({ to: '/onboarding' })}
              aria-label="Go to onboarding"
          >
            <div style={styles.avatar}>SK</div>
          </button>
          {!collapsed ? <button
              type="button"
              style={{ padding: 0, border: 'none', background: 'none', cursor: 'pointer', textAlign: 'left', font: 'inherit' }}
              onClick={() => navigate({ to: '/login' })}
          >
            <p style={styles.profileName}>Prabin Gurung</p>
            <p style={styles.profilePlan}>Community plan</p>
          </button> : null}
        </div>
      </aside>
  )
}