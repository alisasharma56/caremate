import type { Item } from './data/feed'

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

function normalizeFilter(value: string): string {
  const normalized = value.trim().toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '')
  return normalized === 'support_coord' ? 'support_coordinator' : normalized
}

function matchesFilter(values: string[] | undefined, selected: string): boolean {
  return !selected || Boolean(values?.some(value => normalizeFilter(value) === normalizeFilter(selected)))
}

export function filterFeedItems(items: Item[], primary: string, secondary: string): Item[] {
  return items.filter(item =>
    matchesFilter(item.analytics.primary_filter, primary) &&
    matchesFilter(item.analytics.secondary_filter, secondary),
  )
}
