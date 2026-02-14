import Toggle from "./ui/toggle-button"

export default function Header() {
    return (
        <header className="fixed top-0 right-0 left-0 z-50 transition-all duration-700 ease-out md:top-2 md:left-1/2 md:w-full md:max-w-(--content-max-width) md:-translate-x-1/2 md:px-3 translate-y-0 opacity-100">
            <div className="flex items-center justify-between border-b border-neutral-200 bg-background/90 px-4 py-2.5 backdrop-blur-md md:overflow-hidden md:rounded-2xl md:border md:border-border/50 md:shadow-lg md:shadow-black/5 dark:border-neutral-700 dark:md:shadow-black/20">
                <a className="group border-0 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline" href="#">
                    <img
                        alt="MD Razikul Islam Joni Logo"
                        loading="lazy"
                        width="28"
                        height="28"
                        decoding="async"
                        data-nimg="1"
                        className="h-10 w-10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 dark:invert"
                        style={{ color: "transparent" }}
                        src="/logo.svg"
                    />
                </a>
                <div className="flex items-center justify-center gap-3">
                    <div className="hidden md:flex md:items-center md:gap-3">
                        <a className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground" href="#experience">
                            Experience
                        </a>
                        <a className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground" href="#projects">
                            Projects
                        </a>
                        <a className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground" href="#blogs">
                            Blogs
                        </a>
                    </div>
                    <button className="relative inline-flex items-center justify-start rounded-md border border-input bg-transparent px-3 py-1.5 text-sm font-medium whitespace-nowrap text-muted-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 sm:pr-10 h-8 min-h-8 w-20 min-w-0 md:w-32 lg:w-44">
                        <span className="hidden lg:inline-flex">Search website...</span>
                        <span className="inline-flex min-w-0 truncate lg:hidden">Search...</span>
                        <kbd className="pointer-events-none absolute top-1.5 right-1.5 hidden h-5 items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 select-none sm:flex">
                            <span className="text-xs">⌘</span>K
                        </kbd>
                    </button>
                    <div data-slot="dialog-header" className="flex flex-col gap-2 text-center sm:text-left sr-only">
                        <h2 id="radix-_R_4kpa6btbH1_" data-slot="dialog-title" className="text-lg leading-none font-semibold">
                            Command Palette
                        </h2>
                        <p id="radix-_R_4kpa6btbH2_" data-slot="dialog-description" className="text-sm text-muted-foreground">
                            Search for a command to run...
                        </p>
                    </div>

                    {/* Theme Toggle Button */}
                    <Toggle />
                </div>
            </div>
        </header>
    )
}
