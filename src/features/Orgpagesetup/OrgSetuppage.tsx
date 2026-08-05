import { useState } from "react";
import { SetupLayout } from "@/components/SetupLayout/SetupLayout.tsx";
import { SetupStep } from "./SetupStep";
import { OrgDetailsStep } from "@/components/Orgdetailsstep/Orgdetailsstep.tsx";
import { AddWorkerStep } from "@/components/Addworkerstep/Addworkerstep.tsx";
import { AddParticipantStep } from "@/components/AddParticipantStep/index.tsx";
import { CreateShiftStep } from "@/components/CreateShiftStep/CreateShiftStep.tsx";

interface OrgSetupPageProps {
    onSkip?: () => void;
    onDone?: () => void;
}

export function OrgSetupPage({ onSkip, onDone }: OrgSetupPageProps) {
    const [step, setStep] = useState<SetupStep>(SetupStep.OrgDetails);

    return (
        <SetupLayout step={step} onSkip={onSkip}>
            {step === SetupStep.OrgDetails && (
                <OrgDetailsStep onContinue={() => setStep(SetupStep.FirstWorker)} />
            )}

            {step === SetupStep.FirstWorker && (
                <AddWorkerStep onContinue={() => setStep(SetupStep.FirstParticipant)} />
            )}

            {step === SetupStep.FirstParticipant && (
                <AddParticipantStep onContinue={() => setStep(SetupStep.FirstShift)} />
            )}

            {step === SetupStep.FirstShift && (
                <CreateShiftStep onGoToDashboard={() => onDone?.()} />
            )}
        </SetupLayout>
    );
}