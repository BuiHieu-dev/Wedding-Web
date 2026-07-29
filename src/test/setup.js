import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'

globalThis.IntersectionObserver = class IntersectionObserver {
  disconnect = vi.fn()
  observe = vi.fn()
  takeRecords = vi.fn(() => [])
  unobserve = vi.fn()
}
