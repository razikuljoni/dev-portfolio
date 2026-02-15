import { projects } from "@/db/projects.json";
import Link from "next/link";

export default function ProjectCard({ project }: { project: (typeof projects)[0] }) {
    return (
        <div
            className="transition-all ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 translate-y-0 opacity-100"
            style={{ transitionDuration: "500ms", transitionDelay: "0s" }}
        >
            <div
                className="relative z-10 rounded-lg border border-border/50 p-3 transition-all hover:border-border sm:p-4"
                data-project-id={project.id}
            >
                <Link
                    className="group flex w-full cursor-pointer flex-col gap-3"
                    href={`/projects/${project.id}`}
                >
                    <div className="rounded-[10px] border border-border p-[4px]">
                        <div className="relative h-[220px] w-full overflow-hidden rounded-[6px] border border-border bg-muted select-none sm:h-[240px] md:h-[260px]">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{
                                    // eslint-disable-next-line react-hooks/purity
                                    backgroundImage: `url('/images/bg${Math.floor(Math.random() * 4) + 1}.webp')`,

                                    opacity: 1,
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
                                {project.tag}
                            </h1>
                            <div
                                className="absolute bottom-0 left-1/2 w-[80%] rounded-t-[6px] bg-background p-[2px] pb-0"
                                style={{ height: "75%", transform: "translateX(-50%)" }}
                            >
                                <div className="size-full overflow-hidden rounded-t-[4px]">
                                    <img
                                        alt="Melody Institute preview"
                                        loading="lazy"
                                        width="1000"
                                        height="1000"
                                        decoding="async"
                                        data-nimg="1"
                                        className="size-full object-cover"
                                        src={project.thumb}
                                        style={{ color: "transparent" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex min-h-[120px] flex-col justify-between gap-2 px-2 py-2.5">
                        <div className="flex items-center justify-between gap-2">
                            <h3 className="min-w-0 flex-1 truncate text-[1.10rem] leading-[1.10] font-bold text-foreground">
                                {project.name}
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
                                        <span
                                            className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 bg-${project.status === "live" ? "emerald" : "red"}-500`}
                                        ></span>
                                        <span
                                            className={`relative inline-flex size-2 rounded-full bg-${project.status === "Live" ? "emerald" : "red"}-500`}
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
                </Link>
            </div>
        </div>
    );
}
