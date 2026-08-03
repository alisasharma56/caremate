import { useState } from "react";
import { OnboardingLayout } from "@/features/OnboardingFinal/OnboardingLayout/OnboardingLayout.tsx";
import { OnboardingStep } from "../OnboardingLayout/OnboardingStep.ts";
import { RoleStep } from "../RoleStep/RoleStep.tsx";
import { TopicsStep } from "../TopicStep/TopicStep.tsx";
import { LocationStep } from "../LocationStep/LocationStep.tsx";

interface OnboardingStep1PageProps {
    onComplete?: () => void;
}

export function OnboardingStep1Page({ onComplete }: OnboardingStep1PageProps) {
    const [step, setStep] = useState<OnboardingStep>(OnboardingStep.Role);

    return (
        <OnboardingLayout step={step} onSkip={onComplete}>
            {step === OnboardingStep.Role && (
                <RoleStep onContinue={() => setStep(OnboardingStep.Topics)} />
            )}

            {step === OnboardingStep.Topics && (
                <TopicsStep
                    onBack={() => setStep(OnboardingStep.Role)}
                    onContinue={() => setStep(OnboardingStep.Location)}
                />
            )}

            {step === OnboardingStep.Location && (
                <LocationStep
                    onBack={() => setStep(OnboardingStep.Topics)}
                    onContinue={() => onComplete?.()}
                />
            )}
        </OnboardingLayout>
    );
}
