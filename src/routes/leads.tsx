import { createFileRoute } from '@tanstack/react-router'
import {LeadsPage} from "@/features/Lead/Leadspage/LeadsPage.tsx";

export const Route = createFileRoute('/leads')({
  staticData: { breadcrumbs: [{ label: 'Workspace' }, { label: 'Leads' }] },
  component: LeadsPage,
})


