import { useState } from 'react';
import { PARTICIPANTS } from '@/data/participants';
import { dayNames, workers } from '@/data/roster';
import type { NewShift } from '@/data/roster';
import {
  shiftForm,
  modalHeading,
  modalTitle,
  modalActions,
  modalCancel,
  modalSave,
  modalBody,
  formRow,
  field,
  modalInput,
  formThreeColumns,
  sessionField,
  sessionOptions,
  sessionButton,
  sessionSelected,
} from './Roster.css';

interface AddShiftFormProps {
    dates: Date[];
    onClose: () => void;
    onSave: (shift: NewShift) => void;
}

const inputDate = (date: Date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
};

export const AddShiftForm = ({ dates, onClose, onSave }: AddShiftFormProps) => {
    const [date, setDate] = useState('');
    const [session, setSession] = useState<'Individual' | 'Group'>('Individual');
    const selectedDay = dates.findIndex(item => inputDate(item) === date);
    return (
            <form className={shiftForm} aria-labelledby="add-shift-title"
                onKeyDown={event => { if (event.key === 'Escape') onClose(); }}
                onSubmit={event => {
                    event.preventDefault();
                    const data = new FormData(event.currentTarget);
                    if (selectedDay < 0) return;
                    onSave({
                        workerId: String(data.get('worker')) || null,
                        day: selectedDay,
                        client: String(data.get('client')),
                        time: `${data.get('start')}–${data.get('end')}`,
                        serviceType: String(data.get('serviceType')),
                        sessionType: session,
                    });
                }}>
                <div className={modalHeading}>
                    <h2 className={modalTitle} id="add-shift-title">Add Participant</h2>
                    <div className={modalActions}>
                        <button type="button" className={modalCancel} onClick={onClose}>Cancel</button>
                        <button type="submit" className={modalSave}>Save</button>
                    </div>
                </div>
                <div className={modalBody}>
                    <div className={formRow}>
                        <label className={field}>Worker
                            <select name="worker" className={modalInput} autoFocus>
                                {workers.map(worker => <option value={worker.id} key={worker.id}>{worker.name}</option>)}
                                <option value="">Vacant shift</option>
                            </select>
                        </label>
                        <label className={field}>Participant
                            <select name="client" className={modalInput} required>
                                {PARTICIPANTS.map(participant => <option key={participant.id} value={participant.name}>{participant.name}</option>)}
                            </select>
                        </label>
                    </div>
                    <div className={formThreeColumns}>
                        <label className={field}>Service Type
                            <select name="serviceType" className={modalInput}>
                                <option>Personal Care</option><option>Community Access</option><option>Domestic Assistance</option>
                            </select>
                        </label>
                        <label className={field}>Date
                            <input className={modalInput} type="date" name="date" value={date}
                                min={inputDate(dates[0])} max={inputDate(dates[6])}
                                onChange={event => setDate(event.target.value)} required />
                        </label>
                        <label className={field}>Day
                            <input className={modalInput} value={selectedDay < 0 ? '' : dayNames[dates[selectedDay].getDay()]} placeholder="mm / dd / yyyy" readOnly />
                        </label>
                    </div>
                    <div className={formRow}>
                        <label className={field}>Start Time
                            <input className={modalInput} name="start" type="time" defaultValue="00:00" required />
                        </label>
                        <label className={field}>End Time
                            <input className={modalInput} name="end" type="time" defaultValue="00:00" required />
                        </label>
                    </div>
                    <fieldset className={sessionField}>
                        <legend>Session Type</legend>
                        <div className={sessionOptions}>
                            {(['Individual', 'Group'] as const).map(type => (
                                <button key={type} type="button" aria-pressed={session === type}
                                    className={`${sessionButton} ${session === type ? sessionSelected : ''}`}
                                    onClick={() => setSession(type)}>{type}</button>
                            ))}
                        </div>
                    </fieldset>
                </div>
            </form>
    );
};
