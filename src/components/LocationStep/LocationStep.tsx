import { useState } from "react";
import * as shared from "@/features/OnboardingFinal/Stepshares.css.ts";
import * as styles from "./LocationStep.css.ts";

const STATE_OPTIONS = [
    "New South Wales",
    "Tasmania",
    "Queensland",
    "South Australia",
    "Victoria",
    "Australian Capital Territory",
    "Western Australia",
    "Northern Territory",
];

interface LocationStepProps {
    onBack: () => void;
    onContinue: (state: string) => void;
}

export function LocationStep({ onBack, onContinue }: LocationStepProps) {
    const [selected, setSelected] = useState<string | null>(null);

    return (
        <div className={shared.stepWrap}>
            <div className={shared.heading}>
                <h1 className={shared.title}>Where Are You Based?</h1>
                <p className={shared.subtitle}>
                    We'll surface region-specific policy updates, pricing and news relevant to you.
                </p>
            </div>

            <div className={styles.chipGrid}>
                {STATE_OPTIONS.map((state) => (
                    <button
                        key={state}
                        type="button"
                        className={`${styles.chip} ${
                            selected === state ? styles.chipTone.selected : styles.chipTone.default
                        }`}
                        onClick={() => setSelected(state)}
                    >
                        {state}
                    </button>
                ))}
            </div>

            <div className={shared.actions}>
                <button type="button" className={shared.secondaryButton} onClick={onBack}>
                    Back
                </button>
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