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
        <div className="text-secondary flex w-full flex-col items-center justify-center">
          <div className="flex gap-0 px-8 text-2xl tracking-tight sm:gap-4 sm:px-20 sm:text-8xl">
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
