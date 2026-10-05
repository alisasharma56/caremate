import { createFileRoute } from '@tanstack/react-router'

const RouteComponent = () => {
  return <div>Hello "/place-job"!</div>
}

export const Route = createFileRoute('/place-job')({
  staticData: { breadcrumbs: [{ label: 'Workspace' }, { label: 'Place Job' }] },
  component: RouteComponent,
})
