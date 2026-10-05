import { createFileRoute } from '@tanstack/react-router'

const RouteComponent = () => {
  return <div>Hello Events</div>
}

export const Route = createFileRoute('/events')({
  staticData: { breadcrumbs: [{ label: 'Discover' }, { label: 'Events' }] },
  component: RouteComponent,
})
