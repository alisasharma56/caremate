import { useState } from 'react'
import { CalendarView } from '../Calenderview/CalanderView.tsx'
import { KanbanBoard } from '../kanbanboard/Kanbanboard.tsx'
import { LEADS, type Lead } from '../Lead.ts'
import {
    header,
    headerText,
    modeButton,
    modeButtonActive,
    modeToggle,
    page,
    subtitle,
    title,
} from './LeadsPage.css'

type LeadsView = 'kanban' | 'calendar'

export function LeadsPage() {
    const [view, setView] = useState<LeadsView>('kanban')

    function handleSelectLead(lead: Lead) {
        // Hook up to a lead detail drawer/page once that's built.
        console.log('Selected lead', lead)
    }

    return (
        <div className={page}>
            <div className={header}>
                <div className={headerText}>
                    <span className={title}>Leads</span>
                    <span className={subtitle}>
            Track and manage your potential clients throughout the journey.
          </span>
                </div>

                <div className={modeToggle}>
                    <button
                        type="button"
                        className={`${modeButton} ${view === 'kanban' ? modeButtonActive : ''}`}
                        onClick={() => setView('kanban')}
                    >
                        Kanban
                    </button>
                    <button
                        type="button"
                        className={`${modeButton} ${view === 'calendar' ? modeButtonActive : ''}`}
                        onClick={() => setView('calendar')}
                    >
                        Calendar
                    </button>
                </div>
            </div>

            {view === 'kanban' ? (
                <KanbanBoard leads={LEADS} onSelectLead={handleSelectLead} />
            ) : (
                <CalendarView leads={LEADS} onSelectLead={handleSelectLead} />
            )}
        </div>
    )
}