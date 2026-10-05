import Facebook from '@/components/icons/Facebook'
import Instagram from '@/components/icons/Instagram'
import LinkedIn from '@/components/icons/LinkedIn'
import Mail from '@/components/icons/Mail'
import type { Lead, LeadPlatform } from '@/data/lead'
import { avatar, avatarTone, body, card, cardDragging, name, platformRow, summary } from './Leadcard.css.ts'

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

// The visual content shared between the real card (a button, draggable via
// pointer events) and the floating clone that follows the cursor while
// dragging. Keeping this separate means the floating clone looks exactly
// like the real card instead of a stand-in label.
export const LeadCardContent = ({ lead }: { lead: Lead }) => {
    const initials = lead.name
        .split(' ')
        .map((part) => part.charAt(0))
        .join('')
        .slice(0, 2)
        .toUpperCase()

    const PlatformIcon = PLATFORM_ICON[lead.platform]

    return (
        <>
      <span className={`${avatar} ${avatarTone[lead.avatarTone]}`} aria-hidden="true">
        {initials}
      </span>
            <span className={body}>
        <span className={name}>{lead.name}</span>
        <span className={platformRow}>
          <PlatformIcon />
            {PLATFORM_LABEL[lead.platform]}
        </span>
                {lead.summary ? <span className={summary}>{lead.summary}</span> : null}
      </span>
        </>
    )
}

interface LeadCardProps {
    lead: Lead
    onSelect?: (lead: Lead) => void
    onPointerDown?: (event: React.PointerEvent<HTMLButtonElement>) => void
    isDragging?: boolean
}

export const LeadCard = ({ lead, onSelect, onPointerDown, isDragging }: LeadCardProps) => {
    return (
        <button
            type="button"
            className={`${card} ${isDragging ? cardDragging : ''}`}
            onPointerDown={onPointerDown}
            onClick={() => onSelect?.(lead)}
        >
            <LeadCardContent lead={lead} />
        </button>
    )
}