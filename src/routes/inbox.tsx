import { createFileRoute } from '@tanstack/react-router'
import {InboxSidebar} from "@/features/Inbox/Inboxsidebar/Inboxsidebar.tsx";



export const Route = createFileRoute('/inbox')({
  component: InboxSidebar,
})

