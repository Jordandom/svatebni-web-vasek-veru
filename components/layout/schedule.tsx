'use client'

import { SparklesCore } from '@/components/ui/sparkles'
import { H1 } from '@/components/ui/typography'
import Image from 'next/image'

export const Schedule = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="absolute inset-0 h-screen w-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="h-[120rem] w-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="relative z-20 flex flex-col items-center gap-8">
        <H1 className="uppercase">
          <span className="text-secondary decoration-8 underline-offset-3">Harmonogram</span>
        </H1>
        <div className="grid grid-cols-1 gap-8">
          {images.map((image) => (
            <div key={image.name} className="flex items-center gap-4">
              <Image
                src={image.src}
                width={50}
                height={50}
                alt={image.name}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
              <div>
                <h3 className="font-bold">{image.text}</h3>
                <p>{image.time}</p>
              </div>
            </div>
          ))}
          <div className="font-bold">V průběhu dne se také můžete těšit na:</div>
          {activities.map((activity) => (
            <div key={activity.name} className="flex items-center gap-4">
              <Image
                src={activity.src}
                width={50}
                height={50}
                alt={activity.name}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
              <h3 className="font-bold">{activity.text}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const images = [
  {
    name: 'heart',
    src: '/heart.svg',
    text: 'Příjezd hostů',
    time: 'do 11:00',
  },
  {
    name: 'rings',
    src: '/rings.svg',
    text: 'Svatební obřad',
    time: '13:00',
  },
  {
    name: 'camera',
    src: '/camera.svg',
    text: 'Focení a začátek svatebního rautu',
    time: '13:30',
  },
  {
    name: 'dance',
    src: '/dance.svg',
    text: 'První tanec novomanželů a slavnostní přípitek',
    time: '15:00',
  },
]

const activities = [
  {
    name: 'flower-throw',
    src: '/flower-throw.svg',
    text: 'Vyplétání svatební kytice',
  },
  {
    name: 'toast',
    src: '/toast.svg',
    text: 'Svatební hru “Rok s novomanželi”',
  },
  {
    name: 'food',
    src: '/beer-pong.svg',
    text: 'Svatební Beer Pong',
  },
  {
    name: 'party',
    src: '/party.svg',
    text: 'A hlavně na zábavu až do rána',
  },
]
