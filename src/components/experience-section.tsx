"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Experience() {
    return (
        <LazyMotion features={domAnimation}>
            <section id="experience" className="scroll-mt-24 pb-2">
            <div
                className="relative w-full border-t-[1.5px] border-b-[1.5px] border-(--pattern-border) bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1.5px,transparent_0,transparent_50%)] bg-size[6px_6px] bg-fixed"
                style={{ opacity: 1, transform: "none" }}
            >
                <div className="relative z-10 container mx-auto max-w-(--content-max-width) px-4 py-3">
                    <h2 className="text-5xl font-semibold tracking-tight text-foreground">
                        Experience
                    </h2>
                </div>
            </div>
            <div className="container mx-auto mt-8 flex max-w-(--content-max-width) flex-col gap-6 px-4">
                <m.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <article>
                        <div className="flex flex-col gap-3 sm:gap-4">
                            <Accordion.Root type="single" defaultValue="hawkeyes" collapsible>
                                <Accordion.Item
                                    value="hawkeyes"
                                    className="rounded-lg border border-border/50 transition-colors hover:border-border"
                                >
                                    <Accordion.Header>
                                        <Accordion.Trigger className="group flex w-full flex-col gap-2 p-3 text-left sm:flex-row sm:flex-wrap sm:items-center sm:gap-3 sm:p-4 rounded-lg ring-offset-background outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-muted/30">
                                            <div className="flex w-full items-center justify-between gap-2 sm:min-w-0 sm:flex-1 sm:justify-start">
                                                <div className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border sm:size-12 bg-transparent">
                                                    <Image
                                                        alt=""
                                                        aria-hidden="true"
                                                        width={48}
                                                        height={48}
                                                        loading="lazy"
                                                        className="size-[110%] max-w-none object-cover"
                                                        src="/images/company-logos/hawkeyes.webp"
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
                                            </div>
                                            <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground sm:shrink-0 sm:flex-col sm:items-end sm:gap-0.5 sm:text-sm">
                                                <span className="rounded-md border border-border bg-muted/50 px-2 py-0.5 text-xs font-medium sm:hidden">
                                                    Full-time
                                                </span>
                                                <span className="text-foreground tabular-nums">
                                                    May 2024 – April 2026
                                                </span>
                                                <span>In-Office</span>
                                            </div>

                                            <ChevronDown className="size-5 shrink-0 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180" />
                                        </Accordion.Trigger>
                                    </Accordion.Header>

                                    <Accordion.Content>
                                        <div className="border-t border-border/50 px-3 pt-2 pb-4 sm:px-4">
                                            <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                                                <li>
                                                    Developed and maintained responsive admin
                                                    dashboards and management systems.
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
                                                    Integrated RESTful APIs and implemented
                                                    JWT-based authentication workflows.
                                                </li>
                                                <li>
                                                    Managed complex application state using Redux
                                                    Toolkit and RTK Query.
                                                </li>
                                                <li>
                                                    Deployed applications using Vercel and managed
                                                    basic version control and CI/CD using
                                                    Git/GitHub.
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
                                                    Tables
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
                                    </Accordion.Content>
                                </Accordion.Item>
                            </Accordion.Root>
                        </div>
                    </article>
                </m.div>
            </div>
            </section>
        </LazyMotion>
    );
}
