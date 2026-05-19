## [2026-05-13] Feature Brainstorming & Decisions

### Priority Features (High → Low)

#### P0 - Essential (User-facing polish)
1. **Functional Command Palette** — Replace placeholder ⌘K button with real search
   - Search blogs, projects, sections
   - Use `@cmdk` or similar lightweight library
2. **Mobile Hamburger Menu** — Nav links disappear on mobile (`hidden md:flex`)
   - Add slide-out mobile nav with hamburger toggle
3. **Scroll Animations** — Replace static `opacity-100 translate-y-0` with IntersectionObserver-based reveals
   - Use framer-motion's `whileInView` or custom hook

#### P1 - High Value (Engagement)
4. **Contact Form** — Replace `mailto:` with functional form
   - Name, Email, Message fields
   - Backend via Resend API, Web3Forms, or Formspree
   - Toast notifications on success/error
   - Spam protection (honeypot, rate limiting)
5. **Blog to MDX** — Migrate hardcoded blog posts to MDX files
   - Support code syntax highlighting (shiki/rehype)
   - Reading progress bar on blog detail pages
6. **Project Detail Pages** — Enhance `/projects/[name]` with dynamic data
   - Live demo links, tech stack visualization, GitHub stats
7. **Image Optimization** — Replace `<img>` with Next.js `<Image>` where missing
   - Add remote patterns to next.config.ts

#### P2 - Quality of Life
8. **Clean Up Dead Code** — Remove commented-out code blocks
9. **Upgrade Experience to shadcn Accordion** — Replace manual CSS accordion
   - Already have `@radix-ui/react-accordion` installed
10. **Add RSS feed** — Auto-discovery link in layout + `/feed.xml` route
11. **PWA Enhancement** — Add service worker for offline support
12. **Analytics** — Lightweight analytics (Plausible, Umami, or PostHog)

#### P3 - Nice to Have
13. **404 page** — ✅ Enhanced with framer-motion staggered animations, gradient text, dot pattern background, metadata, semantic markup
14. **Sitemap & Robots improvements** — Already exist but can be improved
15. **i18n** — Multi-language support (future)
16. **Blog tags/categories** — Filtering system
