import { describe, expect, it } from 'vitest'
import { getCountdownParts } from './countdown'

describe('getCountdownParts', () => {
  it('returns days hours minutes and seconds until the wedding date', () => {
    const result = getCountdownParts('2026-12-31T00:00:00', '2026-12-29T22:30:15')

    expect(result).toEqual({
      days: 1,
      hours: 1,
      minutes: 29,
      seconds: 45,
    })
  })

  it('never returns negative values after the target date', () => {
    const result = getCountdownParts('2026-12-31T00:00:00', '2027-01-01T00:00:00')

    expect(result).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    })
  })
})
