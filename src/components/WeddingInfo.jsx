import { Heart, MapPin, Clock } from 'lucide-react'
import Reveal from './Reveal'
import SectionFrame from './SectionFrame'
import SectionTitle from './SectionTitle'
import StaggerGroup from './StaggerGroup'
import { families, groomBride, ceremony } from '../data/weddingData'

function FamilyInfo({ family }) {
  return (
    <Reveal distance={34} scale={0.96} className="text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{family.side}</p>
      <p className="mt-4 text-sm font-semibold text-charcoal/60">{family.parentTitle}</p>
      <p className="mt-1 font-serif text-xl font-bold text-charcoal">{family.parentName}</p>
      <div className="mx-auto mt-4 h-px w-16 bg-champagne/70" />
      <p className="mt-4 flex items-start justify-center gap-2 text-sm leading-6 text-charcoal/70">
        <MapPin className="mt-0.5 shrink-0 text-gold" size={15} /> {family.address}
      </p>
    </Reveal>
  )
}

function WeddingInfo() {
  return (
    <SectionFrame variant="odd" className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-5xl">
        {/* Families */}
        <SectionTitle
          eyebrow="Trân trọng kính mời quý khách"
          title="Tham dự lễ thành hôn"
        />
        <StaggerGroup className="grid gap-10 md:grid-cols-2" stagger={0.14}>
          {families.map((family) => (
            <FamilyInfo key={family.side} family={family} />
          ))}
        </StaggerGroup>

        {/* Announcement */}
        <div className="mt-20 text-center"></div>

        <div className="mt-10 flex flex-col items-center gap-2">
          <Reveal distance={28} scale={0.96} className="text-center">
            <p className="font-handwriting text-5xl text-gold sm:text-6xl md:text-7xl">{groomBride[0].name}</p>
          </Reveal>

          <Reveal distance={12} scale={0.96} className="my-2 text-center mt-5 mb-5">
            <Heart className="mx-auto text-gold" size={28} fill="currentColor" />
          </Reveal>

          <Reveal distance={28} scale={0.96} className="text-center">
            <p className="font-handwriting text-5xl text-gold sm:text-6xl md:text-7xl">{groomBride[1].name}</p>
          </Reveal>
        </div>

        {/* Ceremony */}
        <Reveal className="mt-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">Lễ thành hôn được cử hành tại</p>
          <h3 className="mt-3 font-serif text-3xl font-bold text-charcoal">{ceremony.venue}</h3>
          <p className="mt-2 text-sm text-charcoal/65">{ceremony.address}</p>

          <div className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-5">
            <div className="px-5 py-4">
              <Clock className="mx-auto mb-1 text-gold" size={18} />
              <p className="font-serif text-2xl font-bold text-charcoal">{ceremony.time}</p>
            </div>
            <div className="text-xl font-bold text-charcoal/30">|</div>
            <div className="px-5 py-4">
              <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-charcoal/50">{ceremony.weekday}</p>
              <p className="font-serif text-4xl font-bold text-gold">{ceremony.day}</p>
            </div>
            <div className="text-xl font-bold text-charcoal/30">|</div>
            <div className="px-5 py-4">
              <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-charcoal/50">{ceremony.month}</p>
              <p className="font-serif text-2xl font-bold text-charcoal">{ceremony.year}</p>
            </div>
          </div>

          <p className="mt-5 text-sm italic text-charcoal/55">({ceremony.lunarDate})</p>
        </Reveal>
      </div>
    </SectionFrame>
  )
}

export default WeddingInfo
