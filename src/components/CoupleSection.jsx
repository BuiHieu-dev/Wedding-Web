import Reveal from './Reveal'
import SectionFrame from './SectionFrame'
import SectionTitle from './SectionTitle'
import { groomBride } from '../data/weddingData'

function CoupleSection() {
  const groom = groomBride[0]
  const bride = groomBride[1]

  return (
    <SectionFrame variant="odd" className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <SectionTitle
          eyebrow="Cặp đôi"
          title="Chú Rể & Cô Dâu"
          subtitle="Hai mảnh ghép hoàn hảo, đến bên nhau bằng tình yêu chân thành."
        />

        {/* 2 ảnh nghiên chéo */}
        <div className="relative mx-auto mt-12 flex items-center justify-center gap-6 sm:gap-10">
          {/* Ảnh chú rể — lệch lên trên */}
          <Reveal direction="left" distance={40} className="w-[45%]">
            <div className="relative -rotate-3 rounded-2xl shadow-romantic ring-4 ring-white/80">
              <img
                src={groom.image}
                alt={groom.name}
                className="aspect-[3/4] w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 pt-10">
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-champagne sm:text-xs">
                  {groom.role}
                </p>
                <p className="font-serif text-lg font-bold text-white sm:text-2xl">
                  {groom.name}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Heart ở giữa */}
          <Reveal delay={0.2} className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/90 text-white shadow-lg sm:h-16 sm:w-16">
              <span className="font-serif text-2xl sm:text-3xl">&amp;</span>
            </div>
          </Reveal>

          {/* Ảnh cô dâu — lệch xuống dưới */}
          <Reveal direction="right" distance={40} className="w-[45%]">
            <div className="relative rotate-3 rounded-2xl shadow-romantic ring-4 ring-white/80">
              <img
                src={bride.image}
                alt={bride.name}
                className="aspect-[3/4] w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 pt-10">
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-champagne sm:text-xs">
                  {bride.role}
                </p>
                <p className="font-serif text-lg font-bold text-white sm:text-2xl">
                  {bride.name}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Quote */}
        <Reveal delay={0.3} className="mx-auto mt-14 max-w-xl">
          <div className="mx-auto mb-4 h-px w-12 bg-gold/40" />
          <p className="font-serif text-base italic leading-relaxed text-charcoal/70 sm:text-lg">
            &ldquo;Tình yêu không phải là nhìn nhau, mà là cùng nhìn về một hướng.&rdquo;
          </p>
          <p className="mt-3 text-xs tracking-wider text-charcoal/40">&mdash; Antoine de Saint-Exupéry</p>
          <div className="mx-auto mt-4 h-px w-12 bg-gold/40" />
        </Reveal>
      </div>
    </SectionFrame>
  )
}

export default CoupleSection
