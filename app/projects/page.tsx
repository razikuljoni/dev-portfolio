export default function Projects() {
    return (
        <div>
            <section className="py-16">
                <div
                    className="relative w-full border-t-[1.5px] border-b-[1.5px] border-(--pattern-border) bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1.5px,transparent_0,transparent_50%)] bg-[length:6px_6px] bg-fixed"
                    style={{ opacity: "1", transform: "none" }}
                >
                    <div className="relative z-10 container mx-auto max-w-(--content-max-width) px-4 py-3">
                        <h2 className="text-5xl font-semibold tracking-tight text-foreground">
                            Projects
                        </h2>
                    </div>
                </div>
                <div className="container mx-auto mt-8 max-w-(--content-max-width) px-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
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
                                                backgroundImage: "url('/images/bg1.webp')",
                                                opacity: "1",
                                                filter: "blur(0.5px)",
                                            }}
                                        ></div>
                                        <div
                                            className="absolute inset-0 bg-black/40"
                                            style={{ opacity: "1" }}
                                        ></div>
                                        <h1
                                            className="absolute top-2 left-2 text-xs font-bold text-muted-foreground drop-shadow-md"
                                            style={{
                                                left: "50%",
                                                color: "hsl(var(--foreground))",
                                                transform: "translateX(-50%)",
                                            }}
                                        >
                                            Featured
                                        </h1>
                                        <div
                                            className="absolute bottom-0 left-1/2 w-[80%] rounded-t-[6px] bg-background p-[2px] pb-0"
                                            style={{ height: "70%", transform: "translateX(-50%)" }}
                                        >
                                            <div className="size-full overflow-hidden rounded-t-[4px]">
                                                <img
                                                    alt="Audora preview"
                                                    loading="lazy"
                                                    width="1000"
                                                    height="1000"
                                                    decoding="async"
                                                    data-img="1"
                                                    className="size-full object-cover"
                                                    srcSet="/images/projects/audora.webp 1x, /images/projects/audora.webp 2x"
                                                    src="/images/projects/audora.webp"
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
                                                <div className="absolute top-1/2 left-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full opacity-40 bg-emerald-500"></div>
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
                                            style={{ color: "hsl(var(--foreground))" }}
                                        >
                                            View Project
                                        </p>
                                        <svg
                                            stroke="currentColor"
                                            fill="none"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            stroke-linejoin="round"
                                            className="text-muted-foreground"
                                            height="14"
                                            width="14"
                                            xmlns="http://www.w3.org/2000/svg"
                                            style={{
                                                color: "hsl(var(--foreground))",
                                                transform: "rotate(45deg)",
                                            }}
                                        >
                                            <line x1="7" y1="17" x2="17" y2="7"></line>
                                            <polyline points="7 7 17 7 17 17"></polyline>
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        </div>
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
                                                backgroundImage: "url('/images/bg2.webp')",
                                                opacity: "0",
                                                filter: "blur(0.5px)",
                                            }}
                                        ></div>
                                        <div
                                            className="absolute inset-0 bg-black/40"
                                            style={{ opacity: "0" }}
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
                                                    srcSet="/_next/image?url=%2Fimages%2Fprojects%2Fcosketch.webp&amp;w=1080&amp;q=75 1x, /_next/image?url=%2Fimages%2Fprojects%2Fcosketch.webp&amp;w=2048&amp;q=75 2x"
                                                    src="/_next/image?url=%2Fimages%2Fprojects%2Fcosketch.webp&amp;w=2048&amp;q=75"
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
                                                <div className="absolute top-1/2 left-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full opacity-40 bg-emerald-500"></div>
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
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            stroke-linejoin="round"
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
                                                backgroundImage: "url('/images/bg3.webp')",
                                                opacity: "0",
                                                filter: "blur(0.5px)",
                                            }}
                                        ></div>
                                        <div
                                            className="absolute inset-0 bg-black/40"
                                            style={{ opacity: "0" }}
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
                                                    srcSet="/_next/image?url=%2Fimages%2Fcoming-soon.webp&amp;w=1080&amp;q=75 1x, /_next/image?url=%2Fimages%2Fcoming-soon.webp&amp;w=2048&amp;q=75 2x"
                                                    src="/_next/image?url=%2Fimages%2Fcoming-soon.webp&amp;w=2048&amp;q=75"
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
                                                <div className="absolute top-1/2 left-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full opacity-40 bg-red-500"></div>
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
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            stroke-linejoin="round"
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
                                                backgroundImage: "url('/images/bg4.webp')",
                                                opacity: "0",
                                                filter: "blur(0.5px)",
                                            }}
                                        ></div>
                                        <div
                                            className="absolute inset-0 bg-black/40"
                                            style={{ opacity: "0" }}
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
                                                    srcSet="/_next/image?url=%2Fimages%2Fcoming-soon.webp&amp;w=1080&amp;q=75 1x, /_next/image?url=%2Fimages%2Fcoming-soon.webp&amp;w=2048&amp;q=75 2x"
                                                    src="/_next/image?url=%2Fimages%2Fcoming-soon.webp&amp;w=2048&amp;q=75"
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
                                                <div className="absolute top-1/2 left-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full opacity-40 bg-red-500"></div>
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
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            stroke-linejoin="round"
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
                        <div
                            className="relative z-10 rounded-lg border border-border/50 p-3 transition-all hover:border-border sm:p-4"
                            data-project-id="create-audora-next"
                        >
                            <a
                                className="group flex w-full cursor-pointer flex-col gap-3"
                                href="/projects/create-audora-next"
                            >
                                <div className="rounded-[10px] border border-border p-[4px]">
                                    <div className="relative h-[220px] w-full overflow-hidden rounded-[6px] border border-border bg-muted select-none sm:h-[240px] md:h-[260px]">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center"
                                            style={{
                                                backgroundImage: "url('/images/bg1.webp')",
                                                opacity: "0",
                                                filter: "blur(0.5px)",
                                            }}
                                        ></div>
                                        <div
                                            className="absolute inset-0 bg-black/40"
                                            style={{ opacity: "0" }}
                                        ></div>
                                        <h1
                                            className="absolute top-2 left-2 text-xs font-bold text-muted-foreground drop-shadow-md"
                                            style={{
                                                left: "0.5rem",
                                                color: "hsl(var(--muted-foreground))",
                                                transform: "none",
                                            }}
                                        >
                                            AudoraLabs
                                        </h1>
                                        <div
                                            className="absolute bottom-0 left-1/2 w-[80%] rounded-t-[6px] bg-background p-[2px] pb-0"
                                            style={{ height: "75%", transform: "translateX(-50%)" }}
                                        >
                                            <div className="size-full overflow-hidden rounded-t-[4px]">
                                                <img
                                                    alt="create-audora-next preview"
                                                    loading="lazy"
                                                    width="1000"
                                                    height="1000"
                                                    decoding="async"
                                                    data-nimg="1"
                                                    className="size-full object-cover"
                                                    srcSet="/_next/image?url=%2Fimages%2Fprojects%2Fcreate-next-starter.webp&amp;w=1080&amp;q=75 1x, /_next/image?url=%2Fimages%2Fprojects%2Fcreate-next-starter.webp&amp;w=2048&amp;q=75 2x"
                                                    src="/_next/image?url=%2Fimages%2Fprojects%2Fcreate-next-starter.webp&amp;w=2048&amp;q=75"
                                                    style={{ color: "transparent" }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex min-h-[120px] flex-col justify-between gap-2 px-2 py-2.5">
                                    <div className="flex items-center justify-between gap-2">
                                        <h3 className="min-w-0 flex-1 truncate text-[1.10rem] leading-[1.10] font-bold text-foreground">
                                            create-audora-next
                                        </h3>
                                        <div className="flex shrink-0 items-center gap-1.5 select-none">
                                            <div className="relative flex items-center justify-center">
                                                <div className="absolute top-1/2 left-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full opacity-40 bg-emerald-500"></div>
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
                                        Create a new Audora Next.js app with one command.
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
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            stroke-linejoin="round"
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
                        <div
                            className="relative z-10 rounded-lg border border-border/50 p-3 transition-all hover:border-border sm:p-4"
                            data-project-id="nextblog-starter"
                        >
                            <a
                                className="group flex w-full cursor-pointer flex-col gap-3"
                                href="/projects/nextblog-starter"
                            >
                                <div className="rounded-[10px] border border-border p-[4px]">
                                    <div className="relative h-[220px] w-full overflow-hidden rounded-[6px] border border-border bg-muted select-none sm:h-[240px] md:h-[260px]">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center"
                                            style={{
                                                backgroundImage: "url('/images/bg2.webp')",
                                                opacity: "0",
                                                filter: "blur(0.5px)",
                                            }}
                                        ></div>
                                        <div
                                            className="absolute inset-0 bg-black/40"
                                            style={{ opacity: "0" }}
                                        ></div>
                                        <h1
                                            className="absolute top-2 left-2 text-xs font-bold text-muted-foreground drop-shadow-md"
                                            style={{
                                                left: "0.5rem",
                                                color: "hsl(var(--muted-foreground))",
                                                transform: "none",
                                            }}
                                        >
                                            AudoraLabs
                                        </h1>
                                        <div
                                            className="absolute bottom-0 left-1/2 w-[80%] rounded-t-[6px] bg-background p-[2px] pb-0"
                                            style={{ height: "75%", transform: "translateX(-50%)" }}
                                        >
                                            <div className="size-full overflow-hidden rounded-t-[4px]">
                                                <img
                                                    alt="NextBlog-Starter preview"
                                                    loading="lazy"
                                                    width="1000"
                                                    height="1000"
                                                    decoding="async"
                                                    data-nimg="1"
                                                    className="size-full object-cover"
                                                    srcSet="/_next/image?url=%2Fimages%2Fprojects%2Fnextblog-starter.webp&amp;w=1080&amp;q=75 1x, /_next/image?url=%2Fimages%2Fprojects%2Fnextblog-starter.webp&amp;w=2048&amp;q=75 2x"
                                                    src="/_next/image?url=%2Fimages%2Fprojects%2Fnextblog-starter.webp&amp;w=2048&amp;q=75"
                                                    style={{ color: "transparent" }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex min-h-[120px] flex-col justify-between gap-2 px-2 py-2.5">
                                    <div className="flex items-center justify-between gap-2">
                                        <h3 className="min-w-0 flex-1 truncate text-[1.10rem] leading-[1.10] font-bold text-foreground">
                                            NextBlog-Starter
                                        </h3>
                                        <div className="flex shrink-0 items-center gap-1.5 select-none">
                                            <div className="relative flex items-center justify-center">
                                                <div className="absolute top-1/2 left-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full opacity-40 bg-emerald-500"></div>
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
                                        Starter template for building modern blogs with Next.js,
                                        MDX, and Tailwind.
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
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            stroke-linejoin="round"
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
                        <div
                            className="relative z-10 rounded-lg border border-border/50 p-3 transition-all hover:border-border sm:p-4"
                            data-project-id="solana-starter"
                        >
                            <a
                                className="group flex w-full cursor-pointer flex-col gap-3"
                                href="/projects/solana-starter"
                            >
                                <div className="rounded-[10px] border border-border p-[4px]">
                                    <div className="relative h-[220px] w-full overflow-hidden rounded-[6px] border border-border bg-muted select-none sm:h-[240px] md:h-[260px]">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center"
                                            style={{
                                                backgroundImage: "url('/images/bg3.webp')",
                                                opacity: "0",
                                                filter: "blur(0.5px)",
                                            }}
                                        ></div>
                                        <div
                                            className="absolute inset-0 bg-black/40"
                                            style={{ opacity: "0" }}
                                        ></div>
                                        <h1
                                            className="absolute top-2 left-2 text-xs font-bold text-muted-foreground drop-shadow-md"
                                            style={{
                                                left: "0.5rem",
                                                color: "hsl(var(--muted-foreground))",
                                                transform: "none",
                                            }}
                                        >
                                            Web3
                                        </h1>
                                        <div
                                            className="absolute bottom-0 left-1/2 w-[80%] rounded-t-[6px] bg-background p-[2px] pb-0"
                                            style={{ height: "75%", transform: "translateX(-50%)" }}
                                        >
                                            <div className="size-full overflow-hidden rounded-t-[4px]">
                                                <img
                                                    alt="Solana Starter preview"
                                                    loading="lazy"
                                                    width="1000"
                                                    height="1000"
                                                    decoding="async"
                                                    data-nimg="1"
                                                    className="size-full object-cover"
                                                    srcSet="/_next/image?url=%2Fimages%2Fprojects%2Fsolana-starter.webp&amp;w=1080&amp;q=75 1x, /_next/image?url=%2Fimages%2Fprojects%2Fsolana-starter.webp&amp;w=2048&amp;q=75 2x"
                                                    src="/_next/image?url=%2Fimages%2Fprojects%2Fsolana-starter.webp&amp;w=2048&amp;q=75"
                                                    style={{ color: "transparent" }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex min-h-[120px] flex-col justify-between gap-2 px-2 py-2.5">
                                    <div className="flex items-center justify-between gap-2">
                                        <h3 className="min-w-0 flex-1 truncate text-[1.10rem] leading-[1.10] font-bold text-foreground">
                                            Solana Starter
                                        </h3>
                                        <div className="flex shrink-0 items-center gap-1.5 select-none">
                                            <div className="relative flex items-center justify-center">
                                                <div className="absolute top-1/2 left-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full opacity-40 bg-emerald-500"></div>
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
                                        Starter template for building Solana blockchain applications
                                        with TypeScript and React.
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
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            stroke-linejoin="round"
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
                        <div
                            className="relative z-10 rounded-lg border border-border/50 p-3 transition-all hover:border-border sm:p-4"
                            data-project-id="solana-programs-collection"
                        >
                            <a
                                className="group flex w-full cursor-pointer flex-col gap-3"
                                href="/projects/solana-programs-collection"
                            >
                                <div className="rounded-[10px] border border-border p-[4px]">
                                    <div className="relative h-[220px] w-full overflow-hidden rounded-[6px] border border-border bg-muted select-none sm:h-[240px] md:h-[260px]">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center"
                                            style={{
                                                backgroundImage: "url('/images/bg4.webp')",
                                                opacity: "0",
                                                filter: "blur(0.5px)",
                                            }}
                                        ></div>
                                        <div
                                            className="absolute inset-0 bg-black/40"
                                            style={{ opacity: "0" }}
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
                                                    alt="Solana Programs Collection preview"
                                                    loading="lazy"
                                                    width="1000"
                                                    height="1000"
                                                    decoding="async"
                                                    data-nimg="1"
                                                    className="size-full object-cover"
                                                    srcSet="/_next/image?url=%2Fimages%2Fcoming-soon.webp&amp;w=1080&amp;q=75 1x, /_next/image?url=%2Fimages%2Fcoming-soon.webp&amp;w=2048&amp;q=75 2x"
                                                    src="/_next/image?url=%2Fimages%2Fcoming-soon.webp&amp;w=2048&amp;q=75"
                                                    style={{ color: "transparent" }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex min-h-[120px] flex-col justify-between gap-2 px-2 py-2.5">
                                    <div className="flex items-center justify-between gap-2">
                                        <h3 className="min-w-0 flex-1 truncate text-[1.10rem] leading-[1.10] font-bold text-foreground">
                                            Solana Programs Collection
                                        </h3>
                                        <div className="flex shrink-0 items-center gap-1.5 select-none">
                                            <div className="relative flex items-center justify-center">
                                                <div className="absolute top-1/2 left-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full opacity-40 bg-red-500"></div>
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
                                        Curated collection of Solana programs for learning and
                                        practice.
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
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            stroke-linejoin="round"
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
                        <div
                            className="relative z-10 rounded-lg border border-border/50 p-3 transition-all hover:border-border sm:p-4"
                            data-project-id="jm-rentals"
                        >
                            <a
                                className="group flex w-full cursor-pointer flex-col gap-3"
                                href="/projects/jm-rentals"
                            >
                                <div className="rounded-[10px] border border-border p-[4px]">
                                    <div className="relative h-[220px] w-full overflow-hidden rounded-[6px] border border-border bg-muted select-none sm:h-[240px] md:h-[260px]">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center"
                                            style={{
                                                backgroundImage: "url('/images/bg1.webp')",
                                                opacity: "0",
                                                filter: "blur(0.5px)",
                                            }}
                                        ></div>
                                        <div
                                            className="absolute inset-0 bg-black/40"
                                            style={{ opacity: "0" }}
                                        ></div>
                                        <h1
                                            className="absolute top-2 left-2 text-xs font-bold text-muted-foreground drop-shadow-md"
                                            style={{
                                                left: "0.5rem",
                                                color: "hsl(var(--muted-foreground))",
                                                transform: "none",
                                            }}
                                        >
                                            Full Stack
                                        </h1>
                                        <div
                                            className="absolute bottom-0 left-1/2 w-[80%] rounded-t-[6px] bg-background p-[2px] pb-0"
                                            style={{ height: "75%", transform: "translateX(-50%)" }}
                                        >
                                            <div className="size-full overflow-hidden rounded-t-[4px]">
                                                <img
                                                    alt="J&amp;M Rentals preview"
                                                    loading="lazy"
                                                    width="1000"
                                                    height="1000"
                                                    decoding="async"
                                                    data-nimg="1"
                                                    className="size-full object-cover"
                                                    srcSet="/_next/image?url=%2Fimages%2Fprojects%2Fjmrentals.webp&amp;w=1080&amp;q=75 1x, /_next/image?url=%2Fimages%2Fprojects%2Fjmrentals.webp&amp;w=2048&amp;q=75 2x"
                                                    src="/_next/image?url=%2Fimages%2Fprojects%2Fjmrentals.webp&amp;w=2048&amp;q=75"
                                                    style={{ color: "transparent" }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex min-h-[120px] flex-col justify-between gap-2 px-2 py-2.5">
                                    <div className="flex items-center justify-between gap-2">
                                        <h3 className="min-w-0 flex-1 truncate text-[1.10rem] leading-[1.10] font-bold text-foreground">
                                            J&amp;M Rentals
                                        </h3>
                                        <div className="flex shrink-0 items-center gap-1.5 select-none">
                                            <div className="relative flex items-center justify-center">
                                                <div className="absolute top-1/2 left-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full opacity-40 bg-emerald-500"></div>
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
                                        Full-stack equipment rental platform for lawn, garden,
                                        scissorlifts, and earthmoving machinery.
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
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            stroke-linejoin="round"
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
                        <div
                            className="relative z-10 rounded-lg border border-border/50 p-3 transition-all hover:border-border sm:p-4"
                            data-project-id="jmb-restaurant"
                        >
                            <a
                                className="group flex w-full cursor-pointer flex-col gap-3"
                                href="/projects/jmb-restaurant"
                            >
                                <div className="rounded-[10px] border border-border p-[4px]">
                                    <div className="relative h-[220px] w-full overflow-hidden rounded-[6px] border border-border bg-muted select-none sm:h-[240px] md:h-[260px]">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center"
                                            style={{
                                                backgroundImage: "url('/images/bg2.webp')",
                                                opacity: "0",
                                                filter: "blur(0.5px)",
                                            }}
                                        ></div>
                                        <div
                                            className="absolute inset-0 bg-black/40"
                                            style={{ opacity: "0" }}
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
                                                    alt="JMB Restaurant preview"
                                                    loading="lazy"
                                                    width="1000"
                                                    height="1000"
                                                    decoding="async"
                                                    data-nimg="1"
                                                    className="size-full object-cover"
                                                    srcSet="/_next/image?url=%2Fimages%2Fprojects%2Fjmb.webp&amp;w=1080&amp;q=75 1x, /_next/image?url=%2Fimages%2Fprojects%2Fjmb.webp&amp;w=2048&amp;q=75 2x"
                                                    src="/_next/image?url=%2Fimages%2Fprojects%2Fjmb.webp&amp;w=2048&amp;q=75"
                                                    style={{ color: "transparent" }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex min-h-[120px] flex-col justify-between gap-2 px-2 py-2.5">
                                    <div className="flex items-center justify-between gap-2">
                                        <h3 className="min-w-0 flex-1 truncate text-[1.10rem] leading-[1.10] font-bold text-foreground">
                                            JMB Restaurant
                                        </h3>
                                        <div className="flex shrink-0 items-center gap-1.5 select-none">
                                            <div className="relative flex items-center justify-center">
                                                <div className="absolute top-1/2 left-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full opacity-40 bg-emerald-500"></div>
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
                                        Built a restaurant POS and loyalty system with real-time
                                        order tracking using WebSockets, reducing checkout latency
                                        by ~30% and improving operational efficiency.
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
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            stroke-linejoin="round"
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
            </section>
        </div>
    );
}
