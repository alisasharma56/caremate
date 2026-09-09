import { useState } from "react";
import * as styles from "./Addparticipantpage.css.ts";

const SUPPORT_CATEGORIES = [
    "Core - Daily Activities",
    "Core - Community Access",
    "SIL",
    "Capacity Building - Support Coord.",
    "Capital - Assistive Tech",
];

interface AddParticipantPageProps {
    onCancel: () => void;
    onSave: () => void;
}

export function AddParticipantPage({ onCancel, onSave }: AddParticipantPageProps) {
    const [selectedCategories, setSelectedCategories] = useState<string[]>(["Core - Daily Activities"]);

    function toggleCategory(category: string) {
        setSelectedCategories((current) =>
            current.includes(category) ? current.filter((c) => c !== category) : [...current, category],
        );
    }

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <h1 className={styles.title}>Add Participant</h1>
                <div className={styles.headerActions}>
                    <button type="button" className={styles.cancelButton} onClick={onCancel}>
                        Cancel
                    </button>
                    <button type="button" className={styles.saveButton} onClick={onSave}>
                        Save
                    </button>
                </div>
            </div>

            <div className={styles.form}>
                <div className={styles.fieldRow}>
                    <div className={styles.field}>
                        <label className={styles.fieldLabel}>Full name</label>
                        <input type="text" className={styles.inputBase} placeholder="e.g. Noah Whitfield" />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.fieldLabel}>Date of birth</label>
                        <input type="text" className={styles.inputBase} placeholder="mm / dd / yyyy" />
                    </div>
                </div>

                <div className={styles.fieldRow}>
                    <div className={styles.field}>
                        <label className={styles.fieldLabel}>NDIS number</label>
                        <input type="text" className={styles.inputBase} placeholder="e.g. 430 281 947" />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.fieldLabel}>State</label>
                        <select className={styles.select} defaultValue="VIC">
                            <option>VIC</option>
                            <option>NSW</option>
                            <option>QLD</option>
                            <option>WA</option>
                            <option>SA</option>
                            <option>TAS</option>
                            <option>ACT</option>
                            <option>NT</option>
                        </select>
                    </div>
                </div>

                <div className={styles.fieldRow}>
                    <div className={styles.field}>
                        <label className={styles.fieldLabel}>Plan start date</label>
                        <input type="text" className={styles.inputBase} placeholder="mm / dd / yyyy" />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.fieldLabel}>Plan end date</label>
                        <input type="text" className={styles.inputBase} placeholder="mm / dd / yyyy" />
                    </div>
                </div>

                <div className={styles.field}>
                    <label className={styles.fieldLabel}>Support categories</label>
                    <div className={styles.chipRow}>
                        {SUPPORT_CATEGORIES.map((category) => (
                            <button
                                key={category}
                                type="button"
                                className={`${styles.chip} ${
                                    selectedCategories.includes(category) ? styles.chipSelected : ""
                                }`}
                                onClick={() => toggleCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={styles.fieldRow}>
                    <div className={styles.field}>
                        <label className={styles.fieldLabel}>Plan manager name</label>
                        <input type="text" className={styles.inputBase} placeholder="e.g. NDIS Plan Partners" />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.fieldLabel}>Plan manager email</label>
                        <input type="text" className={styles.inputBase} placeholder="payments@example.com" />
                    </div>
                </div>

                <div className={styles.fieldRow}>
                    <div className={styles.field}>
                        <label className={styles.fieldLabel}>Support coordinator</label>
                        <input type="text" className={styles.inputBase} placeholder="Name (optional)" />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.fieldLabel}>Primary worker assigned</label>
                        <select className={styles.select} defaultValue="">
                            <option value="" disabled>
                                Unassigned
                            </option>
                            <option>Oliver Bennett</option>
                            <option>Grace Phillips</option>
                        </select>
                    </div>
                </div>

                <div className={styles.field}>
                    <label className={styles.fieldLabel}>Emergency contact</label>
                    <input type="text" className={styles.inputBase} placeholder="Name & phone number" />
                </div>

                <div className={styles.field}>
                    <label className={styles.fieldLabel}>Notes</label>
                    <textarea className={styles.textarea} placeholder="Anything else the team should know..." />
                </div>
            </div>
        </div>
    );
}