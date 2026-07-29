# Wedding Invitation Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a premium, elegant, romantic, mobile-first single-page wedding invitation website for Hoàng Sơn and Yến Nhi with placeholder assets and fully functional frontend interactions.

**Architecture:** Create a React + Vite static single-page app. Keep presentation split into focused React components, store small reusable content arrays in a local data module, and use Tailwind utility classes for responsive styling. Use Framer Motion for scroll reveal and Lucide React for icons.

**Tech Stack:** React, Vite, Tailwind CSS, Framer Motion, Lucide React, Vitest, Testing Library, jsdom.

## Global Constraints

- Wedding couple: Hoàng Sơn and Yến Nhi.
- Wedding date display: 31 . 12 . 2026.
- Countdown target: `2026-12-31T00:00:00`.
- Site type: single-page frontend-only static website.
- Styling: white, ivory, light blush, champagne gold, muted gold, charcoal/dark gray.
- Typography: elegant serif heading font and clean sans-serif body font.
- RSVP: frontend-only, prevent page reload, show success message after submit.
- Gift copy buttons: use browser clipboard API and show copied feedback.
- Mobile-first: all sections must be readable and polished on phone widths.
- Animation: smooth fade-up/slide-up scroll reveals and gentle image hover zoom.
- Placeholder assets: use testable placeholder image, QR, event, bank, and audio data that can be replaced later.

---

## File Structure

Create these files:

- `package.json` — project scripts and dependencies.
- `index.html` — Vite root HTML and Google Fonts links.
- `vite.config.js` — Vite React plugin and Vitest jsdom test environment.
- `tailwind.config.js` — Tailwind content paths and wedding theme tokens.
- `postcss.config.js` — Tailwind/PostCSS config.
- `src/main.jsx` — React entry point.
- `src/App.jsx` — page composition.
- `src/index.css` — Tailwind directives, global font variables, base styles.
- `src/data/weddingData.js` — couple, events, gallery, gift, and audio placeholder data.
- `src/lib/countdown.js` — pure countdown calculation helper.
- `src/components/SectionTitle.jsx` — reusable section eyebrow/title/subtitle block.
- `src/components/Reveal.jsx` — reusable Framer Motion scroll-reveal wrapper.
- `src/components/Hero.jsx` — full-screen hero section.
- `src/components/Countdown.jsx` — live countdown UI.
- `src/components/CoupleSection.jsx` — bride/groom cards.
- `src/components/EventsSection.jsx` — event detail cards and map links.
- `src/components/Gallery.jsx` — responsive masonry-style image grid.
- `src/components/RsvpSection.jsx` — RSVP and guestbook form.
- `src/components/GiftSection.jsx` — bank/QR gift cards and copy behavior.
- `src/components/AudioPlayer.jsx` — floating play/pause button.
- `src/test/setup.js` — test setup imports.
- `src/lib/countdown.test.js` — countdown helper tests.
- `src/components/RsvpSection.test.jsx` — RSVP interaction test.
- `src/components/GiftSection.test.jsx` — copy interaction test.

---

### Task 1: Scaffold and Configure the App

**Files:**
- Create: `package.json`
- Create: `index.html`
- Create: `vite.config.js`
- Create: `tailwind.config.js`
- Create: `postcss.config.js`
- Create: `src/main.jsx`
- Create: `src/App.jsx`
- Create: `src/index.css`
- Create: `src/test/setup.js`

**Interfaces:**
- Produces: Vite React app root mounted to `#root`.
- Produces: npm scripts `dev`, `build`, `test`, and `preview`.
- Produces: Tailwind theme colors `ivory`, `blush`, `champagne`, `gold`, and `charcoal`.

- [ ] **Step 1: Create `package.json`**

```json
{
  "name": "wedding-invitation",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite --host 0.0.0.0",
    "build": "vite build",
    "preview": "vite preview --host 0.0.0.0",
    "test": "vitest run"
  },
  "dependencies": {
    "@vitejs/plugin-react": "latest",
    "vite": "latest",
    "react": "latest",
    "react-dom": "latest",
    "tailwindcss": "latest",
    "@tailwindcss/postcss": "latest",
    "framer-motion": "latest",
    "lucide-react": "latest"
  },
  "devDependencies": {
    "vitest": "latest",
    "jsdom": "latest",
    "@testing-library/react": "latest",
    "@testing-library/jest-dom": "latest",
    "@testing-library/user-event": "latest"
  }
}
```

- [ ] **Step 2: Create `index.html`**

```html
<!doctype html>
<html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Thiệp cưới online của Hoàng Sơn và Yến Nhi - 31.12.2026"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700;800&display=swap"
      rel="stylesheet"
    />
    <title>Hoàng Sơn & Yến Nhi | Wedding Invitation</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

- [ ] **Step 3: Create `vite.config.js`**

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
    globals: true,
  },
})
```

- [ ] **Step 4: Create `tailwind.config.js`**

```js
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#fffaf2',
        blush: '#f8dfe6',
        champagne: '#f4e4c1',
        gold: '#b68b45',
        charcoal: '#2f2f35',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        romantic: '0 24px 70px rgba(93, 64, 55, 0.12)',
      },
    },
  },
  plugins: [],
}
```

- [ ] **Step 5: Create `postcss.config.js`**

```js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```

- [ ] **Step 6: Create `src/index.css`**

```css
@import "tailwindcss";

:root {
  font-family: 'Montserrat', sans-serif;
  color: #2f2f35;
  background: #fffaf2;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  background:
    radial-gradient(circle at top left, rgba(248, 223, 230, 0.65), transparent 32rem),
    linear-gradient(180deg, #fffaf2 0%, #ffffff 42%, #fff7f4 100%);
}

button,
input,
select,
textarea {
  font: inherit;
}

::selection {
  background: #f8dfe6;
  color: #2f2f35;
}
```

- [ ] **Step 7: Create `src/main.jsx`**

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

- [ ] **Step 8: Create temporary `src/App.jsx`**

```jsx
function App() {
  return (
    <main className="min-h-screen bg-ivory text-charcoal">
      <section className="flex min-h-screen items-center justify-center px-6 text-center">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-gold">Save The Date</p>
          <h1 className="font-serif text-5xl font-bold">Hoàng Sơn & Yến Nhi</h1>
          <p className="mt-4 text-lg">31 . 12 . 2026</p>
        </div>
      </section>
    </main>
  )
}

export default App
```

- [ ] **Step 9: Create `src/test/setup.js`**

```js
import '@testing-library/jest-dom/vitest'
```

- [ ] **Step 10: Install dependencies**

Run: `npm install`
Expected: dependencies install and `package-lock.json` is created.

- [ ] **Step 11: Run initial build**

Run: `npm run build`
Expected: PASS and Vite creates a production bundle in `dist/`.

---

### Task 2: Add Data and Countdown Logic

**Files:**
- Create: `src/data/weddingData.js`
- Create: `src/lib/countdown.js`
- Create: `src/lib/countdown.test.js`

**Interfaces:**
- Produces: `weddingInfo` object with `couple`, `dateDisplay`, `dateTarget`, `heroImage`, and `audioSrc`.
- Produces: `coupleProfiles`, `events`, `galleryImages`, and `giftAccounts` arrays.
- Produces: `getCountdownParts(targetDate, nowDate)` returning `{ days, hours, minutes, seconds }` with non-negative integer values.

- [ ] **Step 1: Create `src/data/weddingData.js`**

```js
export const weddingInfo = {
  couple: 'Hoàng Sơn & Yến Nhi',
  dateDisplay: '31 . 12 . 2026',
  dateTarget: '2026-12-31T00:00:00',
  heroImage:
    'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=85',
  audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
}

export const coupleProfiles = [
  {
    role: 'Chú Rể',
    name: 'Hoàng Sơn',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=85',
    quote: 'Cảm ơn em vì đã đến và biến những ngày bình thường trở nên thật dịu dàng.',
  },
  {
    role: 'Cô Dâu',
    name: 'Yến Nhi',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=85',
    quote: 'Tình yêu là khi ta cùng nhau đi qua những mùa thương nhớ và chọn ở lại.',
  },
]

export const events = [
  {
    name: 'Lễ Gia Tiên',
    time: '09:00',
    date: 'Thứ Năm, 31/12/2026',
    venue: 'Tư gia họ nhà trai',
    address: '123 Đường Hoa Hồng, Quận 1, TP. Hồ Chí Minh',
  },
  {
    name: 'Tiệc Cưới',
    time: '18:00',
    date: 'Thứ Năm, 31/12/2026',
    venue: 'White Palace Wedding Hall',
    address: '456 Đại lộ Tình Yêu, Quận 3, TP. Hồ Chí Minh',
  },
]

export const galleryImages = [
  'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1509610973147-232dfea52a97?auto=format&fit=crop&w=900&q=85',
]

export const giftAccounts = [
  {
    owner: 'Chú Rể',
    accountName: 'HOANG SON',
    accountNumber: '0123456789',
    bankName: 'Vietcombank',
    qrImage: 'https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=HOANG-SON-0123456789',
  },
  {
    owner: 'Cô Dâu',
    accountName: 'YEN NHI',
    accountNumber: '0987654321',
    bankName: 'Techcombank',
    qrImage: 'https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=YEN-NHI-0987654321',
  },
]
```

- [ ] **Step 2: Create `src/lib/countdown.js`**

```js
const SECOND = 1000
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60
const DAY = HOUR * 24

export function getCountdownParts(targetDate, nowDate = new Date()) {
  const target = targetDate instanceof Date ? targetDate : new Date(targetDate)
  const now = nowDate instanceof Date ? nowDate : new Date(nowDate)
  const diff = Math.max(target.getTime() - now.getTime(), 0)

  return {
    days: Math.floor(diff / DAY),
    hours: Math.floor((diff % DAY) / HOUR),
    minutes: Math.floor((diff % HOUR) / MINUTE),
    seconds: Math.floor((diff % MINUTE) / SECOND),
  }
}
```

- [ ] **Step 3: Create `src/lib/countdown.test.js`**

```js
import { describe, expect, it } from 'vitest'
import { getCountdownParts } from './countdown'

describe('getCountdownParts', () => {
  it('returns days hours minutes and seconds until the wedding date', () => {
    const result = getCountdownParts('2026-12-31T00:00:00', '2026-12-29T22:30:15')

    expect(result).toEqual({
      days: 1,
      hours: 1,
      minutes: 29,
      seconds: 45,
    })
  })

  it('never returns negative values after the target date', () => {
    const result = getCountdownParts('2026-12-31T00:00:00', '2027-01-01T00:00:00')

    expect(result).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    })
  })
})
```

- [ ] **Step 4: Run countdown tests**

Run: `npm test -- src/lib/countdown.test.js`
Expected: PASS with 2 tests.

---

### Task 3: Build Shared Presentation Components and Page Composition

**Files:**
- Create: `src/components/Reveal.jsx`
- Create: `src/components/SectionTitle.jsx`
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: Framer Motion.
- Produces: `Reveal({ children, className })` wrapper.
- Produces: `SectionTitle({ eyebrow, title, subtitle })` component.
- Produces: final `App` composition slots for all section components.

- [ ] **Step 1: Create `src/components/Reveal.jsx`**

```jsx
import { motion } from 'framer-motion'

function Reveal({ children, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
```

- [ ] **Step 2: Create `src/components/SectionTitle.jsx`**

```jsx
import Reveal from './Reveal'

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <Reveal className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-gold">{eyebrow}</p>
      <h2 className="font-serif text-4xl font-bold text-charcoal md:text-5xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-sm leading-7 text-charcoal/70 md:text-base">{subtitle}</p> : null}
    </Reveal>
  )
}

export default SectionTitle
```

- [ ] **Step 3: Replace `src/App.jsx` with final composition imports**

```jsx
import AudioPlayer from './components/AudioPlayer'
import Countdown from './components/Countdown'
import CoupleSection from './components/CoupleSection'
import EventsSection from './components/EventsSection'
import Gallery from './components/Gallery'
import GiftSection from './components/GiftSection'
import Hero from './components/Hero'
import RsvpSection from './components/RsvpSection'

function App() {
  return (
    <main className="overflow-hidden bg-ivory text-charcoal">
      <Hero />
      <Countdown />
      <CoupleSection />
      <EventsSection />
      <Gallery />
      <RsvpSection />
      <GiftSection />
      <AudioPlayer />
    </main>
  )
}

export default App
```

- [ ] **Step 4: Do not run build yet**

Expected: Build will fail until section components are created in later tasks.

---

### Task 4: Implement Hero, Countdown, and Couple Sections

**Files:**
- Create: `src/components/Hero.jsx`
- Create: `src/components/Countdown.jsx`
- Create: `src/components/CoupleSection.jsx`

**Interfaces:**
- Consumes: `weddingInfo` and `coupleProfiles` from `src/data/weddingData.js`.
- Consumes: `getCountdownParts(targetDate, nowDate)` from `src/lib/countdown.js`.
- Consumes: `Reveal` and `SectionTitle`.
- Produces: visible hero, countdown, and couple sections.

- [ ] **Step 1: Create `src/components/Hero.jsx`**

```jsx
import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { weddingInfo } from '../data/weddingData'

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20 text-center text-white">
      <img
        src={weddingInfo.heroImage}
        alt="Romantic wedding background"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/60" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        className="relative z-10 mx-auto max-w-4xl"
      >
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.45em] text-champagne md:text-sm">
          Save The Date
        </p>
        <h1 className="font-serif text-5xl font-bold leading-tight drop-shadow-lg sm:text-6xl md:text-8xl">
          {weddingInfo.couple}
        </h1>
        <div className="mx-auto my-7 h-px w-28 bg-champagne/80" />
        <p className="text-lg font-medium tracking-[0.35em] text-white/90 md:text-2xl">
          {weddingInfo.dateDisplay}
        </p>
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/80"
      >
        <ChevronDown size={32} strokeWidth={1.4} />
      </motion.div>
    </section>
  )
}

export default Hero
```

- [ ] **Step 2: Create `src/components/Countdown.jsx`**

```jsx
import { useEffect, useState } from 'react'
import Reveal from './Reveal'
import { weddingInfo } from '../data/weddingData'
import { getCountdownParts } from '../lib/countdown'

const labels = [
  ['days', 'Ngày'],
  ['hours', 'Giờ'],
  ['minutes', 'Phút'],
  ['seconds', 'Giây'],
]

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(() => getCountdownParts(weddingInfo.dateTarget))

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getCountdownParts(weddingInfo.dateTarget))
    }, 1000)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="relative z-20 -mt-14 px-4 pb-16 md:px-8">
      <Reveal className="mx-auto max-w-5xl rounded-[2rem] border border-white/80 bg-white/85 p-4 shadow-romantic backdrop-blur md:p-6">
        <div className="grid grid-cols-4 gap-2 sm:gap-4">
          {labels.map(([key, label]) => (
            <div key={key} className="rounded-2xl bg-gradient-to-br from-ivory to-white px-2 py-5 text-center shadow-sm sm:py-6">
              <p className="font-serif text-3xl font-bold text-gold sm:text-4xl md:text-5xl">
                {String(timeLeft[key]).padStart(2, '0')}
              </p>
              <p className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-charcoal/60 sm:text-xs">
                {label}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

export default Countdown
```

- [ ] **Step 3: Create `src/components/CoupleSection.jsx`**

```jsx
import SectionTitle from './SectionTitle'
import Reveal from './Reveal'
import { coupleProfiles } from '../data/weddingData'

function CoupleSection() {
  return (
    <section className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Cô dâu & Chú rể"
          title="Chuyện tình của chúng mình"
          subtitle="Hai trái tim, một hành trình, và một ngày thật đẹp để cùng nhau bắt đầu chương mới."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {coupleProfiles.map((person) => (
            <Reveal key={person.role} className="rounded-[2rem] border border-white bg-white/80 p-6 text-center shadow-romantic backdrop-blur md:p-8">
              <div className="mx-auto h-56 w-44 overflow-hidden rounded-full border-8 border-ivory shadow-lg md:h-72 md:w-56">
                <img src={person.image} alt={person.name} className="h-full w-full object-cover" />
              </div>
              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.35em] text-gold">{person.role}</p>
              <h3 className="mt-3 font-serif text-4xl font-bold text-charcoal">{person.name}</h3>
              <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-charcoal/70">“{person.quote}”</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoupleSection
```

- [ ] **Step 4: Run focused tests**

Run: `npm test -- src/lib/countdown.test.js`
Expected: PASS.

---

### Task 5: Implement Events and Gallery Sections

**Files:**
- Create: `src/components/EventsSection.jsx`
- Create: `src/components/Gallery.jsx`

**Interfaces:**
- Consumes: `events` and `galleryImages` from `src/data/weddingData.js`.
- Consumes: `Reveal` and `SectionTitle`.
- Produces: event cards with Google Maps search links.
- Produces: responsive masonry-style gallery.

- [ ] **Step 1: Create `src/components/EventsSection.jsx`**

```jsx
import { CalendarDays, Clock, MapPin, Navigation } from 'lucide-react'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import { events } from '../data/weddingData'

function EventsSection() {
  return (
    <section className="bg-white px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Sự kiện cưới"
          title="Trân trọng kính mời"
          subtitle="Sự hiện diện của bạn là niềm hạnh phúc lớn nhất trong ngày vui của chúng mình."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {events.map((event) => {
            const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.address)}`

            return (
              <Reveal key={event.name} className="rounded-[2rem] border border-champagne/60 bg-ivory/70 p-6 shadow-romantic md:p-8">
                <h3 className="font-serif text-3xl font-bold text-charcoal">{event.name}</h3>
                <div className="mt-6 space-y-4 text-sm leading-7 text-charcoal/75">
                  <p className="flex items-start gap-3"><Clock className="mt-1 text-gold" size={18} /> {event.time}</p>
                  <p className="flex items-start gap-3"><CalendarDays className="mt-1 text-gold" size={18} /> {event.date}</p>
                  <p className="flex items-start gap-3"><MapPin className="mt-1 shrink-0 text-gold" size={18} /> <span><strong>{event.venue}</strong><br />{event.address}</span></p>
                </div>
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-2 rounded-full border border-gold px-5 py-3 text-sm font-semibold text-gold transition hover:bg-gold hover:text-white"
                >
                  <Navigation size={17} /> Chỉ đường
                </a>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default EventsSection
```

- [ ] **Step 2: Create `src/components/Gallery.jsx`**

```jsx
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import { galleryImages } from '../data/weddingData'

function Gallery() {
  return (
    <section className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Album hình cưới"
          title="Những khoảnh khắc yêu thương"
          subtitle="Một vài hình ảnh lưu giữ những ngày thật đẹp trên hành trình yêu thương."
        />
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {galleryImages.map((image, index) => (
            <Reveal key={image} className="mb-5 break-inside-avoid overflow-hidden rounded-[1.5rem] shadow-romantic">
              <img
                src={image}
                alt={`Ảnh cưới ${index + 1}`}
                className="w-full object-cover transition duration-700 hover:scale-105"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
```

- [ ] **Step 3: Run build check**

Run: `npm run build`
Expected: FAIL only if remaining uncreated components from `App.jsx` are missing: `RsvpSection`, `GiftSection`, or `AudioPlayer`. Any other failure must be fixed in this task.

---

### Task 6: Implement RSVP Form with Test

**Files:**
- Create: `src/components/RsvpSection.jsx`
- Create: `src/components/RsvpSection.test.jsx`

**Interfaces:**
- Consumes: `Reveal` and `SectionTitle`.
- Produces: RSVP form with accessible labels: `Tên khách mời`, `Số người tham dự`, `Lời chúc gửi đến cô dâu chú rể`.
- Produces: submit feedback text `Cảm ơn bạn đã gửi phản hồi!`.

- [ ] **Step 1: Create `src/components/RsvpSection.test.jsx` before implementation**

```jsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import RsvpSection from './RsvpSection'

describe('RsvpSection', () => {
  it('shows a thank-you message after submitting the form', async () => {
    const user = userEvent.setup()
    render(<RsvpSection />)

    await user.type(screen.getByLabelText('Tên khách mời'), 'Nguyễn Văn A')
    await user.selectOptions(screen.getByLabelText('Số người tham dự'), '2')
    await user.click(screen.getByLabelText('Sẽ tham gia'))
    await user.type(screen.getByLabelText('Lời chúc gửi đến cô dâu chú rể'), 'Chúc hai bạn trăm năm hạnh phúc!')
    await user.click(screen.getByRole('button', { name: 'Gửi phản hồi' }))

    expect(screen.getByText('Cảm ơn bạn đã gửi phản hồi!')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run RSVP test to verify it fails**

Run: `npm test -- src/components/RsvpSection.test.jsx`
Expected: FAIL because `RsvpSection.jsx` does not exist.

- [ ] **Step 3: Create `src/components/RsvpSection.jsx`**

```jsx
import { useState } from 'react'
import { Send } from 'lucide-react'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'

function RsvpSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="bg-white px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-4xl">
        <SectionTitle
          eyebrow="Xác nhận tham dự"
          title="Gửi lời chúc đến chúng mình"
          subtitle="Hãy cho chúng mình biết bạn có thể đến chung vui và để lại đôi lời yêu thương nhé."
        />
        <Reveal>
          <form onSubmit={handleSubmit} className="rounded-[2rem] border border-champagne/60 bg-ivory/80 p-6 shadow-romantic md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="text-sm font-semibold text-charcoal/80">
                Tên khách mời
                <input
                  required
                  type="text"
                  className="mt-2 w-full rounded-2xl border border-champagne/70 bg-white px-4 py-3 outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/10"
                  placeholder="Nhập tên của bạn"
                />
              </label>
              <label className="text-sm font-semibold text-charcoal/80">
                Số người tham dự
                <select className="mt-2 w-full rounded-2xl border border-champagne/70 bg-white px-4 py-3 outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/10" defaultValue="1">
                  <option value="1">1 người</option>
                  <option value="2">2 người</option>
                  <option value="3">3 người</option>
                  <option value="4">4 người</option>
                </select>
              </label>
            </div>
            <fieldset className="mt-5 rounded-2xl border border-champagne/70 bg-white/70 p-4">
              <legend className="px-2 text-sm font-semibold text-charcoal/80">Bạn sẽ tham dự chứ?</legend>
              <div className="mt-2 grid gap-3 sm:grid-cols-2">
                <label className="flex items-center gap-3 rounded-xl bg-ivory px-4 py-3 text-sm text-charcoal/75">
                  <input type="radio" name="attendance" value="yes" defaultChecked />
                  Sẽ tham gia
                </label>
                <label className="flex items-center gap-3 rounded-xl bg-ivory px-4 py-3 text-sm text-charcoal/75">
                  <input type="radio" name="attendance" value="no" />
                  Rất tiếc không thể tham gia
                </label>
              </div>
            </fieldset>
            <label className="mt-5 block text-sm font-semibold text-charcoal/80">
              Lời chúc gửi đến cô dâu chú rể
              <textarea
                rows="5"
                className="mt-2 w-full resize-none rounded-2xl border border-champagne/70 bg-white px-4 py-3 outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/10"
                placeholder="Gửi lời chúc của bạn..."
              />
            </label>
            <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-charcoal sm:w-auto">
              <Send size={18} /> Gửi phản hồi
            </button>
            {submitted ? <p className="mt-5 rounded-2xl bg-blush/60 px-4 py-3 text-sm font-semibold text-charcoal">Cảm ơn bạn đã gửi phản hồi!</p> : null}
          </form>
        </Reveal>
      </div>
    </section>
  )
}

export default RsvpSection
```

- [ ] **Step 4: Run RSVP test to verify it passes**

Run: `npm test -- src/components/RsvpSection.test.jsx`
Expected: PASS.

---

### Task 7: Implement Gift Section with Test

**Files:**
- Create: `src/components/GiftSection.jsx`
- Create: `src/components/GiftSection.test.jsx`

**Interfaces:**
- Consumes: `giftAccounts` from `src/data/weddingData.js`.
- Consumes: `Reveal` and `SectionTitle`.
- Produces: copy buttons with accessible names `Sao chép số tài khoản 0123456789` and `Sao chép số tài khoản 0987654321`.
- Produces: copied feedback text `Đã sao chép`.

- [ ] **Step 1: Create `src/components/GiftSection.test.jsx` before implementation**

```jsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import GiftSection from './GiftSection'

beforeEach(() => {
  Object.assign(navigator, {
    clipboard: {
      writeText: vi.fn().mockResolvedValue(undefined),
    },
  })
})

describe('GiftSection', () => {
  it('copies an account number and shows copied feedback', async () => {
    const user = userEvent.setup()
    render(<GiftSection />)

    await user.click(screen.getByRole('button', { name: 'Sao chép số tài khoản 0123456789' }))

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('0123456789')
    expect(screen.getByText('Đã sao chép')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run gift test to verify it fails**

Run: `npm test -- src/components/GiftSection.test.jsx`
Expected: FAIL because `GiftSection.jsx` does not exist.

- [ ] **Step 3: Create `src/components/GiftSection.jsx`**

```jsx
import { useState } from 'react'
import { Copy, Gift } from 'lucide-react'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import { giftAccounts } from '../data/weddingData'

function GiftSection() {
  const [copiedAccount, setCopiedAccount] = useState('')

  async function copyAccount(accountNumber) {
    await navigator.clipboard.writeText(accountNumber)
    setCopiedAccount(accountNumber)
  }

  return (
    <section className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Hộp mừng cưới"
          title="Gửi yêu thương đến cô dâu chú rể"
          subtitle="Nếu bạn muốn gửi quà mừng, chúng mình xin trân trọng cảm ơn tình cảm của bạn."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {giftAccounts.map((account) => (
            <Reveal key={account.accountNumber} className="rounded-[2rem] border border-white bg-white/85 p-6 text-center shadow-romantic md:p-8">
              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-blush text-gold">
                <Gift size={24} />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">{account.owner}</p>
              <img src={account.qrImage} alt={`QR chuyển khoản ${account.owner}`} className="mx-auto my-6 h-44 w-44 rounded-2xl bg-white p-3 shadow-md" />
              <h3 className="font-serif text-3xl font-bold text-charcoal">{account.accountName}</h3>
              <p className="mt-2 text-sm font-semibold text-charcoal/60">{account.bankName}</p>
              <div className="mt-5 flex items-center justify-center gap-3 rounded-2xl bg-ivory px-4 py-3">
                <span className="font-semibold tracking-[0.12em] text-charcoal">{account.accountNumber}</span>
                <button
                  type="button"
                  aria-label={`Sao chép số tài khoản ${account.accountNumber}`}
                  onClick={() => copyAccount(account.accountNumber)}
                  className="rounded-full p-2 text-gold transition hover:bg-champagne/50"
                >
                  <Copy size={18} />
                </button>
              </div>
              {copiedAccount === account.accountNumber ? <p className="mt-3 text-sm font-semibold text-gold">Đã sao chép</p> : null}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GiftSection
```

- [ ] **Step 4: Run gift test to verify it passes**

Run: `npm test -- src/components/GiftSection.test.jsx`
Expected: PASS.

---

### Task 8: Implement Floating Audio Player and Final Integration

**Files:**
- Create: `src/components/AudioPlayer.jsx`
- Modify: `src/App.jsx` only if import ordering or composition has drifted.

**Interfaces:**
- Consumes: `weddingInfo.audioSrc`.
- Produces: fixed bottom-right button with accessible names `Phát nhạc nền` and `Tạm dừng nhạc nền`.
- Produces: complete single-page app with no missing imports.

- [ ] **Step 1: Create `src/components/AudioPlayer.jsx`**

```jsx
import { useRef, useState } from 'react'
import { Music, Pause } from 'lucide-react'
import { weddingInfo } from '../data/weddingData'

function AudioPlayer() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  async function toggleAudio() {
    const audio = audioRef.current
    if (!audio) return

    if (playing) {
      audio.pause()
      setPlaying(false)
      return
    }

    try {
      await audio.play()
      setPlaying(true)
    } catch {
      setPlaying(false)
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <audio ref={audioRef} src={weddingInfo.audioSrc} loop preload="none" />
      <button
        type="button"
        aria-label={playing ? 'Tạm dừng nhạc nền' : 'Phát nhạc nền'}
        onClick={toggleAudio}
        className="flex h-13 w-13 items-center justify-center rounded-full bg-white/90 text-gold shadow-romantic ring-1 ring-champagne/70 backdrop-blur transition hover:-translate-y-0.5 hover:bg-gold hover:text-white"
      >
        {playing ? <Pause size={22} /> : <Music size={22} />}
      </button>
    </div>
  )
}

export default AudioPlayer
```

- [ ] **Step 2: Run all tests**

Run: `npm test`
Expected: PASS for countdown, RSVP, and gift tests.

- [ ] **Step 3: Run production build**

Run: `npm run build`
Expected: PASS with no missing imports and no Tailwind/PostCSS errors.

- [ ] **Step 4: Run the app locally**

Run: `npm run dev`
Expected: Vite dev server starts and prints a local URL.

- [ ] **Step 5: Browser verification**

Open the app and verify:

- Hero fills the first viewport and text is readable over the image.
- Countdown displays four cards and values update every second.
- Couple cards stack on mobile and sit side by side on desktop.
- Event cards include time, date, venue, address, and “Chỉ đường” buttons.
- Gallery uses one column on mobile and multiple columns on wider screens.
- RSVP form submits without reload and shows `Cảm ơn bạn đã gửi phản hồi!`.
- Gift copy button shows `Đã sao chép`.
- Floating audio button toggles state without crashing.

---

## Self-Review

Spec coverage:

- Hero: Task 4.
- Countdown: Task 2 and Task 4.
- The Couple: Task 2 and Task 4.
- Event Details: Task 2 and Task 5.
- Photo Gallery: Task 2 and Task 5.
- RSVP & Guestbook: Task 6.
- Wedding Gift / Bank Info: Task 2 and Task 7.
- Floating Audio Player: Task 8.
- Mobile-first styling: Tasks 1, 4, 5, 6, 7, 8.
- Framer Motion scroll reveal: Task 3 and all content sections.
- Placeholder assets: Task 2.
- Verification: Task 8.

Placeholder scan: no TBD/TODO/fill-later instructions remain. Placeholder assets are intentional per spec and have concrete values.

Type and interface consistency: `weddingInfo`, `coupleProfiles`, `events`, `galleryImages`, `giftAccounts`, `getCountdownParts`, `Reveal`, and `SectionTitle` are defined before use and referenced consistently.
