import { createFileRoute } from '@tanstack/react-router'
import { RosterPage } from '@/features/Roster'

export const Route = createFileRoute('/roster/')({
  staticData: { breadcrumbs: [{ label: 'Workspace' }, { label: 'Roster' }] },
  component: RosterPage,
})
