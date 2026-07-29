import { CalendarDays, Clock, MapPin, Navigation } from 'lucide-react'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import StaggerGroup from './StaggerGroup'
import { events } from '../data/weddingData'

function EventsSection() {
  return (
    <section className="bg-white px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Sự kiện cưới"
          title="Trân trọng kính mời"
          subtitle="Sự hiện diện của bạn là niềm hạnh phúc lớn nhất trong ngày vui của chúng mình."
        />
        <StaggerGroup className="grid gap-6 md:grid-cols-2" stagger={0.14}>
          {events.map((event) => {
            const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.address)}`

            return (
              <Reveal key={event.name} distance={34} scale={0.96} className="rounded-[2rem] border border-champagne/60 bg-ivory/70 p-6 shadow-romantic md:p-8">
                <h3 className="font-serif text-3xl font-bold text-charcoal">{event.name}</h3>
                <div className="mt-6 space-y-4 text-sm leading-7 text-charcoal/75">
                  <p className="flex items-start gap-3"><Clock className="mt-1 text-gold" size={18} /> {event.time}</p>
                  <p className="flex items-start gap-3"><CalendarDays className="mt-1 text-gold" size={18} /> {event.date}</p>
                  <p className="flex items-start gap-3"><MapPin className="mt-1 shrink-0 text-gold" size={18} /> <span><strong>{event.venue}</strong><br />{event.address}</span></p>
                </div>
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-2 rounded-full border border-gold px-5 py-3 text-sm font-semibold text-gold transition hover:bg-gold hover:text-white"
                >
                  <Navigation size={17} /> Chỉ đường
                </a>
              </Reveal>
            )
          })}
        </StaggerGroup>
      </div>
    </section>
  )
}

export default EventsSection
