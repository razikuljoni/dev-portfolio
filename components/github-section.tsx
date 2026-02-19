import { GitHubCalendar } from "react-github-calendar";

export default function GithubSection() {
    return (
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
                                        Github Contributions
                                    </p>
                                    {/* <p className="text-xs text-muted-foreground">
                                        in the past 12 months
                                    </p> */}
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
                            <div className="min-w-fit mx-auto">
                                <GitHubCalendar username="razikuljoni" colorScheme="dark" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
