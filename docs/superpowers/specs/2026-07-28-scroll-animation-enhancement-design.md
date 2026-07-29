# Scroll Animation Enhancement Design

## Goal

Enhance the wedding invitation website with richer, gradual scroll-triggered animations while preserving the premium romantic feel and mobile-first performance.

## Approved Approach

Use a romantic stagger reveal pattern:

- Upgrade the shared `Reveal` component so each usage can control direction, distance, delay, duration, scale, and viewport amount.
- Add a shared `StaggerGroup` component for grouped children.
- Use staggered reveal sequences for repeated UI elements: countdown cards, couple cards, event cards, gallery images, RSVP form fields, and gift cards.
- Keep animation gentle: fade, slide-up/side, and subtle scale from `0.96` to `1`.
- Keep durations around `0.65s–0.9s` and item stagger around `0.08s–0.14s`.
- Respect reduced-motion preferences through Framer Motion’s `useReducedMotion`.

## Section Behavior

### Hero

Animate hero content in sequence:

1. “Save The Date” fades/slides in.
2. Couple names fade/slides in slightly later.
3. Divider line expands or fades in.
4. Wedding date fades/slides in.

The scroll indicator keeps its gentle loop.

### Countdown

The countdown container reveals first, then the four time cards appear one by one.

### Couple, Events, Gallery, Gifts

Section titles reveal normally. Cards/images reveal gradually with stagger. Hover zoom remains only on gallery images.

### RSVP

The form card reveals first. Inner form groups reveal in order: text/select row, attendance fieldset, wishes textarea, submit button, success message when shown.

## Constraints

- Do not add new animation libraries.
- Do not add heavy parallax or aggressive rotation.
- Do not change content, layout hierarchy, or data shape except what animation wrappers require.
- Existing tests must keep passing.
- Production build must pass.
