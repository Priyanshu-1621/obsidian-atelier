import { createFileRoute } from "@tanstack/react-router";
import { AboutEducation } from "@/components/portfolio/AboutEducation";
import { ContactFooter } from "@/components/portfolio/ContactFooter";
import { CursorInteraction } from "@/components/portfolio/CursorInteraction";
import { Hero } from "@/components/portfolio/Hero";
import { Navbar } from "@/components/portfolio/Navbar";
import { Projects } from "@/components/portfolio/Projects";
import { RevealObserver } from "@/components/portfolio/RevealObserver";
import { SkillsCurrent } from "@/components/portfolio/SkillsCurrent";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Priyanshu — Developer, Designer & Builder" },
      { name: "description", content: "Portfolio of Priyanshu, a Computer Science student building Android, web, AI and product design projects in Jaipur, India." },
      { property: "og:title", content: "Priyanshu — Developer, Designer & Builder" },
      { property: "og:description", content: "Android, web, AI and product experiments by Priyanshu, a Computer Science student in Jaipur." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return <><RevealObserver /><CursorInteraction /><Navbar /><main><Hero /><Projects /><AboutEducation /><SkillsCurrent /><ContactFooter /></main></>;
}
