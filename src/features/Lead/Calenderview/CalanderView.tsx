import { useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { Lead } from '../Lead.ts'
import {
    dayColumn,
    dayColumnToday,
    dayHeader,
    dayName,
    dayNumber,
    grid,
    nav,
    navButton,
    pill,
    pillDot,
    pillDotTone,
    pillList,
    rangeLabel,
    toolbar,
    viewToggle,
    viewToggleButton,
    viewToggleButtonActive,
    wrap,
} from './Calenderview.css.ts'

interface CalendarViewProps {
    leads: Lead[]
    onSelectLead?: (lead: Lead) => void
}

const DAY_LABELS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

function startOfWeek(date: Date) {
    const day = date.getDay()
    const diff = (day === 0 ? -6 : 1) - day
    const start = new Date(date)
    start.setDate(date.getDate() + diff)
    start.setHours(0, 0, 0, 0)
    return start
}

function toIsoDate(date: Date) {
    return date.toISOString().slice(0, 10)
}

function isSameDay(a: Date, b: Date) {
    return toIsoDate(a) === toIsoDate(b)
}

export function CalendarView({ leads, onSelectLead }: CalendarViewProps) {
    const [anchorDate, setAnchorDate] = useState(() => new Date())
    const today = useMemo(() => new Date(), [])

    const weekDays = useMemo(() => {
        const start = startOfWeek(anchorDate)
        return Array.from({ length: 7 }, (_, index) => {
            const day = new Date(start)
            day.setDate(start.getDate() + index)
            return day
        })
    }, [anchorDate])

    const rangeLabelText = useMemo(() => {
        const first = weekDays[0]
        const last = weekDays[6]
        const sameMonth = first.getMonth() === last.getMonth()
        const monthFormatter = new Intl.DateTimeFormat('en-AU', { month: 'short' })
        const yearFormatter = new Intl.DateTimeFormat('en-AU', { year: 'numeric' })

        const from = sameMonth
            ? `${first.getDate()}`
            : `${first.getDate()} ${monthFormatter.format(first)}`
        const to = `${last.getDate()} ${monthFormatter.format(last)}`

        return `${from} – ${to} ${yearFormatter.format(last)}`
    }, [weekDays])

    const leadsByDay = useMemo(() => {
        const map = new Map<string, Lead[]>()
        for (const lead of leads) {
            const key = lead.date
            map.set(key, [...(map.get(key) ?? []), lead])
        }
        return map
    }, [leads])

    function goToPreviousWeek() {
        setAnchorDate((current) => {
            const next = new Date(current)
            next.setDate(current.getDate() - 7)
            return next
        })
    }

    function goToNextWeek() {
        setAnchorDate((current) => {
            const next = new Date(current)
            next.setDate(current.getDate() + 7)
            return next
        })
    }

    function goToToday() {
        setAnchorDate(new Date())
    }

    return (
        <div className={wrap}>
            <div className={toolbar}>
                <div className={nav}>
                    <button type="button" className={navButton} onClick={goToPreviousWeek} aria-label="Previous week">
                        <ChevronLeft size={16} />
                    </button>
                    <span className={rangeLabel}>{rangeLabelText}</span>
                    <button type="button" className={navButton} onClick={goToNextWeek} aria-label="Next week">
                        <ChevronRight size={16} />
                    </button>
                </div>

                <div className={viewToggle}>
                    <button
                        type="button"
                        className={`${viewToggleButton} ${viewToggleButtonActive}`}
                    >
                        Weekly
                    </button>
                    <button type="button" className={viewToggleButton} onClick={goToToday}>
                        Today
                    </button>
                </div>
            </div>

            <div className={grid}>
                {weekDays.map((day, index) => {
                    const dayLeads = leadsByDay.get(toIsoDate(day)) ?? []
                    const isToday = isSameDay(day, today)

                    return (
                        <div
                            className={`${dayColumn} ${isToday ? dayColumnToday : ''}`}
                            key={day.toISOString()}
                        >
                            <div className={dayHeader}>
                                <span className={dayName}>{DAY_LABELS[index]}</span>
                                <span className={dayNumber}>{day.getDate()}</span>
                            </div>

                            <div className={pillList}>
                                {dayLeads.map((lead) => (
                                    <button
                                        type="button"
                                        className={pill}
                                        key={lead.id}
                                        onClick={() => onSelectLead?.(lead)}
                                    >
                        <span
                            className={`${pillDot} ${pillDotTone[lead.status]}`}
                            aria-hidden="true"
                        />
                                        {lead.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}