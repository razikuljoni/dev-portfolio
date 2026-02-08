export default function GithubSection() {
  return (
    // GITHUB Contribution Section
    <section id="github" className="py-6">
      <div
        className="relative w-full border-t-[1.5px] border-b-[1.5px] border-(--pattern-border) bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1.5px,transparent_0,transparent_50%)] bg-[length:6px_6px] bg-fixed"
        style={{ opacity: 1, transform: "none" }}
      >
        <div className="relative z-10 container mx-auto max-w-(--content-max-width) px-4 py-3">
          <h2 className="text-5xl font-semibold tracking-tight text-foreground">
            GitHub
          </h2>
        </div>
      </div>
      <div className="container mx-auto mt-8 max-w-(--content-max-width) px-4">
        <div
          className="transition-all ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 translate-y-0 opacity-100"
          style={{ transitionDuration: "500ms", transitionDelay: "0.2s" }}
        >
          <div className="rounded-xl border border-border/50 p-4 transition-all duration-200 hover:border-border sm:p-5">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 text-foreground"
                  role="img"
                  aria-label="GitHub"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57C20.565 21.795 24 17.31 24 12c0-6.63-5.37-12-12-12Z"
                  ></path>
                </svg>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    815 contributions
                  </p>
                  <p className="text-xs text-muted-foreground">
                    in the past 12 months
                  </p>
                </div>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground transition-all hover:border-foreground/20 hover:bg-muted hover:text-foreground"
                href="https://github.com/razikuljoni"
              >
                @razikuljoni
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
                  className="lucide lucide-external-link size-3 opacity-90 transition-opacity group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
              </a>
            </div>
            <div className="flex flex-col gap-1 overflow-x-auto pb-2 md:overflow-visible">
              <div className="min-w-fit">
                <div
                  className="relative mb-2 h-4 text-[11px] font-medium text-muted-foreground"
                  style={{ marginLeft: "28px" }}
                >
                  <span
                    className="absolute whitespace-nowrap"
                    style={{ left: "5.66038%" }}
                  >
                    Mar
                  </span>
                  <span
                    className="absolute whitespace-nowrap"
                    style={{ left: "15.0943%" }}
                  >
                    Apr
                  </span>
                  <span
                    className="absolute whitespace-nowrap"
                    style={{ left: "22.6415%" }}
                  >
                    May
                  </span>
                  <span
                    className="absolute whitespace-nowrap"
                    style={{ left: "30.1887%" }}
                  >
                    Jun
                  </span>
                  <span
                    className="absolute whitespace-nowrap"
                    style={{ left: "39.6226%" }}
                  >
                    Jul
                  </span>
                  <span
                    className="absolute whitespace-nowrap"
                    style={{ left: "47.1698%" }}
                  >
                    Aug
                  </span>
                  <span
                    className="absolute whitespace-nowrap"
                    style={{ left: "56.6038%" }}
                  >
                    Sep
                  </span>
                  <span
                    className="absolute whitespace-nowrap"
                    style={{ left: "64.1509%" }}
                  >
                    Oct
                  </span>
                  <span
                    className="absolute whitespace-nowrap"
                    style={{ left: "71.6981%" }}
                  >
                    Nov
                  </span>
                  <span
                    className="absolute whitespace-nowrap"
                    style={{ left: "81.1321%" }}
                  >
                    Dec
                  </span>
                  <span
                    className="absolute whitespace-nowrap"
                    style={{ left: "88.6792%" }}
                  >
                    Jan
                  </span>
                  <span
                    className="absolute whitespace-nowrap"
                    style={{ left: "96.2264%" }}
                  >
                    Feb
                  </span>
                </div>
                <div className="flex gap-[3px]">
                  <div className="sticky left-0 z-10 flex w-7 shrink-0 flex-col gap-[3px] box-decoration-clone text-[9px] text-muted-foreground">
                    <div className="flex h-0 flex-1 items-center justify-center"></div>
                    <div className="flex h-0 flex-1 items-center justify-center">
                      Mon
                    </div>
                    <div className="flex h-0 flex-1 items-center justify-center"></div>
                    <div className="flex h-0 flex-1 items-center justify-center">
                      Wed
                    </div>
                    <div className="flex h-0 flex-1 items-center justify-center"></div>
                    <div className="flex h-0 flex-1 items-center justify-center">
                      Fri
                    </div>
                    <div className="flex h-0 flex-1 items-center justify-center"></div>
                  </div>
                  <div
                    className="grid flex-1 gap-[3px]"
                    role="img"
                    aria-label="GitHub contribution calendar"
                    style={{
                      gridTemplateColumns: "repeat(53, 1fr)",
                      minWidth: "fit-content",
                    }}
                  >
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-500 dark:bg-zinc-500"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-600 dark:bg-zinc-400"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-600 dark:bg-zinc-400"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-400 dark:bg-zinc-600"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-500 dark:bg-zinc-500"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-500 dark:bg-zinc-500"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-400 dark:bg-zinc-600"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-400 dark:bg-zinc-600"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-400 dark:bg-zinc-600"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-400 dark:bg-zinc-600"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-600 dark:bg-zinc-400"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-400 dark:bg-zinc-600"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-500 dark:bg-zinc-500"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-600 dark:bg-zinc-400"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-400 dark:bg-zinc-600"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-400 dark:bg-zinc-600"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-400 dark:bg-zinc-600"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-500 dark:bg-zinc-500"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-400 dark:bg-zinc-600"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-400 dark:bg-zinc-600"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-400 dark:bg-zinc-600"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-400 dark:bg-zinc-600"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-400 dark:bg-zinc-600"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-400 dark:bg-zinc-600"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-400 dark:bg-zinc-600"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-400 dark:bg-zinc-600"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-400 dark:bg-zinc-600"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-600 dark:bg-zinc-400"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-400 dark:bg-zinc-600"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-400 dark:bg-zinc-600"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-600 dark:bg-zinc-400"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-400 dark:bg-zinc-600"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-400 dark:bg-zinc-600"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-400 dark:bg-zinc-600"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-400 dark:bg-zinc-600"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-500 dark:bg-zinc-500"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-400 dark:bg-zinc-600"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-400 dark:bg-zinc-600"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-600 dark:bg-zinc-400"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-400 dark:bg-zinc-600"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-400 dark:bg-zinc-600"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-400 dark:bg-zinc-600"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-400 dark:bg-zinc-600"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-400 dark:bg-zinc-600"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-400 dark:bg-zinc-600"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-400 dark:bg-zinc-600"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-400 dark:bg-zinc-600"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-400 dark:bg-zinc-600"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-400 dark:bg-zinc-600"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-400 dark:bg-zinc-600"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-400 dark:bg-zinc-600"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-400 dark:bg-zinc-600"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-400 dark:bg-zinc-600"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-600 dark:bg-zinc-400"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-400 dark:bg-zinc-600"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-100 dark:bg-zinc-800/60"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-600 dark:bg-zinc-400"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-400 dark:bg-zinc-600"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-400 dark:bg-zinc-600"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-600 dark:bg-zinc-400"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-600 dark:bg-zinc-400"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-600 dark:bg-zinc-400"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-500 dark:bg-zinc-500"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-400 dark:bg-zinc-600"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px] cursor-pointer rounded-[3px] border border-transparent transition-all duration-100 hover:scale-110 hover:border-foreground/20 bg-zinc-300 dark:bg-zinc-700"
                        aria-hidden="true"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      ></div>
                      <div
                        className="aspect-square min-h-[12px] w-full min-w-[12px]"
                        aria-hidden="true"
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-1 pt-1 text-[11px] text-muted-foreground">
                  <span className="mr-1">Less</span>
                  <div
                    className="size-[10px] shrink-0 rounded-[2px] bg-zinc-100 dark:bg-zinc-800/60"
                    aria-hidden="true"
                  ></div>
                  <div
                    className="size-[10px] shrink-0 rounded-[2px] bg-zinc-300 dark:bg-zinc-700"
                    aria-hidden="true"
                  ></div>
                  <div
                    className="size-[10px] shrink-0 rounded-[2px] bg-zinc-400 dark:bg-zinc-600"
                    aria-hidden="true"
                  ></div>
                  <div
                    className="size-[10px] shrink-0 rounded-[2px] bg-zinc-500 dark:bg-zinc-500"
                    aria-hidden="true"
                  ></div>
                  <div
                    className="size-[10px] shrink-0 rounded-[2px] bg-zinc-600 dark:bg-zinc-400"
                    aria-hidden="true"
                  ></div>
                  <span className="ml-1">More</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
