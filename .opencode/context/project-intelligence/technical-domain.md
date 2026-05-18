<!-- Context: project-intelligence/technical | Priority: critical | Version: 1.1 | Updated: 2026-05-17 -->

# Technical Domain

**Purpose**: Tech stack, architecture, and development patterns for dev-portfolio.
**Last Updated**: 2026-05-17

## Quick Reference
**Update Triggers**: Library upgrades | New components | Architecture changes
**Audience**: Developers, AI agents

## Primary Stack
| Layer | Technology | Version | Rationale |
|-------|-----------|---------|-----------|
| Framework | Next.js (App Router) | 16.1.6 | SSG + file-based routing, optimal for portfolio |
| Language | TypeScript | 5 | Strict mode, type safety |
| Styling | Tailwind CSS | 4 | Utility-first, responsive design system |
| UI Components | shadcn/ui + Radix UI | — | Accessible, composable primitives |
| Animation | Framer Motion | 12.31 | Declarative animations, AnimatePresence |
| Icons | lucide-react, react-icons | — | Consistent icon library |
| Package Manager | pnpm | 10.30 | Fast, disk-efficient |
| Infrastructure | Vercel (inferred) | — | Optimized for Next.js deployment |

## Code Patterns

### Route Handler (only server endpoint)
```typescript
// app/feed.xml/route.ts
import { siteConfig } from "@/lib/site";

export async function GET() {
    // Build response content
    return new Response(xmlString, {
        headers: { "Content-Type": "application/xml; charset=utf-8" },
    });
}
```

### Feature Component
```typescript
// components/hero-section.tsx
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function HeroSection() {
    // Framer Motion animated section with cn() class merging
    return <section className={cn("...")}>...</section>;
}
```

### UI Primitive (shadcn pattern)
```typescript
// components/ui/button.tsx
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva("...", { variants: { ... } });

interface ButtonProps extends VariantProps<typeof buttonVariants> {}
// forwardRef + cn() + variants
```

## Naming Conventions
| Type | Convention | Example |
|------|-----------|---------|
| Files | `kebab-case` | `hero-section.tsx` |
| Components | `PascalCase` | `HeroSection`, `ProjectCard` |
| Functions | `camelCase` | `validateEmail`, `validateForm` |
| Types/Interfaces | `PascalCase` | `FormData`, `FormErrors` |

## Code Standards
- TypeScript strict mode (no `any` type)
- Next.js App Router only (no Pages Router)
- `@/` path aliases for imports (e.g. `@/components/ui/button`)
- Tailwind CSS for all styling (no inline styles)
- shadcn/ui pattern: `cn()` + `cva` + forwardRef + variants
- Framer Motion for page/component animations
- `"use client"` directive for interactive components

## Security Requirements
- Client-side form validation (email regex, required fields, min length)
- Web3Forms handles server-side spam protection for contact form
- Static portfolio — no database, reduced attack surface
- Proper HTTP headers via Next.js config

## 📂 Codebase References
**Feature components**: `app/page.tsx`, `components/*.tsx` — section compositions
**UI primitives**: `components/ui/*.tsx` — shadcn-style components
**Route handlers**: `app/feed.xml/route.ts` — RSS feed
**Config**: `package.json`, `tsconfig.json`, `next.config.*`
