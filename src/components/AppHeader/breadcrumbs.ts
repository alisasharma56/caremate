import type { LinkProps } from '@tanstack/react-router'

export type Breadcrumb = {
  label: string
  to?: LinkProps['to']
}

declare module '@tanstack/react-router' {
  interface StaticDataRouteOption {
    breadcrumbs?: Breadcrumb[]
  }
}
