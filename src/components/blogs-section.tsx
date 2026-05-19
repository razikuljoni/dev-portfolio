"use client";

import { blogs } from "@/src/db/blogs";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FaChevronRight, FaRegCalendar } from "react-icons/fa6";

function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
    });
}

export default function Blogs() {
    return (
        <LazyMotion features={domAnimation}>
            <section id="blogs" className="scroll-mt-24 pt-6 pb-2">
                <div
                    className="relative w-full border-t-[1.5px] border-b-[1.5px] border-(--pattern-border) bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1.5px,transparent_0,transparent_50%)] bg-size[6px_6px] bg-fixed"
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
                        {blogs.slice(0, 5).map((blog, index) => (
                            <m.div
                                key={blog.slug}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                            >
                                <Link
                                    className="group flex flex-col gap-1 rounded-lg border border-border/50 p-3 transition-all hover:border-border sm:p-4"
                                    href={`/blogs/${blog.slug}`}
                                >
                                    <div className="flex w-full flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                                        <h2 className="text-lg font-medium tracking-tight text-foreground transition-colors group-hover:text-foreground/80">
                                            {blog.title}
                                        </h2>
                                        <time
                                            dateTime={blog.date}
                                            className="flex shrink-0 items-center gap-1.5 text-sm text-muted-foreground tabular-nums"
                                        >
                                            <FaRegCalendar />
                                            {formatDate(blog.date)}
                                        </time>
                                    </div>
                                    <p className="line-clamp-2 text-sm text-muted-foreground">
                                        {blog.summary}
                                    </p>
                                    <span className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-foreground/70 transition-colors group-hover:text-foreground">
                                        Read article
                                        <FaChevronRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                                    </span>
                                </Link>
                            </m.div>
                        ))}
                    </div>
                    <div className="flex justify-center pt-2">
                        <div style={{ opacity: 1, transform: "none" }}>
                            <Link
                                className="group inline-flex items-center gap-2 bg-foreground px-4 py-2 text-sm font-medium text-background ring-2 ring-foreground/10 ring-offset-2 ring-offset-background transition-all hover:bg-foreground/90 active:scale-95"
                                href="/blogs"
                            >
                                <span>View All Blogs</span>
                                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </LazyMotion>
    );
}
