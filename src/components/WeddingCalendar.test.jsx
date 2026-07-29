import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import WeddingCalendar from './WeddingCalendar'

describe('WeddingCalendar', () => {
  it('renders Vietnamese calendar labels and highlights the wedding day', () => {
    render(<WeddingCalendar />)

    expect(screen.getByText('Lịch ngày cưới')).toBeInTheDocument()
    expect(screen.getByText('Đếm từng ngày đến khoảnh khắc yêu thương')).toBeInTheDocument()
    expect(screen.getByText('Tháng 8, 2026')).toBeInTheDocument()

    for (const label of ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }

    const weddingCell = screen.getByLabelText('Ngày cưới 8')
    expect(within(weddingCell).getByText('8')).toBeInTheDocument()
    expect(weddingCell.querySelector('svg')).toBeInTheDocument()
  })
})
