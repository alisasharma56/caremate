import { createFileRoute } from '@tanstack/react-router'
import { SocialSetup } from '@/features/auth/components/SocialSetup'

export const Route = createFileRoute('/onboarding/social')({
  component: SocialSetup,
})
