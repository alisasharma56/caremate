import { createFileRoute } from '@tanstack/react-router'
import {OnboardingStep1Page} from "@/features/OnboardingFinal/OnboardingStep1";

export const Route = createFileRoute('/onboarding')({
  component: OnboardingStep1Page,
})


