export const PRIMARY_FILTERS = [
  { value: 'policy', label: 'Policy' },
  { value: 'funding', label: 'Funding' },
  { value: 'community', label: 'Community' },
  { value: 'workforce', label: 'Workforce' },
] as const

export const SECONDARY_FILTERS = [
  { value: 'provider', label: 'Provider' },
  { value: 'participant', label: 'Participant' },
  { value: 'support_coordinator', label: 'Support Coord.' },
  { value: 'allied_health', label: 'Allied Health' },
] as const
