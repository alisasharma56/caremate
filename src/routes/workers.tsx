import { createFileRoute } from '@tanstack/react-router'

const RouteComponent = () => {
  return <div>Hello "/workers"!</div>
}

export const Route = createFileRoute('/workers')({
  staticData: { breadcrumbs: [{ label: 'Workspace' }, { label: 'Workers' }] },
  component: RouteComponent,
})
