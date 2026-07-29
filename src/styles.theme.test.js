import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'

describe('Tailwind theme tokens', () => {
  it('declares custom colors and fonts in CSS for Tailwind v4 utilities', () => {
    const css = readFileSync(join(process.cwd(), 'src/index.css'), 'utf8')

    expect(css).toContain('--color-gold: #b68b45')
    expect(css).toContain('--color-charcoal: #2f2f35')
    expect(css).toContain('--color-ivory: #fffaf2')
    expect(css).toContain('--font-serif:')
    expect(css).toContain('Playfair Display')
  })
})
