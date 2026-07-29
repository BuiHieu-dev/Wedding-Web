import { Heart } from 'lucide-react'
import { weddingInfo } from '../data/weddingData'
import { getWeddingCalendar } from '../lib/calendar'
import Reveal from './Reveal'
import SectionFrame from './SectionFrame'
import SectionTitle from './SectionTitle'
import StaggerGroup from './StaggerGroup'

const weekdays = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN']

function WeddingCalendar() {
  const calendar = getWeddingCalendar(weddingInfo.dateTarget)
  const blanks = Array.from({ length: calendar.leadingBlanks }, (_, index) => `blank-${index}`)

  return (
    <SectionFrame variant="odd" className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-4xl">
        <SectionTitle
          eyebrow="Lịch ngày cưới"
          title="Đếm từng ngày đến khoảnh khắc yêu thương"
          subtitle="Một ngày thật đặc biệt đã được đánh dấu bằng tất cả yêu thương."
        />
        <Reveal scale={0.96} distance={34}>
          <div className="rounded-[2rem] border border-champagne/70 bg-white/90 p-5 shadow-romantic backdrop-blur md:p-8">
            <div className="mb-6 flex items-center justify-between gap-4 rounded-3xl bg-gradient-to-r from-blush/60 to-champagne/50 px-5 py-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Save the date</p>
                <h3 className="mt-1 font-serif text-3xl font-bold text-charcoal">{calendar.monthLabel}</h3>
              </div>
              <Heart className="text-gold" size={30} fill="currentColor" />
            </div>
            <div className="grid grid-cols-7 gap-2 text-center text-xs font-bold uppercase tracking-[0.12em] text-charcoal/55 sm:gap-3">
              {weekdays.map((weekday) => (
                <div key={weekday}>{weekday}</div>
              ))}
            </div>
            <StaggerGroup className="mt-3 grid grid-cols-7 gap-2 sm:gap-3" stagger={0.025} delayChildren={0.05}>
              {blanks.map((blank) => (
                <div key={blank} aria-hidden="true" />
              ))}
              {calendar.days.map((day) => {
                const isWeddingDay = day === calendar.weddingDay
                return (
                  <Reveal
                    key={day}
                    amount={0.1}
                    distance={16}
                    scale={isWeddingDay ? 0.9 : 0.98}
                    className={isWeddingDay ? 'relative' : ''}
                  >
                    <div
                      aria-label={isWeddingDay ? `Ngày cưới ${day}` : undefined}
                      className={
                        isWeddingDay
                          ? 'relative mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-gold font-serif text-lg font-bold text-white shadow-lg ring-8 ring-blush/60 sm:h-12 sm:w-12'
                          : 'mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-ivory text-sm font-semibold text-charcoal/70 sm:h-11 sm:w-11'
                      }
                    >
                      <span>{day}</span>
                      {isWeddingDay ? (
                        <Heart className="absolute -right-1 -top-1 h-4 w-4 text-blush" fill="currentColor" />
                      ) : null}
                    </div>
                  </Reveal>
                )
              })}
            </StaggerGroup>
          </div>
        </Reveal>
      </div>
    </SectionFrame>
  )
}

export default WeddingCalendar
