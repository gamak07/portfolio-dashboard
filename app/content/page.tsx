import ContentManager from '@/features/content_page/ContentManager'
import React, { Suspense } from 'react'

export default function ContentPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContentManager />
    </Suspense>
  )
}
