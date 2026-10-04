import { Fragment } from 'react';
import { Users } from 'lucide-react';
import { workers, dayNames } from './data';
import type { Shift, RosterView, TeamFilter } from './data';
import {
  shift as shiftStyle,
  shiftStatus,
  badge,
  aiBadge,
  muted,
  row,
  todayRow,
  scroll,
  grid,
  workerHeader,
  dayHeader,
  vacantLabel,
  vacantCell,
  team as teamStyle,
  worker as workerStyle,
  avatar,
  betaAvatar,
  workerName,
  cell,
} from './Roster.css';
function ShiftCard({ shift }: {
    shift: Shift;
}) {
    return <div className={`${shiftStyle} ${shift.status ? shiftStatus[shift.status] : ''}`}>
    {shift.status === 'conflict' && <span className={badge}>Conflict</span>}
    {shift.status === 'suggested' && <span className={`${badge} ${aiBadge}`} title="AI suggested shift">AI</span>}
    <div>{shift.workerId ? shift.client : shift.time}</div>
    <div className={muted}>{shift.workerId ? shift.time : shift.client}</div>
  </div>;
}
interface RosterScheduleProps {
    dates: Date[];
    view: RosterView;
    shifts: Shift[];
    week: number;
    teamFilter: TeamFilter;
    visibleDays: number[];
}
export function RosterSchedule({ dates, view, shifts, week, teamFilter, visibleDays }: RosterScheduleProps) {
    const rowClass = `${row} ${view === 'today' ? todayRow : ''}`;
    return (<div className={scroll}><div className={view === 'weekly' ? grid : undefined} role="table" aria-label="Worker shifts">
        <div className={rowClass} role="row"><div className={workerHeader} role="columnheader"><Users size={15}/> Workers</div>{visibleDays.map(day => <div className={dayHeader} role="columnheader" key={day}><span>{dayNames[dates[day].getDay()]}</span><strong>{dates[day].getDate()}</strong></div>)}</div>
        <div className={rowClass} role="row"><div className={vacantLabel} role="rowheader">• Vacant shifts</div>{visibleDays.map(day => <div className={vacantCell} role="cell" key={day}>{shifts.filter(shift => !shift.workerId && shift.day === day).map(shift => <ShiftCard key={shift.id} shift={shift}/>)}</div>)}</div>
        {(['alpha', 'beta'] as const).filter(team => teamFilter === 'all' || teamFilter === team).map(team => <Fragment key={team}>
          <div className={teamStyle[team]}>Team {team}</div>
          {workers.filter(worker => worker.team === team).map(worker => <div className={rowClass} role="row" key={worker.id}>
            <div className={workerStyle} role="rowheader"><span className={`${avatar} ${team === 'beta' ? betaAvatar : ''}`}>{worker.initials}</span><div><div className={workerName}>{worker.name}</div><div className={muted}>{week === 0 ? worker.hours : '0/38h'}</div></div></div>
            {visibleDays.map(day => <div className={cell} role="cell" key={day}>{shifts.filter(shift => shift.workerId === worker.id && shift.day === day).map(shift => <ShiftCard key={shift.id} shift={shift}/>)}</div>)}
          </div>)}
        </Fragment>)}
      </div></div>);
}
