import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/workers')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/workers"!</div>
}
