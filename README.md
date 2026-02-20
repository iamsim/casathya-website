# Chartered Accountants Website

A modern, professional website for a Chartered Accountancy firm. Built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- **Home** – Hero, services overview, why choose us, and call-to-action
- **Our Services** – Indian CA services (audit, tax, GST, ROC, incorporation, Ind AS, IBC, due diligence, transfer pricing)
- **About** – Partner profiles with qualifications and expertise
- **Contact** – Office location with Google Map embed, email, phone, and enquiry form (Name, Email, Message)

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) for animations
- TypeScript

## Getting Started

### Prerequisites

- Node.js 18+
- npm (or yarn / pnpm)

### Install and run

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other scripts

```bash
npm run build   # Production build
npm run start   # Start production server (run after build)
npm run lint    # Run ESLint
```

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout (Header, Footer)
│   ├── page.tsx            # Home (/)
│   ├── globals.css         # Global styles and theme
│   ├── about/page.tsx      # About (/about)
│   ├── contact/page.tsx    # Contact (/contact)
│   └── services/page.tsx   # Our Services (/services)
├── components/
│   ├── layout/             # Header, Footer
│   ├── sections/           # Hero, Services, WhyUs, CTA sections
│   ├── ui/                 # Shared UI (e.g. ServiceIcon)
│   └── views/              # Full-page views (HomeView, ServicesView, etc.)
├── lib/
│   ├── constants.ts        # Site config, nav, content, contact, profiles
│   └── motion-variants.ts   # Shared Framer Motion variants
└── README.md
```

## Configuration

- **Site name, tagline, email, phone** – `lib/constants.ts` → `SITE_CONFIG`
- **Contact page** – Office address and Google Map embed URL in `CONTACT_CONFIG`. To use your own map: in [Google Maps](https://www.google.com/maps) open your location → **Share** → **Embed a map** → copy the `src` URL into `mapEmbedUrl`.
- **Contact form** – Submissions currently show a success message only. To send emails or store enquiries, wire `handleSubmit` in `components/views/ContactView.tsx` to your API, Server Action, or a service like [Formspree](https://formspree.io/).

## Theme

Classic palette: **navy**, **gold**, and **cream** (CSS variables in `app/globals.css`).

## Repository

[https://github.com/iamsim/casathya-website](https://github.com/iamsim/casathya-website)

## License

Private. All rights reserved.
