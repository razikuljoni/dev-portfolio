"use client";

import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useState, type ComponentType } from "react";
import {
    SiExpress,
    SiJavascript,
    SiMongodb,
    SiMysql,
    SiNestjs,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiReact,
    SiRedux,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { MdEditDocument, MdOutlineEmail } from "react-icons/md";
import { ContactFormDialog } from "./contact-form";
import { Button } from "./ui/button";
import { GrDocumentNotes, GrDocumentText } from "react-icons/gr";

type TechStackItem = {
    name: string;
    href: string;
    description: string;
    color: string;
    level?: "Learning";
    icon: ComponentType<{ className?: string }>;
};

const roleTitles = ["Frontend Developer", "Full Stack Developer", "MERN Stack Developer"];

const techStacks: TechStackItem[] = [
    {
        name: "JavaScript",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        description: "High-level programming language for web development.",
        color: "#F7DF1E",
        icon: SiJavascript,
    },
    {
        name: "TypeScript",
        href: "https://www.typescriptlang.org",
        description: "Adds static typing for safer large-scale frontend and backend codebases.",
        color: "#3178C6",
        icon: SiTypescript,
    },
    {
        name: "React",
        href: "https://react.dev",
        description: "Builds dynamic and reusable component-based user interfaces.",
        color: "#61DAFB",
        icon: SiReact,
    },
    {
        name: "Next.js",
        href: "https://nextjs.org",
        description:
            "Production framework for React with App Router, SEO, and performance optimizations.",
        color: "#111111",
        icon: SiNextdotjs,
    },
    {
        name: "Node.js",
        href: "https://nodejs.org",
        description: "Runs scalable JavaScript services and APIs on the server.",
        color: "#5FA04E",
        icon: SiNodedotjs,
    },
    {
        name: "Express.js",
        href: "https://expressjs.com",
        description: "Minimal backend framework for building REST APIs and middleware pipelines.",
        color: "#888888",
        icon: SiExpress,
    },
    {
        name: "NestJS",
        href: "https://nestjs.com",
        description:
            "Structured Node.js framework for maintainable enterprise-grade backend architecture.",
        color: "#E0234E",
        icon: SiNestjs,
    },
    {
        name: "MongoDB",
        href: "https://www.mongodb.com",
        description: "Document database used for flexible schemas and fast product iteration.",
        color: "#47A248",
        icon: SiMongodb,
    },
    {
        name: "Redux Toolkit",
        href: "https://redux-toolkit.js.org",
        description: "Predictable state management for complex data-driven interfaces.",
        color: "#764ABC",
        icon: SiRedux,
    },
    {
        name: "Tailwind CSS",
        href: "https://tailwindcss.com",
        description: "Utility-first styling system for fast and consistent UI implementation.",
        color: "#06B6D4",
        icon: SiTailwindcss,
    },
    {
        name: "MySQL",
        href: "https://www.mysql.com",
        description: "Relational database for transactional workloads and structured queries.",
        color: "#4479A1",
        level: "Learning",
        icon: SiMysql,
    },
    {
        name: "PostgreSQL",
        href: "https://www.postgresql.org",
        description: "Advanced SQL database with strong reliability and query capabilities.",
        color: "#4169E1",
        level: "Learning",
        icon: SiPostgresql,
    },
];

const titleVariants = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -12 },
};

export default function HeroSection() {
    const [activeRoleIndex, setActiveRoleIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = window.setInterval(() => {
            setActiveRoleIndex((prev) => (prev + 1) % roleTitles.length);
        }, 2600);

        return () => window.clearInterval(timer);
    }, []);

    const currentRole = useMemo(() => roleTitles[activeRoleIndex], [activeRoleIndex]);

    return (
        <LazyMotion features={domAnimation}>
            <m.section
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="container mx-auto flex max-w-(--content-max-width) flex-col items-start justify-center px-4 pt-10 pb-4 sm:pt-12 sm:pb-6"
            >
                <div className="flex flex-col gap-6 py-8">
                    <div className="flex flex-row gap-4 sm:items-start sm:gap-6">
                        <div className="h-24 w-24 shrink-0 rounded-2xl bg-muted p-1.5 ring-1 ring-border ring-inset sm:h-28 sm:w-28">
                            <div className="h-full w-full overflow-hidden rounded-xl">
                                <Image
                                    alt="MD Razikul Islam Joni"
                                    width={96}
                                    height={96}
                                    priority
                                    className="h-full w-full scale-120 rounded-xl object-cover"
                                    src="/images/MD Razikul Islam Joni, Full-stack Developer.webp"
                                />
                            </div>
                        </div>

                        <div className="flex min-h-24 flex-col justify-end sm:min-h-28">
                            <div className="flex items-center gap-2">
                                <h1 className="text-4xl font-semibold tracking-tight">
                                    MD Razikul Islam Joni
                                </h1>
                            </div>

                            <div
                                className="relative mt-1 h-8 overflow-hidden sm:h-10"
                                aria-live="polite"
                            >
                                <AnimatePresence mode="wait">
                                    <m.h2
                                        key={currentRole}
                                        variants={titleVariants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        transition={{ duration: 0.35, ease: "easeOut" }}
                                        className="absolute inset-0 flex items-center text-lg font-medium text-muted-foreground sm:text-xl"
                                    >
                                        {currentRole}
                                    </m.h2>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                    <p className="max-w-190 text-lg text-muted-foreground">
                        Full Stack (MERN) developer with around 2 years of professional frontend
                        engineering experience, building scalable dashboards, business management
                        systems, and performance-focused web applications with React, Next.js,
                        Node.js, Express.js, and MongoDB.
                    </p>

                    <div className="flex flex-wrap items-center gap-2 transition-all duration-600 ease-out delay-200 translate-y-0 opacity-100">
                        <div className="flex flex-wrap items-center gap-2">
                            <Button
                                aria-label="Show Resume"
                                variant="default"
                                onClick={() =>
                                    window.open(
                                        "https://drive.google.com/file/d/1E5FovesI96cUkiXMnEgkI0B8_dcYvmoK/view?usp=sharing",
                                        "_blank",
                                    )
                                }
                            >
                                <GrDocumentText />
                                <span>Show Resume</span>
                            </Button>
                            <Button
                                variant="secondary"
                                aria-label="Send an email"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <MdOutlineEmail />
                                <span>Send an email</span>
                            </Button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 transition-all duration-600 ease-out delay-300 translate-y-0 opacity-100">
                        <h3 className="text-sm font-semibold tracking-wider text-muted-foreground uppercase">
                            Social Links
                        </h3>
                        <nav
                            aria-label="Social links"
                            className="inline-flex flex-wrap items-center gap-2"
                        >
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Github"
                                href="https://github.com/razikuljoni"
                            >
                                <Button variant="secondary">
                                    <FaGithub />
                                    <span>GitHub</span>
                                </Button>
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                href="https://linkedin.com/in/razikuljoni"
                            >
                                <Button variant="secondary">
                                    <FaLinkedin />
                                    <span>LinkedIn</span>
                                </Button>
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter"
                                href="https://x.com/razikuljoni"
                            >
                                <Button variant="secondary">
                                    <FaTwitter />
                                    <span>Twitter</span>
                                </Button>
                            </a>
                        </nav>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="text-sm font-semibold tracking-wider text-muted-foreground uppercase">
                            Tech Stack & Expertise
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {techStacks.map((stack) => {
                                const Icon = stack.icon;

                                return (
                                    <div key={stack.name} className="group relative">
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href={stack.href}
                                            className="inline-flex items-center justify-center rounded-md p-2 text-white transition-transform duration-200 hover:-translate-y-0.5"
                                            style={{ backgroundColor: stack.color }}
                                            aria-label={`${stack.name} - Visit website`}
                                        >
                                            <Icon className="size-4 shrink-0 sm:h-5 sm:w-5" />
                                        </a>

                                        <div className="pointer-events-none absolute bottom-[calc(100%+8px)] left-1/2 z-20 w-64 -translate-x-1/2 rounded-lg border border-border/70 bg-background/95 p-3 opacity-0 shadow-lg backdrop-blur transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                                            <div className="flex items-center justify-between gap-2">
                                                <p className="text-xs font-semibold text-foreground">
                                                    {stack.name}
                                                </p>
                                                {stack.level && (
                                                    <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[10px] font-medium text-amber-600">
                                                        {stack.level}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="mt-1 text-[11px] text-muted-foreground">
                                                {stack.description}
                                            </p>
                                            <p className="mt-1 text-[10px] text-primary">
                                                {stack.href}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <ContactFormDialog open={isOpen} onOpenChange={setIsOpen} />
            </m.section>
        </LazyMotion>
    );
}
