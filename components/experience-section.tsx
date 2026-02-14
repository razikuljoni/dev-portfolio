export default function Experience() {
    return (
        // EXPERIENCE Section
        <section id="experience" className=" pb-2">
            <div
                className="relative w-full border-t-[1.5px] border-b-[1.5px] border-(--pattern-border) bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1.5px,transparent_0,transparent_50%)] bg-[length:6px_6px] bg-fixed"
                style={{ opacity: 1, transform: "none" }}
            >
                <div className="relative z-10 container mx-auto max-w-(--content-max-width) px-4 py-3">
                    <h2 className="text-5xl font-semibold tracking-tight text-foreground">
                        Experience
                    </h2>
                </div>
            </div>
            <div className="container mx-auto mt-8 flex max-w-(--content-max-width) flex-col gap-6 px-4">
                <article>
                    <div className="flex flex-col gap-3 sm:gap-4">
                        <div
                            className="rounded-lg border border-border/50 transition-colors hover:border-border"
                            style={{ opacity: 1, transform: "none" }}
                        >
                            <button
                                type="button"
                                aria-expanded="true"
                                aria-controls="position-audoralabs-founder"
                                aria-label="Collapse Founder at AudoraLabs"
                                className="flex w-full flex-col gap-2 p-3 text-left sm:flex-row sm:flex-wrap sm:items-center sm:gap-3 sm:p-4 rounded-lg ring-offset-background outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-muted/30"
                            >
                                <div className="flex w-full items-center justify-between gap-2 sm:min-w-0 sm:flex-1 sm:justify-start">
                                    <div className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border sm:size-12 bg-transparent">
                                        <img
                                            alt=""
                                            aria-hidden="true"
                                            loading="lazy"
                                            width="48"
                                            height="48"
                                            decoding="async"
                                            data-nimg="1"
                                            className="h-[110%] w-[110%] max-w-none object-cover"
                                            src="/images/company-logos/hawkeyes.webp"
                                            style={{ color: "transparent" }}
                                        />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <span className="font-semibold text-foreground">
                                            HawkEyes Digital Monitoring Ltd.
                                        </span>
                                        <span className="ml-2 hidden rounded-md border border-border bg-muted/50 px-2 py-0.5 text-xs font-medium text-muted-foreground sm:inline-block">
                                            Full-time
                                        </span>
                                        <p className="mt-0.5 text-sm text-muted-foreground">
                                            Jr. Frontend Developer
                                        </p>
                                    </div>
                                    <span
                                        className="shrink-0 text-muted-foreground sm:hidden"
                                        aria-hidden="true"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-chevron-up size-5"
                                            aria-hidden="true"
                                        >
                                            <path d="m18 15-6-6-6 6"></path>
                                        </svg>
                                    </span>
                                </div>
                                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground sm:shrink-0 sm:flex-col sm:items-end sm:gap-0.5 sm:text-sm">
                                    <span className="rounded-md border border-border bg-muted/50 px-2 py-0.5 text-xs font-medium sm:hidden">
                                        Full-time
                                    </span>
                                    <span className="text-foreground tabular-nums">
                                        Feb 2024 – Present
                                    </span>
                                    <span>In-Office</span>
                                    <span
                                        className="hidden shrink-0 sm:mt-1 sm:block"
                                        aria-hidden="true"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-chevron-up size-5"
                                            aria-hidden="true"
                                        >
                                            <path d="m18 15-6-6-6 6"></path>
                                        </svg>
                                    </span>
                                </div>
                            </button>
                            <div
                                id="position-audoralabs-founder"
                                role="region"
                                aria-hidden="false"
                                className="grid transition-[grid-template-rows] duration-150 ease-[cubic-bezier(0.32,0.72,0,1)]"
                                style={{ gridTemplateRows: "1fr" }}
                            >
                                <div className="min-h-0 overflow-hidden">
                                    <div className="border-t border-border/50 px-3 pt-2 pb-4 transition-opacity duration-150 sm:px-4 opacity-100">
                                        <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                                            <li>
                                                Developed and maintained responsive admin dashboards
                                                and management systems.
                                            </li>
                                            <li>
                                                Built inventory tracking and product management
                                                platforms with dynamic data handling.
                                            </li>
                                            <li>
                                                Created field-work assignment interfaces with
                                                real-time status updates and reporting features.
                                            </li>
                                            <li>
                                                Integrated RESTful APIs and implemented JWT-based
                                                authentication workflows.
                                            </li>
                                            <li>
                                                Managed complex application state using Redux
                                                Toolkit and RTK Query.
                                            </li>
                                            <li>
                                                Deployed applications using Vercel and managed basic
                                                version control and CI/CD using Git/GitHub.
                                            </li>
                                        </ul>

                                        <div className="mt-3 flex flex-wrap gap-2">
                                            <span className="rounded-md border border-border px-2 py-1 text-xs font-medium text-foreground">
                                                React.js
                                            </span>
                                            <span className="rounded-md border border-border px-2 py-1 text-xs font-medium text-foreground">
                                                Redux
                                            </span>
                                            <span className="rounded-md border border-border px-2 py-1 text-xs font-medium text-foreground">
                                                Ant Design
                                            </span>
                                            <span className="rounded-md border border-border px-2 py-1 text-xs font-medium text-foreground">
                                                Charts
                                            </span>
                                            <span className="rounded-md border border-border px-2 py-1 text-xs font-medium text-foreground">
                                                Google Maps
                                            </span>
                                            <span className="rounded-md border border-border px-2 py-1 text-xs font-medium text-foreground">
                                                GitHub Actions
                                            </span>
                                            <span className="rounded-md border border-border px-2 py-1 text-xs font-medium text-foreground">
                                                Vercel
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div
                            className="rounded-lg border border-border/50 transition-colors hover:border-border mt-2"
                            style={{ opacity: 1, transform: "none" }}
                        >
                            <button
                                type="button"
                                aria-expanded="false"
                                aria-controls="position-audoralabs-engineer"
                                aria-label="Expand Frontend Developer at HawkEyes Digital Monitoring Ltd."
                                className="flex w-full flex-col gap-2 p-3 text-left sm:flex-row sm:flex-wrap sm:items-center sm:gap-3 sm:p-4 rounded-lg ring-offset-background outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-muted/30"
                            >
                                <div className="flex w-full items-center justify-between gap-2 sm:min-w-0 sm:flex-1 sm:justify-start">
                                    <div className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border sm:size-12 bg-transparent">
                                        <img
                                            alt=""
                                            aria-hidden="true"
                                            loading="lazy"
                                            width="48"
                                            height="48"
                                            decoding="async"
                                            data-nimg="1"
                                            className="h-[110%] w-[110%] max-w-none object-cover"
                                            src="/images/company-logos/audoralabs.svg"
                                            style={{ color: "transparent" }}
                                        />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <span className="font-semibold text-foreground">
                                            AudoraLabs
                                        </span>
                                        <span className="ml-2 hidden rounded-md border border-border bg-muted/50 px-2 py-0.5 text-xs font-medium text-muted-foreground sm:inline-block">
                                            Full-time
                                        </span>
                                        <p className="mt-0.5 text-sm text-muted-foreground">
                                            Frontend Developer
                                        </p>
                                    </div>
                                    <span
                                        className="shrink-0 text-muted-foreground sm:hidden"
                                        aria-hidden="true"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-chevron-down size-5"
                                            aria-hidden="true"
                                        >
                                            <path d="m6 9 6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </div>
                                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground sm:shrink-0 sm:flex-col sm:items-end sm:gap-0.5 sm:text-sm">
                                    <span className="rounded-md border border-border bg-muted/50 px-2 py-0.5 text-xs font-medium sm:hidden">
                                        Full-time
                                    </span>
                                    <span className="text-foreground tabular-nums">
                                        Aug 2025 – Present
                                    </span>
                                    <span>Remote</span>
                                    <span
                                        className="hidden shrink-0 sm:mt-1 sm:block"
                                        aria-hidden="true"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-chevron-down size-5"
                                            aria-hidden="true"
                                        >
                                            <path d="m6 9 6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </div>
                            </button>
                            <div
                                id="position-audoralabs-engineer"
                                role="region"
                                aria-hidden="true"
                                className="grid transition-[grid-template-rows] duration-150 ease-[cubic-bezier(0.32,0.72,0,1)]"
                                style={{ gridTemplateRows: "0fr" }}
                            >
                                <div className="min-h-0 overflow-hidden">
                                    <div className="border-t border-border/50 px-3 pt-2 pb-4 transition-opacity duration-150 sm:px-4 opacity-0">
                                        <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                                            <li>
                                                Building and maintaining Audora (WebRTC recording,
                                                media pipelines, S3 multipart uploads) and CoSketch
                                                (real-time collaboration, WebSockets).
                                            </li>
                                            <li>
                                                Contributing to product and technical direction as
                                                part of the founding team.
                                            </li>
                                            <li>
                                                Developing create-audora-next and NextBlog-Starter
                                                under AudoraLabs for the community.
                                            </li>
                                            <li>
                                                Designing scalable architectures and CI/CD for
                                                reliable deployments.
                                            </li>
                                            <li>
                                                Working across product strategy, architecture, and
                                                hands-on development.
                                            </li>
                                        </ul>
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            <span className="rounded-md border border-border px-2 py-1 text-xs font-medium text-foreground">
                                                Next.js
                                            </span>
                                            <span className="rounded-md border border-border px-2 py-1 text-xs font-medium text-foreground">
                                                TypeScript
                                            </span>
                                            <span className="rounded-md border border-border px-2 py-1 text-xs font-medium text-foreground">
                                                Node.js
                                            </span>
                                            <span className="rounded-md border border-border px-2 py-1 text-xs font-medium text-foreground">
                                                Express.js
                                            </span>
                                            <span className="rounded-md border border-border px-2 py-1 text-xs font-medium text-foreground">
                                                WebRTC
                                            </span>
                                            <span className="rounded-md border border-border px-2 py-1 text-xs font-medium text-foreground">
                                                WebSockets
                                            </span>
                                            <span className="rounded-md border border-border px-2 py-1 text-xs font-medium text-foreground">
                                                PostgreSQL
                                            </span>
                                            <span className="rounded-md border border-border px-2 py-1 text-xs font-medium text-foreground">
                                                Docker
                                            </span>
                                            <span className="rounded-md border border-border px-2 py-1 text-xs font-medium text-foreground">
                                                GitHub Actions
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </article>
                {/* <article>
                    <div className="flex flex-col gap-3 sm:gap-4">
                        <div
                            className="rounded-lg border border-border/50 transition-colors hover:border-border"
                            style={{ opacity: 1, transform: "none" }}
                        >
                            <button
                                type="button"
                                aria-expanded="false"
                                aria-controls="position-freelance-fullstack-engineer"
                                aria-label="Expand Full-Stack Engineer at Freelance"
                                className="flex w-full flex-col gap-2 p-3 text-left sm:flex-row sm:flex-wrap sm:items-center sm:gap-3 sm:p-4 rounded-lg ring-offset-background outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-muted/30"
                            >
                                <div className="flex w-full items-center justify-between gap-2 sm:min-w-0 sm:flex-1 sm:justify-start">
                                    <div className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border sm:size-12 bg-transparent">
                                        <img
                                            alt=""
                                            aria-hidden="true"
                                            loading="lazy"
                                            width="48"
                                            height="48"
                                            decoding="async"
                                            data-nimg="1"
                                            className="h-[110%] w-[110%] max-w-none object-cover"
                                            src="/images/company-logos/contract.svg"
                                            style={{ color: "transparent" }}
                                        />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <span className="font-semibold text-foreground">
                                            Freelance
                                        </span>
                                        <span className="ml-2 hidden rounded-md border border-border bg-muted/50 px-2 py-0.5 text-xs font-medium text-muted-foreground sm:inline-block">
                                            Self-employed
                                        </span>
                                        <p className="mt-0.5 text-sm text-muted-foreground">
                                            Full-Stack Engineer
                                        </p>
                                    </div>
                                    <span
                                        className="shrink-0 text-muted-foreground sm:hidden"
                                        aria-hidden="true"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-chevron-down size-5"
                                            aria-hidden="true"
                                        >
                                            <path d="m6 9 6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </div>
                                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground sm:shrink-0 sm:flex-col sm:items-end sm:gap-0.5 sm:text-sm">
                                    <span className="rounded-md border border-border bg-muted/50 px-2 py-0.5 text-xs font-medium sm:hidden">
                                        Self-employed
                                    </span>
                                    <span className="text-foreground tabular-nums">
                                        Mar 2024 – Present
                                    </span>
                                    <span>Rajasthan, India – Remote</span>
                                    <span
                                        className="hidden shrink-0 sm:mt-1 sm:block"
                                        aria-hidden="true"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-chevron-down size-5"
                                            aria-hidden="true"
                                        >
                                            <path d="m6 9 6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </div>
                            </button>
                            <div
                                id="position-freelance-fullstack-engineer"
                                role="region"
                                aria-hidden="true"
                                className="grid transition-[grid-template-rows] duration-150 ease-[cubic-bezier(0.32,0.72,0,1)]"
                                style={{ gridTemplateRows: "0fr" }}
                            >
                                <div className="min-h-0 overflow-hidden">
                                    <div className="border-t border-border/50 px-3 pt-2 pb-4 transition-opacity duration-150 sm:px-4 opacity-0">
                                        <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                                            <li>
                                                Provided technical support and architecture guidance
                                                to 6 early-stage startups on system design,
                                                deployment strategies, and cloud infrastructure
                                                setup through iStart Rajasthan Govt. program.
                                            </li>
                                            <li>
                                                Delivered 10+ production web applications across
                                                healthcare, hospitality, and SaaS domains, serving
                                                8,000+ end users across multiple projects.
                                            </li>
                                            <li>
                                                Built a white-label travel booking SaaS platform
                                                enabling franchise model distribution, with
                                                multi-tenant architecture supporting independent
                                                businesses and revenue-sharing integration.
                                            </li>
                                            <li>
                                                Built a restaurant POS &amp; loyalty system with
                                                real-time order tracking using WebSockets, reducing
                                                checkout latency by ~30% and improving operational
                                                efficiency.
                                            </li>
                                            <li>
                                                Developed a medical appointment scheduler supporting
                                                200+ daily bookings across multiple clinics with
                                                responsive state management and automated
                                                notifications.
                                            </li>
                                        </ul>
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            <span className="rounded-md border border-border px-2 py-1 text-xs font-medium text-foreground">
                                                Next.js
                                            </span>
                                            <span className="rounded-md border border-border px-2 py-1 text-xs font-medium text-foreground">
                                                React
                                            </span>
                                            <span className="rounded-md border border-border px-2 py-1 text-xs font-medium text-foreground">
                                                Node.js
                                            </span>
                                            <span className="rounded-md border border-border px-2 py-1 text-xs font-medium text-foreground">
                                                TypeScript
                                            </span>
                                            <span className="rounded-md border border-border px-2 py-1 text-xs font-medium text-foreground">
                                                WebSockets
                                            </span>
                                            <span className="rounded-md border border-border px-2 py-1 text-xs font-medium text-foreground">
                                                AWS
                                            </span>
                                            <span className="rounded-md border border-border px-2 py-1 text-xs font-medium text-foreground">
                                                Docker
                                            </span>
                                            <span className="rounded-md border border-border px-2 py-1 text-xs font-medium text-foreground">
                                                GitHub Actions
                                            </span>
                                            <span className="rounded-md border border-border px-2 py-1 text-xs font-medium text-foreground">
                                                PostgreSQL
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <article>
                    <div className="flex flex-col gap-3 sm:gap-4">
                        <div
                            className="rounded-lg border border-border/50 transition-colors hover:border-border"
                            style={{ opacity: 1, transform: "none" }}
                        >
                            <button
                                type="button"
                                aria-expanded="false"
                                aria-controls="position-upam-technologies-Devops-engineer"
                                aria-label="Expand DevOps Engineer at Upam Technologies"
                                className="flex w-full flex-col gap-2 p-3 text-left sm:flex-row sm:flex-wrap sm:items-center sm:gap-3 sm:p-4 rounded-lg ring-offset-background outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-muted/30"
                            >
                                <div className="flex w-full items-center justify-between gap-2 sm:min-w-0 sm:flex-1 sm:justify-start">
                                    <div className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border sm:size-12 bg-transparent">
                                        <img
                                            alt=""
                                            aria-hidden="true"
                                            loading="lazy"
                                            width="48"
                                            height="48"
                                            decoding="async"
                                            data-nimg="1"
                                            className="h-[110%] w-[110%] max-w-none object-cover"
                                            src="/images/company-logos/upam.svg"
                                            style={{ color: "transparent" }}
                                        />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <span className="font-semibold text-foreground">
                                            Upam Technologies
                                        </span>
                                        <span className="ml-2 hidden rounded-md border border-border bg-muted/50 px-2 py-0.5 text-xs font-medium text-muted-foreground sm:inline-block">
                                            Full-time
                                        </span>
                                        <p className="mt-0.5 text-sm text-muted-foreground">
                                            DevOps Engineer
                                        </p>
                                    </div>
                                    <span
                                        className="shrink-0 text-muted-foreground sm:hidden"
                                        aria-hidden="true"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-chevron-down size-5"
                                            aria-hidden="true"
                                        >
                                            <path d="m6 9 6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </div>
                                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground sm:shrink-0 sm:flex-col sm:items-end sm:gap-0.5 sm:text-sm">
                                    <span className="rounded-md border border-border bg-muted/50 px-2 py-0.5 text-xs font-medium sm:hidden">
                                        Full-time
                                    </span>
                                    <span className="text-foreground tabular-nums">
                                        Oct 2023 – Feb 2024
                                    </span>
                                    <span>India</span>
                                    <span
                                        className="hidden shrink-0 sm:mt-1 sm:block"
                                        aria-hidden="true"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-chevron-down size-5"
                                            aria-hidden="true"
                                        >
                                            <path d="m6 9 6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </div>
                            </button>
                            <div
                                id="position-upam-technologies-Devops-engineer"
                                role="region"
                                aria-hidden="true"
                                className="grid transition-[grid-template-rows] duration-150 ease-[cubic-bezier(0.32,0.72,0,1)]"
                                style={{ gridTemplateRows: "0fr" }}
                            >
                                <div className="min-h-0 overflow-hidden">
                                    <div className="border-t border-border/50 px-3 pt-2 pb-4 transition-opacity duration-150 sm:px-4 opacity-0">
                                        <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                                            <li>
                                                Implemented Infrastructure as Code using Terraform
                                                to standardize cloud resources and reduce
                                                configuration drift across AWS environments.
                                            </li>
                                            <li>
                                                Automated CI/CD pipelines with GitHub Actions,
                                                reducing deployment time by ~40% and enabling
                                                consistent releases.
                                            </li>
                                            <li>
                                                Containerized backend services using Docker and
                                                monitored production systems with AWS CloudWatch to
                                                improve reliability and deployment consistency.
                                            </li>
                                        </ul>
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            <span className="rounded-md border border-border px-2 py-1 text-xs font-medium text-foreground">
                                                Terraform
                                            </span>
                                            <span className="rounded-md border border-border px-2 py-1 text-xs font-medium text-foreground">
                                                GitHub Actions
                                            </span>
                                            <span className="rounded-md border border-border px-2 py-1 text-xs font-medium text-foreground">
                                                Docker
                                            </span>
                                            <span className="rounded-md border border-border px-2 py-1 text-xs font-medium text-foreground">
                                                AWS
                                            </span>
                                            <span className="rounded-md border border-border px-2 py-1 text-xs font-medium text-foreground">
                                                CloudWatch
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article> */}
                {/* <div className="flex justify-center pt-2">
                    <div style={{ opacity: 1, transform: "none" }}>
                        <a
                            className="group inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white ring-2 ring-zinc-900/10 ring-offset-2 transition-all hover:bg-zinc-800 active:scale-95 dark:bg-zinc-100 dark:text-zinc-900 dark:ring-zinc-100/20 dark:ring-offset-black dark:hover:bg-zinc-200"
                            href="/experience"
                        >
                            View All
                            <div className="relative h-4 w-4 overflow-hidden">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-arrow-up-right h-4 w-4"
                                        aria-hidden="true"
                                    >
                                        <path d="M7 7h10v10"></path>
                                        <path d="M7 17 17 7"></path>
                                    </svg>
                                </div>
                                <div
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                    style={{ transform: "translateX(-150%) translateY(150%)" }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-arrow-up-right h-4 w-4"
                                        aria-hidden="true"
                                    >
                                        <path d="M7 7h10v10"></path>
                                        <path d="M7 17 17 7"></path>
                                    </svg>
                                </div>
                            </div>
                        </a>
                    </div>
                </div> */}
            </div>
        </section>
    );
}
