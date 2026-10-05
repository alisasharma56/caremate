import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import {
  heading,
  title,
  subtitle,
  primaryButton,
} from "@/components/Orgdetailsstep/Setupform.css.ts";
import {
  aiCard,
  aiCardText,
  aiCardTitle,
  aiCardSubtitle,
  aiCardIcon,
  secondaryButton,
  loadingCard,
  loadingTitle,
  loadingSubtitle,
  suggestionsCard,
  suggestionsHeader,
  suggestionsHeaderTitle,
  suggestionsHeaderHint,
  shiftList,
  shiftRow,
  shiftAvatar,
  shiftInfo,
  shiftName,
  shiftMeta,
  checkbox,
  checkboxTone,
  suggestionsFooter,
  acceptedCount as acceptedCountStyle,
  regenerate,
} from "./CreateShiftStep.css.ts";

type Phase = "choice" | "loading" | "suggestions";

interface Shift {
    id: string;
    day: string;
    worker: string;
    participant: string;
    time: string;
    duration: string;
    category: string;
    accepted: boolean;
}

const INITIAL_SHIFTS: Shift[] = [
    {
        id: "1",
        day: "Mon",
        worker: "Alex Johnson",
        participant: "Sam Williams",
        time: "09:00 - 15:00",
        duration: "6h",
        category: "Daily Activities",
        accepted: true,
    },
    {
        id: "2",
        day: "Mon",
        worker: "Alex Johnson",
        participant: "Sam Williams",
        time: "09:00 - 15:00",
        duration: "6h",
        category: "Daily Activities",
        accepted: false,
    },
    {
        id: "3",
        day: "Mon",
        worker: "Alex Johnson",
        participant: "Sam Williams",
        time: "09:00 - 15:00",
        duration: "6h",
        category: "Daily Activities",
        accepted: true,
    },
];

interface CreateShiftStepProps {
    onGoToDashboard: () => void;
}

export const CreateShiftStep = ({ onGoToDashboard }: CreateShiftStepProps) => {
    const [phase, setPhase] = useState<Phase>("choice");
    const [shifts, setShifts] = useState<Shift[]>(INITIAL_SHIFTS);

    const generateRoster = () => {
        setPhase("loading");
        setTimeout(() => {
            setShifts(INITIAL_SHIFTS);
            setPhase("suggestions");
        }, 1400);
    };

    const toggleShift = (id: string) => {
        setShifts((current) =>
            current.map((s) => (s.id === id ? { ...s, accepted: !s.accepted } : s)),
        );
    };

    const acceptedCount = shifts.filter((s) => s.accepted).length;

    return (
        <div>
            <div className={heading}>
                <h1 className={title}>Create your first shift</h1>
                <p className={subtitle}>
                    Build your first shift manually, or let AI draft a schedule based on availability.
                </p>
            </div>

            {phase === "choice" && (
                <>
                    <button type="button" className={aiCard} onClick={generateRoster}>
                        <div className={aiCardText}>
                            <span className={aiCardTitle}>Generate Roster With AI</span>
                            <span className={aiCardSubtitle}>
                Suggest Shift based on worker availability and participant plan
              </span>
                        </div>
                        <span className={aiCardIcon}>
              <ArrowRight size={16} />
            </span>
                    </button>

                    <button type="button" className={secondaryButton} onClick={onGoToDashboard}>
                        Go to Dashboard
                    </button>
                </>
            )}

            {phase === "loading" && (
                <div className={loadingCard}>
                    <span className={loadingTitle}>Generating Roster...</span>
                    <span className={loadingSubtitle}>
            Reading Availability, plan dates and support categories
          </span>
                </div>
            )}

            {phase === "suggestions" && (
                <>
                    <div className={suggestionsCard}>
                        <div className={suggestionsHeader}>
                            <span className={suggestionsHeaderTitle}>{shifts.length} shifts suggested</span>
                            <span className={suggestionsHeaderHint}>Accept or remove each</span>
                        </div>

                        <div className={shiftList}>
                            {shifts.map((shift) => (
                                <div key={shift.id} className={shiftRow}>
                                    <span className={shiftAvatar}>{shift.day}</span>
                                    <div className={shiftInfo}>
                    <span className={shiftName}>
                      {shift.worker} → {shift.participant}
                    </span>
                                        <span className={shiftMeta}>
                      {shift.time} · {shift.duration} · {shift.category}
                    </span>
                                    </div>
                                    <button
                                        type="button"
                                        className={`${checkbox} ${
                                            shift.accepted ? checkboxTone.checked : checkboxTone.unchecked
                                        }`}
                                        onClick={() => toggleShift(shift.id)}
                                    >
                                        {shift.accepted && <Check size={13} />}
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className={suggestionsFooter}>
              <span className={acceptedCountStyle}>
                {acceptedCount} of {shifts.length} shifts accepted
              </span>
                            <button type="button" className={regenerate} onClick={generateRoster}>
                                Regenerate
                            </button>
                        </div>
                    </div>

                    <button type="button" className={primaryButton} onClick={onGoToDashboard}>
                        Save Shift and Go to Dashboard
                    </button>
                </>
            )}
        </div>
    );
};