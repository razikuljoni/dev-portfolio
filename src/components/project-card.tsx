"use client";

import { projects } from "@/src/db/projects.json";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

import { cn } from "@/src/lib/utils";

export default function ProjectCard({ project }: { project: (typeof projects)[0] }) {
    const backgroundIndex = useMemo(() => {
        const seed = project.id.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
        return (seed % 4) + 1;
    }, [project.id]);
    const isLive = project.status.toLowerCase() === "live";
    const statusColor = isLive ? "bg-emerald-500" : "bg-red-500";

    return (
        <LazyMotion features={domAnimation}>
            <div
                className="transition-all ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 translate-y-0 opacity-100"
                style={{ transitionDuration: "500ms", transitionDelay: "0s" }}
            >
                <m.div
                    className="relative z-10 rounded-lg border border-border/50 p-3 transition-all hover:border-border sm:p-4"
                    data-project-id={project.id}
                    initial="rest"
                    whileHover="hover"
                >
                    <Link
                        className="group flex w-full cursor-pointer flex-col gap-3"
                        href={`/projects/${project.id}`}
                    >
                        <div className="rounded-[10px] border border-border p-1">
                            <div className="relative h-55 w-full overflow-hidden rounded-[6px] border border-border bg-muted select-none sm:h-[240px] md:h-[260px]">
                                <div
                                    className="absolute inset-0 bg-cover bg-center opacity-0 transition-all duration-500 group-hover:opacity-100"
                                    style={{
                                        backgroundImage: `url('/images/bg${backgroundIndex}.webp')`,
                                        filter: "blur(0.5px)",
                                    }}
                                ></div>
                                <div
                                    className="absolute inset-0 bg-black/40 transition-all duration-300 group-hover:opacity-100"
                                    style={{ opacity: 0 }}
                                ></div>
                                <m.h1
                                    className="project-tag absolute top-2 left-2 inline-block origin-center text-xs font-semibold text-muted-foreground drop-shadow-md transition-all duration-500 ease-out will-change-transform group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:text-foreground"
                                    initial={{ x: 0, y: 0, scale: 1 }}
                                    whileHover={{
                                        x: [0, -16, 10, -6, 0],
                                        y: [0, -4, 2, -1, 0],
                                        scale: [1, 1.08, 0.99, 1.02, 1],
                                        transition: {
                                            duration: 0.75,
                                            ease: "easeOut",
                                            times: [0, 0.32, 0.6, 0.82, 1],
                                        },
                                    }}
                                    variants={{
                                        rest: {
                                            x: 0,
                                            scale: 1,
                                        },
                                        hover: {
                                            scale: 1.04,
                                            transition: {
                                                duration: 0.25,
                                            },
                                        },
                                    }}
                                >
                                    {project.tag}
                                </m.h1>
                                <div
                                    className="absolute bottom-0 left-1/2 w-[80%] rounded-t-[6px] bg-background p-[2px] pb-0"
                                    style={{ height: "75%", transform: "translateX(-50%)" }}
                                >
                                    <div className="size-full overflow-hidden rounded-t-lg">
                                        <Image
                                            alt="Melody Institute preview"
                                            width={1000}
                                            height={1000}
                                            loading="lazy"
                                            className="size-full hover:scale-120 object-contain transition-all duration-400"
                                            src={project.thumb}
                                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex min-h-30 flex-col justify-between gap-2 px-2 py-2.5">
                            <div className="flex items-center justify-between gap-2">
                                <h3 className="min-w-0 flex-1 truncate text-[1.10rem] leading-[1.10] font-semibold text-foreground">
                                    {project.name}
                                </h3>
                                <div className="flex shrink-0 items-center gap-1.5 select-none">
                                    <div className="relative flex items-center justify-center">
                                        <div
                                            className={cn(
                                                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full opacity-40",
                                                statusColor,
                                            )}
                                            style={{
                                                width: "10px",
                                                height: "10px",
                                                opacity: 0.4,
                                                display: "block",
                                            }}
                                        ></div>
                                        <span className="relative flex size-2">
                                            <span
                                                className={cn(
                                                    "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
                                                    statusColor,
                                                )}
                                            ></span>
                                            <span
                                                className={cn(
                                                    "relative inline-flex size-2 rounded-full",
                                                    statusColor,
                                                )}
                                            ></span>
                                        </span>
                                    </div>
                                    <p className="text-sm font-medium text-muted-foreground">
                                        {project.status}
                                    </p>
                                </div>
                            </div>
                            <p className="line-clamp-2 min-h-10 text-sm text-muted-foreground">
                                {project.description?.map((desc: string) => desc).join(", ")}
                            </p>
                            <div className="flex items-center gap-1.5 select-none">
                                <p
                                    className="text-sm text-muted-foreground"
                                    style={{ color: "hsl(var(--muted-foreground))" }}
                                >
                                    View Project
                                </p>
                                <ArrowUpRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                            </div>
                        </div>
                    </Link>
                </m.div>
            </div>
        </LazyMotion>
    );
}
