import { createFileRoute } from '@tanstack/react-router'
import { LocationOnboardingPage } from '@/features/OnboardingFinal/RoutedSteps'

export const Route = createFileRoute('/onboarding/location')({
  component: LocationOnboardingPage,
})

