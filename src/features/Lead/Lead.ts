// export type LeadPlatform = 'facebook' | 'instagram' | 'linkedin' | 'email'
//
// export type LeadStatus = 'new' | 'conversation' | 'onboarded' | 'closed'
//
// export type AvatarTone = 'blue' | 'green' | 'orange' | 'red' | 'purple' | 'gold'
//
// export interface Lead {
//     id: string
//     name: string
//     platform: LeadPlatform
//     status: LeadStatus
//     avatarTone: AvatarTone
//     date: string // ISO date, used to place the lead on the calendar view
// }
//
// export const LEAD_COLUMNS: { status: LeadStatus; label: string }[] = [
//     { status: 'new', label: 'New Lead' },
//     { status: 'conversation', label: 'In Conversation' },
//     { status: 'onboarded', label: 'Onboarded' },
//     { status: 'closed', label: 'Closed' },
// ]
//
// export const LEADS: Lead[] = [
//     { id: '1', name: 'Sarah King', platform: 'facebook', status: 'new', avatarTone: 'blue', date: '2026-05-04' },
//     { id: '2', name: 'Abhinas Mishra', platform: 'instagram', status: 'new', avatarTone: 'orange', date: '2026-05-05' },
//     { id: '3', name: 'Jenna Lozzi', platform: 'email', status: 'new', avatarTone: 'purple', date: '2026-05-07' },
//     { id: '4', name: 'Prabin Gurung', platform: 'facebook', status: 'conversation', avatarTone: 'green', date: '2026-05-05' },
//     { id: '5', name: 'Sanjay Pahari', platform: 'instagram', status: 'conversation', avatarTone: 'red', date: '2026-05-08' },
//     { id: '6', name: 'Nisha Godar', platform: 'linkedin', status: 'onboarded', avatarTone: 'gold', date: '2026-05-06' },
//     { id: '7', name: 'Subash Poudel', platform: 'linkedin', status: 'closed', avatarTone: 'blue', date: '2026-05-09' },
// ]

export type LeadPlatform = 'facebook' | 'instagram' | 'linkedin' | 'email'

export type LeadStatus = 'new' | 'conversation' | 'onboarded' | 'closed'

export type AvatarTone = 'blue' | 'green' | 'orange' | 'red' | 'purple' | 'gold'

export interface Lead {
    id: string
    name: string
    platform: LeadPlatform
    status: LeadStatus
    avatarTone: AvatarTone
    date: string // ISO date, used to place the lead on the calendar view
    summary?: string // short AI-generated snippet of what the lead's about, same idea as the inbox summary line
}

export const LEAD_COLUMNS: { status: LeadStatus; label: string }[] = [
    { status: 'new', label: 'New Lead' },
    { status: 'conversation', label: 'In Conversation' },
    { status: 'onboarded', label: 'Onboarded' },
    { status: 'closed', label: 'Closed' },
]

export const LEADS: Lead[] = [
    {
        id: '1',
        name: 'Sarah King',
        platform: 'facebook',
        status: 'new',
        avatarTone: 'blue',
        date: '2026-05-04',
        summary: 'Asked about pricing for the starter plan, hasn’t replied since.',
    },
    {
        id: '2',
        name: 'Abhinas Mishra',
        platform: 'instagram',
        status: 'new',
        avatarTone: 'orange',
        date: '2026-05-05',
        summary: 'DM’d from a product post, wants a demo this week.',
    },
    {
        id: '3',
        name: 'Jenna Lozzi',
        platform: 'email',
        status: 'new',
        avatarTone: 'purple',
        date: '2026-05-07',
        summary: 'Referred by Sanjay, comparing us against two competitors.',
    },
    {
        id: '4',
        name: 'Prabin Gurung',
        platform: 'facebook',
        status: 'conversation',
        avatarTone: 'green',
        date: '2026-05-05',
        summary: 'Confirmed budget, waiting on a proposal from us.',
    },
    {
        id: '5',
        name: 'Sanjay Pahari',
        platform: 'instagram',
        status: 'conversation',
        avatarTone: 'red',
        date: '2026-05-08',
        summary: 'Asked for a call back, prefers afternoons.',
    },
    {
        id: '6',
        name: 'Nisha Godar',
        platform: 'linkedin',
        status: 'onboarded',
        avatarTone: 'gold',
        date: '2026-05-06',
        summary: 'Onboarding call done, first invoice sent.',
    },
    {
        id: '7',
        name: 'Subash Poudel',
        platform: 'linkedin',
        status: 'closed',
        avatarTone: 'blue',
        date: '2026-05-09',
        summary: 'Went with a competitor, revisit in Q3.',
    },
]