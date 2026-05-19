"use client";

import { projects } from "@/src/db/projects.json";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import ProjectCard from "./project-card";

export default function Projects() {
    return (
        <LazyMotion features={domAnimation}>
            <section id="projects" className="scroll-mt-24 pt-6 pb-2">
                <div
                    className="relative w-full border-t-[1.5px] border-b-[1.5px] border-(--pattern-border) bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1.5px,transparent_0,transparent_50%)] bg-size[6px_6px] bg-fixed"
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
                        {projects?.slice(0, 4).map((project, index) => (
                            <m.div
                                key={project.id}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                            >
                                <ProjectCard project={project} />
                            </m.div>
                        ))}
                    </div>
                    <div className="flex justify-center pt-2">
                        <div style={{ opacity: 1, transform: "none" }}>
                            <Link
                                className="group inline-flex items-center gap-2 bg-foreground px-4 py-2 text-sm font-medium text-background ring-2 ring-foreground/10 ring-offset-2 ring-offset-background transition-all hover:bg-foreground/90 active:scale-95"
                                href="/projects"
                            >
                                <span>View All Projects</span>
                                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </LazyMotion>
    );
}
