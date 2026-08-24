import { createFileRoute } from '@tanstack/react-router'
import {InboxSidebar} from "@/features/InboxSidebar/Inboxsidebar.tsx";

export const Route = createFileRoute('/inbox')({
  component: InboxSidebar,
})

