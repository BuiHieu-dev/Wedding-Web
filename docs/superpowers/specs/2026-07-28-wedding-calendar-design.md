# Wedding Calendar Highlight Design

## Goal

Add a Vietnamese calendar section that highlights the wedding date with a heart. The section should be generated from the wedding date data so it updates automatically when `weddingInfo.dateTarget` changes.

## Placement

Render the calendar after `Countdown` and before `CoupleSection`.

## Data Behavior

- Use `weddingInfo.dateTarget` as the source of truth.
- Generate the calendar month from the target date.
- If the target date is `2026-12-31T00:00:00`, show `Tháng 12, 2026` and highlight day `31`.
- If the target date later changes to `2026-08-19T00:00:00`, show `Tháng 8, 2026` and highlight day `19`.

## UI

Create a `WeddingCalendar` section:

- Eyebrow: `Lịch ngày cưới`
- Title: `Đếm từng ngày đến khoảnh khắc yêu thương`
- Subtitle: short romantic Vietnamese sentence.
- Calendar card with ivory/white background, champagne border, rounded corners, and romantic shadow.
- Weekday labels in Vietnamese: `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `CN`.
- Empty leading cells align the first day of the month to the correct weekday.
- Wedding day is highlighted with a soft blush/gold circle and a heart icon.

## Animation

Use existing `Reveal` and `StaggerGroup` patterns:

- Calendar section reveals on scroll.
- Calendar days appear gradually.
- Wedding day has a slightly more prominent scale/visual treatment.

## Constraints

- Do not use a static image for the calendar.
- Do not add a date picker or user input field.
- Do not add new dependencies.
- Existing tests must keep passing.
- Production build must pass.
