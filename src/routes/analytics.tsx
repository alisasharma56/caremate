import { createFileRoute } from '@tanstack/react-router'
import {AnalyticsPage} from "@/features/Analytics/AnalyticsPage/AnalyticsPage.tsx";

export const Route = createFileRoute('/analytics')({
  staticData: { breadcrumbs: [{ label: 'Discover' }, { label: 'Analytics' }] },
  component: RouteComponent,
})

function RouteComponent() {
  return <div><AnalyticsPage/></div>
}
