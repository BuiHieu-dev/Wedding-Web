import { useEffect, useRef } from 'react'

/**
 * Tự động cuộn mượt từ đầu trang xuống cuối.
 * Nhận prop `started` — chỉ bắt đầu cuộn khi true (sau khi user bấm "Mở Thiệp").
 * Nếu người dùng cuộn thủ công → dừng vĩnh viễn.
 */
export default function useAutoScroll({ speed = 1.2, delay = 1500, started = false } = {}) {
  const stopped = useRef(false)
  const raf = useRef(null)

  useEffect(() => {
    if (!started) return
    let last = null

    function stop() {
      stopped.current = true
      if (raf.current) cancelAnimationFrame(raf.current)
      window.removeEventListener('wheel', stop)
      window.removeEventListener('touchmove', stop)
      window.removeEventListener('scroll', onRealScroll)
      window.removeEventListener('keydown', onKeyDown)
    }

    function onRealScroll() {
      if (!last || Math.abs(window.scrollY - last) > 10) stop()
    }

    function onKeyDown(e) {
      if (['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Space', 'End', 'Home'].includes(e.key)) stop()
    }

    function tick(timestamp) {
      if (stopped.current) return
      if (!last) last = timestamp
      const delta = timestamp - last
      last = timestamp

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      if (window.scrollY < maxScroll - 1) {
        window.scrollBy({ top: speed * (delta / 16), behavior: 'auto' })
        raf.current = requestAnimationFrame(tick)
      }
    }

    const timer = setTimeout(() => {
      window.addEventListener('wheel', stop, { passive: true })
      window.addEventListener('touchmove', stop, { passive: true })
      window.addEventListener('scroll', onRealScroll, { passive: true })
      window.addEventListener('keydown', onKeyDown)
      last = null
      raf.current = requestAnimationFrame(tick)
    }, delay)

    return () => {
      clearTimeout(timer)
      stop()
    }
  }, [speed, delay, started])
}
