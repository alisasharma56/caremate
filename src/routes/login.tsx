import { createFileRoute } from '@tanstack/react-router'
import { Login } from '@/features/auth/components'

export const Route = createFileRoute('/login')({
  component: Login,
})
