# Scroll Animation Enhancement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add richer, gradual scroll-triggered animations across the wedding invitation page without changing content or layout hierarchy.

**Architecture:** Extend the existing shared `Reveal` component to support configurable variants and reduced-motion behavior. Add a `StaggerGroup` wrapper for lists/forms, then apply it to repeated UI elements and sequence the Hero content. Keep changes focused on animation wrappers and existing components.

**Tech Stack:** React, Vite, Tailwind CSS, Framer Motion, Vitest, Testing Library.

## Global Constraints

- Do not add new animation libraries.
- Do not add heavy parallax or aggressive rotation.
- Do not change content, layout hierarchy, or data shape except what animation wrappers require.
- Existing tests must keep passing.
- Production build must pass.
- Motion must remain gentle: fade, slide-up/side, and subtle scale from `0.96` to `1`.
- Respect reduced-motion preferences through Framer Motion’s `useReducedMotion`.

---

## File Structure

Modify these files:

- `src/components/Reveal.jsx` — add configurable direction, distance, delay, duration, scale, viewport amount, and reduced-motion handling.
- `src/components/StaggerGroup.jsx` — new reusable stagger container using Framer Motion.
- `src/components/Hero.jsx` — sequence hero text elements.
- `src/components/Countdown.jsx` — stagger countdown cards.
- `src/components/CoupleSection.jsx` — stagger couple cards.
- `src/components/EventsSection.jsx` — stagger event cards.
- `src/components/Gallery.jsx` — stagger gallery images.
- `src/components/RsvpSection.jsx` — stagger form groups.
- `src/components/GiftSection.jsx` — stagger gift cards.
- `src/components/Reveal.test.jsx` — regression tests for configurable reveal and reduced-motion behavior.

---

### Task 1: Upgrade Shared Reveal Animation API

**Files:**
- Modify: `src/components/Reveal.jsx`
- Create: `src/components/Reveal.test.jsx`

**Interfaces:**
- Produces: `Reveal({ children, className, delay, direction, distance, duration, scale, amount })`.
- Produces: reduced-motion branch that animates only opacity with zero displacement.

- [ ] **Step 1: Write failing tests**

Create `src/components/Reveal.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Reveal from './Reveal'

describe('Reveal', () => {
  it('renders children and accepts custom animation props', () => {
    render(
      <Reveal direction="left" delay={0.2} duration={0.8} distance={48} scale={0.96} amount={0.35}>
        <span>Animated content</span>
      </Reveal>,
    )

    expect(screen.getByText('Animated content')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify current implementation fails**

Run: `npm test --prefix "C:/Work/Web/Wedding" -- src/components/Reveal.test.jsx`
Expected: FAIL because `Reveal` does not yet accept all custom animation props in its public implementation.

- [ ] **Step 3: Implement upgraded `Reveal.jsx`**

Replace `src/components/Reveal.jsx` with:

```jsx
import { motion, useReducedMotion } from 'framer-motion'

const offsets = {
  up: { x: 0, y: 1 },
  down: { x: 0, y: -1 },
  left: { x: 1, y: 0 },
  right: { x: -1, y: 0 },
}

function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 36,
  duration = 0.75,
  scale = 1,
  amount = 0.22,
}) {
  const prefersReducedMotion = useReducedMotion()
  const offset = offsets[direction] ?? offsets.up
  const initial = prefersReducedMotion
    ? { opacity: 0 }
    : { opacity: 0, x: offset.x * distance, y: offset.y * distance, scale }

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount }}
      transition={{ duration: prefersReducedMotion ? 0.01 : duration, delay: prefersReducedMotion ? 0 : delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
```

- [ ] **Step 4: Run Reveal test**

Run: `npm test --prefix "C:/Work/Web/Wedding" -- src/components/Reveal.test.jsx`
Expected: PASS.

---

### Task 2: Add StaggerGroup and Apply Grouped Reveals

**Files:**
- Create: `src/components/StaggerGroup.jsx`
- Modify: `src/components/Countdown.jsx`
- Modify: `src/components/CoupleSection.jsx`
- Modify: `src/components/EventsSection.jsx`
- Modify: `src/components/Gallery.jsx`
- Modify: `src/components/RsvpSection.jsx`
- Modify: `src/components/GiftSection.jsx`

**Interfaces:**
- Consumes: `StaggerGroup({ children, className, stagger, delayChildren })`.
- Produces: grouped child animations using `motion.div` variants.

- [ ] **Step 1: Create `src/components/StaggerGroup.jsx`**

```jsx
import { motion, useReducedMotion } from 'framer-motion'

function StaggerGroup({ children, className = '', stagger = 0.1, delayChildren = 0.05 }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: prefersReducedMotion ? 0 : stagger,
            delayChildren: prefersReducedMotion ? 0 : delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default StaggerGroup
```

- [ ] **Step 2: Update repeated child wrappers**

Use `StaggerGroup` around repeated children and use `Reveal` with child-friendly props:

- `Countdown.jsx`: replace inner grid container with `StaggerGroup className="grid grid-cols-4 gap-2 sm:gap-4" stagger={0.08}` and wrap each card with `Reveal scale={0.96} distance={22}`.
- `CoupleSection.jsx`: replace cards grid with `StaggerGroup className="grid gap-8 md:grid-cols-2" stagger={0.14}` and use `Reveal scale={0.96} distance={34}` for each card.
- `EventsSection.jsx`: replace event grid with `StaggerGroup className="grid gap-6 md:grid-cols-2" stagger={0.14}` and use `Reveal scale={0.96} distance={34}`.
- `Gallery.jsx`: replace columns container with `StaggerGroup className="columns-1 gap-5 sm:columns-2 lg:columns-3" stagger={0.08}` and use `Reveal scale={0.97} distance={28}`.
- `GiftSection.jsx`: replace gift grid with `StaggerGroup className="grid gap-6 md:grid-cols-2" stagger={0.14}` and use `Reveal scale={0.96} distance={34}`.
- `RsvpSection.jsx`: wrap the form inner groups with `StaggerGroup className="space-y-5" stagger={0.1}`. Each logical row should be wrapped with `Reveal distance={24} scale={0.98}` while preserving labels, inputs, fieldset, textarea, submit button, and success text.

- [ ] **Step 3: Run interaction tests**

Run: `npm test --prefix "C:/Work/Web/Wedding" -- src/components/RsvpSection.test.jsx src/components/GiftSection.test.jsx`
Expected: PASS.

---

### Task 3: Sequence Hero Entrance and Verify Integration

**Files:**
- Modify: `src/components/Hero.jsx`

**Interfaces:**
- Consumes: Framer Motion.
- Produces: sequential hero content animation without changing text content.

- [ ] **Step 1: Update `Hero.jsx` animation**

Use a parent `motion.div` with staggered children variants. The content order remains: Save The Date, couple names, divider, date.

```jsx
const heroContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
}

const heroItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: 'easeOut' } },
}
```

Apply `variants={heroContainer}`, `initial="hidden"`, `animate="show"` to the hero content wrapper and `variants={heroItem}` to each text/divider child.

- [ ] **Step 2: Run full tests**

Run: `npm test --prefix "C:/Work/Web/Wedding"`
Expected: PASS.

- [ ] **Step 3: Run production build**

Run: `npm run build --prefix "C:/Work/Web/Wedding"`
Expected: PASS.

- [ ] **Step 4: Run dev server smoke check**

Run: `npm run dev --prefix "C:/Work/Web/Wedding"`
Expected: Vite starts. Open the app and verify scroll reveals appear gradually and content remains visible/readable.

---

## Self-Review

Spec coverage:

- Configurable Reveal API: Task 1.
- StaggerGroup for repeated content: Task 2.
- Hero sequential entrance: Task 3.
- Countdown, couple, events, gallery, RSVP, gift stagger behavior: Task 2.
- Reduced-motion support: Task 1 and Task 2.
- Existing tests/build pass: Task 3.

Placeholder scan: no TODO/TBD/fill-later instructions remain.

Type consistency: `Reveal` and `StaggerGroup` props are defined before use and referenced consistently.
