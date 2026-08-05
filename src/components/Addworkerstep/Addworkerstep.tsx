import { useState } from "react";
import * as styles from "@/components/Orgdetailsstep/Setupform.css.ts";
import * as dayStyles from "./Addworkerstep.css.ts";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

interface AddWorkerStepProps {
    onContinue: () => void;
}

export function AddWorkerStep({ onContinue }: AddWorkerStepProps) {
    const [fullName, setFullName] = useState("");
    const [role, setRole] = useState("");
    const [wwccNumber, setWwccNumber] = useState("");
    const [wwccExpiry, setWwccExpiry] = useState("");
    const [availability, setAvailability] = useState<string[]>(["Wed"]);

    function toggleDay(day: string) {
        setAvailability((current) =>
            current.includes(day) ? current.filter((d) => d !== day) : [...current, day],
        );
    }

    return (
        <div>
            <div className={styles.heading}>
                <h1 className={styles.title}>Add your first worker</h1>
                <p className={styles.subtitle}>You can add more workers later from the roster tab.</p>
            </div>

            <div className={styles.field} style={{ marginBottom: 16 }}>
                <label className={styles.fieldLabel}>
                    Full Name <span className={styles.required}>*</span>
                </label>
                <input
                    type="text"
                    className={styles.input}
                    placeholder="Full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
            </div>

            <div className={styles.field} style={{ marginBottom: 16 }}>
                <label className={styles.fieldLabel}>
                    Role <span className={styles.required}>*</span>
                </label>
                <select className={styles.select} value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="" disabled>
                        Select role
                    </option>
                    <option value="support-worker">Support Worker</option>
                    <option value="registered-nurse">Registered Nurse</option>
                    <option value="allied-health">Allied Health Professional</option>
                    <option value="support-coordinator">Support Coordinator</option>
                </select>
            </div>

            <div className={styles.fieldRow}>
                <div className={styles.field}>
                    <label className={styles.fieldLabel}>
                        WWCC Number <span className={styles.required}>*</span>
                    </label>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="e.g. WWC1234567E"
                        value={wwccNumber}
                        onChange={(e) => setWwccNumber(e.target.value)}
                    />
                </div>

                <div className={styles.field}>
                    <label className={styles.fieldLabel}>
                        WWCC Expiry Date <span className={styles.required}>*</span>
                    </label>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="MM/DD/YYYY"
                        value={wwccExpiry}
                        onChange={(e) => setWwccExpiry(e.target.value)}
                    />
                </div>
            </div>

            <div className={styles.field} style={{ marginBottom: 16 }}>
                <label className={styles.fieldLabel}>
                    Availability <span className={styles.required}>*</span>
                </label>
                <div className={dayStyles.dayRow}>
                    {DAYS.map((day) => (
                        <button
                            key={day}
                            type="button"
                            className={`${dayStyles.dayChip} ${
                                availability.includes(day) ? dayStyles.dayChipTone.selected : dayStyles.dayChipTone.default
                            }`}
                            onClick={() => toggleDay(day)}
                        >
                            {day}
                        </button>
                    ))}
                </div>
            </div>

            <button type="button" className={styles.primaryButton} onClick={onContinue}>
                Save Worker
            </button>
        </div>
    );
}