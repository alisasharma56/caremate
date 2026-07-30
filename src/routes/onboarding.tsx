import { createFileRoute, redirect } from '@tanstack/react-router'
import { WorkspaceSetup } from '@/features/auth/components/WorkspaceSetup'
import { getCurrentUser, hasCompletedOnboarding } from '@/features/auth/authStorage'

export const Route = createFileRoute('/onboarding')({
  beforeLoad: () => {
    const currentUser = getCurrentUser()

    if (!currentUser) throw redirect({ to: '/login' })
    if (hasCompletedOnboarding(currentUser)) throw redirect({ to: '/' })
  },
  component: WorkspaceSetup,
})
