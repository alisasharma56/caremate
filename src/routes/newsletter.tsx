import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/newsletter')({
  staticData: { breadcrumbs: [{ label: 'Workspace' }, { label: 'Newsletter' }] },
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/newsletter"!</div>
}
