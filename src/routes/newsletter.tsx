import { createFileRoute } from '@tanstack/react-router'

const RouteComponent = () => {
  return <div>Hello "/newsletter"!</div>
}

export const Route = createFileRoute('/newsletter')({
  staticData: { breadcrumbs: [{ label: 'Workspace' }, { label: 'Newsletter' }] },
  component: RouteComponent,
})
