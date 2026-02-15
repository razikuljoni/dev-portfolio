"use client";

import { projects } from "@/db/projects.json";
import { Project } from "@/types/project";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ProjectPage() {
    const param = useParams();
    const project: Project | undefined = projects.find((project) => project.id === param.name);

    return (
        <div>
            <section className="container mx-auto mt-16 max-w-(--content-max-width) px-4 py-8">
                <div className="mb-6">
                    <Link
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                        href="/projects"
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
                            className="lucide lucide-arrow-left h-4 w-4"
                            aria-hidden="true"
                        >
                            <path d="m12 19-7-7 7-7"></path>
                            <path d="M19 12H5"></path>
                        </svg>
                        Back to projects
                    </Link>
                </div>
                <div className="mb-6 overflow-hidden rounded-xl border border-border bg-muted/30">
                    <div className="relative aspect-video w-full">
                        <img
                            alt={project?.name}
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 896px"
                            // srcSet="/_next/image?url=%2Fimages%2Fprojects%2Faudora.webp&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fimages%2Fprojects%2Faudora.webp&amp;w=750&amp;q=75 750w, /_next/image?url=%2Fimages%2Fprojects%2Faudora.webp&amp;w=828&amp;q=75 828w, /_next/image?url=%2Fimages%2Fprojects%2Faudora.webp&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2Fimages%2Fprojects%2Faudora.webp&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2Fimages%2Fprojects%2Faudora.webp&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2Fimages%2Fprojects%2Faudora.webp&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2Fimages%2Fprojects%2Faudora.webp&amp;w=3840&amp;q=75 3840w"
                            src={project?.thumb}
                            style={{
                                position: "absolute",
                                // height: "100%",
                                width: "100%",
                                inset: "0px",
                                color: "transparent",
                            }}
                        />
                    </div>
                </div>
                <div className="mb-8 flex flex-col gap-3 border-b border-border pb-6 sm:flex-row sm:flex-wrap sm:items-center">
                    <div className="flex flex-wrap items-center gap-3">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
                            href={project?.liveSite}
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
                                className="lucide lucide-external-link h-4 w-4"
                                aria-hidden="true"
                            >
                                <path d="M15 3h6v6"></path>
                                <path d="M10 14 21 3"></path>
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            </svg>
                            View Live
                        </a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted/50 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                            href="https://github.com/NarsiBhati-Dev/audora"
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
                                className="lucide lucide-github h-4 w-4"
                                aria-hidden="true"
                            >
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                <path d="M9 18c-4.51 2-5-2-7-2"></path>
                            </svg>
                            View Client Source
                        </a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted/50 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                            href="https://github.com/NarsiBhati-Dev/audora"
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
                                className="lucide lucide-github h-4 w-4"
                                aria-hidden="true"
                            >
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                <path d="M9 18c-4.51 2-5-2-7-2"></path>
                            </svg>
                            View Server Source
                        </a>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground sm:ml-auto">
                        {/* <span className="tabular-nums">01.2025 – Present</span> */}
                        <span className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium">
                            {project?.tag}
                        </span>
                    </div>
                </div>
                <div className="mb-8">
                    <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        {project?.name}
                    </h1>
                    <div className="space-y-4">
                        <h2 className="text-sm font-semibold tracking-wider text-muted-foreground uppercase">
                            About this project
                        </h2>
                        <ul className="list-none space-y-3 text-muted-foreground">
                            {project?.description.map((desc: string, index: number) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/50"></span>
                                    <span>{desc}</span>
                                </li>
                            ))}
                            {/* <li className="flex items-start gap-3">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/50"></span>
                                <span>
                                    Designed backend services for session management,
                                    authentication, real-time state synchronization, and media
                                    processing pipelines.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/50"></span>
                                <span>
                                    Deployed on AWS using Docker, achieving ~99% uptime over 3+
                                    months of active usage.
                                </span>
                            </li> */}
                        </ul>
                    </div>
                </div>
                <div className="rounded-xl border border-border bg-muted/20 p-4 sm:p-6">
                    <h2 className="mb-4 text-sm font-semibold tracking-wider text-muted-foreground uppercase">
                        Tech Stack
                    </h2>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                        <span className="rounded-md bg-zinc-800 px-3 py-1.5 text-sm font-medium text-zinc-100">
                            Open Source
                        </span>

                        {project?.techStack.map((tech) => (
                            <a
                                key={tech}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-md bg-zinc-800 px-3 py-1.5 text-sm font-medium text-zinc-100 transition-colors hover:bg-zinc-700"
                                href={tech}
                            >
                                {tech}
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
