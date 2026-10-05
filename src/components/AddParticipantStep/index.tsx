import { useState } from "react";
import {
  heading,
  title,
  subtitle,
  field,
  fieldLabel,
  required,
  input,
  fieldRow,
  select,
  primaryButton,
} from "@/components/Orgdetailsstep/Setupform.css.ts";

interface AddParticipantStepProps {
    onContinue: () => void;
}

export const AddParticipantStep = ({ onContinue }: AddParticipantStepProps) => {
    const [fullName, setFullName] = useState("");
    const [ndisNumber, setNdisNumber] = useState("");
    const [planStart, setPlanStart] = useState("");
    const [planEnd, setPlanEnd] = useState("");
    const [supportCategory, setSupportCategory] = useState("Core Supports");

    return (
        <div>
            <div className={heading}>
                <h1 className={title}>Add your first participant</h1>
                <p className={subtitle}>Enter participant details to start building their schedule.</p>
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
                    NDIS Number <span className={required}>*</span>
                </label>
                <input
                    type="text"
                    className={input}
                    placeholder="3245 34562352"
                    value={ndisNumber}
                    onChange={(e) => setNdisNumber(e.target.value)}
                />
            </div>

            <div className={fieldRow}>
                <div className={field}>
                    <label className={fieldLabel}>
                        Plan Start Date <span className={required}>*</span>
                    </label>
                    <input
                        type="text"
                        className={input}
                        placeholder="MM/DD/YYYY"
                        value={planStart}
                        onChange={(e) => setPlanStart(e.target.value)}
                    />
                </div>

                <div className={field}>
                    <label className={fieldLabel}>
                        Plan End Date <span className={required}>*</span>
                    </label>
                    <input
                        type="text"
                        className={input}
                        placeholder="MM/DD/YYYY"
                        value={planEnd}
                        onChange={(e) => setPlanEnd(e.target.value)}
                    />
                </div>
            </div>

            <div className={field} style={{ marginBottom: 16 }}>
                <label className={fieldLabel}>
                    Primary Support Category <span className={required}>*</span>
                </label>
                <select
                    className={select}
                    value={supportCategory}
                    onChange={(e) => setSupportCategory(e.target.value)}
                >
                    <option>Core Supports</option>
                    <option>Capacity Building</option>
                    <option>Capital Supports</option>
                </select>
            </div>

            <button type="button" className={primaryButton} onClick={onContinue}>
                Save Participant
            </button>
        </div>
    );
};