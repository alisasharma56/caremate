import { useState } from "react";
import {
  heading,
  title,
  subtitle,
  fieldRow,
  field,
  fieldLabel,
  required,
  selectWrap,
  select,
  selectIcon,
  input,
  primaryButton,
} from "./Setupform.css.ts";
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
            <div className={heading}>
                <h1 className={title}>Organization details</h1>
                <p className={subtitle}>Tell us how your roster should be configured.</p>
            </div>

            <div className={fieldRow}>
                <div className={field}>
                    <label className={fieldLabel}>
                        Registration Type <span className={required}>*</span>
                    </label>
                    <div className={selectWrap}>
                        <select
                            className={select}
                            value={registrationType}
                            onChange={(e) => setRegistrationType(e.target.value)}
                        >
                            <option>Registered Provider</option>
                            <option>Unregistered Provider</option>
                        </select>
                        <span className={selectIcon}>
                            <Dropdown />
                        </span>
                    </div>
                </div>

                <div className={field}>
                    <label className={fieldLabel}>
                        Award / Pay rate <span className={required}>*</span>
                    </label>
                    <div className={selectWrap}>
                        <select
                            className={select}
                            value={payRate}
                            onChange={(e) => setPayRate(e.target.value)}
                        >
                            <option>Custom Rates</option>
                            <option>SCHADS Award</option>
                        </select>
                        <span className={selectIcon}>
                            <Dropdown />
                        </span>
                    </div>
                </div>
            </div>

            <div className={fieldRow}>
                <div className={field}>
                    <label className={fieldLabel}>
                        Shift Start <span className={required}>*</span>
                    </label>
                    <input
                        type="text"
                        className={input}
                        value={shiftStart}
                        onChange={(e) => setShiftStart(e.target.value)}
                    />
                </div>

                <div className={field}>
                    <label className={fieldLabel}>
                        Shift End <span className={required}>*</span>
                    </label>
                    <input
                        type="text"
                        className={input}
                        value={shiftEnd}
                        onChange={(e) => setShiftEnd(e.target.value)}
                    />
                </div>
            </div>

            <button type="button" className={primaryButton} onClick={onContinue}>
                Save and Continue
            </button>
        </div>
    );
}