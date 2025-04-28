'use client'

import dynamic from 'next/dynamic'

export const GuestConfirmationForm = dynamic(
  () => import('@/components/layout/guest-confirmation-form'),
  {
    ssr: false,
  }
)
