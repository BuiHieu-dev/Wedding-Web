import Reveal from './Reveal'

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <Reveal className="mx-auto mb-10 max-w-4xl text-center md:mb-14">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-gold">{eyebrow}</p>
      <h2 className="font-serif text-3xl font-bold text-charcoal sm:text-4xl md:text-5xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-sm leading-7 text-charcoal/70 md:text-base">{subtitle}</p> : null}
    </Reveal>
  )
}

export default SectionTitle
