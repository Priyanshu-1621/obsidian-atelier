import { SectionHeading } from "./SectionHeading";
const groups = [
  { number: "01", name: "BUILD", items: ["Android", "Kotlin", "Jetpack Compose", "Web Development"] },
  { number: "02", name: "DESIGN", items: ["UI Design", "UX", "Product Design", "Visual Design"] },
  { number: "03", name: "EXPLORE", items: ["Artificial Intelligence", "Cloud Technologies", "Automation", "Emerging Technology"] },
];
const ticker = "ANDROID / AI / WEB / UI/UX / KOTLIN / PYTHON / JAVASCRIPT / PRODUCT / CLOUD / BUILD / ";
export function SkillsCurrent() {
  return <>
    <section id="skills" className="skills-section section-line">
      <SectionHeading number="04" eyebrow="CAPABILITIES" title={<>WHAT I LIKE<br />TO WORK WITH.</>} />
      <div className="skill-groups reveal">{groups.map((group) => <article key={group.name}><span>{group.number}</span><h3>{group.name}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
      <div className="ticker" aria-hidden="true"><div>{ticker}{ticker}</div></div>
    </section>
    <section className="current-section">
      <SectionHeading number="05" eyebrow="IN PROGRESS" title="CURRENTLY BUILDING." />
      <div className="current-grid reveal"><article><span>ACTIVE / 01</span><h3>GOLU AI</h3><p>AI companion for Android</p></article><article><span>CONCEPT / 02</span><h3>CAMPUSCONNECT</h3><p>A modern campus experience</p></article><article><span>ONGOING / 03</span><h3>PERSONAL DEVELOPMENT</h3><p>DSA · Software Development · AI · Product Building</p></article></div>
      <p className="current-note reveal">Always experimenting with the next thing.<span /></p>
    </section>
  </>;
}
