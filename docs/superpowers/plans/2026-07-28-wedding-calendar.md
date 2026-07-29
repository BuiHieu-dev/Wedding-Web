# Wedding Calendar Highlight Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a generated Vietnamese calendar section that highlights the wedding date with a heart.

**Architecture:** Add a pure calendar generation helper with focused tests, then render a new `WeddingCalendar` component between `Countdown` and `CoupleSection`. Reuse existing `SectionTitle`, `Reveal`, and `StaggerGroup` for styling and animation.

**Tech Stack:** React, Vite, Tailwind CSS, Framer Motion, Lucide React, Vitest, Testing Library.

## Global Constraints

- Use `weddingInfo.dateTarget` as the source of truth.
- Weekday labels must be Vietnamese: `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `CN`.
- Do not use a static image for the calendar.
- Do not add a date picker or user input field.
- Do not add new dependencies.
- Existing tests must keep passing.
- Production build must pass.

---

## File Structure

Create these files:

- `src/lib/calendar.js` — pure helper to generate month label, leading blanks, and day cells from a target date.
- `src/lib/calendar.test.js` — tests for Vietnamese month behavior and Monday-first alignment.
- `src/components/WeddingCalendar.jsx` — visual calendar section.
- `src/components/WeddingCalendar.test.jsx` — render test for heading, weekday labels, and highlighted wedding day.

Modify:

- `src/App.jsx` — render `WeddingCalendar` after `Countdown` and before `CoupleSection`.

---

### Task 1: Calendar Generation Helper

**Files:**
- Create: `src/lib/calendar.js`
- Create: `src/lib/calendar.test.js`

**Interfaces:**
- Produces: `getWeddingCalendar(targetDate)` returning `{ monthLabel, weddingDay, leadingBlanks, days }`.
- `monthLabel` is Vietnamese format `Tháng M, YYYY`.
- `days` is an array of day numbers from `1` through the last day of the month.
- `leadingBlanks` is a Monday-first offset where Monday is `0` and Sunday is `6`.

- [ ] **Step 1: Write failing tests**

Create `src/lib/calendar.test.js`:

```js
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
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test --prefix "C:/Work/Web/Wedding" -- src/lib/calendar.test.js`
Expected: FAIL because `src/lib/calendar.js` does not exist.

- [ ] **Step 3: Implement `src/lib/calendar.js`**

```js
export function getWeddingCalendar(targetDate) {
  const date = targetDate instanceof Date ? targetDate : new Date(targetDate)
  const year = date.getFullYear()
  const monthIndex = date.getMonth()
  const weddingDay = date.getDate()
  const firstDay = new Date(year, monthIndex, 1)
  const lastDay = new Date(year, monthIndex + 1, 0)
  const leadingBlanks = (firstDay.getDay() + 6) % 7
  const days = Array.from({ length: lastDay.getDate() }, (_, index) => index + 1)

  return {
    monthLabel: `Tháng ${monthIndex + 1}, ${year}`,
    weddingDay,
    leadingBlanks,
    days,
  }
}
```

- [ ] **Step 4: Run calendar helper test**

Run: `npm test --prefix "C:/Work/Web/Wedding" -- src/lib/calendar.test.js`
Expected: PASS.

---

### Task 2: WeddingCalendar Component and App Integration

**Files:**
- Create: `src/components/WeddingCalendar.jsx`
- Create: `src/components/WeddingCalendar.test.jsx`
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: `weddingInfo.dateTarget`.
- Consumes: `getWeddingCalendar(targetDate)`.
- Produces: visual section with text `Lịch ngày cưới`, `Đếm từng ngày đến khoảnh khắc yêu thương`, `Tháng 12, 2026`, weekday labels, and highlighted day `31` with heart icon.

- [ ] **Step 1: Write component render test**

Create `src/components/WeddingCalendar.test.jsx`:

```jsx
import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import WeddingCalendar from './WeddingCalendar'

describe('WeddingCalendar', () => {
  it('renders Vietnamese calendar labels and highlights the wedding day', () => {
    render(<WeddingCalendar />)

    expect(screen.getByText('Lịch ngày cưới')).toBeInTheDocument()
    expect(screen.getByText('Đếm từng ngày đến khoảnh khắc yêu thương')).toBeInTheDocument()
    expect(screen.getByText('Tháng 12, 2026')).toBeInTheDocument()

    for (const label of ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }

    const weddingCell = screen.getByLabelText('Ngày cưới 31')
    expect(within(weddingCell).getByText('31')).toBeInTheDocument()
    expect(weddingCell.querySelector('svg')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run component test to verify it fails**

Run: `npm test --prefix "C:/Work/Web/Wedding" -- src/components/WeddingCalendar.test.jsx`
Expected: FAIL because `WeddingCalendar.jsx` does not exist.

- [ ] **Step 3: Create `src/components/WeddingCalendar.jsx`**

```jsx
import { Heart } from 'lucide-react'
import { weddingInfo } from '../data/weddingData'
import { getWeddingCalendar } from '../lib/calendar'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import StaggerGroup from './StaggerGroup'

const weekdays = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN']

function WeddingCalendar() {
  const calendar = getWeddingCalendar(weddingInfo.dateTarget)
  const blanks = Array.from({ length: calendar.leadingBlanks }, (_, index) => `blank-${index}`)

  return (
    <section className="bg-white/70 px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-4xl">
        <SectionTitle
          eyebrow="Lịch ngày cưới"
          title="Đếm từng ngày đến khoảnh khắc yêu thương"
          subtitle="Một ngày thật đặc biệt đã được chúng mình đánh dấu bằng tất cả yêu thương."
        />
        <Reveal scale={0.96} distance={34}>
          <div className="rounded-[2rem] border border-champagne/70 bg-white/90 p-5 shadow-romantic backdrop-blur md:p-8">
            <div className="mb-6 flex items-center justify-between gap-4 rounded-3xl bg-gradient-to-r from-blush/60 to-champagne/50 px-5 py-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Save the date</p>
                <h3 className="mt-1 font-serif text-3xl font-bold text-charcoal">{calendar.monthLabel}</h3>
              </div>
              <Heart className="text-gold" size={30} fill="currentColor" />
            </div>
            <div className="grid grid-cols-7 gap-2 text-center text-xs font-bold uppercase tracking-[0.12em] text-charcoal/55 sm:gap-3">
              {weekdays.map((weekday) => (
                <div key={weekday}>{weekday}</div>
              ))}
            </div>
            <StaggerGroup className="mt-3 grid grid-cols-7 gap-2 sm:gap-3" stagger={0.025} delayChildren={0.05}>
              {blanks.map((blank) => (
                <div key={blank} aria-hidden="true" />
              ))}
              {calendar.days.map((day) => {
                const isWeddingDay = day === calendar.weddingDay
                return (
                  <Reveal
                    key={day}
                    amount={0.1}
                    distance={16}
                    scale={isWeddingDay ? 0.9 : 0.98}
                    className={isWeddingDay ? 'relative' : ''}
                  >
                    <div
                      aria-label={isWeddingDay ? `Ngày cưới ${day}` : undefined}
                      className={
                        isWeddingDay
                          ? 'relative mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-gold font-serif text-lg font-bold text-white shadow-lg ring-8 ring-blush/60 sm:h-12 sm:w-12'
                          : 'mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-ivory text-sm font-semibold text-charcoal/70 sm:h-11 sm:w-11'
                      }
                    >
                      <span>{day}</span>
                      {isWeddingDay ? (
                        <Heart className="absolute -right-1 -top-1 h-4 w-4 text-blush" fill="currentColor" />
                      ) : null}
                    </div>
                  </Reveal>
                )
              })}
            </StaggerGroup>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default WeddingCalendar
```

- [ ] **Step 4: Insert into `src/App.jsx`**

Add import:

```jsx
import WeddingCalendar from './components/WeddingCalendar'
```

Render after `Countdown`:

```jsx
<Countdown />
<WeddingCalendar />
<CoupleSection />
```

- [ ] **Step 5: Run calendar component test**

Run: `npm test --prefix "C:/Work/Web/Wedding" -- src/components/WeddingCalendar.test.jsx`
Expected: PASS.

---

### Task 3: Final Verification

**Files:**
- No new files.

**Interfaces:**
- Verifies completed app.

- [ ] **Step 1: Run full tests**

Run: `npm test --prefix "C:/Work/Web/Wedding"`
Expected: PASS.

- [ ] **Step 2: Run production build**

Run: `npm run build --prefix "C:/Work/Web/Wedding"`
Expected: PASS.

- [ ] **Step 3: Run app smoke check**

Run: `npm run dev --prefix "C:/Work/Web/Wedding"`
Expected: Vite starts. Open app and verify calendar appears after countdown, displays `Tháng 12, 2026`, weekday labels `T2` through `CN`, and day `31` is marked with a heart.

---

## Self-Review

Spec coverage:

- Generated calendar from `weddingInfo.dateTarget`: Task 1 and Task 2.
- Vietnamese weekday labels: Task 2.
- `Tháng 12, 2026` for current wedding date: Task 1 and Task 2.
- Example future date `2026-08-19T00:00:00` maps to `Tháng 8, 2026` and day `19`: Task 1.
- Heart-highlighted wedding day: Task 2.
- Placement after Countdown before CoupleSection: Task 2.
- Existing tests and build pass: Task 3.

Placeholder scan: no TODO/TBD/fill-later instructions remain.

Type consistency: `getWeddingCalendar`, `WeddingCalendar`, and `weddingInfo.dateTarget` are defined before use and referenced consistently.
