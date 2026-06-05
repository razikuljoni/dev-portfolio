import AnalyticsClient from "@/src/components/analytics-client";
import Header from "@/src/components/header-section";
import { ThemeProvider } from "@/src/components/theme-provider";
import { CommandPaletteProvider } from "@/src/components/command-palette-provider";
import { siteConfig } from "@/src/lib/site";
import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";

import "./globals.css";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: siteConfig.title,
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={jetbrainsMono.variable} suppressHydrationWarning>
            <head>
                {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /> */}
                <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
                <meta name="theme-color" content="#0b0d0e" media="(prefers-color-scheme: dark)" />
                {/* <Script
                    id="theme-init"
                    strategy="beforeInteractive"
                >{`(()=>{try{var e=localStorage.getItem("theme"),t="function"==typeof window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,o="light"===e||"dark"===e?e:t?"dark":"light";document.documentElement.classList.toggle("dark","dark"===o),document.documentElement.style.colorScheme=o,document.documentElement.dataset.theme=o}catch(e){}})();`}</Script> */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(()=>{try{const e=localStorage.getItem("theme"),t="function"==typeof window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,o="light"===e||"dark"===e?e:t?"dark":"light";document.documentElement.classList.toggle("dark","dark"===o),document.documentElement.style.colorScheme=o,document.documentElement.dataset.theme=o}catch(e){}})();`,
                    }}
                />
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <link
                    rel="alternate"
                    type="application/rss+xml"
                    title={`${siteConfig.name} RSS Feed`}
                    href="/feed.xml"
                />
                <ThemeProvider>
                    <div className="relative grid min-h-screen grid-cols-[1fr_minmax(0,60rem)_1fr] grid-rows-[auto_1fr_auto]">
                        <div className="theme-surface pointer-events-none relative -right-px col-start-1 row-span-full row-start-1 hidden border-x-[1.5px] border-x-(--pattern-border) bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1.5px,transparent_0,transparent_50%)] bg-size[6px_6px] bg-fixed md:block"></div>
                        <div className="pointer-events-none relative -left-px col-start-3 row-span-full row-start-1 hidden border-x-[1.5px] border-x-(--pattern-border) bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1.5px,transparent_0,transparent_50%)] bg-size[6px_6px] bg-fixed md:block"></div>
                        <div className="pointer-events-none relative -bottom-px col-span-full col-start-1 row-start-1 hidden h-[1.5px] bg-(--pattern-border) md:block"></div>

                        <Header />
                        <div className="col-start-2 row-start-2">{children}</div>
                    </div>
                </ThemeProvider>
                <CommandPaletteProvider />
                <AnalyticsClient />
            </body>
        </html>
    );
}
