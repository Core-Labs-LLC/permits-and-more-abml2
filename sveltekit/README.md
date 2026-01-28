# Permits & More - SvelteKit Website

A modern, responsive website for Permits & More, San Diego's premier permit processing experts.

## Tech Stack

- **Framework**: SvelteKit
- **Styling**: Tailwind CSS
- **Fonts**: Outfit (sans-serif), Instrument Serif (serif)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

1. Navigate to the sveltekit directory:
   ```bash
   cd sveltekit
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Add hero image:
   - Copy `san-diego-skyline.jpg` to `static/assets/` folder

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## Project Structure

```
sveltekit/
├── src/
│   ├── app.css              # Global styles
│   ├── app.html             # HTML template
│   ├── lib/
│   │   ├── components/      # Reusable components
│   │   │   ├── Header.svelte
│   │   │   ├── Footer.svelte
│   │   │   ├── AnimateOnScroll.svelte
│   │   │   └── StatCounter.svelte
│   │   └── index.js         # Component exports
│   └── routes/
│       ├── +layout.svelte   # Root layout
│       ├── +page.svelte     # Home page
│       ├── about/
│       ├── services/
│       ├── work/
│       ├── contact/
│       ├── newsletter/
│       ├── reviews/
│       └── approach/
├── static/
│   └── assets/              # Static assets (images)
├── package.json
├── svelte.config.js
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Pages

- **Home** (`/`) - Landing page with hero, about, services, process, trust stats, and CTA sections
- **About** (`/about`) - Company information and values
- **Services** (`/services`) - Service offerings and process
- **Projects** (`/work`) - Portfolio showcase
- **Contact** (`/contact`) - Contact form and information
- **Newsletter** (`/newsletter`) - Newsletter signup
- **Reviews** (`/reviews`) - Client testimonials
- **Approach** (`/approach`) - Company approach and methodology

## Features

- Responsive design (mobile-first)
- Animated scroll effects
- Counter animations for statistics
- Mobile navigation menu
- Form handling
- SEO-friendly meta tags

## Building for Production

```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## License

Copyright 2026 Permits & More. All rights reserved.
