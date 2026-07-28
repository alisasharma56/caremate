import { useState } from "react";
import * as shared from "@/features/OnboardingFinal/Stepshares.css.ts";
import * as styles from "./TopicStep.css.ts";

const TOPIC_OPTIONS = [
    "Police and Law",
    "Funding",
    "SIL/SDA",
    "Workforce",
    "Early Funding",
    "Allied Health",
    "Registration Reform",
    "Price Guide",
    "Participant Rights",
    "Provider Compliance",
    "Advocacy",
    "Fraud Prevention",
];

const MIN_TOPICS = 3;

interface TopicsStepProps {
    onBack: () => void;
    onContinue: (topics: string[]) => void;
}

export function TopicsStep({ onBack, onContinue }: TopicsStepProps) {
    const [selected, setSelected] = useState<string[]>(["SIL/SDA", "Allied Health"]);

    function toggleTopic(topic: string) {
        setSelected((current) =>
            current.includes(topic) ? current.filter((t) => t !== topic) : [...current, topic],
        );
    }

    return (
        <div className={shared.stepWrap}>
            <div className={shared.heading}>
                <h1 className={shared.title}>What Topics Interest You?</h1>
                <p className={shared.subtitle}>
                    Choose at least {MIN_TOPICS} to personalise your news feed.
                </p>
            </div>

            <div className={styles.chipGrid}>
                {TOPIC_OPTIONS.map((topic) => (
                    <button
                        key={topic}
                        type="button"
                        className={`${styles.chip} ${
                            selected.includes(topic) ? styles.chipTone.selected : styles.chipTone.default
                        }`}
                        onClick={() => toggleTopic(topic)}
                    >
                        {topic}
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
                    disabled={selected.length < MIN_TOPICS}
                    onClick={() => onContinue(selected)}
                >
                    Continue
                </button>
            </div>
        </div>
    );
}