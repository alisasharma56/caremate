import { useState } from "react";
import {
  stepWrap,
  heading,
  title,
  subtitle,
  actions,
  primaryButton,
} from "@/features/OnboardingFinal/Stepshares.css.ts";
import {
  grid,
  card,
  cardTone,
  cardTitle,
  cardDescription,
} from "./RoleStep.css.ts";

interface RoleOption {
    id: string;
    title: string;
    description: string;
}

const ROLE_OPTIONS: RoleOption[] = [
    { id: "ndis-provider", title: "NDIS Provider", description: "Registered or unregistered service delivery" },
    { id: "support-coordinator", title: "Support Coordinator", description: "Registered or unregistered service delivery" },
    { id: "allied-health", title: "Allied Health", description: "Registered or unregistered service delivery" },
    { id: "plan-manager", title: "Plan Manager", description: "Registered or unregistered service delivery" },
    { id: "ndis-participant", title: "NDIS Participant", description: "Registered or unregistered service delivery" },
    { id: "family-carer", title: "Family / Carer", description: "Registered or unregistered service delivery" },
    { id: "support-worker", title: "Support Worker", description: "Registered or unregistered service delivery" },
    { id: "job-seeker", title: "Job Seeker", description: "Registered or unregistered service delivery" },
];

interface RoleStepProps {
    onContinue: (roleId: string) => void;
}

export const RoleStep = ({ onContinue }: RoleStepProps) => {
    const [selected, setSelected] = useState<string | null>(null);

    return (
        <div className={stepWrap}>
            <div className={heading}>
                <h1 className={title}>What Best Describes You?</h1>
                <p className={subtitle}>
                    We'll personalise your experience based on your role in the NDIS sector.
                </p>
            </div>

            <div className={grid}>
                {ROLE_OPTIONS.map((role) => (
                    <button
                        key={role.id}
                        type="button"
                        className={`${card} ${
                            selected === role.id ? cardTone.selected : cardTone.default
                        }`}
                        onClick={() => setSelected(role.id)}
                    >
                        <span className={cardTitle}>{role.title}</span>
                        <span className={cardDescription}>{role.description}</span>
                    </button>
                ))}
            </div>

            <div className={actions}>
                <button
                    type="button"
                    className={primaryButton}
                    disabled={!selected}
                    onClick={() => selected && onContinue(selected)}
                >
                    Continue
                </button>
            </div>
        </div>
    );
};