# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (Next.js on port 3000)
npm run build    # Production build
npm run lint     # Run ESLint
```

There are no tests in this project. No test runner is configured.

## Environment Variables

Required for Payload CMS to function:
- `PAYLOAD_SECRET` — secret key for Payload
- `DATABASE_URI` or `DATABASE_URL` — PostgreSQL connection string

## Architecture Overview

This is a **Next.js 15 + Payload CMS 3** monorepo. The app router uses two route groups:

- `src/app/(app)/` — Public-facing marketing site (Header, Footer, pages)
- `src/app/(payload)/` — Payload CMS admin panel at `/admin` and REST/GraphQL API at `/api`

Payload is configured in `src/payload.config.ts` with a PostgreSQL adapter (`@payloadcms/db-postgres`) and Lexical rich-text editor. Collections: `Users`, `Media`. Generated types live in `src/payload-types.ts`.

### Navigation System

Navigation is data-driven from `src/components/shared/data-nav.tsx`. The `NavItem` interface supports a `childOf` property to declare parent–child relationships. Top-level items (no `childOf`) become main nav links; items with `childOf` become sub-navigation under their parent section.

- **`DesktopNav`** (`desktop-nav.tsx`) — Radix `NavigationMenu`. Items with `image` property render as a split-panel dropdown (links left, image preview right via `SplitPanelMenu`). Items without images render a simple icon+text list.
- **`Header`** (`header.tsx`) — Client component. Reads the current pathname to detect if a parent section is active, then renders an animated sub-nav bar with a sliding underline indicator (desktop) or collapsible dropdown (mobile). Becomes semi-opaque on scroll.

### Styling

- **Tailwind CSS v4** with `@theme inline` in `globals.css` for CSS variable mapping.
- Custom brand color: `brand-red` (`oklch(0.6322 0.254177 20.8493)`), available as `text-brand-red`, `bg-brand-red`, `border-brand-red`.
- Layout utility: `.page-width` = `max-w-7xl mx-auto px-8 lg:px-12`.
- Dark mode uses `.dark` class variant (not `prefers-color-scheme`).
- `tw-animate-css` is imported for animation utilities.

### UI Components

Components in `src/components/ui/` are shadcn-style (installed via `npx shadcn add`). The `Button` component has a custom `brand` variant using `bg-brand-red`. Use `cn()` from `src/lib/utils.ts` for conditional class merging (`clsx` + `tailwind-merge`).

### Swiper

`FoundersSwiper` uses SwiperJS (`swiper/react`) with `Navigation` and `Mousewheel` modules. Custom nav buttons use `.swiper-prev` / `.swiper-next` CSS selectors. Import Swiper CSS directly in the component file.
