'use client'

import CountdownReact, { CountdownRenderProps } from 'react-countdown'

const countdownDate = new Date(2025, 8, 11, 0, 0, 0)

const Countdown = () => {
  const renderer = ({ days, hours, minutes, seconds, completed }: CountdownRenderProps) => {
    if (completed) {
      // Render a completed state
      return <></>
    } else {
      // Render a countdown
      return (
        <div className="bg-countdown-background bg-100% flex h-full min-h-[20rem] w-full flex-col items-center justify-center rounded-2xl bg-center bg-no-repeat shadow-[0_10px_50px_rgba(0,0,0,0.3),0_20px_60px_rgba(255,255,255,0.2)]">
          <div className="text-primary/80 flex gap-0 px-8 text-2xl tracking-tight sm:gap-4 sm:px-20 sm:text-8xl">
            <div className="flex flex-col items-center gap-1 sm:gap-8">
              <h1 className="font-bold">{days}</h1>
              <div className="text-2xl md:text-4xl">Den</div>
            </div>
            <div className="mb-8 font-bold">:</div>
            <div className="flex flex-col items-center gap-1 sm:gap-8">
              <h1 className="font-bold">{hours}</h1>
              <div className="text-2xl md:text-4xl">Hodina</div>
            </div>
            <div className="mb-8 font-bold">:</div>
            <div className="flex flex-col items-center gap-1 sm:gap-8">
              <h1 className="font-bold">{minutes}</h1>
              <div className="text-2xl md:text-4xl">Minuta</div>
            </div>
            <div className="mb-8 font-bold">:</div>
            <div className="flex flex-col items-center gap-1 sm:gap-8">
              <h1 className="font-bold">{seconds}</h1>
              <div className="text-2xl md:text-4xl">Vteřina</div>
            </div>
          </div>
        </div>
      )
    }
  }

  return <CountdownReact date={countdownDate} renderer={renderer} />
}

export default Countdown
