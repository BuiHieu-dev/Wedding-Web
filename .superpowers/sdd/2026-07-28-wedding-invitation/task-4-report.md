# Task 4 Report: Hero, Countdown, and Couple Sections

## Files Created

- `C:/Work/Web/Wedding/src/components/Hero.jsx`
- `C:/Work/Web/Wedding/src/components/Countdown.jsx`
- `C:/Work/Web/Wedding/src/components/CoupleSection.jsx`

## Commands Run

- `npm test --prefix "C:/Work/Web/Wedding" -- src/lib/countdown.test.js`
  - Result: PASS, 1 test file passed, 2 tests passed.

## Concerns

- Did not run a full production build because the user requested only Task 4, and later-task components may still be intentionally absent from `src/App.jsx`.
- Did not implement Events, Gallery, RSVP, Gift, or Audio components per explicit scope constraint.

## Self-Review

- `Hero.jsx` consumes `weddingInfo` and renders the hero image, overlay, couple name, date display, and animated down chevron as specified.
- `Countdown.jsx` consumes `weddingInfo.dateTarget`, `getCountdownParts`, and `Reveal`, initializes countdown state, updates every second, and clears the interval on unmount.
- `CoupleSection.jsx` consumes `coupleProfiles`, `Reveal`, and `SectionTitle`, rendering the planned title block and bride/groom cards.
- Focused countdown tests passed without Task-4-related failures.
