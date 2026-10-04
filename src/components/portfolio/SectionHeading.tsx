import { cn } from "@/lib/utils";

export function SectionHeading({ number, eyebrow, title, className }: { number: string; eyebrow: string; title: React.ReactNode; className?: string }) {
  return (
    <header className={cn("section-heading reveal", className)}>
      <div className="section-kicker"><span>{number}</span><span>{eyebrow}</span></div>
      <h2>{title}</h2>
    </header>
  );
}
