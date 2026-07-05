import { Outlet } from '@tanstack/react-router'
import { Sidebar } from './sidebar'

export function RootLayout() {
  return (
    <main style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <section style={{ flex: 1, minWidth: 0, padding: '32px' }}>
        <Outlet />
      </section>
    </main>
  )
}
