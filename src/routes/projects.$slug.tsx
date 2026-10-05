import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { getProject, projects } from "@/data/projects";
import { ProjectVisual } from "@/components/portfolio/ProjectVisual";
import { CursorInteraction } from "@/components/portfolio/CursorInteraction";
import { RevealObserver } from "@/components/portfolio/RevealObserver";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => { const project = getProject(params.slug); if (!project) throw notFound(); return project; },
  head: ({ loaderData, params }) => ({
    meta: loaderData ? [
      { title: `${loaderData.name} — Priyanshu Portfolio` },
      { name: "description", content: loaderData.summary },
      { property: "og:title", content: `${loaderData.name} — Priyanshu Portfolio` },
      { property: "og:description", content: loaderData.summary },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `/projects/${params.slug}` },
      { name: "twitter:card", content: "summary_large_image" },
    ] : [{ title: "Project unavailable — Priyanshu" }, { name: "robots", content: "noindex" }],
    links: [{ rel: "canonical", href: `/projects/${params.slug}` }],
  }),
  component: ProjectPage,
});

function ProjectPage() {
  const project = Route.useLoaderData();
  const index = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  return <><RevealObserver /><CursorInteraction /><main className="project-page">
    <header className="project-page-nav"><Link to="/" hash="work"><ArrowLeft /> ALL WORK</Link><Link to="/" className="project-page-brand">PRIYANSHU<span>.</span></Link><a href="/resume.pdf" download="Priyanshu_Resume.pdf">RESUME <ArrowUpRight /></a></header>
    <section className="project-hero"><div className="project-hero-meta"><span>PROJECT / {project.number}</span><span>{project.category}</span></div><h1>{project.name}</h1><p>{project.overview}</p><ProjectVisual project={project} detail /></section>
    <section className="project-facts reveal"><div><span>ROLE</span><p>{project.role}</p></div><div><span>TECHNOLOGIES</span><p>{project.technologies.join(" · ")}</p></div><div><span>STATUS</span><p>Independent project</p></div></section>
    <section className="project-story">
      <div className="story-block reveal"><span>01 / WHAT I BUILT</span><ul>{project.built.map((item) => <li key={item}>{item}</li>)}</ul></div>
      <div className="story-block reveal"><span>02 / KEY FEATURES</span><ul>{project.features.map((item) => <li key={item}>{item}</li>)}</ul></div>
      <div className="story-block reveal"><span>03 / LEARNINGS</span><ul>{project.learnings.map((item) => <li key={item}>{item}</li>)}</ul></div>
    </section>
    {next && <Link className="next-project" to="/projects/$slug" params={{ slug: next.slug }}><span>NEXT PROJECT / {next.number}</span><strong>{next.name}</strong><ArrowRight /></Link>}
  </main></>;
}
