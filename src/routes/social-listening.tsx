import { createFileRoute } from '@tanstack/react-router'

const RouteComponent = () => {
  return <div>Hello "/social-listening"!</div>
}

export const Route = createFileRoute('/social-listening')({
  staticData: { breadcrumbs: [{ label: 'Workspace' }, { label: 'Social Listening' }] },
  component: RouteComponent,
})
