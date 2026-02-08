export default function FooterSection() {
    return (
      // FOOTER Section
      <footer
        className="border-t border-border py-8 text-center"
        style={{ opacity: 1, transform: "none" }}
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5"
                  role="img"
                  aria-label="Email"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"></path>
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"></path>
                </svg>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Resume"
                className="flex size-11 items-center justify-center rounded-md border border-border bg-background text-foreground/70 transition-all duration-300 hover:border-foreground/30 hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
                href="/narsi_resume.pdf"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5"
                  role="img"
                  aria-label="Resume"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z"
                    clipRule="evenodd"
                  ></path>
                  <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z"></path>
                </svg>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex size-11 items-center justify-center rounded-md border border-border bg-background text-foreground/70 transition-all duration-300 hover:border-foreground/30 hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
                href="https://github.com/razikuljoni"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5"
                  role="img"
                  aria-label="GitHub"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57C20.565 21.795 24 17.31 24 12c0-6.63-5.37-12-12-12Z"
                  ></path>
                </svg>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex size-11 items-center justify-center rounded-md border border-border bg-background text-foreground/70 transition-all duration-300 hover:border-foreground/30 hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
                href="https://www.linkedin.com/in/razikuljoni"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5"
                  role="img"
                  aria-label="LinkedIn"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="flex size-11 items-center justify-center rounded-md border border-border bg-background text-foreground/70 transition-all duration-300 hover:border-foreground/30 hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
                href="https://x.com/razikuljoni"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5"
                  role="img"
                  aria-label="X (Twitter)"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex size-11 items-center justify-center rounded-md border border-border bg-background text-foreground/70 transition-all duration-300 hover:border-foreground/30 hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
                href="https://youtube.com/@razikuljoni"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5"
                  role="img"
                  aria-label="YouTube"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                </svg>
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
            . The source code is available on
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
              <a
                className="rounded transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
                href="/sitemap.xml"
              >
                Sitemap
              </a>
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="select-none">·</span>
              <a
                className="rounded transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
                href="/robots.txt"
              >
                Robots
              </a>
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="select-none">·</span>
              <a
                className="rounded transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
                href="/manifest.webmanifest"
              >
                Manifest
              </a>
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="select-none">·</span>
              <a
                className="rounded transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
                href="/llms.txt"
              >
                llms.txt
              </a>
            </span>
          </nav>
        </div>
      </footer>
    );
}