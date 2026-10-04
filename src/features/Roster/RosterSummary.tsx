import { StatBox } from '@/components/Statbox/Statbox';
import type { Shift, RosterSuggestion } from './data';
import {
  sidebar,
  sectionHeading,
  stats,
  statTones,
  tones,
  coverage as coverageStyle,
  coverageLabels,
  progress,
  progressFill,
  count,
  suggestion,
  suggestionTitle,
  description,
  smallButton,
  dismiss,
} from './Roster.css';
interface RosterSummaryProps {
    shifts: Shift[];
    visibleSuggestions: readonly RosterSuggestion[];
    onAccept: (id: string) => void;
    onDismiss: (id: string) => void;
}
export function RosterSummary({ shifts, visibleSuggestions, onAccept, onDismiss }: RosterSummaryProps) {
    const vacant = shifts.filter(shift => !shift.workerId).length;
    const conflicts = shifts.filter(shift => shift.status === 'conflict').length;
    const suggested = shifts.filter(shift => shift.status === 'suggested').length;
    const coverage = shifts.length ? Math.round((shifts.length - vacant) / shifts.length * 100) : 0;
    return (<aside className={sidebar} aria-label="Week summary and AI suggestions">
      <h2 className={sectionHeading}>WEEK SUMMARY</h2>
      <div className={stats}>
        <StatBox value={String(shifts.length)} label="Total Shifts" valueClassName={statTones.primary}/>
        <StatBox value={String(vacant)} label="Vacant" valueClassName={tones.warning}/>
        <StatBox value={String(conflicts)} label="Conflicts" valueClassName={tones.error}/>
        <StatBox value={String(suggested)} label="AI Suggested" valueClassName={tones.success}/>
      </div>
      <div className={coverageStyle}><div className={coverageLabels}><span>Coverage</span><span className={tones.warning}>{coverage}%</span></div><div className={progress} role="progressbar" aria-label="Shift coverage" aria-valuenow={coverage} aria-valuemin={0} aria-valuemax={100}><div className={progressFill} style={{ width: `${coverage}%` }}/></div></div>
      <h2 className={sectionHeading}>AI SUGGESTIONS <span className={count}>{visibleSuggestions.length}</span></h2>
      {visibleSuggestions.map(item => <article className={suggestion} key={item.id}><h3 className={`${suggestionTitle} ${tones[item.tone]}`}><span>●</span>{item.title}</h3><p className={description}>{item.description}</p><button className={smallButton} onClick={() => onAccept(item.id)}>Accept</button><button className={dismiss} onClick={() => onDismiss(item.id)}>Dismiss</button></article>)}
      {!visibleSuggestions.length && <p className={description}>All suggestions reviewed.</p>}
    </aside>);
}
