import { LEAD_COLUMNS, type Lead } from '../Lead.ts'
import { LeadCard } from '../Leadcard/Leadcard.tsx'
import {
    board,
    column,
    columnCount,
    columnDot,
    columnDotTone,
    columnHeader,
    columnList,
    columnTitle,
    emptyState,
} from './Kanbanboard.css.ts'

interface KanbanBoardProps {
    leads: Lead[]
    onSelectLead?: (lead: Lead) => void
}

export function KanbanBoard({ leads, onSelectLead }: KanbanBoardProps) {
    return (
        <div className={board}>
            {LEAD_COLUMNS.map((col) => {
                const columnLeads = leads.filter((lead) => lead.status === col.status)

                return (
                    <div className={column} key={col.status}>
                        <div className={columnHeader}>
                            <span className={`${columnDot} ${columnDotTone[col.status]}`} aria-hidden="true" />
                            <span className={columnTitle}>{col.label}</span>
                            <span className={columnCount}>({columnLeads.length})</span>
                        </div>

                        <div className={columnList}>
                            {columnLeads.length ? (
                                columnLeads.map((lead) => (
                                    <LeadCard lead={lead} key={lead.id} onSelect={onSelectLead} />
                                ))
                            ) : (
                                <div className={emptyState}>No leads yet</div>
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}