'use client'

import { SparklesCore } from '@/components/ui/sparkles'
import { H1 } from '@/components/ui/typography'
import { CalendarHeartIcon } from 'lucide-react'
import { GiDiamondRing, GiPartyFlags, GiBallPyramid } from 'react-icons/gi'
import { TbCameraHeart } from 'react-icons/tb'
import { PiFlowerTulip } from 'react-icons/pi'
import { LuPartyPopper } from 'react-icons/lu'
import { BiSolidDrink } from 'react-icons/bi'

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
            <div key={image.text} className="flex items-center gap-8">
              {image.icon}
              <div className="flex flex-col gap-2">
                <h3 className="font-bold">{image.text}</h3>
                <p>{image.time}</p>
              </div>
            </div>
          ))}
          <div className="font-bold">V průběhu dne se také můžete těšit na:</div>
          {activities.map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-8">
              {icon}
              <h3 className="font-bold">{text}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const images = [
  {
    icon: <CalendarHeartIcon className="size-15" />,
    text: 'Příjezd hostů',
    time: 'do 11:00',
  },
  {
    icon: <GiDiamondRing className="size-15" />,
    text: 'Svatební obřad',
    time: '13:00',
  },
  {
    icon: <TbCameraHeart className="size-15" />,
    text: 'Focení a začátek svatebního rautu',
    time: '13:30',
  },
  {
    icon: <GiPartyFlags className="size-15" />,
    text: 'První tanec novomanželů a slavnostní přípitek',
    time: '15:00',
  },
]

const activities = [
  {
    icon: <PiFlowerTulip className="size-15" />,
    text: 'Vyplétání svatební kytice',
  },
  {
    icon: <LuPartyPopper className="size-15" />,
    text: 'Svatební hru “Rok s novomanželi”',
  },
  {
    icon: <GiBallPyramid className="size-15" />,
    text: 'Svatební Beer Pong',
  },
  {
    icon: <BiSolidDrink className="size-15" />,
    text: 'A hlavně na zábavu až do rána',
  },
]
