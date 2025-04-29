// import { Hero } from '@/components/layout/hero'
import { PhotoCarousel } from '@/components/ui/photo-carousel'
import { TracingBeam } from '@/components/ui/tracing-beam'
import { Schedule } from '@/components/layout/schedule'
import { Gifts } from '@/components/layout/gifts'
import { Bodoni_Moda } from 'next/font/google'
import { DressCode } from '@/components/layout/dresscode'
import { Map } from '@/components/dynamic-pages/map'
import OurStory from '@/components/layout/our-story'
import { Countdown } from '@/components/dynamic-pages/countdown'
import GuestConfirmationForm from '@/components/layout/guest-confirmation-form'
import Ballpit from '@/components/ui/ballpit'
import { CountUp } from '@/components/dynamic-pages/countup'

const cormorantGaramond = Bodoni_Moda({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <div className={cormorantGaramond.className}>
      {/* <Hero /> */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: '500px',
          maxHeight: '500px',
          width: '100%',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
            textAlign: 'center',
            // Add any other text styling you want
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#000000',
          }}
        >
          Veru & Vašek
        </div>
        <Ballpit
          colors={[
            '#e89fe8', // Misty Rose
            '#FFC0CB', // Pink
            '#FFB6C1', // Light Pink
            '#FF69B4', // Hot Pink
            '#FF1493', // Deep Pink
            '#DC143C', // Crimson
            '#FF0000', // Red
            '#bc50a5', // White
          ]}
          lightIntensity={0.5}
          count={60}
          gravity={1}
          friction={1}
          wallBounce={0.9}
          followCursor={false}
        />
      </div>
      <TracingBeam className="px-6">
        <div className="relative flex flex-col text-3xl antialiased">
          <div className="flex flex-col items-center gap-16 px-1 pt-1 pb-16 sm:px-8 sm:pt-8">
            <CountUp />
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
