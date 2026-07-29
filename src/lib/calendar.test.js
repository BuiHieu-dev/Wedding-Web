import { describe, expect, it } from 'vitest'
import { getWeddingCalendar } from './calendar'

describe('getWeddingCalendar', () => {
  it('generates a Vietnamese calendar model for the wedding date', () => {
    const calendar = getWeddingCalendar('2026-12-31T00:00:00')

    expect(calendar.monthLabel).toBe('Tháng 12, 2026')
    expect(calendar.weddingDay).toBe(31)
    expect(calendar.days).toHaveLength(31)
    expect(calendar.days[0]).toBe(1)
    expect(calendar.days[30]).toBe(31)
  })

  it('uses Monday-first leading blanks', () => {
    const calendar = getWeddingCalendar('2026-08-19T00:00:00')

    expect(calendar.monthLabel).toBe('Tháng 8, 2026')
    expect(calendar.weddingDay).toBe(19)
    expect(calendar.leadingBlanks).toBe(5)
  })
})
