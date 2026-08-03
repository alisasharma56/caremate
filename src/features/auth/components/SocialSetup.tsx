import { useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { completeOnboarding, getCurrentUser } from '../authStorage'
import facebookIcon from '@/assets/SocialMediaIcons/Icon.svg'
import instagramIcon from '@/assets/SocialMediaIcons/Icon (1).svg'
import linkedinIcon from '@/assets/SocialMediaIcons/Icon (2).svg'
import emailIcon from '@/assets/SocialMediaIcons/Icon (3).svg'
import * as styles from './SocialSetup.css'
import * as workspaceStyles from './WorkspaceSetup.css'

type ChannelId = 'facebook' | 'instagram' | 'linkedin' | 'email'

const channels: Array<{ id: ChannelId; name: string; description: string }> = [
  { id: 'facebook', name: 'Facebook Page', description: 'Connect a Facebook Business Page to receive messages.' },
  { id: 'instagram', name: 'Instagram Business', description: 'Receive DMs from your Instagram Business account.' },
  { id: 'linkedin', name: 'LinkedIn Page', description: 'Receive messages from your LinkedIn Company Page.' },
  { id: 'email', name: 'Email', description: 'Forward a Gmail or Outlook inbox into CareMate.' },
]

const channelIcons: Record<ChannelId, string> = {
  facebook: facebookIcon,
  instagram: instagramIcon,
  linkedin: linkedinIcon,
  email: emailIcon,
}

export function SocialSetup() {
  const navigate = useNavigate()
  const [connected, setConnected] = useState<Set<ChannelId>>(() => new Set(['facebook']))

  function finishOnboarding() {
    const currentUser = getCurrentUser()
    if (currentUser) completeOnboarding(currentUser)
    void navigate({ to: '/', replace: true })
  }

  function toggleChannel(channel: ChannelId) {
    setConnected((current) => {
      const next = new Set(current)
      if (next.has(channel)) next.delete(channel)
      else next.add(channel)
      return next
    })
  }

  return <main className={`${workspaceStyles.workspacePage} ${workspaceStyles.mobile}`}>
    <nav className={workspaceStyles.topBar} aria-label="Setup progress">
      <a className={workspaceStyles.logo} href="/">CARE<span className={workspaceStyles.logoAccent}>MATE</span></a>
      <div className={workspaceStyles.progress}><span>Step 3 of 3</span><span className={workspaceStyles.progressBars} aria-hidden="true"><span className={`${workspaceStyles.progressBar} ${workspaceStyles.activeProgressBar}`} /><span className={`${workspaceStyles.progressBar} ${workspaceStyles.activeProgressBar}`} /><span className={`${workspaceStyles.progressBar} ${workspaceStyles.activeProgressBar}`} /></span></div>
      <button className={workspaceStyles.skip} onClick={finishOnboarding} type="button">Skip</button>
    </nav>

    <section className={styles.content} aria-labelledby="social-title">
      <h1 className={workspaceStyles.heading} id="social-title">Set up your unified inbox</h1>
      <p className={styles.intro}>Connect your communication channels. All messages land in one place.</p>
      <div className={styles.business}><span>Sunrise Company</span><span className={styles.currentBusiness}>Current Business</span></div>
      <div className={styles.channels}>
        {channels.map((channel) => {
          const isConnected = connected.has(channel.id)
          return <article className={styles.channel} key={channel.id}>
            <span className={styles.icon}><img alt="" aria-hidden="true" src={channelIcons[channel.id]} /></span>
            <div className={styles.channelCopy}><h2>{channel.name}</h2><p>{channel.description}</p></div>
            <button aria-pressed={isConnected} className={isConnected ? styles.connectedButton : styles.connectButton} onClick={() => toggleChannel(channel.id)} type="button">{isConnected && <span aria-hidden="true">✓</span>} Connect</button>
          </article>
        })}
      </div>
      <button className={styles.continueButton} onClick={finishOnboarding} type="button">Continue to Roster Setup</button>
    </section>
  </main>
}

