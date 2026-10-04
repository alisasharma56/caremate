import { createFileRoute } from '@tanstack/react-router'
import { RoleOnboardingPage } from '@/features/OnboardingFinal/RoutedSteps'

export const Route = createFileRoute('/onboarding/role')({
  staticData: { breadcrumbs: [{ label: 'Onboarding' }, { label: 'Role' }] },
  component: RoleOnboardingPage,
})

