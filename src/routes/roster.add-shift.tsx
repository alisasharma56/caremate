import { createFileRoute } from '@tanstack/react-router'
import { AddShiftPage } from '@/features/Roster/AddShiftPage'

export const Route = createFileRoute('/roster/add-shift')({
  staticData: {
    breadcrumbs: [
      { label: 'Workspace' },
      { label: 'Roster', to: '/roster' },
      { label: 'Add Shift' },
    ],
  },
  component: AddShiftPage,
})