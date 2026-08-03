import { createFileRoute } from '@tanstack/react-router'
import { WorkspaceSetup } from '@/features/auth/components/WorkspaceSetup'

export const Route = createFileRoute('/onboarding/workspace')({
  component: WorkspaceSetup,
})

