import { useState } from "react";
import * as styles from "@/components/Orgdetailsstep/Setupform.css.ts";

interface AddParticipantStepProps {
    onContinue: () => void;
}

export function AddParticipantStep({ onContinue }: AddParticipantStepProps) {
    const [fullName, setFullName] = useState("");
    const [ndisNumber, setNdisNumber] = useState("");
    const [planStart, setPlanStart] = useState("");
    const [planEnd, setPlanEnd] = useState("");
    const [supportCategory, setSupportCategory] = useState("Core Supports");

    return (
        <div>
            <div className={styles.heading}>
                <h1 className={styles.title}>Add your first participant</h1>
                <p className={styles.subtitle}>Enter participant details to start building their schedule.</p>
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
                    NDIS Number <span className={styles.required}>*</span>
                </label>
                <input
                    type="text"
                    className={styles.input}
                    placeholder="3245 34562352"
                    value={ndisNumber}
                    onChange={(e) => setNdisNumber(e.target.value)}
                />
            </div>

            <div className={styles.fieldRow}>
                <div className={styles.field}>
                    <label className={styles.fieldLabel}>
                        Plan Start Date <span className={styles.required}>*</span>
                    </label>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="MM/DD/YYYY"
                        value={planStart}
                        onChange={(e) => setPlanStart(e.target.value)}
                    />
                </div>

                <div className={styles.field}>
                    <label className={styles.fieldLabel}>
                        Plan End Date <span className={styles.required}>*</span>
                    </label>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="MM/DD/YYYY"
                        value={planEnd}
                        onChange={(e) => setPlanEnd(e.target.value)}
                    />
                </div>
            </div>

            <div className={styles.field} style={{ marginBottom: 16 }}>
                <label className={styles.fieldLabel}>
                    Primary Support Category <span className={styles.required}>*</span>
                </label>
                <select
                    className={styles.select}
                    value={supportCategory}
                    onChange={(e) => setSupportCategory(e.target.value)}
                >
                    <option>Core Supports</option>
                    <option>Capacity Building</option>
                    <option>Capital Supports</option>
                </select>
            </div>

            <button type="button" className={styles.primaryButton} onClick={onContinue}>
                Save Participant
            </button>
        </div>
    );
}