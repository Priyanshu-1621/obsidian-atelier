import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const items = [
  { label: "WORK", href: "#work" }, { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" }, { label: "CONTACT", href: "#contact" },
];

export function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const ids = ["home", "work", "about", "skills", "contact"];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target.id) setActive(visible.target.id);
    }, { rootMargin: "-25% 0px -60%", threshold: [0.05, 0.3] });
    ids.forEach((id) => { const node = document.getElementById(id); if (node) observer.observe(node); });
    return () => observer.disconnect();
  }, []);
  const go = (href: string) => { setOpen(false); document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }); };
  return (
    <nav className="site-nav" aria-label="Main navigation">
      <a href="#home" className="nav-brand" onClick={(event) => { event.preventDefault(); go("#home"); }}>PRIYANSHU<span className="brand-dot">.</span></a>
      <div className="nav-links">
        {items.map((item) => <a key={item.label} href={item.href} className={active === item.href.slice(1) ? "is-active" : ""}>{item.label}<span /></a>)}
        <a href="/resume.pdf" download="Priyanshu_Resume.pdf">RESUME ↗</a>
      </div>
      <Button className="menu-trigger" variant="ghost" size="icon" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((value) => !value)}>{open ? <X /> : <Menu />}</Button>
      <div className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <span className="mobile-menu-label">NAVIGATION / 2026</span>
        {[{ label: "HOME", href: "#home" }, ...items].map((item, index) => <a key={item.label} href={item.href} onClick={(event) => { event.preventDefault(); go(item.href); }}><span>0{index + 1}</span>{item.label}</a>)}
        <a href="/resume.pdf" download="Priyanshu_Resume.pdf" onClick={() => setOpen(false)}><span>06</span>RESUME ↗</a>
      </div>
    </nav>
  );
}
