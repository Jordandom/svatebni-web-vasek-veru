import { Hero } from '@/components/layout/hero'
import { PhotoCarousel } from '@/components/ui/photo-carousel'
import { TracingBeam } from '@/components/ui/tracing-beam'
import { Schedule } from '@/components/layout/schedule'
import { Gifts } from '@/components/layout/gifts'
import { Cormorant_Garamond } from 'next/font/google'
import { DressCode } from '@/components/layout/dresscode'
import { Map } from '@/components/dynamic-pages/map'
import OurStory from '@/components/layout/our-story'
import { Countdown } from '@/components/dynamic-pages/countdown'
import GuestConfirmationForm from '@/components/layout/guest-confirmation-form'

const cormorantGaramond = Cormorant_Garamond({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <div className={cormorantGaramond.className}>
      <Hero />
      <TracingBeam className="px-6">
        <div className="relative flex flex-col text-3xl antialiased">
          <div className="flex flex-col items-center gap-16 px-1 pt-1 pb-16 sm:px-8 sm:pt-8">
            <PhotoCarousel />
            <OurStory />
            <Countdown />
            <Schedule />
            <Gifts />
            <DressCode />
            <GuestConfirmationForm />
            <Map />
            <div className="flex flex-col text-lg font-semibold">
              <div>Vytvořeno: Ing. Jordan Domovčijski</div>
              <a href="tel:+420777978066">+420 777 978 066</a>
              <div>jordan.domovcijski@gmail.com</div>
            </div>
          </div>
        </div>
      </TracingBeam>
    </div>
  )
}
