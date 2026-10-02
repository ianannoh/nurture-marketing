# Nurture Marketing — Website

Marketing website for **Nurture Marketing**, a tech-focused marketing firm (SEO, paid ads, content creation, social media management, videography/photography, email marketing, business development consulting).

Live site: <https://nurturemarketing.online>
Repository: <https://github.com/ianannoh/nurture-marketing>

Built as a static, client-rendered **Angular 19.2** single-page application. No backend — all content is hard-coded in templates and component classes.

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Routing](#routing)
- [SEO Implementation](#seo-implementation)
- [Styling & Design System](#styling--design-system)
- [Assets](#assets)
- [Build Output & Budgets](#build-output--budgets)
- [Deployment](#deployment)
- [Branching Workflow](#branching-workflow)
- [Testing](#testing)
- [Known Issues / TODO](#known-issues--todo)

---

## Tech Stack

| Concern | Choice |
| --- | --- |
| Framework | Angular 19.2 (standalone components, `bootstrapApplication`) |
| Language | TypeScript 5.7 (`strict`, `strictTemplates`) |
| Change detection | Zone.js with `provideZoneChangeDetection({ eventCoalescing: true })` |
| Routing | `@angular/router` (client-side) |
| Styling | Plain CSS — global reset + component-scoped stylesheets (no CSS framework, no SCSS) |
| Font | Self-hosted **Onest** (`.ttf` in `public/assets/fonts/onest`) |
| SEO | Angular `Title` + `Meta` services via `SeoService`, route `data` payloads |
| Unit testing | Karma + Jasmine |
| CI/CD | GitHub Actions (`scp` deploy to a VPS) |
| Node | 24 (pinned in the deploy workflow) |

No third-party runtime dependencies beyond Angular, RxJS, tslib, and zone.js.

---

## Getting Started

### Prerequisites

- Node.js **24** (matches `.github/workflows/deploy.yml`)
- npm (bundled with Node)

### Install

```bash
npm install
```

### Run the dev server

```bash
npm start          # ng serve
```

Open <http://localhost:4200/>. The dev server serves the `development` configuration (no optimization, source maps on) and reloads on file changes.

---

## Available Scripts

| Script | Command | Purpose |
| --- | --- | --- |
| `npm start` | `ng serve` | Dev server on `http://localhost:4200` |
| `npm run build` | `ng build` | Production build into `dist/nurture-marketing` |
| `npm run watch` | `ng build --watch --configuration development` | Unoptimized rebuild-on-change |
| `npm test` | `ng test` | Karma + Jasmine unit tests (Chrome) |
| `npm run ng -- <args>` | `ng <args>` | Raw Angular CLI passthrough |

`angular.json` also defines `extract-i18n`, though no localization is in use.

### Adding a page

```bash
ng generate component features/my-page
```

Then add a route to `src/app/app.routes.ts` with a `data` block containing `title` and `description` so SEO tags update (see [SEO Implementation](#seo-implementation)), and link it from `src/core/navbar/navbar.component.html`.

---

## Project Structure

```
src/
├── index.html                     # Document head: base meta, OG/Twitter tags, favicon
├── main.ts                        # bootstrapApplication(AppComponent, appConfig)
├── styles.css                     # Global reset, CSS variables, Onest @font-face, type scale
├── app/
│   ├── app.component.ts/.html     # Shell: navbar + <router-outlet> + footer, scroll + SEO on nav
│   ├── app.config.ts              # provideRouter(routes), zone change detection
│   └── app.routes.ts              # Route table + per-route SEO data
├── core/                          # App-wide chrome (always rendered)
│   ├── navbar/                    # Top navigation + mobile hamburger
│   └── footer/                    # Footer links, social icons, fragment-scroll handling
├── features/                      # One folder per route/page
│   ├── home-page/                 # Landing: hero, philosophy, pillars, services teaser, CTA
│   ├── about-page/                # About, mission/vision, Nurture ecosystem
│   ├── services-page/             # Accordion of 7 services (component class: ClientsPageComponent)
│   ├── contact-page/              # Social/contact cards
│   └── newsletters/               # Placeholder — empty template, unlinked in nav
├── shared/                        # Reusable presentational pieces
│   ├── landing-page/              # Hero banner: content projection + 3 responsive images
│   └── shared-button/             # Router-linked button with a class-name input
└── directives/
    └── seo.service.ts             # Root-provided service that writes OG/Twitter meta tags

public/assets/                     # Copied verbatim into the build output
.github/workflows/deploy.yml       # Build + SCP deploy triggered by pushes to main
```

Each component is a standalone Angular 19 component with `templateUrl` + `styleUrl` and (mostly) auto-generated `.spec.ts` files.

### Shared components

**`app-landing-page`** — the hero banner used by the home, services, and contact pages. It uses content projection with element selectors:

```html
<app-landing-page route="/services" imgSrc="/assets/homepage/nurture-wallpaper-2.jpg">
  <main-header>Your trusted marketing partner</main-header>
  <description>We help businesses grow and help startups gain the visibility they need.</description>
</app-landing-page>
```

| Input | Purpose |
| --- | --- |
| `imgSrc` | Desktop hero image (`.one`) |
| `imgSrc1` / `imgSrc2` | Alternate/tablet/mobile hero images (`.two`, `.three`) |
| `route` | Target of the built-in "Discover more" button |
| `className` | Extra CSS class on the wrapping `<section>` (used for page-specific styling, e.g. `contact`, `service`) |

**`app-shared-button`** — anchor with `[routerLink]` and projected label:

```html
<app-shared-button route="/get-in-touch" className="secondary">Start a conversation</app-shared-button>
```

---

## Routing

Defined in `src/app/app.routes.ts`. Unknown paths redirect to the home page.

| Path | Component | Page title |
| --- | --- | --- |
| `''` | `HomePageComponent` | Home \| Nurture Marketing |
| `about` | `AboutPageComponent` | About \| Nurture Marketing |
| `services` | `ClientsPageComponent` | Services \| Nurture Marketing |
| `get-in-touch` | `ContactPageComponent` | Get In Touch \| Nurture Marketing |
| `newsletters` | `NewslettersComponent` | Newsletters \| Nurture Marketing *(unlinked, empty)* |
| `**` | → redirect to `/` | |

---

## SEO Implementation

Per-route SEO metadata is declared as route `data` in `src/app/app.routes.ts`:

```ts
{
  path: 'about',
  component: AboutPageComponent,
  title: 'About | Nurture Marketing',      // drives document.title via the router
  data: {
    title: 'About | Nurture Marketing',
    description: '...',                    // og:description, twitter:description
    keywords: ['...'],                     // currently unused (see Known Issues)
    imageUrl: 'https://nurturemarketing.online/assets/nav/nurture_green_icon.svg',
    pageUrl: 'https://nurturemarketing.online/about'
  }
}
```

Flow on every `NavigationEnd` (`src/app/app.component.ts:20`):

1. `ViewportScroller` scrolls back to the top.
2. The deepest activated child route's `data` is read.
3. If `title` and `description` are present, `SeoService.updateMeta(...)` (`src/directives/seo.service.ts:11`) updates `og:title`, `og:description`, `og:image`, `og:url`, `twitter:card`, `twitter:title`, `twitter:description`, and `twitter:image`.

Defaults for the first paint live in `src/index.html`. Anchor links such as `/about#mission-vision` are resolved and smoothly scrolled by `FooterComponent` (`src/core/footer/footer.component.ts:20`), offset by the navbar height, then the fragment is stripped from the URL via `Location.replaceState`.

---

## Styling & Design System

- Global stylesheet `src/styles.css` provides the reset, the type scale, and the design tokens.
- Color tokens (defined on `:root`):

  ```css
  --primary-color: #3a7d44;
  --primary-color-hover: #254d32;
  ```

- Typeface: `Onest`, self-hosted from `public/assets/fonts/onest/Onest-*.ttf`.
- Fluid-ish type scale with a `max-width: 768px` breakpoint that reduces `h1`/`h2`/`p` sizes; responsive layouts are handled entirely in each component's CSS.
- Layout convention: a shared `.container` class for centered, max-width content blocks.
- Custom slim scrollbar (`::-webkit-scrollbar`, width `0.2rem`, green thumb).
- Page components style their hero through the `className` input of `app-landing-page` (`.contact`, `.service`, etc.).

---

## Assets

All static files live under `public/assets/` and are copied verbatim into `dist/nurture-marketing/assets/`:

| Folder | Contents |
| --- | --- |
| `general/` | `nurture-marketing-logo.ico` (favicon) |
| `nav/` | `nurture_green_icon.svg` (navbar logo, OG image) |
| `homepage/` | Hero wallpaper, service photos, pillar icons |
| `about/` | About section imagery |
| `services/` | Services hero billboard + dropdown chevron |
| `contact/` | Contact hero images (desktop/tablet/mobile) + social icons |
| `footer/` | Social + email icons |
| `fonts/onest/` | Onest TTF weights (Thin → Black) |

Paths are referenced absolutely (`/assets/...`) from templates, so the site must be served from the domain root with this directory structure intact.

---

## Build Output & Budgets

```bash
npm run build
```

- Output: `dist/nurture-marketing/`
- `production` is the default configuration; `outputHashing: "all"`.
- Budgets (from `angular.json`):
  - Initial bundle: warn `500 kB`, error `1 MB`
  - Component stylesheet: warn `4 kB`, error `8 kB`

A typical production build is roughly **303 kB raw / ~81 kB transferred**. The build currently emits one budget warning: `home-page.component.css` is 6 kB (over the 4 kB warning threshold, under the 8 kB error threshold).

Because output is a static SPA, whatever hosts the files must rewrite unknown paths to `index.html` for client-side routes to work on hard reload.

---

## Deployment

`.github/workflows/deploy.yml` — **Deploy Website**

Triggered by any push to `main`:

1. `actions/checkout@v3`
2. `actions/setup-node@v3` with Node **24**
3. `npm ci`
4. `npm run build -- --configuration production`
5. `appleboy/scp-action@master` copies `dist/nurture-marketing/*` to `/home/ian/nurture-marketing` on the VPS

Required repository secrets:

| Secret | Value |
| --- | --- |
| `VPS_HOST` | VPS hostname/IP |
| `VPS_USER` | SSH user |
| `SERVER_SSH_KEY` | Private SSH key used by the SCP action |

The workflow only uploads files — serving (web server / TLS) is managed separately on the host.

---

## Branching Workflow

| Branch | Purpose |
| --- | --- |
| `main` | Production branch; pushes here trigger a deploy |
| `develop` | Default working branch for ongoing changes |
| `feat/*`, `seo`, `release/v*` | Feature, SEO, and release branches |

Current convention from history: short commits (`feat(homepage):`, `feat(seo):`) merged through PRs into `develop`, with releases merged into `main`.

---

## Testing

```bash
npm test
```

Karma + Jasmine with the Chrome launcher (`karma-chrome-launcher`). Every component has a generated `.spec.ts`, but the specs are still CLI scaffolding rather than meaningful assertions — see [Known Issues](#known-issues--todo). There is no linter or formatter configured (no ESLint/Prettier targets in `angular.json`).

---
