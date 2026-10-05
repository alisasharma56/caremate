import { createFileRoute } from '@tanstack/react-router'

const RouteComponent = () => {
  return <div>Hello "/analytics"!</div>
}

export const Route = createFileRoute('/analytics')({
  staticData: { breadcrumbs: [{ label: 'Discover' }, { label: 'Analytics' }] },
  component: RouteComponent,
})
