# Task 6 Report: RSVP Form with Test

## Files created

- `C:/Work/Web/Wedding/src/components/RsvpSection.test.jsx`
- `C:/Work/Web/Wedding/src/components/RsvpSection.jsx`

## Fail-first result

Observed fail-first result with:

```bash
npm test --prefix "C:/Work/Web/Wedding" -- src/components/RsvpSection.test.jsx
```

Initial failure was expected because `src/components/RsvpSection.jsx` did not exist:

```text
Error: Failed to resolve import "./RsvpSection" from "src/components/RsvpSection.test.jsx". Does the file exist?
```

## Passing command summary

Passing command:

```bash
npm test --prefix "C:/Work/Web/Wedding" -- src/components/RsvpSection.test.jsx
```

Summary:

```text
Test Files  1 passed (1)
Tests       1 passed (1)
```

## Concerns

- The RSVP test needs a local `IntersectionObserver` stub because `Reveal` uses Framer Motion viewport behavior and jsdom does not provide `IntersectionObserver` by default.
- Task 6 was implemented in isolation only; `GiftSection` and `AudioPlayer` remain intentionally unimplemented per instruction.

## Self-review

- Created the RSVP test before implementation and observed the expected missing-component failure.
- Implemented only `RsvpSection.jsx` and did not add Gift or Audio functionality.
- Form submission calls `event.preventDefault()` and displays exactly `Cảm ơn bạn đã gửi phản hồi!`.
- Accessible labels are present exactly as required: `Tên khách mời`, `Số người tham dự`, `Lời chúc gửi đến cô dâu chú rể`, and radio label `Sẽ tham gia`.
- The focused Task 6 test passes with the exact requested npm command.