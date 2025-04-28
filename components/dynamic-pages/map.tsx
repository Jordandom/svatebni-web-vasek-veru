'use client'

import dynamic from 'next/dynamic'

export const Map = dynamic(() => import('@/components/ui/map'), {
  ssr: false,
})
