import { createFileRoute } from '@tanstack/react-router'
import {OrgSetupPage} from "@/features/Orgpagesetup/OrgSetuppage.tsx";

export const Route = createFileRoute('/organization')({
  component:OrgSetupPage,
})



