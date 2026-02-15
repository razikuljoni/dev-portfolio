import FooterSection from "@/components/footer-section";
import HeroSection from "@/components/hero-section";

import { BackgroundPaths } from "@/components/background-paths";
import Header from "@/components/header-section";
import Blogs from "../components/blogs-section";
import Experience from "../components/experience-section";
import GithubSection from "../components/github-section";
import Projects from "../components/projects-section";

export default function Page() {
    return (
        <main className="mt-10">
            <div className="flex flex-col">
                <Header />
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
    );
}
