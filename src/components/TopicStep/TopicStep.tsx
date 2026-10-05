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
} from "./TopicStep.css.ts";

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

export const TopicsStep = ({ onBack, onContinue }: TopicsStepProps) => {
    const [selected, setSelected] = useState<string[]>(["SIL/SDA", "Allied Health"]);

    const toggleTopic = (topic: string) => {
        setSelected((current) =>
            current.includes(topic) ? current.filter((t) => t !== topic) : [...current, topic],
        );
    };

    return (
        <div className={stepWrap}>
            <div className={heading}>
                <h1 className={title}>What Topics Interest You?</h1>
                <p className={subtitle}>
                    Choose at least {MIN_TOPICS} to personalise your news feed.
                </p>
            </div>

            <div className={chipGrid}>
                {TOPIC_OPTIONS.map((topic) => (
                    <button
                        key={topic}
                        type="button"
                        className={`${chip} ${
                            selected.includes(topic) ? chipTone.selected : chipTone.default
                        }`}
                        onClick={() => toggleTopic(topic)}
                    >
                        {topic}
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
                    disabled={selected.length < MIN_TOPICS}
                    onClick={() => onContinue(selected)}
                >
                    Continue
                </button>
            </div>
        </div>
    );
};