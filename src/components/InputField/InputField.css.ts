import { style } from '@vanilla-extract/css'
import { vars } from '@/styles/theme/tokens.css'

const ink = '#101114'
const inputBorder = '#e7e9ee'
const placeholder = '#b7bdc9'

export const field = style({
  position: 'relative',
  marginBottom: '39px',
})

export const fieldLabel = style({
  display: 'block',
  marginBottom: '11px',
  color: ink,
  fontSize: '19px',
  fontWeight: 500,
})

export const requiredMark = style({ color: '#ef4444' })

export const fieldControl = style({ position: 'relative' })

export const fieldInput = style({
  width: '100%',
  height: '66px',
  border: `1.5px solid ${inputBorder}`,
  borderRadius: '23px',
  outline: 'none',
  padding: '0 24px',
  background: vars.color.base.white,
  color: ink,
  fontSize: '20px',
  transition: 'border-color 150ms, box-shadow 150ms',
  selectors: {
    '&::placeholder': { color: placeholder },
    '&:focus': {
      borderColor: vars.color.primary.main,
      boxShadow: '0 0 0 3px rgba(243, 170, 35, 0.14)',
    },
  },
})

export const fieldInputWithTrailing = style({ paddingRight: '58px' })

export const compactField = style({ marginBottom: 0 })

export const compactLabel = style({
  marginBottom: '8px',
  fontSize: '14px',
  fontWeight: 400,
})

export const compactInput = style({
  height: '44px',
  borderWidth: '1px',
  borderRadius: '15px',
  padding: '0 15px',
  fontSize: '14px',
})
