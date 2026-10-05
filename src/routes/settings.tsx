import { createFileRoute } from '@tanstack/react-router'

const RouteComponent = () => {
  return <div>Hello "/settings"!</div>
}

export const Route = createFileRoute('/settings')({
  staticData: { breadcrumbs: [{ label: 'Account' }, { label: 'Settings' }] },
  component: RouteComponent,
})
