import { useEffect, useRef, useState } from 'react'
import { Music, Pause } from 'lucide-react'
import { weddingInfo } from '../data/weddingData'

function AudioPlayer() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  // Tự phát nhạc nền khi mới vào trang
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false))
  }, [])

  async function toggleAudio() {
    const audio = audioRef.current
    if (!audio) return

    if (playing) {
      audio.pause()
      setPlaying(false)
      return
    }

    try {
      await audio.play()
      setPlaying(true)
    } catch {
      setPlaying(false)
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <audio ref={audioRef} src={weddingInfo.audioSrc} loop preload="auto" />
      <button
        type="button"
        aria-label={playing ? 'Tạm dừng nhạc nền' : 'Phát nhạc nền'}
        onClick={toggleAudio}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-gold shadow-romantic ring-1 ring-champagne/70 backdrop-blur transition hover:-translate-y-0.5 hover:bg-gold hover:text-white"
      >
        {playing ? <Pause size={22} /> : <Music size={22} />}
      </button>
    </div>
  )
}

export default AudioPlayer
