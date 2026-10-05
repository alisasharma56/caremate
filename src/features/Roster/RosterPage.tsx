import { useCallback, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { useRosterStore } from './store'
import { ChevronLeft, ChevronRight, Plus, Sparkles } from 'lucide-react'
import { suggestions, dayNames, dateFormat } from '@/data/roster'
import type { RosterView, TeamFilter } from '@/data/roster'
import { RosterSchedule } from './RosterSchedule'
import { RosterSummary } from './RosterSummary'
import { ShiftDetailsDrawer } from './ShiftDetailsDrawer'
import {
  page,
  main,
  toolbar,
  iconButton,
  date as dateStyle,
  toggle,
  toggleButton,
  active,
  actions,
  button,
  primaryButton,
  filter,
  teamFilterInput,
  notice as noticeStyle,
} from './Roster.css'

export const RosterPage = () => {
  const { week, setWeek, shifts, setShifts, hiddenSuggestions, setHiddenSuggestions, notice, setNotice, published, setPublished } = useRosterStore()
  const [view, setView] = useState<RosterView>('weekly')
  const [filterOpen, setFilterOpen] = useState(false)
  const [teamFilter, setTeamFilter] = useState<TeamFilter>('all')
  const [selectedShiftId, setSelectedShiftId] = useState<string | null>(null)
  const [selectedDay, setSelectedDay] = useState(0)
  const start = new Date(2026, 4, 4 + week * 7)
  const dates = dayNames.map((_, day) =>
    new Date(start.getFullYear(), start.getMonth(), start.getDate() + day),
  )
  const visibleDays = view === 'weekly' ? [0, 1, 2, 3, 4, 5, 6] : [selectedDay]
  const weekShifts = shifts.filter(shift => (shift.week ?? 0) === week)
  const selectedShift = weekShifts.find(shift => shift.id === selectedShiftId)
  const closeShiftDetails = useCallback(() => setSelectedShiftId(null), [])
  const visibleSuggestions = suggestions.filter(item => !hiddenSuggestions.includes(item.id))

  const showToday = () => {
    const now = new Date()
    const base = new Date(2026, 4, 4)
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const daysSinceBase = Math.round((today.getTime() - base.getTime()) / 86400000)
    setWeek(Math.floor(daysSinceBase / 7))
    setSelectedDay(((daysSinceBase % 7) + 7) % 7)
    setView('today')
  }

  const step = (direction: 1 | -1) => {
    if (view === 'weekly') {
      setWeek(week + direction)
      return
    }
    const day = selectedDay + direction
    if (day < 0 || day > 6) setWeek(week + direction)
    setSelectedDay((day + 7) % 7)
  }

  const publishShifts = () => {
    setPublished(true)
    setNotice('This roster has been marked as published in this preview.')
  }

  const acceptSuggestion = (id: string) => {
    if (week !== 0) {
      setNotice('Navigate to 4–10 May to apply these suggestions.')
      return
    }
    setShifts(current => current.map(shift => {
      if (id === 'hours' && shift.status === 'conflict') {
        return { ...shift, workerId: 'prabin', status: undefined }
      }
      if (id === 'vacant' && shift.id === 'vacant-5') {
        return { ...shift, workerId: 'prabin', status: 'suggested' }
      }
      if (id === 'travel' && shift.workerId === 'prabin' && shift.day === 4) {
        return { ...shift, time: '12:45–3:30' }
      }
      return shift
    }))
    setHiddenSuggestions(current => [...current, id])
    setPublished(false)
    setNotice('Suggestion applied to the roster.')
  }

  return (
    <div className={page}>
      <section className={main} aria-label="Roster schedule">
        <div className={toolbar}>
          <button className={iconButton} aria-label={view === 'weekly' ? 'Previous week' : 'Previous day'} onClick={() => step(-1)}>
            <ChevronLeft size={16} />
          </button>
          <span className={dateStyle}>
            {view === 'weekly'
              ? `${start.getDate()}–${dateFormat.format(dates[6])} ${dates[6].getFullYear()}`
              : `${dayNames[dates[selectedDay].getDay()]}, ${dateFormat.format(dates[selectedDay])} ${dates[selectedDay].getFullYear()}`}
          </span>
          <button className={iconButton} aria-label={view === 'weekly' ? 'Next week' : 'Next day'} onClick={() => step(1)}>
            <ChevronRight size={16} />
          </button>
          <div className={toggle}>
            <button
              className={`${toggleButton} ${view === 'weekly' ? active : ''}`}
              aria-pressed={view === 'weekly'}
              onClick={() => setView('weekly')}
            >
              Weekly
            </button>
            <button
              className={`${toggleButton} ${view === 'today' ? active : ''}`}
              aria-pressed={view === 'today'}
              onClick={showToday}
            >
              Today
            </button>
          </div>
          <div className={actions}>
            <button className={button} aria-expanded={filterOpen} onClick={() => setFilterOpen(!filterOpen)}>
              Filter
            </button>
            <button
              className={button}
              onClick={() => setNotice('AI suggestions are shown in the panel. Review and accept them to update your roster.')}
            >
              <Sparkles size={14} /> AI Suggest
            </button>
            <button className={button} onClick={publishShifts}>
              {published ? 'Published' : 'Publish shifts'}
            </button>
            <Link className={primaryButton} to="/roster/add-shift">
              <Plus size={15} /> Add shift
            </Link>
          </div>
        </div>
        {filterOpen && (
          <div className={filter}>
            <label htmlFor="team-filter">Team</label>
            <select
              id="team-filter"
              className={teamFilterInput}
              value={teamFilter}
              onChange={event => setTeamFilter(event.target.value as TeamFilter)}
            >
              <option value="all">All teams</option>
              <option value="alpha">Team Alpha</option>
              <option value="beta">Team Beta</option>
            </select>
          </div>
        )}
        {notice && <div className={noticeStyle} role="status">{notice}</div>}
        <RosterSchedule
          dates={dates}
          view={view}
          shifts={weekShifts}
          week={week}
          teamFilter={teamFilter}
          visibleDays={visibleDays}
          onSelectShift={shift => setSelectedShiftId(shift.id)}
        />
      </section>
      <RosterSummary
        shifts={weekShifts}
        visibleSuggestions={visibleSuggestions}
        onAccept={acceptSuggestion}
        onDismiss={id => setHiddenSuggestions(current => [...current, id])}
      />
      {selectedShift && (
        <ShiftDetailsDrawer
          shift={selectedShift}
          dates={dates}
          weekShifts={weekShifts}
          onSelectShift={shift => setSelectedShiftId(shift.id)}
          onClose={closeShiftDetails}
        />
      )}
    </div>
  )
}
