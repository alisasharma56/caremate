export const OnboardingStep = {
    Role: 1,
    Topics: 2,
    Location: 3,
} as const;

export type OnboardingStep = (typeof OnboardingStep)[keyof typeof OnboardingStep];

export const ONBOARDING_STEP_COUNT = 3;
