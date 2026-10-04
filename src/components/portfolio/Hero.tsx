import { ArrowDown, ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-geometry" aria-hidden="true"><span /><span /><span /></div>
      <div className="hero-rule" />
      <div className="hero-meta"><span>PRIYANSHU / PORTFOLIO 2026</span><span>SHAHPURA, JAIPUR · INDIA</span></div>
      <div className="hero-center">
        <div className="hero-title-mask"><h1 id="hero-title">PRIYANSHU</h1></div>
        <div className="hero-support"><p>COMPUTER SCIENCE STUDENT / DEVELOPER / DESIGNER / BUILDER</p><span>IN — 26.9420° N / 75.7190° E</span></div>
      </div>
      <div className="hero-bottom">
        <p>I build digital products, applications and experiments while exploring software, AI, design and emerging technology.</p>
        <div className="hero-actions"><a className="cta cta-primary" href="#work">EXPLORE MY WORK <ArrowUpRight /></a><a className="cta cta-secondary" href="#about">ABOUT ME <ArrowDown /></a></div>
        <div className="scroll-hint"><span />SCROLL TO EXPLORE</div>
      </div>
    </section>
  );
}
