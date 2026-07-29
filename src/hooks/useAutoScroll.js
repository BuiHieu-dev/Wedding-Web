import { useEffect, useRef } from 'react'

/**
 * Tự động cuộn mượt từ đầu trang xuống cuối.
 * Nhận prop `started` — chỉ bắt đầu cuộn khi true (sau khi user bấm "Mở Thiệp").
 * Nếu người dùng cuộn thủ công → dừng vĩnh viễn.
 */
export default function useAutoScroll({ speed = 1.2, delay = 1500, started = false } = {}) {
  const stopped = useRef(false)
  const raf = useRef(null)
  const startedRef = useRef(false) // chống chạy nhiều lần

  useEffect(() => {
    if (!started || startedRef.current) return
    startedRef.current = true

    let lastTimestamp = null

    function stop() {
      if (stopped.current) return // chỉ chạy 1 lần
      stopped.current = true
      if (raf.current) cancelAnimationFrame(raf.current)
      window.removeEventListener('wheel', onUserInput)
      window.removeEventListener('touchmove', onUserInput)
      window.removeEventListener('keydown', onKeyDown)
    }

    function onUserInput() { stop() }
    function onKeyDown(e) {
      if (['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Space', 'End', 'Home'].includes(e.key)) stop()
    }

    function tick(timestamp) {
      if (stopped.current) return
      if (lastTimestamp === null) lastTimestamp = timestamp
      const delta = timestamp - lastTimestamp
      lastTimestamp = timestamp

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      if (window.scrollY < maxScroll - 1) {
        window.scrollTo({ top: window.scrollY + speed * (delta / 16), behavior: 'instant' })
        raf.current = requestAnimationFrame(tick)
      }
    }

    const timer = setTimeout(() => {
      window.addEventListener('wheel', onUserInput, { passive: true })
      window.addEventListener('touchmove', onUserInput, { passive: true })
      window.addEventListener('keydown', onKeyDown)
      lastTimestamp = null
      raf.current = requestAnimationFrame(tick)
    }, delay)

    return () => {
      clearTimeout(timer)
      stop()
    }
  }, [speed, delay, started])
}
