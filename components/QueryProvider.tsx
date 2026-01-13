'use client'

import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export function QueryProvider({ children }: { children: React.ReactNode }) {
  // We use useState to ensure the QueryClient is created only once per session
  // and not recreated on every render.
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        // Data is considered fresh for 1 minute (doesn't refetch instantly)
        staleTime: 60 * 1000, 
      },
    },
  }))

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* Devtools will only show in development environment */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}