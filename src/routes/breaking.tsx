import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/breaking')({
  staticData: { breadcrumbs: [{ label: 'Discover' }, { label: 'Breaking' }] },
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/breaking"!</div>
}
