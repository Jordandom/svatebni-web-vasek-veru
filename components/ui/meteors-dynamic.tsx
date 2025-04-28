'use client'

import dynamic from 'next/dynamic';

export const MeteorsDynamic = dynamic(() => import('./meteors').then((mod) => mod.Meteors), {
  ssr: false,
})
