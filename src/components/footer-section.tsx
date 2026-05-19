"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import Link from "next/link";
import { FaEnvelope, FaFile, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

export default function FooterSection() {
    return (
        <LazyMotion features={domAnimation}>
            <m.footer
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="border-t border-border py-8 text-center"
            >
                <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 px-4">
                    <section className="flex flex-col items-center gap-3">
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Email"
                                className="flex size-11 items-center justify-center rounded-md border border-border bg-background text-foreground/70 transition-all duration-300 hover:border-foreground/30 hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
                                href="mailto:contact.razikuljoni@gmail.com"
                            >
                                <FaEnvelope size={20} />
                            </a>
                            <Link
                                aria-label="Resume"
                                className="flex size-11 items-center justify-center rounded-md border border-border bg-background text-foreground/70 transition-all duration-300 hover:border-foreground/30 hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
                                href="/about/resume"
                            >
                                <FaFile size={20} />
                            </Link>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="flex size-11 items-center justify-center rounded-md border border-border bg-background text-foreground/70 transition-all duration-300 hover:border-foreground/30 hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
                                href="https://github.com/razikuljoni"
                            >
                                <FaGithub size={20} />
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="flex size-11 items-center justify-center rounded-md border border-border bg-background text-foreground/70 transition-all duration-300 hover:border-foreground/30 hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
                                href="https://www.linkedin.com/in/razikuljoni"
                            >
                                <FaLinkedin size={20} />
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="X"
                                className="flex size-11 items-center justify-center rounded-md border border-border bg-background text-foreground/70 transition-all duration-300 hover:border-foreground/30 hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
                                href="https://x.com/razikuljoni"
                            >
                                <FaTwitter size={20} />
                            </a>
                        </div>
                    </section>
                    <p className="text-sm text-muted-foreground">
                        Built by{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded font-medium text-foreground/90 underline decoration-border underline-offset-2 transition-colors hover:decoration-foreground/50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
                            href="https://x.com/razikuljoni"
                        >
                            razikuljoni
                        </a>
                        . The source code is available on{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded font-medium text-foreground/90 underline decoration-border underline-offset-2 transition-colors hover:decoration-foreground/50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
                            href="https://github.com/razikuljoni/razikuljoni.com"
                        >
                            GitHub
                        </a>
                        .
                    </p>
                    <nav
                        className="flex flex-wrap items-center justify-center gap-x-1 gap-y-1 text-xs text-muted-foreground"
                        aria-label="Developer and crawler resources"
                    >
                        <span className="inline-flex items-center gap-1">
                            <Link
                                className="rounded transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
                                href="/sitemap.xml"
                            >
                                Sitemap
                            </Link>
                        </span>
                        <span className="inline-flex items-center gap-1">
                            <span className="select-none">·</span>
                            <Link
                                className="rounded transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
                                href="/robots.txt"
                            >
                                Robots
                            </Link>
                        </span>
                        <span className="inline-flex items-center gap-1">
                            <span className="select-none">·</span>
                            <Link
                                className="rounded transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
                                href="/manifest.webmanifest"
                            >
                                Manifest
                            </Link>
                        </span>
                        <span className="inline-flex items-center gap-1">
                            <span className="select-none">·</span>
                            <Link
                                className="rounded transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
                                href="/llms.txt"
                            >
                                llms.txt
                            </Link>
                        </span>
                    </nav>
                </div>
            </m.footer>
        </LazyMotion>
    );
}
