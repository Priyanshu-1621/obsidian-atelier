import { SectionHeading } from "./SectionHeading";

const education = [
  ["01", "CLASS 10", "Kendriya Vidyalaya", "Koraput, Odisha"],
  ["02", "CLASS 12", "Sikar", "Rajasthan"],
  ["03", "CURRENT", "B.Tech Computer Science & Engineering", "JECRC University, Jaipur"],
];

export function AboutEducation() {
  return <>
    <section id="about" className="light-section about-section section-line">
      <div className="section-number" aria-hidden="true">02</div>
      <SectionHeading number="02" eyebrow="ABOUT" title={<>BUILDING WHILE<br />FIGURING IT OUT.</>} />
      <div className="about-grid reveal">
        <p className="about-copy">I'm Priyanshu, a Computer Science student at JECRC University, Jaipur. I enjoy turning ideas into digital products, experimenting with technology and learning by actually building things.</p>
        <dl className="about-meta"><div><dt>BASED IN</dt><dd>Shahpura, Jaipur,<br />Rajasthan, India</dd></div><div><dt>CURRENTLY</dt><dd>B.Tech Computer Science<br />& Engineering</dd></div><div><dt>FOCUS</dt><dd>Software · AI · Design<br />· Product Building</dd></div></dl>
      </div>
    </section>
    <section id="education" className="light-section education-section">
      <SectionHeading number="03" eyebrow="EDUCATION" title="THE ROAD SO FAR." />
      <div className="timeline reveal">
        {education.map(([number, stage, title, location]) => <article className="timeline-item" key={number} tabIndex={0}><span className="timeline-node" /><span className="timeline-number">{number}</span><p>{stage}</p><h3>{title}</h3><span className="timeline-location">{location}</span></article>)}
      </div>
    </section>
  </>;
}
