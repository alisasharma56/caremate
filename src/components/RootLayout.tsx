import { Outlet } from '@tanstack/react-router'
import { Sidebar } from '@/components/sidebar'
import {SideCardPanel} from "@/features/SidecardPanel/SideCardPanel.tsx";

export function RootLayout() {
  return (
    <main style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <section style={{ flex: 1, minWidth: 0 }}>
        <Outlet />
      </section>
        <SideCardPanel/>
    </main>
  )
}
