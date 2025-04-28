'use client'

import dynamic from 'next/dynamic'

export const Countdown = dynamic(() => import('@/components/ui/countdown'), {
  ssr: false,
})
