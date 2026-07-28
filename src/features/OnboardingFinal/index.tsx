import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { OnboardingLayout } from "@/components/OnboardingLayout/OnboardingLayout.tsx";
import { OnboardingStep } from "@/components/OnboardingLayout/OnboardingStep.ts";
import { RoleStep } from "@/components/RoleStep/RoleStep.tsx";
import { TopicsStep } from "@/components/TopicStep/TopicStep.tsx";
import { LocationStep } from "@/components/LocationStep/LocationStep.tsx";

interface OnboardingStep1PageProps {
    onComplete?: () => void;
}

export function OnboardingStep1Page({ onComplete }: OnboardingStep1PageProps) {
    const [step, setStep] = useState<OnboardingStep>(OnboardingStep.Role);
    const navigate = useNavigate();
    return (
        <OnboardingLayout step={step} onSkip={() => navigate({ to: "/payment" })}>
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
                    onContinue={() => {
                        onComplete?.();
                        navigate({ to: "/payment" });
                    }}
                />
            )}
        </OnboardingLayout>
    );
}