import AboutSection from "@/src/components/about-section";
import AiDiscoverySection from "@/src/components/ai-discovery-section";
import { BackgroundPaths } from "@/src/components/background-paths";
import Blogs from "@/src/components/blogs-section";
import Experience from "@/src/components/experience-section";
import FooterSection from "@/src/components/footer-section";
import GithubSection from "@/src/components/github-section";
import HeroSection from "@/src/components/hero-section";
import Projects from "@/src/components/projects-section";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "MD Razikul Islam Joni — Full Stack / MERN Stack Developer",
    description:
        "Portfolio of MD Razikul Islam Joni showcasing full stack (MERN) projects, engineering experience, and technical writing.",
};

export default function Page() {
    return (
        <main className="mt-10">
            <div className="flex flex-col">
                <BackgroundPaths>
                    <HeroSection />
                </BackgroundPaths>
                <AboutSection />
                <Experience />
                <Projects />
                <AiDiscoverySection />
                <Blogs />
                <GithubSection />
                <FooterSection />
            </div>
        </main>
    );
}
