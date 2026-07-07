import {
  createGlobalTheme,
  createGlobalThemeContract,
  createThemeContract,
} from '@vanilla-extract/css'

import { interFont, quicksandFont } from '@/styles/fonts.css'

const root = createGlobalThemeContract({
  fontFamily: {
    brand: 'font-family-brand',
    body: 'font-family-body',
  },
  fontSize: {
    xxs: 'font-size-xxs',
    xs: 'font-size-xs',
    sm: 'font-size-sm',
    md: 'font-size-md',
    lg: 'font-size-lg',
    xl: 'font-size-xl',
    '2xl': 'font-size-2xl',
    '3xl': 'font-size-3xl',
    '4xl': 'font-size-4xl',
    '5xl': 'font-size-5xl',
    '6xl': 'font-size-6xl',
    '7xl': 'font-size-7xl',
  },
  shadow: {
    alert: 'shadow-alert',
    toast: 'shadow-toast',
    floating: 'shadow-profileDropdown',
    tableHeadAction: 'shadow-tableHeadAction',
  },
})

createGlobalTheme(':root', root, {
  fontFamily: {
    brand: quicksandFont,
    body: interFont,
  },
  fontSize: {
    xxs: '0.625rem',
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.375rem',
    '3xl': '1.5rem',
    '4xl': '1.875rem',
    '5xl': '2.25rem',
    '6xl': '2.5rem',
    '7xl': '3rem',
  },
  shadow: {
    alert: 'drop-shadow(0px 0px 6px rgba(239, 68, 68, 0.30))',
    toast: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
    floating: '0px 0px 30px 0px rgba(32, 81, 229, 0.15)',
    tableHeadAction: '0px 0px 15px 0px rgba(64, 120, 241, 0.07)',
  },
})

const colorShade = {
  lightest: null,
  lighter: null,
  light: null,
  main: null,
  dark: null,
  darker: null,
  darkest: null,
}

export const colorContract = createThemeContract({
  base: {
    white: null,
    black: null,
    background: null,
    modalBg: null,
    dark: null,
    secondary: null,
  },
  primary: colorShade,
  success: colorShade,
  info: colorShade,
  warning: colorShade,
  error: colorShade,
  gray: colorShade,
  card: {
    primary: null,
    primary2: null,
    secondary: null,
  },
  button: {
    bgPrimary: null,
    bgPrimaryLabel: null,
  },
  tab: {
    primary: null,
  },
})

createGlobalTheme(':root', colorContract, {
  base: {
    white: '#ffffff',
    black: '#050505',
    background: '#ffffff',
    modalBg: '#0b0b0c',
    dark: '#25272c',
    secondary: '#f7f8f8',
  },
  primary: {
    lightest: '#fefaec',
    lighter: '#feeec9',
    light: '#f6c453',
    main: '#f3aa23',
    dark: '#8d3813',
    darker: '#742f13',
    darkest: '#431705',
  },
  success: {
    lightest: '#ecfdf7',
    lighter: '#d1faec',
    light: '#6ee7bf',
    main: '#10b981',
    dark: '#047852',
    darker: '#064e36',
    darkest: '#022c1e',
  },
  info: {
    lightest: '#ecfcff',
    lighter: '#cff7fe',
    light: '#67e4f9',
    main: '#06b6d4',
    dark: '#0e7d90',
    darker: '#165863',
    darkest: '#083b44',
  },
  warning: {
    lightest: '#fff4ed',
    lighter: '#ffe6d5',
    light: '#fdac74',
    main: '#f97316',
    dark: '#c2570c',
    darker: '#7c3d12',
    darkest: '#432007',
  },
  error: {
    lightest: '#fef2f2',
    lighter: '#fee2e2',
    light: '#fca5a5',
    main: '#ef4444',
    dark: '#b91c1c',
    darker: '#7f1d1d',
    darkest: '#450a0a',
  },
  gray: {
    lightest: '#f7f8f8',
    lighter: '#edeef1',
    light: '#b6bac3',
    main: '#6b7280',
    dark: '#4a4e5a',
    darker: '#383a42',
    darkest: '#25272c',
  },
  card: {
    primary: '#ffffff',
    primary2: '#ffffff',
    secondary: '#fefaec',
  },
  button: {
    bgPrimary: '#d2680d',
    bgPrimaryLabel: '#ffffff',
  },
  tab: {
    primary: '#ffffff',
  },
})

export const vars = { ...root, color: colorContract }

export const colors = {
  background: vars.color.base.secondary,
  foreground: vars.color.gray.darkest,
  muted: vars.color.gray.main,
  surface: vars.color.base.white,
  border: vars.color.gray.lighter,
  primary: vars.color.primary.main,
  primaryText: vars.color.base.white,
  accent: vars.color.button.bgPrimary,
} as const

export const space = {
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  6: '1.5rem',
  8: '2rem',
  12: '3rem',
} as const

export const radii = {
  sm: '4px',
  md: '8px',
  lg: '12px',
} as const

export const typography = {
  body: vars.fontFamily.body,
  brand: vars.fontFamily.brand,
} as const
