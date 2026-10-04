import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/workers')({
  staticData: { breadcrumbs: [{ label: 'Workspace' }, { label: 'Workers' }] },
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/workers"!</div>
}
