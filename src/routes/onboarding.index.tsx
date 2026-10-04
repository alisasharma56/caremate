import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/onboarding/')({
  staticData: { breadcrumbs: [{ label: 'Account' }, { label: 'Onboarding' }] },
  beforeLoad: () => {
    throw redirect({ to: '/onboarding/role' })
  },
})
