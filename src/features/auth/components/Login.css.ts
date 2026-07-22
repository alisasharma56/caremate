import { style } from '@vanilla-extract/css'
import { vars } from '@/styles/theme/tokens.css'

const ink = '#101114'
const muted = '#737b8e'
const inputBorder = '#e7e9ee'
const placeholder = '#b7bdc9'

export const page = style({
  minHeight: '100dvh',
  position: 'relative',
  background: vars.color.base.white,
  padding: '62px clamp(24px, 7.5vw, 144px)',
  '@media': {
    '(max-width: 700px)': {
      padding: '30px 22px 50px',
    },
  },
})

export const brand = style({
  display: 'inline-block',
  color: ink,
  fontFamily: vars.fontFamily.brand,
  fontSize: '30px',
  fontWeight: 400,
  letterSpacing: '3px',
  lineHeight: 1,
  transform: 'scale(0.9)',
  transformOrigin: 'top left',
  '@media': {
    '(max-width: 700px)': { fontSize: '24px' },
  },
})

export const brandAccent = style({ color: '#f3a821' })

export const signUpBrand = style([
  brand,
  {
    transform: 'scale(0.81)',
  },
])

export const content = style({
  width: 'min(100%, 600px)',
  margin: '104px auto 0',
  transform: 'scale(0.9)',
  transformOrigin: 'top center',
  '@media': {
    '(max-width: 700px)': { marginTop: '65px' },
    '(max-height: 800px) and (min-width: 701px)': { marginTop: '50px' },
  },
})

export const signUpContent = style([
  content,
  {
    marginTop: '94px',
    transform: 'scale(0.81)',
    '@media': {
      '(max-width: 700px)': { marginTop: '58px' },
      '(max-height: 800px) and (min-width: 701px)': { marginTop: '45px' },
    },
  },
])

export const header = style({ marginBottom: '41px' })

export const title = style({
  margin: 0,
  color: ink,
  fontSize: '44px',
  fontWeight: 500,
  letterSpacing: '-1.2px',
  lineHeight: 1.15,
  '@media': {
    '(max-width: 700px)': { fontSize: '36px' },
  },
})

export const subtitle = style({
  margin: '17px 0 0',
  color: muted,
  fontSize: '21px',
  lineHeight: 1.4,
})

export const form = style({ width: '100%' })

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

export const required = style({ color: '#ef4444' })

export const fieldControl = style({ position: 'relative' })

export const fieldInput = style({
  width: '100%',
  height: '66px',
  border: `1.5px solid ${inputBorder}`,
  borderRadius: '23px',
  outline: 'none',
  padding: '0 58px 0 24px',
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

export const passwordButton = style({
  position: 'absolute',
  top: '50%',
  right: '23px',
  width: '27px',
  height: '27px',
  padding: 0,
  border: 0,
  background: 'transparent',
  color: placeholder,
  cursor: 'pointer',
  transform: 'translateY(-50%)',
  selectors: {
    '&:focus-visible': { outline: `2px solid ${vars.color.primary.main}` },
  },
})

export const eyeIcon = style({ display: 'block', width: '100%', height: '100%' })

export const forgotLink = style({
  display: 'block',
  width: 'fit-content',
  margin: '15px 0 0 auto',
  color: muted,
  fontSize: '19px',
  lineHeight: 1.4,
  selectors: { '&:hover': { color: ink } },
})

export const signInButton = style({
  width: '100%',
  height: '66px',
  marginTop: '1px',
  border: 0,
  borderRadius: '20px',
  background: '#f6a91c',
  color: vars.color.base.white,
  cursor: 'pointer',
  fontSize: '20px',
  fontWeight: 500,
  transition: 'background 150ms, transform 100ms',
  selectors: {
    '&:hover': { background: '#e99b0f' },
    '&:active': { transform: 'translateY(1px)' },
    '&:focus-visible': { outline: '3px solid rgba(243, 170, 35, .35)' },
  },
})

export const signUpPrompt = style({
  margin: '21px 0 0',
  color: muted,
  fontSize: '18px',
  lineHeight: 1.5,
  textAlign: 'center',
})

export const textLink = style({
  marginLeft: '7px',
  color: '#eca117',
  fontWeight: 500,
  selectors: { '&:hover': { color: '#cb8100' } },
})

export const divider = style({
  display: 'flex',
  alignItems: 'center',
  gap: '18px',
  margin: '39px 0 37px',
})

export const dividerLine = style({ flex: 1, height: '1px', background: inputBorder })

export const dividerText = style({ color: muted, fontSize: '18px' })

export const googleButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '16px',
  width: '100%',
  height: '66px',
  border: `1.5px solid ${inputBorder}`,
  borderRadius: '14px',
  background: vars.color.base.white,
  color: ink,
  cursor: 'pointer',
  fontSize: '19px',
  fontWeight: 500,
  transition: 'background 150ms, border-color 150ms',
  selectors: {
    '&:hover': { background: '#fafafa', borderColor: '#d6d9e0' },
    '&:focus-visible': { outline: '3px solid rgba(66, 133, 244, .2)' },
  },
})

export const googleIcon = style({ width: '28px', height: '28px', flexShrink: 0 })
