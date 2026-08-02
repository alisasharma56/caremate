const ACCOUNTS_KEY = 'caremate.accounts'
const CURRENT_USER_KEY = 'caremate.currentUser'
const ONBOARDED_USERS_KEY = 'caremate.onboardedUsers'

function readList(key: string): string[] {
  try {
    return JSON.parse(localStorage.getItem(key) ?? '[]') as string[]
  } catch {
    return []
  }
}

export function normalizeEmail(email: string) {
  return email.trim().toLowerCase()
}

export function registerAccount(email: string) {
  const normalizedEmail = normalizeEmail(email)
  const accounts = readList(ACCOUNTS_KEY)

  if (!accounts.includes(normalizedEmail)) {
    localStorage.setItem(ACCOUNTS_KEY, JSON.stringify([...accounts, normalizedEmail]))
  }
}

export function accountExists(email: string) {
  return readList(ACCOUNTS_KEY).includes(normalizeEmail(email))
}

export function signIn(email: string) {
  localStorage.setItem(CURRENT_USER_KEY, normalizeEmail(email))
}

export function getCurrentUser() {
  return localStorage.getItem(CURRENT_USER_KEY)
}

export function hasCompletedOnboarding(email: string) {
  return readList(ONBOARDED_USERS_KEY).includes(normalizeEmail(email))
}

export function completeOnboarding(email: string) {
  const normalizedEmail = normalizeEmail(email)
  const onboardedUsers = readList(ONBOARDED_USERS_KEY)

  if (!onboardedUsers.includes(normalizedEmail)) {
    localStorage.setItem(
      ONBOARDED_USERS_KEY,
      JSON.stringify([...onboardedUsers, normalizedEmail]),
    )
  }
}
