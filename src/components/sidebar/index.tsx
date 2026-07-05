import analyticsIcon from '../../assets/icon1/analytics/index.svg'
import alertsIcon from '../../assets/icon1/alerts/index.svg'
import breakingIcon from '../../assets/icon1/breaking/index.svg'
import clientsIcon from '../../assets/icon1/clients/index.svg'
import feedIcon from '../../assets/icon1/feed/index.svg'
import inboxIcon from '../../assets/icon1/inbox/index.svg'
import leadsIcon from '../../assets/icon1/leads/index.svg'
import newsletterIcon from '../../assets/icon1/newsletter/index.svg'
import placeJobIcon from '../../assets/icon1/place-job/index.svg'
import rosterIcon from '../../assets/icon1/roster/index.svg'
import settingIcon from '../../assets/icon1/setting/index.svg'
import socialListeningIcon from '../../assets/icon1/social-listening/index.svg'
import workersIcon from '../../assets/icon1/workers/index.svg'
import { styles } from './Sidebar.style'

type SidebarItem = {
  label: string
  icon: string
  active?: boolean
  badge?: number
}

type SidebarSection = {
  label: string
  items: SidebarItem[]
}

const sections: SidebarSection[] = [
  {
    label: 'Discover',
    items: [
      { label: 'Feed', icon: feedIcon, active: true, badge: 12 },
      { label: 'Breaking', icon: breakingIcon },
      { label: 'Analytics', icon: analyticsIcon },
    ],
  },
  {
    label: 'Workspace',
    items: [
      { label: 'Inbox', icon: inboxIcon },
      { label: 'Leads', icon: leadsIcon },
      { label: 'Clients', icon: clientsIcon },
      { label: 'Roster', icon: rosterIcon },
      { label: 'Workers', icon: workersIcon },
      { label: 'Place Job', icon: placeJobIcon },
      { label: 'Newsletter', icon: newsletterIcon },
      { label: 'Alerts', icon: alertsIcon },
      { label: 'Social Listening', icon: socialListeningIcon },
    ],
  },
  {
    label: 'Account',
    items: [{ label: 'Setting', icon: settingIcon }],
  },
]

export function Sidebar() {
  return (
    <aside style={styles.aside} aria-label="Primary navigation">
      <div style={styles.brand}>
        CARE<span style={styles.brandAccent}>MATE</span>
      </div>

      <nav style={styles.navigation}>
        {sections.map((section) => (
          <div key={section.label} style={styles.section}>
            <div style={styles.sectionLabel}>{section.label}</div>
            {section.items.map((item) => (
              <a
                key={item.label}
                href="/"
                style={{
                  ...styles.item,
                  ...(item.active ? styles.activeItem : undefined),
                }}
                aria-current={item.active ? 'page' : undefined}
              >
                <img src={item.icon} alt="" aria-hidden="true" style={styles.icon} />
                <span>{item.label}</span>
                {item.badge ? <span style={styles.badge}>{item.badge}</span> : null}
              </a>
            ))}
          </div>
        ))}
      </nav>

      <section style={styles.proCard} aria-label="Upgrade plan">
        <h2 style={styles.proTitle}>Upgrade to Pro</h2>
        <p style={styles.proText}>CRM, roster, AI chat &amp; more.</p>
        <button type="button" style={styles.proButton}>
          Upgrade Now
        </button>
      </section>

      <footer style={styles.profile}>
        <div style={styles.avatar}>SK</div>
        <div>
          <p style={styles.profileName}>Prabin Gurung</p>
          <p style={styles.profilePlan}>Community plan</p>
        </div>
      </footer>
    </aside>
  )
}
