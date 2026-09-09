import { createFileRoute } from '@tanstack/react-router'
import {ParticipantsPage} from "@/features/Participants/Participantspage.tsx";

export const Route = createFileRoute('/participants')({
  component: ParticipantsPage,
})


