import { useState } from "react";
import {
  page,
  header,
  title,
  headerActions,
  cancelButton,
  saveButton,
  form,
  fieldRow,
  field,
  fieldLabel,
  inputBase,
  select,
  chipRow,
  chip,
  chipSelected,
  textarea,
} from "./Addparticipantpage.css.ts";

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

export const AddParticipantPage = ({ onCancel, onSave }: AddParticipantPageProps) => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>(["Core - Daily Activities"]);

    const toggleCategory = (category: string) => {
        setSelectedCategories((current) =>
            current.includes(category) ? current.filter((c) => c !== category) : [...current, category],
        );
    };

    return (
        <div className={page}>
            <div className={header}>
                <h1 className={title}>Add Participant</h1>
                <div className={headerActions}>
                    <button type="button" className={cancelButton} onClick={onCancel}>
                        Cancel
                    </button>
                    <button type="button" className={saveButton} onClick={onSave}>
                        Save
                    </button>
                </div>
            </div>

            <div className={form}>
                <div className={fieldRow}>
                    <div className={field}>
                        <label className={fieldLabel}>Full name</label>
                        <input type="text" className={inputBase} placeholder="e.g. Noah Whitfield" />
                    </div>
                    <div className={field}>
                        <label className={fieldLabel}>Date of birth</label>
                        <input type="text" className={inputBase} placeholder="mm / dd / yyyy" />
                    </div>
                </div>

                <div className={fieldRow}>
                    <div className={field}>
                        <label className={fieldLabel}>NDIS number</label>
                        <input type="text" className={inputBase} placeholder="e.g. 430 281 947" />
                    </div>
                    <div className={field}>
                        <label className={fieldLabel}>State</label>
                        <select className={select} defaultValue="VIC">
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

                <div className={fieldRow}>
                    <div className={field}>
                        <label className={fieldLabel}>Plan start date</label>
                        <input type="text" className={inputBase} placeholder="mm / dd / yyyy" />
                    </div>
                    <div className={field}>
                        <label className={fieldLabel}>Plan end date</label>
                        <input type="text" className={inputBase} placeholder="mm / dd / yyyy" />
                    </div>
                </div>

                <div className={field}>
                    <label className={fieldLabel}>Support categories</label>
                    <div className={chipRow}>
                        {SUPPORT_CATEGORIES.map((category) => (
                            <button
                                key={category}
                                type="button"
                                className={`${chip} ${
                                    selectedCategories.includes(category) ? chipSelected : ""
                                }`}
                                onClick={() => toggleCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={fieldRow}>
                    <div className={field}>
                        <label className={fieldLabel}>Plan manager name</label>
                        <input type="text" className={inputBase} placeholder="e.g. NDIS Plan Partners" />
                    </div>
                    <div className={field}>
                        <label className={fieldLabel}>Plan manager email</label>
                        <input type="text" className={inputBase} placeholder="payments@example.com" />
                    </div>
                </div>

                <div className={fieldRow}>
                    <div className={field}>
                        <label className={fieldLabel}>Support coordinator</label>
                        <input type="text" className={inputBase} placeholder="Name (optional)" />
                    </div>
                    <div className={field}>
                        <label className={fieldLabel}>Primary worker assigned</label>
                        <select className={select} defaultValue="">
                            <option value="" disabled>
                                Unassigned
                            </option>
                            <option>Oliver Bennett</option>
                            <option>Grace Phillips</option>
                        </select>
                    </div>
                </div>

                <div className={field}>
                    <label className={fieldLabel}>Emergency contact</label>
                    <input type="text" className={inputBase} placeholder="Name & phone number" />
                </div>

                <div className={field}>
                    <label className={fieldLabel}>Notes</label>
                    <textarea className={textarea} placeholder="Anything else the team should know..." />
                </div>
            </div>
        </div>
    );
};