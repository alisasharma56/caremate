import { useRef, useState } from 'react'
import { LEAD_COLUMNS, type Lead, type LeadStatus } from '../Lead.ts'
import { LeadCard, LeadCardContent } from '../Leadcard/Leadcard.tsx'
import {
    board,
    column,
    columnCount,
    columnHeader,
    columnList,
    columnListDragOver,
    columnTitle,
    dragFloatingCard,
    emptyState,
} from './Kanbanboard.css.ts'

interface KanbanBoardProps {
    leads: Lead[]
    onSelectLead?: (lead: Lead) => void
    onMoveLead?: (leadId: string, status: LeadStatus) => void
}

interface DragState {
    lead: Lead
    x: number
    y: number
    offsetX: number
    offsetY: number
    width: number
}

const DRAG_THRESHOLD = 6

export function KanbanBoard({ leads, onSelectLead, onMoveLead }: KanbanBoardProps) {
    const [drag, setDrag] = useState<DragState | null>(null)
    const [dragOverStatus, setDragOverStatus] = useState<LeadStatus | null>(null)
    const suppressClickRef = useRef(false)

    function statusAtPoint(x: number, y: number): LeadStatus | null {
        const el = document.elementFromPoint(x, y)
        const columnEl = el?.closest<HTMLElement>('[data-column-status]')
        return (columnEl?.dataset.columnStatus as LeadStatus | undefined) ?? null
    }

    function handlePointerDown(event: React.PointerEvent<HTMLButtonElement>, lead: Lead) {
        if (event.pointerType === 'mouse' && event.button !== 0) return

        const rect = event.currentTarget.getBoundingClientRect()
        const offsetX = event.clientX - rect.left
        const offsetY = event.clientY - rect.top
        const width = rect.width

        let moved = false

        function handleMove(moveEvent: PointerEvent) {
            if (!moved) {
                const dx = moveEvent.clientX - (rect.left + offsetX)
                const dy = moveEvent.clientY - (rect.top + offsetY)
                if (Math.hypot(dx, dy) < DRAG_THRESHOLD) return
                moved = true
                suppressClickRef.current = true
            }

            setDrag({ lead, x: moveEvent.clientX, y: moveEvent.clientY, offsetX, offsetY, width })
            setDragOverStatus(statusAtPoint(moveEvent.clientX, moveEvent.clientY))
        }

        function handleUp(upEvent: PointerEvent) {
            window.removeEventListener('pointermove', handleMove)
            window.removeEventListener('pointerup', handleUp)
            window.removeEventListener('pointercancel', handleUp)

            if (moved) {
                const status = statusAtPoint(upEvent.clientX, upEvent.clientY)
                if (status) onMoveLead?.(lead.id, status)
                // Let the browser's own click (which fires right after pointerup on
                // the same element) see suppressClickRef before we clear it.
                requestAnimationFrame(() => {
                    suppressClickRef.current = false
                })
            }

            setDrag(null)
            setDragOverStatus(null)
        }

        window.addEventListener('pointermove', handleMove)
        window.addEventListener('pointerup', handleUp)
        window.addEventListener('pointercancel', handleUp)
    }

    function handleSelect(lead: Lead) {
        if (suppressClickRef.current) return
        onSelectLead?.(lead)
    }

    return (
        <div className={board}>
            {LEAD_COLUMNS.map((col) => {
                const columnLeads = leads.filter((lead) => lead.status === col.status)
                const isDragOver = dragOverStatus === col.status

                return (
                    <div className={column} key={col.status}>
                        <div className={columnHeader}>
                            <span className={columnTitle}>{col.label}</span>
                            <span className={columnCount}>{columnLeads.length}</span>
                        </div>

                        <div
                            className={`${columnList} ${isDragOver ? columnListDragOver : ''}`}
                            data-column-status={col.status}
                        >
                            {columnLeads.length ? (
                                columnLeads.map((lead) => (
                                    <LeadCard
                                        lead={lead}
                                        key={lead.id}
                                        onSelect={handleSelect}
                                        onPointerDown={(event) => handlePointerDown(event, lead)}
                                        isDragging={drag?.lead.id === lead.id}
                                    />
                                ))
                            ) : (
                                <div className={emptyState}>Drop a lead here</div>
                            )}
                        </div>
                    </div>
                )
            })}

            {drag ? (
                <div
                    className={dragFloatingCard}
                    style={{
                        left: drag.x - drag.offsetX,
                        top: drag.y - drag.offsetY,
                        width: drag.width,
                    }}
                >
                    <LeadCardContent lead={drag.lead} />
                </div>
            ) : null}
        </div>
    )
}