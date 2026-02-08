import FooterSection from "@/components/footer-section"
import HeroSection from "@/components/hero-section"

import { BackgroundPaths } from "@/components/background-paths"
import Blogs from "../components/blogs-section"
import Experience from "../components/experience-section"
import GithubSection from "../components/github-section"
import Header from "../components/header-section"
import Projects from "../components/projects-section"

export default function Page() {
    return (
        <>
            <div className="relative grid min-h-screen grid-cols-[1fr_minmax(0,60rem)_1fr] grid-rows-[auto_1fr_auto]">
                <div className="pointer-events-none relative -right-px col-start-1 row-span-full row-start-1 hidden border-x-[1.5px] border-x-(--pattern-border) bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1.5px,transparent_0,transparent_50%)] bg-[length:6px_6px] bg-fixed md:block"></div>
                <div className="pointer-events-none relative -left-px col-start-3 row-span-full row-start-1 hidden border-x-[1.5px] border-x-(--pattern-border) bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1.5px,transparent_0,transparent_50%)] bg-[length:6px_6px] bg-fixed md:block"></div>
                <div className="pointer-events-none relative -bottom-px col-span-full col-start-1 row-start-1 hidden h-[1.5px] bg-(--pattern-border) md:block"></div>

                <div className="col-start-2 row-start-2">
                    <Header />

                    <main className="mt-10">
                        <div className="flex flex-col">
                            <BackgroundPaths>
                                <HeroSection />
                            </BackgroundPaths>
                            <Experience />
                            <Projects />
                            <Blogs />
                            <GithubSection />
                            <FooterSection />
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}
