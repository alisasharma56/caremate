export type Shift = {
    id: string;
    workerId: string | null;
    day: number;
    client: string;
    time: string;
    status?: 'suggested' | 'conflict';
    week?: number;
    serviceType?: string;
    sessionType?: 'Individual' | 'Group';
};
export const workers = [
    { id: 'sanju', name: 'Sanju Pahari', initials: 'SP', hours: '24/38h', team: 'alpha' },
    { id: 'prabin', name: 'Prabin Gurung', initials: 'PG', hours: '12/38h', team: 'alpha' },
    { id: 'abhinav', name: 'Abhinav', initials: 'A', hours: '30/38h', team: 'alpha' },
    { id: 'nisha', name: 'Nisha Godar', initials: 'NG', hours: '24/38h', team: 'beta' },
] as const;
export const initialShifts: Shift[] = [
    ...Array.from({ length: 7 }, (_, day) => ({ id: `vacant-${day}`, workerId: null, day, client: 'Client A', time: day === 0 ? '6:30–12:45' : '9:30–12:45' })),
    ...workers.flatMap((worker, index) => [1, 2, 3, 4, 5].filter(day => index !== 1 || day !== 3).filter(day => index !== 2 || day < 3).map(day => ({
        id: `${worker.id}-${day}`, workerId: worker.id, day, client: day < 4 ? 'M. Thompson' : 'K. Singh', time: day < 4 ? '9:30–12:45' : '1:00–3:45',
        status: (index === 2 && day === 1 ? 'conflict' : (index === 0 && day === 3) || (index === 3 && day === 2) ? 'suggested' : undefined) as Shift['status'],
    }))),
    { id: 'sanju-extra-1', workerId: 'sanju', day: 1, client: 'K. Singh', time: '1:00–3:45' },
    { id: 'sanju-extra-3', workerId: 'sanju', day: 3, client: 'K. Singh', time: '1:00–3:45' },
    { id: 'nisha-extra-1', workerId: 'nisha', day: 1, client: 'K. Singh', time: '1:00–3:45' },
];
export const suggestions = [
    { id: 'hours', title: 'Hours conflict', tone: 'error', description: 'Abhinav is at risk of exceeding weekly hours. Move the M. Thompson shift to Prabin Gurung, who has 16 hours remaining.' },
    { id: 'vacant', title: 'Fill vacant shift', tone: 'warning', description: 'Vacant shift Fri 9:30–12:45 for Client A. Prabin Gurung is available and qualified. Suggest assigning.' },
    { id: 'travel', title: 'Optimise travel', tone: 'success', description: 'Prabin Gurung has back-to-back shifts in different suburbs Thursday. Reordering would save ~40 min travel time.' },
] as const;
export type RosterView = 'weekly' | 'today';
export type TeamFilter = 'all' | (typeof workers)[number]['team'];
export type RosterSuggestion = (typeof suggestions)[number];
export type NewShift = Omit<Shift, 'id' | 'week'>;
export const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const dateFormat = new Intl.DateTimeFormat('en', { day: 'numeric', month: 'short' });
