import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/social-listening')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/social-listening"!</div>
}
