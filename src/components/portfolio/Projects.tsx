import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { ProjectVisual } from "./ProjectVisual";
import { SectionHeading } from "./SectionHeading";

function ProjectCard({ project }: { project: Project }) {
  return <article className="project-card reveal" data-cursor-view>
    <Link to="/projects/$slug" params={{ slug: project.slug }} aria-label={`Explore ${project.name}`}>
      <div className="project-card-head"><span>{project.number}</span><p>{project.category}</p><ArrowUpRight /></div>
      <ProjectVisual project={project} />
      <div className="project-card-body"><h3>{project.name}</h3><p>{project.summary}</p><div className="project-tech">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div><span className="project-cta">EXPLORE PROJECT <ArrowUpRight /></span></div>
    </Link>
  </article>;
}

export function Projects() {
  return <section id="work" className="projects-section section-line">
    <div className="section-number" aria-hidden="true">01</div>
    <SectionHeading number="01" eyebrow="SELECTED WORK" title="THINGS I'VE BUILT." />
    <p className="projects-subtitle reveal">Projects are where ideas stop being ideas.</p>
    <div className="projects-list">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
  </section>;
}
