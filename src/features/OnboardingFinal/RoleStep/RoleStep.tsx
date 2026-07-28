import { useState } from "react";
import * as shared from "@/styles/Onboarding/Stepshares.css.ts";
import * as styles from "./RoleStep.css.ts";

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

export function RoleStep({ onContinue }: RoleStepProps) {
    const [selected, setSelected] = useState<string | null>(null);

    return (
        <div className={shared.stepWrap}>
            <div className={shared.heading}>
                <h1 className={shared.title}>What Best Describes You?</h1>
                <p className={shared.subtitle}>
                    We'll personalise your experience based on your role in the NDIS sector.
                </p>
            </div>

            <div className={styles.grid}>
                {ROLE_OPTIONS.map((role) => (
                    <button
                        key={role.id}
                        type="button"
                        className={`${styles.card} ${
                            selected === role.id ? styles.cardTone.selected : styles.cardTone.default
                        }`}
                        onClick={() => setSelected(role.id)}
                    >
                        <span className={styles.cardTitle}>{role.title}</span>
                        <span className={styles.cardDescription}>{role.description}</span>
                    </button>
                ))}
            </div>

            <div className={shared.actions}>
                <button
                    type="button"
                    className={shared.primaryButton}
                    disabled={!selected}
                    onClick={() => selected && onContinue(selected)}
                >
                    Continue
                </button>
            </div>
        </div>
    );
}