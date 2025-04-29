'use client'

import dynamic from 'next/dynamic'

export const CountUp = dynamic(
  () => import('@/components/layout/days-together').then((mod) => mod.DaysTogether),
  {
    ssr: false,
  }
)
