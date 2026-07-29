import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Reveal from './Reveal'

describe('Reveal', () => {
  it('renders children inside the animation wrapper', () => {
    render(
      <Reveal>
        <span>Animated content</span>
      </Reveal>,
    )

    expect(screen.getByText('Animated content')).toBeInTheDocument()
  })

  it('supports configurable directions and reduced-motion behavior', () => {
    const source = readFileSync(join(process.cwd(), 'src/components/Reveal.jsx'), 'utf8')

    expect(source).toContain('useReducedMotion')
    expect(source).toContain("direction = 'up'")
    expect(source).toContain('distance = 36')
    expect(source).toContain('amount = 0.22')
  })
})
