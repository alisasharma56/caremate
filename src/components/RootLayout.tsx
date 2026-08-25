import { useState } from 'react'
import { Outlet, useRouterState } from '@tanstack/react-router'
import { Sidebar } from '@/components/sidebar'
import {SideCardPanel} from "@/features/SidecardPanel/SideCardPanel.tsx";
import { AppHeader } from '@/components/AppHeader/AppHeader'

const standalonePaths = new Set(['/login', '/signup', '/payment'])

export function RootLayout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const usesStandaloneLayout = useRouterState({
    select: (state) => {
      const pathname = state.location.pathname
      return standalonePaths.has(pathname) || pathname === '/onboarding' || pathname.startsWith('/onboarding/')
    },
  })

  if (usesStandaloneLayout) {
    return <Outlet />
  }

  return (
    <main style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar collapsed={isSidebarCollapsed} />
      <section style={{ display: 'flex', minWidth: 0, flex: 1, flexDirection: 'column' }}>
        <AppHeader isSidebarCollapsed={isSidebarCollapsed} onToggleSidebar={() => setIsSidebarCollapsed((collapsed) => !collapsed)} />
        <div style={{ display: 'flex', minHeight: 0, flex: 1 }}>
          <section style={{ flex: 1, minWidth: 0 }}>
            <Outlet />
          </section>
          <SideCardPanel />
        </div>
      </section>
    </main>
  )
}
