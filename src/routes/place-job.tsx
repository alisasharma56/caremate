import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/place-job')({
  staticData: { breadcrumbs: [{ label: 'Workspace' }, { label: 'Place Job' }] },
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/place-job"!</div>
}
