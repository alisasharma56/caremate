import { createFileRoute } from '@tanstack/react-router'

const RouteComponent = () => {
  return <div>Hello "/alerts"!</div>
}

export const Route = createFileRoute('/alerts')({
  staticData: { breadcrumbs: [{ label: 'Workspace' }, { label: 'Alerts' }] },
  component: RouteComponent,
})
