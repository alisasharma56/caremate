import { createFileRoute } from '@tanstack/react-router'
import {OnboardingStep1Page} from "@/features/OnboardingFinal";

export const Route = createFileRoute('/onboarding')({
  component: OnboardingStep1Page,
})


