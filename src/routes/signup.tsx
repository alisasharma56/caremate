import { createFileRoute } from '@tanstack/react-router'
import { SignUp } from '@/features/auth/components'

export const Route = createFileRoute('/signup')({
  component: SignUp,
})
