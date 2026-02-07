/* eslint-disable react/no-unescaped-entities */
export default function Blogs() {
  return (
    // BLOGS Section
    <section id="blogs" className="pt-6 pb-2">
      <div
        className="relative w-full border-t-[1.5px] border-b-[1.5px] border-(--pattern-border) bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1.5px,transparent_0,transparent_50%)] bg-[length:6px_6px] bg-fixed"
        style={{ opacity: 1, transform: "none" }}
      >
        <div className="relative z-10 container mx-auto max-w-(--content-max-width) px-4 py-3">
          <h2 className="text-5xl font-semibold tracking-tight text-foreground">
            Blogs
          </h2>
        </div>
      </div>
      <div className="container mx-auto mt-8 flex max-w-(--content-max-width) flex-col gap-6 px-4">
        <div className="flex flex-col gap-4">
          <div
            className="transition-all ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 translate-y-0 opacity-100"
            style={{ transitionDuration: "500ms", transitionDelay: "0s" }}
          >
            <a
              className="group flex flex-col gap-1 rounded-lg border border-border/50 p-3 transition-all hover:border-border sm:p-4"
              href="/blogs/hello-world"
            >
              <div className="flex w-full flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <h2 className="text-lg font-medium tracking-tight text-foreground transition-colors group-hover:text-foreground/80">
                  Hello World in Rust with Axum
                </h2>
                <time
                  dateTime="2026-01-03"
                  className="flex shrink-0 items-center gap-1.5 text-sm text-muted-foreground tabular-nums"
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
                    className="lucide lucide-calendar h-4 w-4 shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  Jan 03, 2026
                </time>
              </div>
              <p className="line-clamp-2 text-sm text-muted-foreground">
                A minimal Hello World web server using Rust and the Axum
                framework.
              </p>
              <span className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-foreground/70 transition-colors group-hover:text-foreground">
                Read article
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
                  className="lucide lucide-chevron-right h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </a>
          </div>
          <div
            className="transition-all ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 translate-y-0 opacity-100"
            style={{ transitionDuration: "500ms", transitionDelay: "0.05s" }}
          >
            <a
              className="group flex flex-col gap-1 rounded-lg border border-border/50 p-3 transition-all hover:border-border sm:p-4"
              href="/blogs/cosketch-eraser-and-selection"
            >
              <div className="flex w-full flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <h2 className="text-lg font-medium tracking-tight text-foreground transition-colors group-hover:text-foreground/80">
                  Eraser &amp; Selection Mechanics in CoSketch
                </h2>
                <time
                  dateTime="2025-05-01"
                  className="flex shrink-0 items-center gap-1.5 text-sm text-muted-foreground tabular-nums"
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
                    className="lucide lucide-calendar h-4 w-4 shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  May 01, 2025
                </time>
              </div>
              <p className="line-clamp-2 text-sm text-muted-foreground">
                A deep dive into how CoSketch handles erasing and selecting
                shapes in its canvas engine, and how those changes propagate to
                collaborators.
              </p>
              <span className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-foreground/70 transition-colors group-hover:text-foreground">
                Read article
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
                  className="lucide lucide-chevron-right h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </a>
          </div>
          <div
            className="transition-all ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 translate-y-0 opacity-100"
            style={{ transitionDuration: "500ms", transitionDelay: "0.1s" }}
          >
            <a
              className="group flex flex-col gap-1 rounded-lg border border-border/50 p-3 transition-all hover:border-border sm:p-4"
              href="/blogs/cosketch-docker-architecture"
            >
              <div className="flex w-full flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <h2 className="text-lg font-medium tracking-tight text-foreground transition-colors group-hover:text-foreground/80">
                  Inside CoSketch's Docker &amp; Docker Compose Architecture
                </h2>
                <time
                  dateTime="2025-04-10"
                  className="flex shrink-0 items-center gap-1.5 text-sm text-muted-foreground tabular-nums"
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
                    className="lucide lucide-calendar h-4 w-4 shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  Apr 10, 2025
                </time>
              </div>
              <p className="line-clamp-2 text-sm text-muted-foreground">
                A conceptual tour of how CoSketch uses Docker, Docker Compose,
                Bun, and Turborepo to run the frontend, backend API, WebSocket
                server, and PostgreSQL database.
              </p>
              <span className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-foreground/70 transition-colors group-hover:text-foreground">
                Read article
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
                  className="lucide lucide-chevron-right h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </a>
          </div>
          <div
            className="transition-all ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 translate-y-0 opacity-100"
            style={{ transitionDuration: "500ms", transitionDelay: "0.15s" }}
          >
            <a
              className="group flex flex-col gap-1 rounded-lg border border-border/50 p-3 transition-all hover:border-border sm:p-4"
              href="/blogs/cosketch-canvas-engine"
            >
              <div className="flex w-full flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <h2 className="text-lg font-medium tracking-tight text-foreground transition-colors group-hover:text-foreground/80">
                  How CoSketch's Canvas Engine Works
                </h2>
                <time
                  dateTime="2025-03-15"
                  className="flex shrink-0 items-center gap-1.5 text-sm text-muted-foreground tabular-nums"
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
                    className="lucide lucide-calendar h-4 w-4 shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  Mar 15, 2025
                </time>
              </div>
              <p className="line-clamp-2 text-sm text-muted-foreground">
                A conceptual walkthrough of the CoSketch canvas engine, from
                pointer events to state stores and React rendering.
              </p>
              <span className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-foreground/70 transition-colors group-hover:text-foreground">
                Read article
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
                  className="lucide lucide-chevron-right h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </a>
          </div>
        </div>
        <div className="flex justify-center pt-2">
          <div style={{ opacity: 1, transform: "none" }}>
            <a
              className="group inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white ring-2 ring-zinc-900/10 ring-offset-2 transition-all hover:bg-zinc-800 active:scale-95 dark:bg-zinc-100 dark:text-zinc-900 dark:ring-zinc-100/20 dark:ring-offset-black dark:hover:bg-zinc-200"
              href="/blogs"
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
        </div>
      </div>
    </section>
  );
}
