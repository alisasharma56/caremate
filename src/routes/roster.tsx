import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/roster')({
  staticData: { breadcrumbs: [{ label: 'Workspace' }, { label: 'Roster' }] },
  component: Outlet,
})
