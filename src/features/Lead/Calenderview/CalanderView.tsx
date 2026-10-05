import { useMemo, useState } from 'react'
import type { Lead } from '@/data/lead'
import {
    avatarTone,
    calendarTable,
    dayCell,
    dayCellOutside,
    dayNumber,
    dayNumberToday,
    headerCell,
    headerRow,
    nav,
    navButton,
    pill,
    pillAvatar,
    pillDot,
    pillDotTone,
    pillList,
    pillName,
    rangeLabel,
    toolbar,
    viewToggle,
    viewToggleButton,
    viewToggleButtonActive,
    weekRow,
    wrap,
} from './Calenderview.css.ts'
import LeftArrow from "@/components/icons/LeftArrow";
import RightArrow from "@/components/icons/RightArrow";

interface CalendarViewProps {
    leads: Lead[]
    onSelectLead?: (lead: Lead) => void
}

const DAY_LABELS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const startOfWeek = (date: Date) => {
    const day = date.getDay()
    const diff = (day === 0 ? -6 : 1) - day
    const start = new Date(date)
    start.setDate(date.getDate() + diff)
    start.setHours(0, 0, 0, 0)
    return start
};

const toIsoDate = (date: Date) => {
    return date.toISOString().slice(0, 10)
};

const isSameDay = (a: Date, b: Date) => {
    return toIsoDate(a) === toIsoDate(b)
};

const initialsOf = (name: string) => {
    return name
        .split(' ')
        .map((part) => part.charAt(0))
        .join('')
        .slice(0, 2)
        .toUpperCase()
};

export const CalendarView = ({ leads, onSelectLead }: CalendarViewProps) => {
    const [anchorDate, setAnchorDate] = useState(() => new Date())
    const today = useMemo(() => new Date(), [])

    const weeks = useMemo(() => {
        const monthStart = new Date(anchorDate.getFullYear(), anchorDate.getMonth(), 1)
        const monthEnd = new Date(anchorDate.getFullYear(), anchorDate.getMonth() + 1, 0)

        const gridStart = startOfWeek(monthStart)
        const gridEnd = startOfWeek(monthEnd)
        gridEnd.setDate(gridEnd.getDate() + 6)

        const totalDays = Math.round((gridEnd.getTime() - gridStart.getTime()) / 86400000) + 1
        const days = Array.from({ length: totalDays }, (_, index) => {
            const day = new Date(gridStart)
            day.setDate(gridStart.getDate() + index)
            return day
        })

        const rows: Date[][] = []
        for (let i = 0; i < days.length; i += 7) {
            rows.push(days.slice(i, i + 7))
        }
        return rows
    }, [anchorDate])

    const rangeLabelText = useMemo(() => {
        const formatter = new Intl.DateTimeFormat('en-AU', { month: 'long', year: 'numeric' })
        return formatter.format(anchorDate)
    }, [anchorDate])

    const leadsByDay = useMemo(() => {
        const map = new Map<string, Lead[]>()
        for (const lead of leads) {
            const key = lead.date
            map.set(key, [...(map.get(key) ?? []), lead])
        }
        return map
    }, [leads])

    const goToPreviousMonth = () => {
        setAnchorDate((current) => new Date(current.getFullYear(), current.getMonth() - 1, 1))
    };

    const goToNextMonth = () => {
        setAnchorDate((current) => new Date(current.getFullYear(), current.getMonth() + 1, 1))
    };

    const goToToday = () => {
        setAnchorDate(new Date())
    };

    return (
        <div className={wrap}>
            <div className={toolbar}>
                <div className={nav}>
                    <button type="button" className={navButton} onClick={goToPreviousMonth} aria-label="Previous month">
                        <LeftArrow/>
                    </button>
                    <span className={rangeLabel}>{rangeLabelText}</span>
                    <button type="button" className={navButton} onClick={goToNextMonth} aria-label="Next month">
                        <RightArrow/>
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

            <div className={calendarTable}>
                <div className={headerRow}>
                    {DAY_LABELS.map((label) => (
                        <div className={headerCell} key={label}>
                            {label}
                        </div>
                    ))}
                </div>

                {weeks.map((week) => (
                    <div className={weekRow} key={week[0].toISOString()}>
                        {week.map((day) => {
                            const dayLeads = leadsByDay.get(toIsoDate(day)) ?? []
                            const isToday = isSameDay(day, today)
                            const isOutsideMonth = day.getMonth() !== anchorDate.getMonth()

                            return (
                                <div
                                    className={`${dayCell} ${isOutsideMonth ? dayCellOutside : ''}`}
                                    key={day.toISOString()}
                                >
                                    {isOutsideMonth ? null : (
                                        <>
                                            <span className={`${dayNumber} ${isToday ? dayNumberToday : ''}`}>
                                                {day.getDate()}
                                            </span>

                                            <div className={pillList}>
                                                {dayLeads.map((lead) => (
                                                    <button
                                                        type="button"
                                                        className={pill}
                                                        key={lead.id}
                                                        onClick={() => onSelectLead?.(lead)}
                                                    >
                                                        <span
                                                            className={`${pillAvatar} ${avatarTone[lead.avatarTone]}`}
                                                            aria-hidden="true"
                                                        >
                                                            {initialsOf(lead.name)}
                                                        </span>
                                                        <span className={pillName}>{lead.name}</span>
                                                        <span
                                                            className={`${pillDot} ${pillDotTone[lead.status]}`}
                                                            aria-hidden="true"
                                                        />
                                                    </button>
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                ))}
            </div>
        </div>
    )
};