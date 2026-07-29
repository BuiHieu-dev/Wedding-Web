import SectionTitle from './SectionTitle'
import Reveal from './Reveal'
import StaggerGroup from './StaggerGroup'
import { coupleProfiles } from '../data/weddingData'

function CoupleSection() {
  return (
    <section className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Cô dâu & Chú rể"
          title="Chuyện tình của chúng mình"
          subtitle="Hai trái tim, một hành trình, và một ngày thật đẹp để cùng nhau bắt đầu chương mới."
        />
        <StaggerGroup className="grid gap-8 md:grid-cols-2" stagger={0.14}>
          {coupleProfiles.map((person) => (
            <Reveal key={person.role} distance={34} scale={0.96} className="rounded-[2rem] border border-white bg-white/80 p-6 text-center shadow-romantic backdrop-blur md:p-8">
              <div className="mx-auto h-56 w-44 overflow-hidden rounded-full border-8 border-ivory shadow-lg md:h-72 md:w-56">
                <img src={person.image} alt={person.name} className="h-full w-full object-cover" />
              </div>
              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.35em] text-gold">{person.role}</p>
              <h3 className="mt-3 font-serif text-4xl font-bold text-charcoal">{person.name}</h3>
              <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-charcoal/70">“{person.quote}”</p>
            </Reveal>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}

export default CoupleSection
