import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectVisual({ project, detail = false }: { project: Project; detail?: boolean }) {
  return (
    <div className={cn("project-visual", `project-visual--${project.tone}`, detail && "project-visual--detail")} aria-hidden="true">
      <div className="visual-grid" />
      <div className="visual-index">{project.number}</div>
      {project.slug === "golu-ai" && (
        <>
          <div className="ai-orbit ai-orbit--one" /><div className="ai-orbit ai-orbit--two" />
          <div className="ai-core"><span>G</span></div>
          <div className="ui-line ui-line--one" /><div className="ui-line ui-line--two" />
          <div className="visual-caption">VOICE / VISION / CONVERSATION</div>
        </>
      )}
      {project.slug === "synexa" && (
        <>
          <div className="synexa-word">SYN<br />EXA</div>
          <div className="synexa-block synexa-block--one" /><div className="synexa-block synexa-block--two" />
          <div className="visual-caption">IDENTITY / INTERFACE / SYSTEM</div>
        </>
      )}
      {project.slug === "campusconnect" && (
        <>
          <div className="campus-ring"><span>C</span></div>
          <div className="campus-path campus-path--one" /><div className="campus-path campus-path--two" />
          <div className="campus-node campus-node--one" /><div className="campus-node campus-node--two" /><div className="campus-node campus-node--three" />
          <div className="visual-caption">PEOPLE / PLACES / KNOWLEDGE</div>
        </>
      )}
    </div>
  );
}
