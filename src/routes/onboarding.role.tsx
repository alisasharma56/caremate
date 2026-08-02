import { createFileRoute } from '@tanstack/react-router'
import { RoleOnboardingPage } from '@/features/OnboardingFinal/RoutedSteps'

export const Route = createFileRoute('/onboarding/role')({
  component: RoleOnboardingPage,
})
