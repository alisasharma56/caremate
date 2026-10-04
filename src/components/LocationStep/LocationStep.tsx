import { useState } from "react";
import {
  stepWrap,
  heading,
  title,
  subtitle,
  actions,
  secondaryButton,
  primaryButton,
} from "@/features/OnboardingFinal/Stepshares.css.ts";
import {
  chipGrid,
  chip,
  chipTone,
} from "./LocationStep.css.ts";

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
        <div className={stepWrap}>
            <div className={heading}>
                <h1 className={title}>Where Are You Based?</h1>
                <p className={subtitle}>
                    We'll surface region-specific policy updates, pricing and news relevant to you.
                </p>
            </div>

            <div className={chipGrid}>
                {STATE_OPTIONS.map((state) => (
                    <button
                        key={state}
                        type="button"
                        className={`${chip} ${
                            selected === state ? chipTone.selected : chipTone.default
                        }`}
                        onClick={() => setSelected(state)}
                    >
                        {state}
                    </button>
                ))}
            </div>

            <div className={actions}>
                <button type="button" className={secondaryButton} onClick={onBack}>
                    Back
                </button>
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
}