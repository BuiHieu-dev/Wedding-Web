# Wedding Invitation Website Design

## Goal

Build a premium, elegant, romantic, mobile-first single-page wedding invitation website for Hoàng Sơn and Yến Nhi. The wedding date is 31/12/2026.

The site should be fully functional with placeholder images, placeholder event information, placeholder bank details, and placeholder audio so the layout can be tested immediately and real assets can be swapped in later.

## Technology

Use React with Vite for a lightweight static single-page app. Use Tailwind CSS for styling, Framer Motion for scroll and UI animations, and Lucide React for icons.

The app does not need a backend. RSVP submission is frontend-only and should show a success message after submit. Copy buttons for bank account numbers should use the browser clipboard API.

## Visual Direction

The design should feel like a premium romantic wedding template:

- Backgrounds: white, ivory, light blush, and soft champagne gradients.
- Accents: soft pink, champagne gold, muted gold.
- Text: readable charcoal and dark gray.
- Heading typography: elegant serif such as Playfair Display or Cormorant Garamond.
- Body typography: clean sans-serif such as Montserrat.
- Layout: mobile-first with generous spacing, rounded cards, soft shadows, subtle borders, and delicate decorative details.
- Animation: smooth fade-up and slide-up scroll reveals, gentle hover zoom on images, no jarring motion.

## Page Sections

### Hero

Full-height section with a high-quality romantic Unsplash background image and dark overlay for readability. Centered content:

- “Save The Date”
- “Hoàng Sơn & Yến Nhi”
- “31 . 12 . 2026”
- Subtle animated scroll-down indicator

### Countdown

A distinct, polished countdown section calculating remaining days, hours, minutes, and seconds until `2026-12-31T00:00:00`. The layout should be compact and readable on mobile, with each time unit in a card.

### The Couple

Two elegant cards for groom and bride. Each card includes:

- Oval or circular portrait image
- Role label: Chú Rể / Cô Dâu
- Full name: Hoàng Sơn / Yến Nhi
- Short romantic quote or bio placeholder

On mobile, stack vertically. On desktop, display side by side.

### Event Details

Cards for wedding events. Include two initial placeholder events:

1. Lễ Gia Tiên
2. Tiệc Cưới

Each card includes:

- Event name
- Time
- Date
- Venue name
- Exact address placeholder
- Outlined “Chỉ đường” button with map icon

The map button can open a Google Maps search URL using the event address.

### Photo Gallery

Responsive masonry-style gallery using placeholder pre-wedding images. Images should have rounded corners, soft shadows, and hover scale/zoom. On mobile use one column; on larger screens use two or three columns.

### RSVP & Guestbook

Card-styled form with:

- Guest name text input
- Number of attendees input/select
- Attendance status radio buttons: “Sẽ tham gia” and “Rất tiếc không thể tham gia”
- Wishes textarea
- Premium styled submit button

On submit, prevent page reload and show a thank-you/success message. No backend persistence is required.

### Wedding Gift / Bank Info

Tasteful section with two cards: one for the groom and one for the bride. Each card includes:

- Placeholder QR code image
- Account name
- Account number
- Bank name
- Copy icon/button next to the account number

Copy action should write the account number to clipboard and show lightweight copied feedback.

### Floating Audio Player

Small fixed bottom-corner play/pause button. It should be visually subtle and romantic. The audio source can be a placeholder path or public sample, and failure to play should not break the page.

## Component Structure

Use modular components:

- `App`
- `components/Hero`
- `components/Countdown`
- `components/CoupleSection`
- `components/EventsSection`
- `components/Gallery`
- `components/RsvpSection`
- `components/GiftSection`
- `components/AudioPlayer`
- `components/SectionTitle`

Shared data such as images, event details, couple details, and bank details can live in a local data file or inside the relevant component if the data is small. Prefer simple structure over premature abstraction.

## Responsiveness

The design must prioritize phones because most guests will view the invitation on mobile. Text sizes, spacing, form fields, cards, and gallery images should be comfortable on small screens. Desktop should enhance the layout with wider grids, not require separate behavior.

## Verification

After implementation:

- Install dependencies successfully.
- Run the dev server.
- Verify the page renders without runtime errors.
- Verify countdown updates.
- Verify RSVP submit shows a success message.
- Verify account copy buttons work or show graceful feedback.
- Verify the page is responsive on mobile and desktop widths.
- Verify production build succeeds.
