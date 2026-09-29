import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/roster')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/roster"!</div>
}
