# Graph Report - dev-portfolio  (2026-05-19)

## Corpus Check
- 85 files · ~120,809 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 533 nodes · 997 edges · 75 communities (43 shown, 32 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 10 edges (avg confidence: 0.82)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `636e8fef`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 26|Community 26]]
- [[_COMMUNITY_Community 27|Community 27]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 34|Community 34]]
- [[_COMMUNITY_Community 35|Community 35]]
- [[_COMMUNITY_Community 36|Community 36]]
- [[_COMMUNITY_Community 37|Community 37]]
- [[_COMMUNITY_Community 38|Community 38]]
- [[_COMMUNITY_Community 39|Community 39]]
- [[_COMMUNITY_Community 40|Community 40]]
- [[_COMMUNITY_Community 41|Community 41]]
- [[_COMMUNITY_Community 42|Community 42]]
- [[_COMMUNITY_Community 43|Community 43]]
- [[_COMMUNITY_Community 44|Community 44]]
- [[_COMMUNITY_Community 45|Community 45]]
- [[_COMMUNITY_Community 46|Community 46]]
- [[_COMMUNITY_Community 47|Community 47]]
- [[_COMMUNITY_Community 48|Community 48]]
- [[_COMMUNITY_Community 49|Community 49]]
- [[_COMMUNITY_Community 50|Community 50]]
- [[_COMMUNITY_Community 51|Community 51]]
- [[_COMMUNITY_Community 52|Community 52]]
- [[_COMMUNITY_Community 53|Community 53]]
- [[_COMMUNITY_Community 54|Community 54]]
- [[_COMMUNITY_Community 55|Community 55]]
- [[_COMMUNITY_Community 56|Community 56]]
- [[_COMMUNITY_Community 57|Community 57]]
- [[_COMMUNITY_Community 58|Community 58]]
- [[_COMMUNITY_Community 61|Community 61]]
- [[_COMMUNITY_Community 62|Community 62]]
- [[_COMMUNITY_Community 63|Community 63]]
- [[_COMMUNITY_Community 64|Community 64]]
- [[_COMMUNITY_Community 65|Community 65]]
- [[_COMMUNITY_Community 66|Community 66]]
- [[_COMMUNITY_Community 67|Community 67]]
- [[_COMMUNITY_Community 68|Community 68]]
- [[_COMMUNITY_Community 69|Community 69]]
- [[_COMMUNITY_Community 70|Community 70]]

## God Nodes (most connected - your core abstractions)
1. `cn()` - 131 edges
2. `Button()` - 18 edges
3. `siteConfig` - 16 edges
4. `blogs` - 16 edges
5. `PROJECT KNOWLEDGE BASE` - 10 edges
6. `Design: theme-system-overhaul` - 8 edges
7. `Project` - 7 edges
8. `Empty()` - 7 edges
9. `EmptyHeader()` - 7 edges
10. `EmptyTitle()` - 7 edges

## Surprising Connections (you probably didn't know these)
- `ProjectCard()` --calls--> `cn()`  [EXTRACTED]
  src/components/project-card.tsx → src/lib/utils.ts
- `ContactFormFields()` --calls--> `cn()`  [EXTRACTED]
  src/components/contact-form.tsx → src/lib/utils.ts
- `ContactFormContent()` --calls--> `cn()`  [EXTRACTED]
  src/components/contact-form.tsx → src/lib/utils.ts
- `AlertDialogOverlay()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/alert-dialog.tsx → src/lib/utils.ts
- `AlertDialogContent()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/alert-dialog.tsx → src/lib/utils.ts

## Hyperedges (group relationships)
- **Portfolio Site Components** — md_razikul_islam_joni, razikuljoni_dev, contact_email, razikuljoni_x [EXTRACTED 1.00]
- **Next.js Core Tooling** — nextjs, createnextapp, nextfont, app_pagetsx [INFERRED 0.85]
- **Portfolio Background Images Set** — public_images_bg1, public_images_bg2, public_images_bg3, public_images_bg4 [INFERRED 0.80]

## Communities (75 total, 32 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.08
Nodes (54): cn(), Badge(), badgeVariants, Button(), buttonVariants, Card(), CardAction(), CardContent() (+46 more)

### Community 1 - "Community 1"
Cohesion: 0.08
Nodes (30): robots(), routes, sitemap(), Blogs(), formatDate(), metadata, Blogs(), formatDate() (+22 more)

### Community 2 - "Community 2"
Cohesion: 0.16
Nodes (20): ContactFormContent(), ContactFormDialog(), ContactFormFields(), ContactFormFieldsProps, ContactFormSuccess(), FormAction, FormData, FormErrors (+12 more)

### Community 3 - "Community 3"
Cohesion: 0.23
Nodes (18): AiDiscoverySection(), AiDiscoverySectionProps, confidenceClass, DiscoveryMode, promptSuggestions, BlogPost, AnswerSnippet, answerWithSources() (+10 more)

### Community 4 - "Community 4"
Cohesion: 0.14
Nodes (13): geistMono, geistSans, jetbrainsMono, metadata, RootLayout(), Header(), navLinks, Theme (+5 more)

### Community 5 - "Community 5"
Cohesion: 0.11
Nodes (10): metadata, Page(), AboutSection(), BackgroundPaths(), FloatingPaths(), Experience(), FooterSection(), GithubSection() (+2 more)

### Community 6 - "Community 6"
Cohesion: 0.15
Nodes (12): ANTI-PATTERNS, Available Skills, code:block1 (dev-portfolio/), code:bash (pnpm dev      # Start dev server (localhost:3000)), COMMANDS, CONVENTIONS, graphify, NOTES (+4 more)

### Community 7 - "Community 7"
Cohesion: 0.13
Nodes (22): generateMetadata(), PageProps, ProjectPage(), containerVariants, itemVariants, ProjectDetail(), ProjectDetailProps, StatusBadge() (+14 more)

### Community 8 - "Community 8"
Cohesion: 0.26
Nodes (12): AlertDialog(), AlertDialogAction(), AlertDialogCancel(), AlertDialogContent(), AlertDialogDescription(), AlertDialogFooter(), AlertDialogHeader(), AlertDialogMedia() (+4 more)

### Community 9 - "Community 9"
Cohesion: 0.33
Nodes (6): app/page.tsx, create-next-app, Geist Font, next/font, Next.js, Vercel Platform

### Community 10 - "Community 10"
Cohesion: 0.15
Nodes (13): data, DocContextType, Dock(), DockContext, DockIcon(), DockIconProps, DockItem(), DockItemProps (+5 more)

### Community 11 - "Community 11"
Cohesion: 0.29
Nodes (6): Architecture, Design: add-ai-discovery-layer, Overview, Ranking Strategy, Risks & Mitigations, UX Notes

### Community 12 - "Community 12"
Cohesion: 0.29
Nodes (6): Change Proposal: add-ai-discovery-layer, Non-goals, Scope, Success Criteria, What, Why

### Community 13 - "Community 13"
Cohesion: 0.5
Nodes (4): GRAPH_REPORT.md, graphify Skill, graphify-out/ Directory, wiki/index.md

### Community 14 - "Community 14"
Cohesion: 0.5
Nodes (4): contact.razikuljoni@gmail.com, MD Razikul Islam Joni, razikuljoni.dev, x.com/razikuljoni

### Community 15 - "Community 15"
Cohesion: 1.0
Nodes (4): Portfolio Background Image 1, Portfolio Background Image 2, Portfolio Background Image 3, Portfolio Background Image 4

### Community 17 - "Community 17"
Cohesion: 0.29
Nodes (5): app/ — Routes & Layouts, code:block1 (app/), CONVENTIONS, OVERVIEW, STRUCTURE

### Community 19 - "Community 19"
Cohesion: 0.29
Nodes (5): code:block1 (components/), components/ — React Components, CONVENTIONS, OVERVIEW, STRUCTURE

### Community 22 - "Community 22"
Cohesion: 0.18
Nodes (10): Blogs, code:text (/ (landing, sectioned)), Content Strategy, Data/Component Responsibilities, Design: fix-navigation-and-content-architecture, IA and Route Model, Navigation Behavior, Overview (+2 more)

### Community 52 - "Community 52"
Cohesion: 0.33
Nodes (4): COMPONENT MAP, components/ui/ — UI Primitives, CONVENTIONS, OVERVIEW

### Community 53 - "Community 53"
Cohesion: 0.33
Nodes (5): code:bash (npm run dev), Content Authoring, Deploy on Vercel, Getting Started, Learn More

### Community 55 - "Community 55"
Cohesion: 0.29
Nodes (6): Blogs (`content/blogs/*.mdx`), code:yaml (---), Content Authoring Guide, Current Runtime Note, Projects (`db/projects.json`), Recommended Storage Pattern

### Community 56 - "Community 56"
Cohesion: 0.29
Nodes (6): Change Proposal: fix-navigation-and-content-architecture, Non-goals, Scope, Success Criteria, What, Why

### Community 57 - "Community 57"
Cohesion: 0.22
Nodes (15): DropdownMenu(), DropdownMenuCheckboxItem(), DropdownMenuContent(), DropdownMenuGroup(), DropdownMenuItem(), DropdownMenuLabel(), DropdownMenuPortal(), DropdownMenuRadioGroup() (+7 more)

### Community 61 - "Community 61"
Cohesion: 0.29
Nodes (6): Architecture Notes, Blog Route Fix, Design: resume-driven-profile-refresh-and-blog-route-fix, Risks, Role Rotation Behavior, Tech Stack Tooltip Model

### Community 62 - "Community 62"
Cohesion: 0.4
Nodes (4): Change Proposal: resume-driven-profile-refresh-and-blog-route-fix, Success Criteria, What, Why

### Community 64 - "Community 64"
Cohesion: 0.14
Nodes (13): Acceptance Notes, Architecture, code:block1 (1) stored user preference (localStorage)), code:block2 (Toggle → create overlay with target theme colors), Design System + Contrast Audit, Design: theme-system-overhaul, Early theme application (no flash), Overview (+5 more)

### Community 65 - "Community 65"
Cohesion: 0.33
Nodes (9): SelectContent(), SelectGroup(), SelectItem(), SelectLabel(), SelectScrollDownButton(), SelectScrollUpButton(), SelectSeparator(), SelectTrigger() (+1 more)

### Community 66 - "Community 66"
Cohesion: 0.39
Nodes (5): metadata, NotFound(), containerVariants, itemVariants, NotFoundContent()

### Community 67 - "Community 67"
Cohesion: 0.43
Nodes (6): AccordionContent(), AccordionContentProps, AccordionItem(), AccordionItemProps, AccordionTrigger(), AccordionTriggerProps

### Community 68 - "Community 68"
Cohesion: 0.43
Nodes (6): Avatar(), AvatarFallback(), AvatarFallbackProps, AvatarImage(), AvatarImageProps, AvatarProps

### Community 69 - "Community 69"
Cohesion: 0.29
Nodes (6): Change Proposal: theme-system-overhaul, Non-goals, Scope, Success Criteria, What, Why

## Knowledge Gaps
- **119 isolated node(s):** `config`, `eslintConfig`, `nextConfig`, `Theme`, `ThemeContextValue` (+114 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **32 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `Community 0` to `Community 65`, `Community 2`, `Community 67`, `Community 68`, `Community 5`, `Community 7`, `Community 8`, `Community 10`, `Community 57`?**
  _High betweenness centrality (0.243) - this node is a cross-community bridge._
- **Why does `blogs` connect `Community 1` to `Community 3`?**
  _High betweenness centrality (0.075) - this node is a cross-community bridge._
- **Why does `siteConfig` connect `Community 1` to `Community 4`?**
  _High betweenness centrality (0.044) - this node is a cross-community bridge._
- **What connects `config`, `eslintConfig`, `nextConfig` to the rest of the system?**
  _119 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._
- **Should `Community 4` be split into smaller, more focused modules?**
  _Cohesion score 0.14 - nodes in this community are weakly interconnected._