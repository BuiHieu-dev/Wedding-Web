import { Clock, MapPin, Navigation } from 'lucide-react'
import Reveal from './Reveal'
import SectionFrame from './SectionFrame'
import SectionTitle from './SectionTitle'
import { reception } from '../data/weddingData'

function ReceptionSection() {
  const mapUrl = `https://maps.app.goo.gl/m8kDFCD266SoSoiJA`

  return (
    <SectionFrame variant="even" className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-4xl">
        <SectionTitle
          eyebrow="Thông tin tiệc cưới"
          title="Tiệc cưới nhà trai được tổ chức"
        />
        <Reveal distance={34} scale={0.96}>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Vào lúc</p>

            <div className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-5">
              <div className="px-5 py-4">
                <Clock className="mx-auto mb-1 text-gold" size={18} />
                <p className="font-serif text-2xl font-bold text-charcoal">{reception.time}</p>
              </div>
              <div className="text-xl font-bold text-charcoal/30">|</div>
              <div className="px-5 py-4">
                <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-charcoal/50">{reception.weekday}</p>
                <p className="font-serif text-4xl font-bold text-gold">{reception.day}</p>
              </div>
              <div className="text-xl font-bold text-charcoal/30">|</div>
              <div className="px-5 py-4">
                <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-charcoal/50">{reception.month}</p>
                <p className="font-serif text-2xl font-bold text-charcoal">{reception.year}</p>
              </div>
            </div>

            <p className="mt-5 text-sm italic text-charcoal/55">({reception.lunarDate})</p>

            <div className="mx-auto mt-8 h-px w-20 bg-champagne/70" />

            <div className="mt-8 space-y-3 text-sm leading-6 text-charcoal/70">
              <p className="flex items-start justify-center gap-2">
                <MapPin className="mt-0.5 shrink-0 text-gold" size={15} /> {reception.venue} — {reception.address}
              </p>
            </div>

            <a
              href={mapUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-gold px-5 py-3 text-sm font-semibold text-gold transition hover:bg-gold hover:text-white"
            >
              <Navigation size={17} /> Chỉ đường
            </a>
          </div>
        </Reveal>
      </div>
    </SectionFrame>
  )
}

export default ReceptionSection
