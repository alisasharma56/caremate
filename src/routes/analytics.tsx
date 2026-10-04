import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/analytics')({
  staticData: { breadcrumbs: [{ label: 'Discover' }, { label: 'Analytics' }] },
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/analytics"!</div>
}
