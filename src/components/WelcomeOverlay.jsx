import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { weddingInfo } from '../data/weddingData'

/**
 * Thiệp cưới toàn màn hình — overlay xé/gấp từ giữa sang hai bên khi mở.
 */
export default function WelcomeOverlay({ visible, onEnter }) {
  const [opening, setOpening] = useState(false)

  // Chặn cuộn khi overlay hiển thị
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
      document.documentElement.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [visible])

  function handleOpen() {
    setOpening(true)
    setTimeout(() => onEnter(), 1000)
  }

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed inset-0 z-[9999]">
          {/* Nền tối */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: opening ? 0 : 1 }}
            transition={{ duration: 0.8, delay: opening ? 0.6 : 0 }}
            className="absolute inset-0 bg-[#f3e8e6]"
          />

          {/* Nửa thiệp trái — xé sang trái */}
          <motion.div
            initial={{ x: '0%', opacity: 1 }}
            animate={opening ? { x: '-110%', opacity: 0 } : { x: '0%', opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.7, 0, 0.3, 1] }}
            className="absolute inset-y-0 left-0 z-20 w-1/2 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#e6d5d0] via-[#f0e2de] to-[#ede0dc]" />
            <div className="absolute inset-0 bg-white/40" />
            {/* Viền vàng phải */}
            <div className="absolute top-0 bottom-0 right-0 w-px bg-champagne/50" />
          </motion.div>

          {/* Nửa thiệp phải — xé sang phải */}
          <motion.div
            initial={{ x: '0%', opacity: 1 }}
            animate={opening ? { x: '110%', opacity: 0 } : { x: '0%', opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.7, 0, 0.3, 1] }}
            className="absolute inset-y-0 right-0 z-20 w-1/2 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-l from-[#e6d5d0] via-[#f0e2de] to-[#ede0dc]" />
            <div className="absolute inset-0 bg-white/40" />
            {/* Viền vàng trái */}
            <div className="absolute top-0 bottom-0 left-0 w-px bg-champagne/50" />
          </motion.div>

          {/* Nội dung thiệp ở giữa — hiện trước khi mở, mờ dần khi mở */}
          <AnimatePresence>
            {!opening && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-8"
              >
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.5em] text-[#8b6b4a] sm:text-xs">
                  Thư mời đám cưới
                </p>
                <div className="mx-auto my-4 h-px w-16 bg-[#d4a99a]/60" />
                <h2 className="font-serif text-3xl font-bold text-[#4a3223] sm:text-5xl md:text-6xl">
                  {weddingInfo.couple}
                </h2>
                <div className="mx-auto my-4 h-px w-16 bg-[#d4a99a]/60" />
                <p className="text-sm font-medium tracking-wider text-[#8b6b4a] sm:text-base">
                  {weddingInfo.dateDisplay}
                </p>

                <button
                  type="button"
                  onClick={handleOpen}
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#d4a99a]/60 bg-[#d4a99a]/15 px-8 py-3 text-sm font-medium text-[#5c3d2e] transition hover:bg-[#d4a99a] hover:text-white active:scale-95"
                >
                  <span>Mở Thiệp</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </AnimatePresence>
  )
}
