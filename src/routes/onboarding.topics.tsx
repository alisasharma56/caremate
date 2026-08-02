import { createFileRoute } from '@tanstack/react-router'
import { TopicsOnboardingPage } from '@/features/OnboardingFinal/RoutedSteps'

export const Route = createFileRoute('/onboarding/topics')({
  component: TopicsOnboardingPage,
})
