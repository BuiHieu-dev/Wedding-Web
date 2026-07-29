import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import AudioPlayer from './AudioPlayer'
import { weddingInfo } from '../data/weddingData'

describe('AudioPlayer', () => {
  it('renders a looping audio element using the wedding audio source', () => {
    const { container } = render(<AudioPlayer />)

    const audio = container.querySelector('audio')

    expect(audio).toHaveAttribute('src', weddingInfo.audioSrc)
    expect(audio).toHaveAttribute('loop')
    expect(audio).toHaveAttribute('preload', 'none')
  })

  it('plays and pauses background music from the floating button', async () => {
    const user = userEvent.setup()
    const play = vi.spyOn(window.HTMLMediaElement.prototype, 'play').mockResolvedValue(undefined)
    const pause = vi.spyOn(window.HTMLMediaElement.prototype, 'pause').mockImplementation(() => {})

    render(<AudioPlayer />)

    await user.click(screen.getByRole('button', { name: 'Phát nhạc nền' }))

    expect(play).toHaveBeenCalledOnce()
    expect(screen.getByRole('button', { name: 'Tạm dừng nhạc nền' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Tạm dừng nhạc nền' }))

    expect(pause).toHaveBeenCalledOnce()
    expect(screen.getByRole('button', { name: 'Phát nhạc nền' })).toBeInTheDocument()

    play.mockRestore()
    pause.mockRestore()
  })
})
