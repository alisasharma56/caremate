import { useState } from "react";
import {
  heading,
  title,
  subtitle,
  field,
  fieldLabel,
  required,
  input,
  select,
  fieldRow,
  primaryButton,
} from "@/components/Orgdetailsstep/Setupform.css.ts";
import {
  dayRow,
  dayChip,
  dayChipTone,
} from "./Addworkerstep.css.ts";

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
            <div className={heading}>
                <h1 className={title}>Add your first worker</h1>
                <p className={subtitle}>You can add more workers later from the roster tab.</p>
            </div>

            <div className={field} style={{ marginBottom: 16 }}>
                <label className={fieldLabel}>
                    Full Name <span className={required}>*</span>
                </label>
                <input
                    type="text"
                    className={input}
                    placeholder="Full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
            </div>

            <div className={field} style={{ marginBottom: 16 }}>
                <label className={fieldLabel}>
                    Role <span className={required}>*</span>
                </label>
                <select className={select} value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="" disabled>
                        Select role
                    </option>
                    <option value="support-worker">Support Worker</option>
                    <option value="registered-nurse">Registered Nurse</option>
                    <option value="allied-health">Allied Health Professional</option>
                    <option value="support-coordinator">Support Coordinator</option>
                </select>
            </div>

            <div className={fieldRow}>
                <div className={field}>
                    <label className={fieldLabel}>
                        WWCC Number <span className={required}>*</span>
                    </label>
                    <input
                        type="text"
                        className={input}
                        placeholder="e.g. WWC1234567E"
                        value={wwccNumber}
                        onChange={(e) => setWwccNumber(e.target.value)}
                    />
                </div>

                <div className={field}>
                    <label className={fieldLabel}>
                        WWCC Expiry Date <span className={required}>*</span>
                    </label>
                    <input
                        type="text"
                        className={input}
                        placeholder="MM/DD/YYYY"
                        value={wwccExpiry}
                        onChange={(e) => setWwccExpiry(e.target.value)}
                    />
                </div>
            </div>

            <div className={field} style={{ marginBottom: 16 }}>
                <label className={fieldLabel}>
                    Availability <span className={required}>*</span>
                </label>
                <div className={dayRow}>
                    {DAYS.map((day) => (
                        <button
                            key={day}
                            type="button"
                            className={`${dayChip} ${
                                availability.includes(day) ? dayChipTone.selected : dayChipTone.default
                            }`}
                            onClick={() => toggleDay(day)}
                        >
                            {day}
                        </button>
                    ))}
                </div>
            </div>

            <button type="button" className={primaryButton} onClick={onContinue}>
                Save Worker
            </button>
        </div>
    );
}