import { useState } from "react";
import * as styles from "./Setupform.css.ts";
import Dropdown from "@/components/icons/Dropdown";

interface OrgDetailsStepProps {
    onContinue: () => void;
}

export function OrgDetailsStep({ onContinue }: OrgDetailsStepProps) {
    const [registrationType, setRegistrationType] = useState("Registered Provider");
    const [payRate, setPayRate] = useState("Custom Rates");
    const [shiftStart, setShiftStart] = useState("08:00 AM");
    const [shiftEnd, setShiftEnd] = useState("09:00 AM");

    return (
        <div>
            <div className={styles.heading}>
                <h1 className={styles.title}>Organization details</h1>
                <p className={styles.subtitle}>Tell us how your roster should be configured.</p>
            </div>

            <div className={styles.fieldRow}>
                <div className={styles.field}>
                    <label className={styles.fieldLabel}>
                        Registration Type <span className={styles.required}>*</span>
                    </label>
                    <div className={styles.selectWrap}>
                        <select
                            className={styles.select}
                            value={registrationType}
                            onChange={(e) => setRegistrationType(e.target.value)}
                        >
                            <option>Registered Provider</option>
                            <option>Unregistered Provider</option>
                        </select>
                        <span className={styles.selectIcon}>
                            <Dropdown />
                        </span>
                    </div>
                </div>

                <div className={styles.field}>
                    <label className={styles.fieldLabel}>
                        Award / Pay rate <span className={styles.required}>*</span>
                    </label>
                    <div className={styles.selectWrap}>
                        <select
                            className={styles.select}
                            value={payRate}
                            onChange={(e) => setPayRate(e.target.value)}
                        >
                            <option>Custom Rates</option>
                            <option>SCHADS Award</option>
                        </select>
                        <span className={styles.selectIcon}>
                            <Dropdown />
                        </span>
                    </div>
                </div>
            </div>

            <div className={styles.fieldRow}>
                <div className={styles.field}>
                    <label className={styles.fieldLabel}>
                        Shift Start <span className={styles.required}>*</span>
                    </label>
                    <input
                        type="text"
                        className={styles.input}
                        value={shiftStart}
                        onChange={(e) => setShiftStart(e.target.value)}
                    />
                </div>

                <div className={styles.field}>
                    <label className={styles.fieldLabel}>
                        Shift End <span className={styles.required}>*</span>
                    </label>
                    <input
                        type="text"
                        className={styles.input}
                        value={shiftEnd}
                        onChange={(e) => setShiftEnd(e.target.value)}
                    />
                </div>
            </div>

            <button type="button" className={styles.primaryButton} onClick={onContinue}>
                Save and Continue
            </button>
        </div>
    );
}