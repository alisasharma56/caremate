import { createFileRoute } from '@tanstack/react-router'
import { InviteTeam } from '@/features/auth/components/WorkspaceSetup'

export const Route = createFileRoute('/onboarding/invite-team')({
  component: InviteTeam,
})

