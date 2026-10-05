import { useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { X } from 'lucide-react';
import { PARTICIPANTS } from '@/data/participants';
import { dayNames, workers } from '@/data/roster';
import type { Shift } from '@/data/roster';
import {
  drawerOverlay,
  drawer,
  drawerHeader,
  drawerTitle,
  closeButton,
  drawerBody,
  drawerSection,
  sectionHeading,
  clientCard,
  clientAvatar,
  workerName,
  muted,
  statusPill,
  detailList,
  detailTerm,
  detailValue,
  otherShift,
  otherShiftCurrent,
  button,
} from './Roster.css';

const statusLabels = { conflict: 'Conflict', suggested: 'AI suggested' } as const;

interface ShiftDetailsDrawerProps {
    shift: Shift;
    dates: Date[];
    weekShifts: Shift[];
    onSelectShift: (shift: Shift) => void;
    onClose: () => void;
}

export const ShiftDetailsDrawer = ({ shift, dates, weekShifts, onSelectShift, onClose }: ShiftDetailsDrawerProps) => {
    const participant = PARTICIPANTS.find(item => item.name === shift.client);
    const worker = workers.find(item => item.id === shift.workerId);
    const date = dates[shift.day];
    const clientShifts = weekShifts
        .filter(item => item.client === shift.client)
        .sort((a, b) => a.day - b.day || a.time.localeCompare(b.time));

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose(); };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [onClose]);

    const shiftDetails: [string, string][] = [
        ['Date', `${dayNames[date.getDay()]}, ${date.toLocaleDateString('en', { day: 'numeric', month: 'short', year: 'numeric' })}`],
        ['Time', shift.time],
        ['Worker', worker ? worker.name : 'Vacant — unassigned'],
        ['Service type', shift.serviceType ?? '—'],
        ['Session type', shift.sessionType ?? '—'],
        ['Status', shift.status ? statusLabels[shift.status] : 'Scheduled'],
    ];
    const clientDetails: [string, string][] = participant ? [
        ['NDIS number', participant.ndisNumber],
        ['Plan period', `${participant.planPeriod} · ${participant.planReviewNote}`],
        ['Support category', participant.supportCategory],
        ['Plan manager', participant.planManager],
        ['Location', participant.location],
    ] : [];

    return (
        <div className={drawerOverlay} onClick={onClose}>
            <aside className={drawer} role="dialog" aria-modal="true" aria-labelledby="shift-details-title" onClick={event => event.stopPropagation()}>
                <div className={drawerHeader}>
                    <h2 className={drawerTitle} id="shift-details-title">Shift details</h2>
                    <button type="button" className={closeButton} onClick={onClose} aria-label="Close" autoFocus><X size={18}/></button>
                </div>
                <div className={drawerBody}>
                    <section className={drawerSection}>
                        <h3 className={sectionHeading}>CLIENT</h3>
                        <div className={clientCard}>
                            <span className={clientAvatar} style={{ background: participant?.avatarColor }}>
                                {participant?.initials ?? shift.client.slice(0, 2).toUpperCase()}
                            </span>
                            <div>
                                <div className={workerName}>{shift.client}</div>
                                <div className={muted}>{participant ? `${participant.category} · ${participant.since}` : 'No participant record found'}</div>
                            </div>
                            {participant && <span className={statusPill[participant.status]}>{participant.status === 'active' ? 'Active' : 'Review due'}</span>}
                        </div>
                        {participant && <>
                            <dl className={detailList}>
                                {clientDetails.map(([term, value]) => <div key={term}><dt className={detailTerm}>{term}</dt><dd className={detailValue}>{value}</dd></div>)}
                            </dl>
                            <Link className={button} to="/participants">View participant profile</Link>
                        </>}
                    </section>
                    <section className={drawerSection}>
                        <h3 className={sectionHeading}>SHIFT</h3>
                        <dl className={detailList}>
                            {shiftDetails.map(([term, value]) => <div key={term}><dt className={detailTerm}>{term}</dt><dd className={detailValue}>{value}</dd></div>)}
                        </dl>
                    </section>
                    <section className={drawerSection}>
                        <h3 className={sectionHeading}>SHIFTS THIS WEEK ({clientShifts.length})</h3>
                        {clientShifts.map(item => (
                            <button type="button" key={item.id} className={`${otherShift} ${item.id === shift.id ? otherShiftCurrent : ''}`}
                                aria-current={item.id === shift.id} onClick={() => onSelectShift(item)}>
                                <span>{dayNames[dates[item.day].getDay()]} {dates[item.day].getDate()} · {item.time}</span>
                                <span className={muted}>{workers.find(w => w.id === item.workerId)?.name ?? 'Vacant'}</span>
                            </button>
                        ))}
                    </section>
                </div>
            </aside>
        </div>
    );
};
