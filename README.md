# Marlowe Reyes — Makeup Artistry

A React + Vite site for a freelance makeup artist: portfolio, services with
pricing, a journal/blog, and a booking flow built on Calendly (no backend
required).

## Stack

- React 18 + React Router
- Vite
- Calendly inline embed (`react-calendly`) for scheduling
- Formspree for the contact/message form
- Plain CSS with a small design-token system (`src/index.css`) — no CSS
  framework, so it's easy to reskin

## Getting started

```bash
npm install
cp .env.example .env
# edit .env with your real Calendly URL and Formspree ID
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

The output goes to `dist/` — deploy that folder to Netlify, Vercel, GitHub
Pages, or any static host.

## Setting up bookings (Calendly)

1. Create a free Calendly account.
2. Create **one event type per service** you offer. The slugs must match
   what's in `src/siteConfig.js` — by default:
   - `bridal-trial`
   - `wedding-day`
   - `editorial-photoshoot`
   - `special-event`

   So if your Calendly handle is `marlowereyes`, your event type URLs
   should end up as `https://calendly.com/marlowereyes/bridal-trial`, etc.
3. Put your base URL (everything before the last `/slug`) into
   `.env` as `VITE_CALENDLY_URL`.
4. If you rename, add, or remove services, edit the `services` array in
   `src/siteConfig.js` — every page (Home, Services, Contact/Booking) reads
   from that single source, so you only edit it once.

Prefer Cal.com? Swap `react-calendly`'s `InlineWidget` in
`src/components/Booking.jsx` for Cal.com's embed component — the rest of
the deep-linking logic (reading `?service=` from the URL) stays the same.

## Setting up the contact form (Formspree)

1. Create a free form at [formspree.io](https://formspree.io).
2. Copy the form ID from the endpoint they give you
   (`https://formspree.io/f/XXXXXXX` → the ID is `XXXXXXX`).
3. Put it in `.env` as `VITE_FORMSPREE_ID`.

Until this is set, the form will show an error message instead of silently
pretending to send — check the browser console for a reminder.

## Project structure

```
src/
├── components/     Reusable UI pieces (Navbar, Hero, Booking, etc.)
├── pages/          Route-level views that compose components
├── data/           Static content (blog posts)
├── siteConfig.js   Business info, services list, env-based URLs
├── App.jsx         Route definitions
└── index.css       Design tokens + global styles
```

**Editing content:** most copy lives directly in the component/page files
as JSX, except blog posts (`src/data/posts.js`) and business info/services
(`src/siteConfig.js`), which are centralized since they're reused across
multiple pages.

**Images:** currently pulled from Unsplash as placeholders. Replace the
`src` URLs in `Hero.jsx`, `About.jsx`, `Portfolio.jsx` (both component and
page versions), `BeforeAfter.jsx`, `Instagram.jsx`, and `data/posts.js`
with real photography before launch — drop actual files in
`public/images/` and reference them as `/images/your-file.jpg`.

## Known things to customize before launch

- [ ] Replace all Unsplash placeholder images with real portfolio photos
- [ ] Update `site` object in `siteConfig.js` (name, email, phone, Instagram)
- [ ] Set real Calendly event types + URL
- [ ] Set real Formspree ID
- [ ] Replace testimonial quotes in `Testimonials.jsx` with real ones
- [ ] Replace blog post content in `data/posts.js`
- [ ] Add a real logo to `public/logo/` and swap the text wordmark in
      `Navbar.jsx` / `Footer.jsx` if desired
- [ ] Update the cancellation/travel policy text in `pages/Services.jsx`
