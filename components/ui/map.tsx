'use client'

import { H1 } from '@/components/ui/typography'

const Map = () => {
  return (
    <div className="flex w-full flex-col items-center gap-4">
      <H1 className="uppercase">
        <span className="text-secondary decoration-8 underline-offset-3">Poloha</span>
      </H1>

      <div className="flex flex-col items-center">
        <p className="text-center">České Žleby 11</p>
        <p className="text-center">384 51 Stožec-Volary</p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.7710113441835!2d13.774273899999999!3d48.881641699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4774bfc89c51016b%3A0x4f428a49444a49dc!2zxIxlc2vDqSDFvWxlYnkgMTEsIDM4NCA1MSBTdG_FvmVjLVZvbGFyeQ!5e0!3m2!1scs!2scz!4v1745861144720!5m2!1scs!2scz"
        width="100%"
        height="600"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}

export default Map
