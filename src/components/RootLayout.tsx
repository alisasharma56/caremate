import { Outlet } from '@tanstack/react-router'
import { Sidebar } from '@/components/sidebar'
import { colors, space } from '@/styles/theme/tokens.css'

export function RootLayout() {
  return (
    <main style={{ display: 'flex', minHeight: '100vh', background: colors.background }}>
      <Sidebar />
      <section style={{ flex: 1, minWidth: 0, padding: space[8] }}>
        <Outlet />
      </section>
    </main>
  )
}
