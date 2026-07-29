import Reveal from './Reveal'
import { weddingInfo } from '../data/weddingData'

function ThankYouSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Ảnh nền — tỷ lệ rộng hơn để chiều cao ngắn lại */}
      <div className="relative w-full" style={{ aspectRatio: '2.4 / 1' }}>
        <img
          src={weddingInfo.thankYouImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
        {/* Lớp nền mờ đen */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Nội dung — căn phải, ~50% chiều ngang, chữ lớn hơn */}
        <Reveal className="absolute right-0 top-0 z-10 flex h-full flex-col justify-center text-right
          w-[55vw] min-w-[200px] max-w-[320px] pl-4 pr-6
          sm:w-[50vw] sm:min-w-[260px] sm:max-w-[420px] sm:pl-8 sm:pr-12
          md:w-[45vw] md:min-w-[320px] md:max-w-[520px] md:pl-10 md:pr-20
          lg:w-[40vw] lg:max-w-[560px] lg:pl-12 lg:pr-28">
          <div className="mb-4 ml-auto h-px w-12 bg-champagne/60 sm:mb-5 sm:w-16" />
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.4em] text-champagne sm:mb-4 sm:text-xs md:text-sm lg:text-base">
            Cảm ơn bạn
          </p>
          <h2 className="font-serif font-bold text-white drop-shadow-lg
            text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Thank You
          </h2>
          <div className="mt-4 mb-4 ml-auto h-px w-12 bg-champagne/60 sm:mt-5 sm:mb-5 sm:w-16" />
          <p className="text-xs leading-relaxed text-white/80 sm:text-sm md:text-base lg:text-lg">
            Sự hiện diện của bạn là món quà quý giá nhất trong ngày trọng đại của chúng mình.
          </p>
          <p className="mt-3 font-serif text-base italic text-champagne/90 sm:text-lg md:text-xl lg:text-2xl">
            {weddingInfo.couple}
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export default ThankYouSection
