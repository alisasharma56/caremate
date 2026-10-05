import { useState } from 'react'
import { CalendarView } from '../Calenderview/CalanderView.tsx'
import { KanbanBoard } from '../kanbanboard/Kanbanboard.tsx'
import { LEADS, type Lead, type LeadStatus } from '@/data/lead'
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

export const LeadsPage = () => {
    const [view, setView] = useState<LeadsView>('kanban')
    const [leads, setLeads] = useState<Lead[]>(LEADS)

    const handleSelectLead = (lead: Lead) => {
        // Hook up to a lead detail drawer/page once that's built.
        console.log('Selected lead', lead)
    }

    const handleMoveLead = (leadId: string, status: LeadStatus) => {
        setLeads((current) =>
            current.map((lead) => (lead.id === leadId ? { ...lead, status } : lead)),
        )
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
                <KanbanBoard leads={leads} onSelectLead={handleSelectLead} onMoveLead={handleMoveLead} />
            ) : (
                <CalendarView leads={leads} onSelectLead={handleSelectLead} />
            )}
        </div>
    )
}