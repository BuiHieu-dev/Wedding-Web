import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import RsvpSection from './RsvpSection'

describe('RsvpSection', () => {
  it('shows a thank-you message after submitting the form', async () => {
    const user = userEvent.setup()
    render(<RsvpSection />)

    await user.type(screen.getByLabelText('Tên khách mời'), 'Nguyễn Văn A')
    await user.selectOptions(screen.getByLabelText('Số người tham dự'), '2')
    await user.click(screen.getByLabelText('Sẽ tham gia'))
    await user.type(
      screen.getByLabelText('Lời chúc gửi đến cô dâu chú rể'),
      'Chúc hai bạn trăm năm hạnh phúc!',
    )
    await user.click(screen.getByRole('button', { name: 'Gửi phản hồi' }))

    expect(screen.getByText('Cảm ơn bạn đã gửi phản hồi!')).toBeInTheDocument()
  })
})