import { useEffect, useState } from 'react'
import Reveal from './Reveal'
import StaggerGroup from './StaggerGroup'
import { weddingInfo } from '../data/weddingData'
import { getCountdownParts } from '../lib/countdown'

const labels = [
  ['days', 'Ngày'],
  ['hours', 'Giờ'],
  ['minutes', 'Phút'],
  ['seconds', 'Giây'],
]

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(() => getCountdownParts(weddingInfo.dateTarget))

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getCountdownParts(weddingInfo.dateTarget))
    }, 1000)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="relative z-20 -mt-14 px-4 pb-16 md:px-8">
      <Reveal className="mx-auto max-w-5xl rounded-[2rem] border border-white/80 bg-white/85 p-4 shadow-romantic backdrop-blur md:p-6">
        <StaggerGroup className="grid grid-cols-4 gap-2 sm:gap-4" stagger={0.08}>
          {labels.map(([key, label]) => (
            <Reveal key={key} distance={22} scale={0.96} className="rounded-2xl bg-gradient-to-br from-ivory to-white px-2 py-5 text-center shadow-sm sm:py-6">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-charcoal/60 sm:text-xs">
                {label}
              </p>
              <p className="mt-2 font-serif text-3xl font-bold text-gold sm:text-4xl md:text-5xl">
                {String(timeLeft[key]).padStart(2, '0')}
              </p>
            </Reveal>
          ))}
        </StaggerGroup>
      </Reveal>
    </section>
  )
}

export default Countdown
