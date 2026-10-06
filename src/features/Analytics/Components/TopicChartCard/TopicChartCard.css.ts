import { style } from '@vanilla-extract/css'

export const chartCard = style({ padding: '20px 16px 14px', height: 275 })

export const takeaway = style({
    margin: '14px 0 0',
    height: 48,
    fontSize: 12,
    lineHeight: '16px',
    color: '#9ca3af',
    overflow: 'hidden',
})

export const plot = style({ position: 'relative', flex: 1, marginTop: 12 })

export const grid = style({ position: 'absolute', left: 0, right: 0, height: 1, background: '#f0f0f0' })

export const bars = style({
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    padding: '0 2px',
})

export const barSlot = style({ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', width: 14, height: '100%' })

export const bar = style({ width: 14, borderRadius: '3px 3px 0 0' })

export const axis = style({ display: 'flex', justifyContent: 'space-between', marginTop: 8 })

export const axisLabel = style({ fontSize: 10, color: '#9ca3af', width: 22, textAlign: 'center' })