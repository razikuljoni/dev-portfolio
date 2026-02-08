export default function Projects() {
  return (
    // PROJECTS Section
    <section id="projects" className="pt-6 pb-2">
      <div
        className="relative w-full border-t-[1.5px] border-b-[1.5px] border-(--pattern-border) bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1.5px,transparent_0,transparent_50%)] bg-[length:6px_6px] bg-fixed"
        style={{ opacity: 1, transform: "none" }}
      >
        <div className="relative z-10 container mx-auto max-w-(--content-max-width) px-4 py-3">
          <h2 className="text-5xl font-semibold tracking-tight text-foreground">
            Projects
          </h2>
        </div>
      </div>
      <div className="container mx-auto mt-8 flex max-w-(--content-max-width) flex-col gap-6 px-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div
            className="transition-all ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 translate-y-0 opacity-100"
            style={{ transitionDuration: "500ms", transitionDelay: "0s" }}
          >
            <div
              className="relative z-10 rounded-lg border border-border/50 p-3 transition-all hover:border-border sm:p-4"
              data-project-id="audora"
            >
              <a
                className="group flex w-full cursor-pointer flex-col gap-3"
                href="/projects/audora"
              >
                <div className="rounded-[10px] border border-border p-[4px]">
                  <div className="relative h-[220px] w-full overflow-hidden rounded-[6px] border border-border bg-muted select-none sm:h-[240px] md:h-[260px]">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: 'url("/images/bg1.webp")',
                        opacity: 0,
                        filter: "blur(0.5px)",
                      }}
                    ></div>
                    <div
                      className="absolute inset-0 bg-black/40"
                      style={{ opacity: 0 }}
                    ></div>
                    <h1
                      className="absolute top-2 left-2 text-xs font-bold text-muted-foreground drop-shadow-md"
                      style={{
                        left: "0.5rem",
                        color: "hsl(var(--muted-foreground))",
                        transform: "none",
                      }}
                    >
                      Featured
                    </h1>
                    <div
                      className="absolute bottom-0 left-1/2 w-[80%] rounded-t-[6px] bg-background p-[2px] pb-0"
                      style={{ height: "75%", transform: "translateX(-50%)" }}
                    >
                      <div className="size-full overflow-hidden rounded-t-[4px]">
                        <img
                          alt="Audora preview"
                          loading="lazy"
                          width="1000"
                          height="1000"
                          decoding="async"
                          data-nimg="1"
                          className="size-full object-cover"
                          //   srcSet="
                          //       /_next/image?url=%2Fimages%2Fprojects%2Faudora.webp&amp;w=1080&amp;q=75 1x,
                          //       /_next/image?url=%2Fimages%2Fprojects%2Faudora.webp&amp;w=2048&amp;q=75 2x
                          //     "
                          src="/images/bg1.webp"
                          style={{ color: "transparent" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex min-h-[120px] flex-col justify-between gap-2 px-2 py-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="min-w-0 flex-1 truncate text-[1.10rem] leading-[1.10] font-bold text-foreground">
                      Audora
                    </h3>
                    <div className="flex shrink-0 items-center gap-1.5 select-none">
                      <div className="relative flex items-center justify-center">
                        <div
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full opacity-40 bg-emerald-500"
                          style={{
                            width: "10px",
                            height: "10px",
                            opacity: 0.4,
                            display: "block",
                          }}
                        ></div>
                        <span className="relative flex size-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 bg-emerald-500"></span>
                          <span className="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
                        </span>
                      </div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Live
                      </p>
                    </div>
                  </div>
                  <p className="line-clamp-2 min-h-10 text-sm text-muted-foreground">
                    Architected an end-to-end WebRTC recording platform with a
                    custom WebSocket signaling server handling 50+ concurrent
                    sessions.
                  </p>
                  <div className="flex items-center gap-1.5 select-none">
                    <p
                      className="text-sm text-muted-foreground"
                      style={{ color: "hsl(var(--muted-foreground))" }}
                    >
                      View Project
                    </p>
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-muted-foreground"
                      height="14"
                      width="14"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        color: "hsl(var(--muted-foreground))",
                        transform: "none",
                      }}
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div
            className="transition-all ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 translate-y-0 opacity-100"
            style={{ transitionDuration: "500ms", transitionDelay: "0.05s" }}
          >
            <div
              className="relative z-10 rounded-lg border border-border/50 p-3 transition-all hover:border-border sm:p-4"
              data-project-id="cosketch"
            >
              <a
                className="group flex w-full cursor-pointer flex-col gap-3"
                href="/projects/cosketch"
              >
                <div className="rounded-[10px] border border-border p-[4px]">
                  <div className="relative h-[220px] w-full overflow-hidden rounded-[6px] border border-border bg-muted select-none sm:h-[240px] md:h-[260px]">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: 'url("/images/bg2.webp")',
                        opacity: 0,
                        filter: "blur(0.5px)",
                      }}
                    ></div>
                    <div
                      className="absolute inset-0 bg-black/40"
                      style={{ opacity: 0 }}
                    ></div>
                    <h1
                      className="absolute top-2 left-2 text-xs font-bold text-muted-foreground drop-shadow-md"
                      style={{
                        left: "0.5rem",
                        color: "hsl(var(--muted-foreground))",
                        transform: "none",
                      }}
                    >
                      Featured
                    </h1>
                    <div
                      className="absolute bottom-0 left-1/2 w-[80%] rounded-t-[6px] bg-background p-[2px] pb-0"
                      style={{ height: "75%", transform: "translateX(-50%)" }}
                    >
                      <div className="size-full overflow-hidden rounded-t-[4px]">
                        <img
                          alt="CoSketch preview"
                          loading="lazy"
                          width="1000"
                          height="1000"
                          decoding="async"
                          data-nimg="1"
                          className="size-full object-cover"
                          //   srcSet="
                          //       /_next/image?url=%2Fimages%2Fprojects%2Fcosketch.webp&amp;w=1080&amp;q=75 1x,
                          //       /_next/image?url=%2Fimages%2Fprojects%2Fcosketch.webp&amp;w=2048&amp;q=75 2x
                          //     "
                          src="/images/bg2.webp"
                          style={{ color: "transparent" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex min-h-[120px] flex-col justify-between gap-2 px-2 py-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="min-w-0 flex-1 truncate text-[1.10rem] leading-[1.10] font-bold text-foreground">
                      CoSketch
                    </h3>
                    <div className="flex shrink-0 items-center gap-1.5 select-none">
                      <div className="relative flex items-center justify-center">
                        <div
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full opacity-40 bg-emerald-500"
                          style={{
                            width: "10px",
                            height: "10px",
                            opacity: 0.4,
                            display: "block",
                          }}
                        ></div>
                        <span className="relative flex size-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 bg-emerald-500"></span>
                          <span className="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
                        </span>
                      </div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Live
                      </p>
                    </div>
                  </div>
                  <p className="line-clamp-2 min-h-10 text-sm text-muted-foreground">
                    Built a real-time collaborative canvas supporting 40+
                    concurrent users with sub-50ms synchronization latency.
                  </p>
                  <div className="flex items-center gap-1.5 select-none">
                    <p
                      className="text-sm text-muted-foreground"
                      style={{ color: "hsl(var(--muted-foreground))" }}
                    >
                      View Project
                    </p>
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-muted-foreground"
                      height="14"
                      width="14"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        color: "hsl(var(--muted-foreground))",
                        transform: "none",
                      }}
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div
            className="transition-all ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 translate-y-0 opacity-100"
            style={{ transitionDuration: "500ms", transitionDelay: "0.1s" }}
          >
            <div
              className="relative z-10 rounded-lg border border-border/50 p-3 transition-all hover:border-border sm:p-4"
              data-project-id="rit"
            >
              <a
                className="group flex w-full cursor-pointer flex-col gap-3"
                href="/projects/rit"
              >
                <div className="rounded-[10px] border border-border p-[4px]">
                  <div className="relative h-[220px] w-full overflow-hidden rounded-[6px] border border-border bg-muted select-none sm:h-[240px] md:h-[260px]">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: 'url("/images/bg3.webp")',
                        opacity: 0,
                        filter: "blur(0.5px)",
                      }}
                    ></div>
                    <div
                      className="absolute inset-0 bg-black/40"
                      style={{ opacity: 0 }}
                    ></div>
                    <h1
                      className="absolute top-2 left-2 text-xs font-bold text-muted-foreground drop-shadow-md"
                      style={{
                        left: "0.5rem",
                        color: "hsl(var(--muted-foreground))",
                        transform: "none",
                      }}
                    >
                      Coming Soon
                    </h1>
                    <div
                      className="absolute bottom-0 left-1/2 w-[80%] rounded-t-[6px] bg-background p-[2px] pb-0"
                      style={{ height: "75%", transform: "translateX(-50%)" }}
                    >
                      <div className="size-full overflow-hidden rounded-t-[4px]">
                        <img
                          alt="Rit preview"
                          loading="lazy"
                          width="1000"
                          height="1000"
                          decoding="async"
                          data-nimg="1"
                          className="size-full object-cover"
                          //   srcSet="
                          //       /_next/image?url=%2Fimages%2Fcoming-soon.webp&amp;w=1080&amp;q=75 1x,
                          //       /_next/image?url=%2Fimages%2Fcoming-soon.webp&amp;w=2048&amp;q=75 2x
                          //     "
                          src="/images/bg3.webp"
                          style={{ color: "transparent" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex min-h-[120px] flex-col justify-between gap-2 px-2 py-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="min-w-0 flex-1 truncate text-[1.10rem] leading-[1.10] font-bold text-foreground">
                      Rit
                    </h3>
                    <div className="flex shrink-0 items-center gap-1.5 select-none">
                      <div className="relative flex items-center justify-center">
                        <div
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full opacity-40 bg-red-500"
                          style={{
                            width: "10px",
                            height: "10px",
                            opacity: 0.4,
                            display: "block",
                          }}
                        ></div>
                        <span className="relative flex size-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 bg-red-500"></span>
                          <span className="relative inline-flex size-2 rounded-full bg-red-500"></span>
                        </span>
                      </div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Building
                      </p>
                    </div>
                  </div>
                  <p className="line-clamp-2 min-h-10 text-sm text-muted-foreground">
                    A minimal git implementation in Rust. Learning core version
                    control concepts by building from scratch.
                  </p>
                  <div className="flex items-center gap-1.5 select-none">
                    <p
                      className="text-sm text-muted-foreground"
                      style={{ color: "hsl(var(--muted-foreground))" }}
                    >
                      View Project
                    </p>
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-muted-foreground"
                      height="14"
                      width="14"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        color: "hsl(var(--muted-foreground))",
                        transform: "none",
                      }}
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div
            className="transition-all ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 translate-y-0 opacity-100"
            style={{ transitionDuration: "500ms", transitionDelay: "0.15s" }}
          >
            <div
              className="relative z-10 rounded-lg border border-border/50 p-3 transition-all hover:border-border sm:p-4"
              data-project-id="ghost-mail"
            >
              <a
                className="group flex w-full cursor-pointer flex-col gap-3"
                href="/projects/ghost-mail"
              >
                <div className="rounded-[10px] border border-border p-[4px]">
                  <div className="relative h-[220px] w-full overflow-hidden rounded-[6px] border border-border bg-muted select-none sm:h-[240px] md:h-[260px]">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: 'url("/images/bg4.webp")',
                        opacity: 0,
                        filter: "blur(0.5px)",
                      }}
                    ></div>
                    <div
                      className="absolute inset-0 bg-black/40"
                      style={{ opacity: 0 }}
                    ></div>
                    <h1
                      className="absolute top-2 left-2 text-xs font-bold text-muted-foreground drop-shadow-md"
                      style={{
                        left: "0.5rem",
                        color: "hsl(var(--muted-foreground))",
                        transform: "none",
                      }}
                    >
                      Coming Soon
                    </h1>
                    <div
                      className="absolute bottom-0 left-1/2 w-[80%] rounded-t-[6px] bg-background p-[2px] pb-0"
                      style={{ height: "75%", transform: "translateX(-50%)" }}
                    >
                      <div className="size-full overflow-hidden rounded-t-[4px]">
                        <img
                          alt="Ghost Mail preview"
                          loading="lazy"
                          width="1000"
                          height="1000"
                          decoding="async"
                          data-nimg="1"
                          className="size-full object-cover"
                          //   srcSet="
                          //       /_next/image?url=%2Fimages%2Fcoming-soon.webp&amp;w=1080&amp;q=75 1x,
                          //       /_next/image?url=%2Fimages%2Fcoming-soon.webp&amp;w=2048&amp;q=75 2x
                          //     "
                          src="/images/bg4.webp"
                          style={{ color: "transparent" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex min-h-[120px] flex-col justify-between gap-2 px-2 py-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="min-w-0 flex-1 truncate text-[1.10rem] leading-[1.10] font-bold text-foreground">
                      Ghost Mail
                    </h3>
                    <div className="flex shrink-0 items-center gap-1.5 select-none">
                      <div className="relative flex items-center justify-center">
                        <div
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full opacity-40 bg-red-500"
                          style={{
                            width: "10px",
                            height: "10px",
                            opacity: 0.4,
                            display: "block",
                          }}
                        ></div>
                        <span className="relative flex size-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 bg-red-500"></span>
                          <span className="relative inline-flex size-2 rounded-full bg-red-500"></span>
                        </span>
                      </div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Building
                      </p>
                    </div>
                  </div>
                  <p className="line-clamp-2 min-h-10 text-sm text-muted-foreground">
                    Temporary email service with a custom SMTP server and Better
                    Uptime integration for monitoring.
                  </p>
                  <div className="flex items-center gap-1.5 select-none">
                    <p
                      className="text-sm text-muted-foreground"
                      style={{ color: "hsl(var(--muted-foreground))" }}
                    >
                      View Project
                    </p>
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-muted-foreground"
                      height="14"
                      width="14"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        color: "hsl(var(--muted-foreground))",
                        transform: "none",
                      }}
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-2">
          <div style={{ opacity: 1, transform: "none" }}>
            <a
              className="group inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white ring-2 ring-zinc-900/10 ring-offset-2 transition-all hover:bg-zinc-800 active:scale-95 dark:bg-zinc-100 dark:text-zinc-900 dark:ring-zinc-100/20 dark:ring-offset-black dark:hover:bg-zinc-200"
              href="/projects"
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
                    strokeWidth={2}
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
                    strokeWidth={2}
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
