import { createFileRoute } from '@tanstack/react-router'
import {Paymentwall} from "@/features/Paymentwall/Paymentwall.tsx";
export const Route = createFileRoute('/payment')({
  component: Paymentwall,
})


