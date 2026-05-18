## [2026-05-13] Codebase Analysis

### Project Overview
- **Stack**: Next.js 16.1.6, React 19, Tailwind CSS v4, TypeScript, shadcn/ui, Framer Motion 12
- **Type**: Single-page developer portfolio
- **Sections**: Header, Hero, About, Experience, Projects, Blogs, GitHub, Footer
- **Data**: Static JSON for projects (`db/projects.json`), hardcoded array for blogs (`db/blogs.ts`)

### Existing Features
1. Hero — photo, name, role, tagline, social links, tech stack icons with hover effects
2. About — bio + 3 skill cards (Product Engineering, Design Systems, Performance)
3. Experience — accordion-style with inline expand/collapse (CSS grid)
4. Projects — card grid from `projects.json` with status badges (Live/Building)
5. Blogs — list from hardcoded array with dates, read times, summaries
6. GitHub — contribution calendar via `react-github-calendar` (client component)
7. Footer — social icons, sitemap/robots/manifest links
8. Header — fixed nav, placeholder search (⌘K button, non-functional), theme toggle
9. Theme — dark/light CSS toggle via localStorage + system preference detection
10. Background — animated floating SVG paths via framer-motion

### Observations / Issues
1. **Search button** exists in header but is NOT functional (just decorative UI)
2. **No contact form** — only `mailto:` link in hero and footer
3. **Blog data** is hardcoded in `db/blogs.ts` — not scalable, no MDX/CMS
4. **next.config.ts** is empty — no image optimization, compression, or headers
5. **No mobile hamburger menu** — nav links are hidden on mobile (`hidden md:flex`)
6. **No scroll animations** — current sections have inline `translate-y-0 opacity-100` but no real scroll trigger
7. **Lots of commented-out code** in experience-section, projects-section — dead code
8. **No 404 page enhancement** — `not-found.tsx` exists but could be better
9. **No RSS/feed** auto-discovery in layout
10. **No analytics** integration
11. **No PWA service worker** (manifest exists but no SW)
12. **Experience section uses manual accordion** instead of shadcn's `<Accordion>` component
13. **Tech stack icons** in hero rendered manually with SVGs — repetitive
14. **No i18n** support
15. **Image component** uses `<img>` instead of Next.js `<Image>` in several places
16. **No loading states** or Suspense boundaries
