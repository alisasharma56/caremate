import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/events')({
  staticData: { breadcrumbs: [{ label: 'Discover' }, { label: 'Events' }] },
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello Events</div>
}
