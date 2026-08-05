import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import * as shared from "@/components/Orgdetailsstep/Setupform.css.ts";
import * as styles from "./CreateShiftStep.css.ts";

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

export function CreateShiftStep({ onGoToDashboard }: CreateShiftStepProps) {
    const [phase, setPhase] = useState<Phase>("choice");
    const [shifts, setShifts] = useState<Shift[]>(INITIAL_SHIFTS);

    function generateRoster() {
        setPhase("loading");
        setTimeout(() => {
            setShifts(INITIAL_SHIFTS);
            setPhase("suggestions");
        }, 1400);
    }

    function toggleShift(id: string) {
        setShifts((current) =>
            current.map((s) => (s.id === id ? { ...s, accepted: !s.accepted } : s)),
        );
    }

    const acceptedCount = shifts.filter((s) => s.accepted).length;

    return (
        <div>
            <div className={shared.heading}>
                <h1 className={shared.title}>Create your first shift</h1>
                <p className={shared.subtitle}>
                    Build your first shift manually, or let AI draft a schedule based on availability.
                </p>
            </div>

            {phase === "choice" && (
                <>
                    <button type="button" className={styles.aiCard} onClick={generateRoster}>
                        <div className={styles.aiCardText}>
                            <span className={styles.aiCardTitle}>Generate Roster With AI</span>
                            <span className={styles.aiCardSubtitle}>
                Suggest Shift based on worker availability and participant plan
              </span>
                        </div>
                        <span className={styles.aiCardIcon}>
              <ArrowRight size={16} />
            </span>
                    </button>

                    <button type="button" className={styles.secondaryButton} onClick={onGoToDashboard}>
                        Go to Dashboard
                    </button>
                </>
            )}

            {phase === "loading" && (
                <div className={styles.loadingCard}>
                    <span className={styles.loadingTitle}>Generating Roster...</span>
                    <span className={styles.loadingSubtitle}>
            Reading Availability, plan dates and support categories
          </span>
                </div>
            )}

            {phase === "suggestions" && (
                <>
                    <div className={styles.suggestionsCard}>
                        <div className={styles.suggestionsHeader}>
                            <span className={styles.suggestionsHeaderTitle}>{shifts.length} shifts suggested</span>
                            <span className={styles.suggestionsHeaderHint}>Accept or remove each</span>
                        </div>

                        <div className={styles.shiftList}>
                            {shifts.map((shift) => (
                                <div key={shift.id} className={styles.shiftRow}>
                                    <span className={styles.shiftAvatar}>{shift.day}</span>
                                    <div className={styles.shiftInfo}>
                    <span className={styles.shiftName}>
                      {shift.worker} → {shift.participant}
                    </span>
                                        <span className={styles.shiftMeta}>
                      {shift.time} · {shift.duration} · {shift.category}
                    </span>
                                    </div>
                                    <button
                                        type="button"
                                        className={`${styles.checkbox} ${
                                            shift.accepted ? styles.checkboxTone.checked : styles.checkboxTone.unchecked
                                        }`}
                                        onClick={() => toggleShift(shift.id)}
                                    >
                                        {shift.accepted && <Check size={13} />}
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className={styles.suggestionsFooter}>
              <span className={styles.acceptedCount}>
                {acceptedCount} of {shifts.length} shifts accepted
              </span>
                            <button type="button" className={styles.regenerate} onClick={generateRoster}>
                                Regenerate
                            </button>
                        </div>
                    </div>

                    <button type="button" className={shared.primaryButton} onClick={onGoToDashboard}>
                        Save Shift and Go to Dashboard
                    </button>
                </>
            )}
        </div>
    );
}