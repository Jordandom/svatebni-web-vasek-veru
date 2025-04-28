'use client'

import dynamic from 'next/dynamic'

export const OurStory = dynamic(() => import('@/components/layout/our-story'), {
  ssr: false,
})
