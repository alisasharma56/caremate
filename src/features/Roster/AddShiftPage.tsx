import { useNavigate } from '@tanstack/react-router';
import { AddShiftForm } from './AddShiftForm';
import { dayNames } from './data';
import { useRosterStore } from './store';

export function AddShiftPage() {
    const navigate = useNavigate();
    const week = useRosterStore(state => state.week);
    const addShift = useRosterStore(state => state.addShift);
    const start = new Date(2026, 4, 4 + week * 7);
    const dates = dayNames.map((_, day) => new Date(start.getFullYear(), start.getMonth(), start.getDate() + day));
    const returnToRoster = () => { void navigate({ to: '/roster' }); };

    return <AddShiftForm dates={dates} onClose={returnToRoster} onSave={shift => {
        addShift(shift);
        returnToRoster();
    }} />;
}
