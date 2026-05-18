# Portfolio Upgrade Plan

## Summary
Enhance the developer portfolio with interactive features, better UX, and modern polish.

## Priority: P0-P2 features

---

## TODOs

### Phase 1: Core UX Upgrades
- [x] **P1-1: Functional Command Palette** — Replace the decorative ⌘K search button in Header with a real command palette that searches blogs and projects.
- [x] **P1-2: Mobile Navigation Menu** — Add hamburger-driven slide-out navigation for mobile screens.
- [x] **P1-3: Scroll-Reveal Animations** — Add intersection-based scroll animations to all sections using framer-motion's `whileInView`.
- [x] **P1-4: Clean Up Dead Code** — Remove large commented-out code blocks from `experience-section.tsx`, `projects-section.tsx`.

### Phase 2: Contact & Content
- [x] **P2-1: Contact Form** — Build a functional contact form with validation and email sending (Web3Forms).
- [x] **P2-2: Upgrade Experience to shadcn Accordion** — Replace inline manual accordion with `@radix-ui/react-accordion` (already installed).
- [x] **P2-3: Image Optimization** — Replace `<img>` with Next.js `<Image>` in hero-section, header-section, experience-section. Add remotePatterns to next.config.ts.

### Phase 3: Polish & Detail
- [x] **P3-1: Enhanced Project Detail Pages** — Make `/projects/[name]` load dynamic data from `projects.json` with proper UI.
- [x] **P3-2: RSS Feed** — Add auto-discovery link and `/feed.xml` route.
- [x] **P3-3: 404 Page Enhancement** — Upgrade the not-found page with better UX.
- [x] **P3-4: Loading States** — Add Suspense boundaries and loading skeletons.

---

## Final Verification Wave
- [ ] **F1: Momus Review** — Peer review of plan completeness
- [ ] **F2: Oracle QA** — Verify all features work end-to-end
- [ ] **F3: Build Check** — `next build` passes with zero errors
- [ ] **F4: Lighthouse Audit** — Performance, accessibility, best practices ≥90

---

## Evidence & Acceptance Criteria
Each task must have:
1. Implementation complete
2. `npm run build` passes
3. Feature works in browser (verify via /playwright or manual)
4. No regressions in existing functionality
