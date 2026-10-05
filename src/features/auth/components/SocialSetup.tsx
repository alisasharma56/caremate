import { useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { completeOnboarding, getCurrentUser } from '../authStorage'
import facebookIcon from '@/assets/SocialMediaIcons/Icon.svg'
import instagramIcon from '@/assets/SocialMediaIcons/Icon (1).svg'
import linkedinIcon from '@/assets/SocialMediaIcons/Icon (2).svg'
import emailIcon from '@/assets/SocialMediaIcons/Icon (3).svg'
import {
  content,
  intro,
  business,
  currentBusiness,
  channels as channelsStyle,
  channel as channelStyle,
  icon,
  channelCopy,
  connectedButton,
  connectButton,
  continueButton,
} from './SocialSetup.css'
import {
  workspacePage,
  mobile,
  topBar,
  logo,
  logoAccent,
  progress,
  progressBars,
  progressBar,
  activeProgressBar,
  skip,
  heading,
} from './WorkspaceSetup.css'

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

export const SocialSetup = () => {
  const navigate = useNavigate()
  const [connected, setConnected] = useState<Set<ChannelId>>(() => new Set(['facebook']))

  const finishOnboarding = () => {
    const currentUser = getCurrentUser()
    if (currentUser) completeOnboarding(currentUser)
    void navigate({ to: '/', replace: true })
  }

  const toggleChannel = (channel: ChannelId) => {
    setConnected((current) => {
      const next = new Set(current)
      if (next.has(channel)) next.delete(channel)
      else next.add(channel)
      return next
    })
  }

  return <main className={`${workspacePage} ${mobile}`}>
    <nav className={topBar} aria-label="Setup progress">
      <a className={logo} href="/">CARE<span className={logoAccent}>MATE</span></a>
      <div className={progress}><span>Step 3 of 3</span><span className={progressBars} aria-hidden="true"><span className={`${progressBar} ${activeProgressBar}`} /><span className={`${progressBar} ${activeProgressBar}`} /><span className={`${progressBar} ${activeProgressBar}`} /></span></div>
      <button className={skip} onClick={finishOnboarding} type="button">Skip</button>
    </nav>

    <section className={content} aria-labelledby="social-title">
      <h1 className={heading} id="social-title">Set up your unified inbox</h1>
      <p className={intro}>Connect your communication channels. All messages land in one place.</p>
      <div className={business}><span>Sunrise Company</span><span className={currentBusiness}>Current Business</span></div>
      <div className={channelsStyle}>
        {channels.map((channel) => {
          const isConnected = connected.has(channel.id)
          return <article className={channelStyle} key={channel.id}>
            <span className={icon}><img alt="" aria-hidden="true" src={channelIcons[channel.id]} /></span>
            <div className={channelCopy}><h2>{channel.name}</h2><p>{channel.description}</p></div>
            <button aria-pressed={isConnected} className={isConnected ? connectedButton : connectButton} onClick={() => toggleChannel(channel.id)} type="button">{isConnected && <span aria-hidden="true">✓</span>} Connect</button>
          </article>
        })}
      </div>
      <button className={continueButton} onClick={finishOnboarding} type="button">Continue to Roster Setup</button>
    </section>
  </main>
}
