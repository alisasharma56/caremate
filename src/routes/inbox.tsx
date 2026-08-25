import { createFileRoute } from '@tanstack/react-router'
import {InboxPage} from "@/features/Inbox/InboxPage/InboxPage.tsx";


export const Route = createFileRoute('/inbox')({
  component: InboxPage,
})

