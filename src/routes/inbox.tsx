import { createFileRoute } from '@tanstack/react-router'
import {InboxPage} from "@/features/Inbox/InboxPage";



export const Route = createFileRoute('/inbox')({
  staticData: { breadcrumbs: [{ label: 'Workspace' }, { label: 'Inbox' }] },
  component: InboxPage,
})

