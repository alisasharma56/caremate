import { createFileRoute } from '@tanstack/react-router'
import { LocationOnboardingPage } from '@/features/OnboardingFinal/RoutedSteps'

export const Route = createFileRoute('/onboarding/location')({
  staticData: { breadcrumbs: [{ label: 'Onboarding' }, { label: 'Location' }] },
  component: LocationOnboardingPage,
})

