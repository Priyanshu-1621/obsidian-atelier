import { ArrowUpRight } from "lucide-react";
export function ContactFooter() {
  return <>
    <section id="contact" className="contact-section section-line">
      <div className="contact-top reveal"><span>06 / CONTACT</span><p>Have an idea, project or opportunity?<br />Let's connect.</p></div>
      <h2 className="reveal">LET'S<br /><span>BUILD</span><br />SOMETHING.</h2>
      <div className="contact-links reveal"><a href="tel:+919393647263"><span>PHONE</span>+91 9393647263 <ArrowUpRight /></a><a href="https://github.com/priyanshu-1621" target="_blank" rel="noreferrer"><span>GITHUB</span>github.com/priyanshu-1621 <ArrowUpRight /></a><a href="https://www.linkedin.com/in/priyanshu-816743424" target="_blank" rel="noreferrer"><span>LINKEDIN</span>linkedin.com/in/priyanshu-816743424 <ArrowUpRight /></a><div><span>LOCATION</span>Shahpura, Jaipur, Rajasthan, India</div></div>
    </section>
    <footer><div><strong>PRIYANSHU</strong><p>Computer Science Student · Developer · Builder</p></div><div><p>Shahpura, Jaipur, India</p><p><a href="https://github.com/priyanshu-1621">GitHub</a> / <a href="https://www.linkedin.com/in/priyanshu-816743424">LinkedIn</a></p></div><p>© 2026 Priyanshu. Built with curiosity.</p></footer>
  </>;
}
