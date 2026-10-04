import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/alerts')({
  staticData: { breadcrumbs: [{ label: 'Workspace' }, { label: 'Alerts' }] },
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/alerts"!</div>
}
