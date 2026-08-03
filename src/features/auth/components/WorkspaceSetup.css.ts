import { style } from '@vanilla-extract/css'
import { vars } from '@/styles/theme/tokens.css'

const border = '#e7e9ee'
const muted = '#737b8e'

export const workspacePage = style({
  minHeight: '100dvh',
  padding: '43px clamp(32px, 7vw, 96px) 46px',
  background: vars.color.base.white,
  color: '#101114',
})

export const topBar = style({
  display: 'grid',
  gridTemplateColumns: '1fr auto 1fr',
  alignItems: 'center',
})

export const logo = style({
  fontFamily: vars.fontFamily.brand,
  fontSize: '20px',
  letterSpacing: '2px',
})

export const logoAccent = style({ color: vars.color.primary.main })

export const progress = style({ display: 'flex', alignItems: 'center', gap: '12px', color: muted, fontSize: '14px' })
export const progressBars = style({ display: 'flex', gap: '4px' })
export const progressBar = style({ width: '14px', height: '6px', borderRadius: '6px', background: '#eceef2' })
export const activeProgressBar = style({ width: '24px', background: '#f6a91c' })

export const skip = style({
  justifySelf: 'end',
  border: 0,
  padding: 0,
  background: 'transparent',
  color: muted,
  font: 'inherit',
  fontSize: '14px',
  textDecoration: 'underline',
  cursor: 'pointer',
})

export const content = style({ width: 'min(100%, 500px)', margin: '59px auto 0' })
export const heading = style({ margin: 0, fontSize: '30px', fontWeight: 500, lineHeight: 1.2, textAlign: 'center' })
export const intro = style({ margin: '12px -30px 35px', color: muted, fontSize: '14px', textAlign: 'center' })

export const form = style({ display: 'grid', gap: '18px' })

export const uploadGroup = style({ display: 'grid', gap: '3px' })
export const label = style({ fontSize: '14px' })
export const required = style({ color: '#ef4444' })
export const uploadRow = style({ display: 'flex', alignItems: 'center', gap: '13px' })
export const uploadBox = style({
  display: 'grid',
  placeItems: 'center',
  width: '56px',
  height: '56px',
  border: `1px dashed ${border}`,
  borderRadius: '6px',
  color: muted,
  cursor: 'pointer',
})
export const uploadInput = style({ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: 0 })
export const uploadIcon = style({ width: '18px', height: '18px' })
export const uploadTitle = style({ margin: 0, fontSize: '14px' })
export const uploadHint = style({ margin: '3px 0 0', color: '#b7bdc9', fontSize: '12px' })

export const twoColumns = style({ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' })
export const selectGroup = style({ display: 'grid', gap: '8px' })
export const selectWrap = style({ position: 'relative' })
export const select = style({
  width: '100%',
  height: '44px',
  appearance: 'none',
  border: `1px solid ${border}`,
  borderRadius: '15px',
  outline: 0,
  padding: '0 42px 0 15px',
  background: vars.color.base.white,
  color: '#b7bdc9',
  fontSize: '14px',
  selectors: { '&:focus': { borderColor: vars.color.primary.main, boxShadow: '0 0 0 3px rgba(243,170,35,.14)' } },
})
export const chevron = style({ position: 'absolute', top: '50%', right: '19px', width: '12px', color: muted, pointerEvents: 'none', transform: 'translateY(-50%)' })

export const teamGroup = style({ display: 'grid', gap: '7px' })
export const teamOptions = style({ display: 'flex', gap: '16px', flexWrap: 'wrap' })
export const teamInput = style({ position: 'absolute', opacity: 0, pointerEvents: 'none' })
export const teamOption = style({
  display: 'grid', placeItems: 'center', height: '44px', padding: '0 16px', border: `1px solid ${border}`,
  borderRadius: '15px', cursor: 'pointer', fontSize: '14px', transition: 'border-color 150ms',
  selectors: { [`${teamInput}:checked + &`]: { borderColor: '#f6a91c' } },
})

export const submit = style({
  height: '45px', marginTop: '14px', border: 0, borderRadius: '14px', background: '#f8aa1c', color: '#fff', cursor: 'pointer', fontSize: '14px',
  selectors: { '&:hover': { background: '#e99b0f' }, '&:focus-visible': { outline: '3px solid rgba(243,170,35,.3)' } },
})

export const fullWidth = style({ gridColumn: '1 / -1' })

export const inviteContent = style({ marginTop: '153px' })
export const inviteForm = style({
  display: 'grid', gridTemplateColumns: '242px 110px 116px', alignItems: 'end', gap: '16px', marginTop: '36px',
  '@media': { '(max-width: 620px)': { gridTemplateColumns: '1fr' } },
})
export const inviteEmailGroup = style({ display: 'grid', gap: '8px' })
export const inviteRoleGroup = style({ display: 'grid', gap: '8px' })
export const inviteInput = style({
  width: '100%', height: '44px', border: `1px solid ${border}`, borderRadius: '15px', outline: 0, padding: '0 15px', color: '#101114', fontSize: '14px',
  selectors: { '&::placeholder': { color: '#b7bdc9' }, '&:focus': { borderColor: vars.color.primary.main, boxShadow: '0 0 0 3px rgba(243,170,35,.14)' } },
})
export const inviteSelect = style([select, { height: '44px', color: '#b7bdc9' }])
export const addButton = style({
  height: '44px', border: 0, borderRadius: '15px', background: '#f8aa1c', color: '#fff', cursor: 'pointer', fontSize: '14px',
  selectors: { '&:hover': { background: '#e99b0f' } },
})
export const invitationList = style({ display: 'grid', gap: '10px', marginTop: '32px' })
export const emptyInvitations = style({ display: 'grid', placeItems: 'center', height: '64px', margin: 0, border: `1px dashed ${border}`, borderRadius: '14px', color: muted, fontSize: '14px' })
export const invitation = style({ display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: '62px', padding: '10px 16px', border: `1px solid ${border}`, borderRadius: '15px' })
export const invitationEmail = style({ margin: 0, fontSize: '14px' })
export const invitationRole = style({ margin: '6px 0 0', color: muted, fontSize: '12px' })
export const removeInvitation = style({ display: 'grid', placeItems: 'center', width: '32px', height: '32px', border: 0, borderRadius: '50%', background: '#f7f8f8', color: muted, cursor: 'pointer', fontSize: '24px', fontWeight: 300, lineHeight: 1 })
export const inboxButton = style([submit, { width: '100%', marginTop: '32px' }])

export const mobile = style({
  '@media': {
    '(max-width: 620px)': {
      padding: '28px 20px 40px',
    },
  },
})

