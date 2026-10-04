import { createFileRoute } from '@tanstack/react-router'
import { SignUp } from '@/features/auth/components'

export const Route = createFileRoute('/signup')({
  staticData: { breadcrumbs: [{ label: 'Account' }, { label: 'Sign Up' }] },
  component: SignUp,
})
