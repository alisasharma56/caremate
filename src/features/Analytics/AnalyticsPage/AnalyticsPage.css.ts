import { style } from '@vanilla-extract/css'
import { vars } from '@/styles/theme/tokens.css'

export const page = style({
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    width: '100%',
    minWidth: 0,
    boxSizing: 'border-box',
    background: '#ffffff',
    minHeight: '100%',
    fontFamily: vars.fontFamily.body,
})

export const header = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
    flexWrap: 'wrap',
    padding: '14px 20px',
    borderBottom: '1px solid #ececec',
})

export const headerLeft = style({ display: 'flex', alignItems: 'center', gap: 10 })

export const title = style({ fontSize: 20, fontWeight: 700, color: '#050505', letterSpacing: 0 })

export const beta = style({
    padding: '3px 10px',
    borderRadius: 8,
    background: '#fef3d6',
    color: '#f3aa23',
    fontSize: 11,
    fontWeight: 600,
})

export const filters = style({ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' })

export const filterBtn = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    height: 38,
    padding: '0 12px',
    borderRadius: 10,
    border: '1px solid #e2e2e2',
    background: '#ffffff',
    boxShadow: '0 1px 2px rgba(0,0,0,0.06)',
    fontFamily: 'inherit',
    fontSize: 14,
    color: '#6b7280',
    cursor: 'pointer',
    minWidth: 125,
})

export const audiences = style({ display: 'flex', alignItems: 'center', gap: 8 })

export const audienceChip = style({
    height: 30,
    padding: '0 14px',
    borderRadius: 9999,
    border: '1px solid #e2e2e2',
    background: '#ffffff',
    fontFamily: 'inherit',
    fontSize: 13,
    fontWeight: 500,
    color: '#6b7280',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
})

export const audienceChipActive = style({ background: '#050505', borderColor: '#050505', color: '#ffffff' })

export const body = style({
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr) 300px',
    gap: 20,
    padding: 20,
    alignItems: 'start',
})

export const main = style({ display: 'flex', flexDirection: 'column', gap: 20, minWidth: 0 })

export const cardRow = style({
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
    gap: 16,
})