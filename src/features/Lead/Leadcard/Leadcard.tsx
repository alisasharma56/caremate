import Facebook from '@/components/icons/Facebook'
import Instagram from '@/components/icons/Instagram'
import LinkedIn from '@/components/icons/LinkedIn'
import Mail from '@/components/icons/Mail'
import type { Lead, LeadPlatform } from '../Lead.ts'
import { avatar, avatarTone, body, card, name, platformRow } from '../Leadcard/Leadcard.css.ts'

const PLATFORM_LABEL: Record<LeadPlatform, string> = {
    facebook: 'Facebook',
    instagram: 'Instagram',
    linkedin: 'LinkedIn',
    email: 'Email',
}

const PLATFORM_ICON: Record<LeadPlatform, React.ComponentType> = {
    facebook: Facebook,
    instagram: Instagram,
    linkedin: LinkedIn,
    email: Mail,
}

interface LeadCardProps {
    lead: Lead
    onSelect?: (lead: Lead) => void
}

export function LeadCard({ lead, onSelect }: LeadCardProps) {
    const initials = lead.name
        .split(' ')
        .map((part) => part.charAt(0))
        .join('')
        .slice(0, 2)
        .toUpperCase()

    const PlatformIcon = PLATFORM_ICON[lead.platform]

    return (
        <button
            type="button"
            className={card}
            onClick={() => onSelect?.(lead)}
        >
      <span className={`${avatar} ${avatarTone[lead.avatarTone]}`} aria-hidden="true">
        {initials}
      </span>
            <span className={body}>
        <span className={name}>{lead.name}</span>
        <span className={platformRow}>
          <PlatformIcon />
            {PLATFORM_LABEL[lead.platform]}
        </span>
      </span>
        </button>
    )
}