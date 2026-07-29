import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { weddingInfo } from '../data/weddingData'

const heroContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
}

const heroItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: 'easeOut' } },
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-end justify-center overflow-hidden px-6 pb-24 pt-10 text-center text-white">
      <img
        src={weddingInfo.heroImage}
        alt="Romantic wedding background"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/55" />
      <motion.div
        variants={heroContainer}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-6xl"
      >
        <motion.p variants={heroItem} className="mb-5 text-xs font-semibold uppercase tracking-[0.45em] text-champagne md:text-sm">
          Save The Date
        </motion.p>
        <motion.h1 variants={heroItem} className="font-serif text-4xl font-bold leading-tight drop-shadow-lg sm:text-6xl md:text-8xl">
          {weddingInfo.couple}
        </motion.h1>
        <motion.div variants={heroItem} className="mx-auto my-7 h-px w-28 bg-champagne/80" />
        <motion.p variants={heroItem} className="text-lg font-medium tracking-[0.35em] text-white/90 md:text-2xl">
          {weddingInfo.dateDisplay}
        </motion.p>
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/80"
      >
        <ChevronDown size={32} strokeWidth={1.4} />
      </motion.div>
    </section>
  )
}

export default Hero
