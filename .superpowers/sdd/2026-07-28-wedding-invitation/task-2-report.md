# Task 2 Report: Add Data and Countdown Logic

## Files Created

- `C:/Work/Web/Wedding/src/data/weddingData.js`
  - Exports `weddingInfo`, `coupleProfiles`, `events`, `galleryImages`, and `giftAccounts` using the exact values specified in Task 2.
- `C:/Work/Web/Wedding/src/lib/countdown.js`
  - Exports `getCountdownParts(targetDate, nowDate)` returning non-negative integer `{ days, hours, minutes, seconds }` values.
- `C:/Work/Web/Wedding/src/lib/countdown.test.js`
  - Covers the wedding countdown calculation and post-target non-negative behavior.

## Command Outputs Summary

- Red check: `npm test --prefix "C:/Work/Web/Wedding" -- src/lib/countdown.test.js`
  - Failed as expected before implementation because `./countdown` could not be resolved.
- Green check: `npm test --prefix "C:/Work/Web/Wedding" -- src/lib/countdown.test.js`
  - Passed: 1 test file passed, 2 tests passed.

## Concerns

- No Task-2-related concerns found.
- The implementation intentionally does not add UI section components because they belong to later tasks.

## Self-Review

- Confirmed Task 2 scope only: data module, countdown helper, and countdown tests.
- Confirmed exported names match the plan: `weddingInfo`, `coupleProfiles`, `events`, `galleryImages`, `giftAccounts`, and `getCountdownParts`.
- Confirmed countdown target and data values match the plan, including `2026-12-31T00:00:00`.
- Confirmed countdown values are clamped to zero after the target date.
- Confirmed focused Task 2 test command passes.
