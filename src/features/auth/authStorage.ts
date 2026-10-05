const ACCOUNTS_KEY = 'caremate.accounts'
const CURRENT_USER_KEY = 'caremate.currentUser'
const ONBOARDED_USERS_KEY = 'caremate.onboardedUsers'

const readList = (key: string): string[] => {
  try {
    return JSON.parse(localStorage.getItem(key) ?? '[]') as string[]
  } catch {
    return []
  }
}

export const normalizeEmail = (email: string) => {
  return email.trim().toLowerCase()
}

export const registerAccount = (email: string) => {
  const normalizedEmail = normalizeEmail(email)
  const accounts = readList(ACCOUNTS_KEY)

  if (!accounts.includes(normalizedEmail)) {
    localStorage.setItem(ACCOUNTS_KEY, JSON.stringify([...accounts, normalizedEmail]))
  }
}

export const accountExists = (email: string) => {
  return readList(ACCOUNTS_KEY).includes(normalizeEmail(email))
}

export const signIn = (email: string) => {
  localStorage.setItem(CURRENT_USER_KEY, normalizeEmail(email))
}

export const getCurrentUser = () => {
  return localStorage.getItem(CURRENT_USER_KEY)
}

export const hasCompletedOnboarding = (email: string) => {
  return readList(ONBOARDED_USERS_KEY).includes(normalizeEmail(email))
}

export const completeOnboarding = (email: string) => {
  const normalizedEmail = normalizeEmail(email)
  const onboardedUsers = readList(ONBOARDED_USERS_KEY)

  if (!onboardedUsers.includes(normalizedEmail)) {
    localStorage.setItem(
      ONBOARDED_USERS_KEY,
      JSON.stringify([...onboardedUsers, normalizedEmail]),
    )
  }
}

