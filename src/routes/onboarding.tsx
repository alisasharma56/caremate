import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/onboarding')({
  staticData: { breadcrumbs: [{ label: 'Account' }, { label: 'Onboarding' }] },
  component: Outlet,
})

