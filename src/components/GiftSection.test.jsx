import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import GiftSection from './GiftSection'

describe('GiftSection', () => {
  it('copies an account number and shows copied feedback', async () => {
    const user = userEvent.setup()
    const writeText = vi.fn().mockResolvedValue(undefined)

    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText },
    })

    render(<GiftSection />)

    await user.click(screen.getByRole('button', { name: 'Sao chép số tài khoản 0123456789' }))

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('0123456789')
    expect(screen.getByText('Đã sao chép')).toBeInTheDocument()
  })
})
