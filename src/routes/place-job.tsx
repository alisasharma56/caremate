import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/place-job')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/place-job"!</div>
}
