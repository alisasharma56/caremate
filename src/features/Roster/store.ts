import { create } from 'zustand';
import { initialShifts } from '@/data/roster';
import type { NewShift, Shift } from '@/data/roster';

type RosterStore = {
    week: number;
    shifts: Shift[];
    hiddenSuggestions: string[];
    notice: string;
    published: boolean;
    setWeek: (week: number) => void;
    setShifts: (update: (shifts: Shift[]) => Shift[]) => void;
    setHiddenSuggestions: (update: (ids: string[]) => string[]) => void;
    setNotice: (notice: string) => void;
    setPublished: (published: boolean) => void;
    addShift: (shift: NewShift) => void;
};

export const useRosterStore = create<RosterStore>((set) => ({
    week: 0,
    shifts: initialShifts,
    hiddenSuggestions: [],
    notice: '',
    published: false,
    setWeek: (week) => set({ week }),
    setShifts: (update) => set(state => ({ shifts: update(state.shifts) })),
    setHiddenSuggestions: (update) => set(state => ({ hiddenSuggestions: update(state.hiddenSuggestions) })),
    setNotice: (notice) => set({ notice }),
    setPublished: (published) => set({ published }),
    addShift: (shift) => set(state => ({
        shifts: [...state.shifts, { ...shift, id: crypto.randomUUID(), week: state.week }],
        published: false,
        notice: 'Shift added to the roster.',
    })),
}));
