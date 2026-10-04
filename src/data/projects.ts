export type Project = {
  slug: string;
  number: string;
  name: string;
  category: string;
  summary: string;
  overview: string;
  role: string;
  technologies: string[];
  built: string[];
  features: string[];
  learnings: string[];
  tone: "lime" | "bone" | "oxide";
};

export const projects: Project[] = [
  {
    slug: "golu-ai",
    number: "01",
    name: "GOLU AI",
    category: "AI COMPANION · ANDROID · KOTLIN",
    summary: "An AI companion application built from scratch with cloud AI, conversational interaction, voice capabilities, image understanding and a custom Android interface.",
    overview: "Golu AI is an ongoing Android product experiment exploring what a thoughtful, multimodal AI companion can feel like on a phone.",
    role: "Independent developer and product designer",
    technologies: ["Kotlin", "Jetpack Compose", "Android", "Cloud AI", "Cloudflare Workers"],
    built: ["A custom Android interface in Jetpack Compose", "Cloud-connected conversational flows", "Voice and image-understanding interactions", "The product identity and interaction language"],
    features: ["Conversational interaction", "Voice capabilities", "Image understanding", "Custom native Android UI"],
    learnings: ["Designing stateful conversational interfaces", "Connecting mobile and cloud systems", "Making complex AI interactions feel approachable"],
    tone: "lime",
  },
  {
    slug: "synexa",
    number: "02",
    name: "SYNEXA",
    category: "WEB · PRODUCT · DESIGN",
    summary: "A featured web and product design project focused on shaping a coherent digital experience from visual language to interface structure.",
    overview: "Synexa is a web, product and design exploration. It is a space to develop a distinctive identity and translate it into a focused digital interface.",
    role: "Product designer and web developer",
    technologies: ["Web Development", "UI Design", "UX", "Visual Systems"],
    built: ["The visual direction and identity", "Interface structure and page composition", "Reusable visual and product patterns"],
    features: ["Editorial interface direction", "Responsive web composition", "Consistent product language"],
    learnings: ["Turning an abstract identity into a usable product", "Balancing visual expression with clarity", "Building systems rather than isolated screens"],
    tone: "bone",
  },
  {
    slug: "campusconnect",
    number: "03",
    name: "CAMPUSCONNECT",
    category: "ANDROID · CAMPUS PRODUCT · UI/UX",
    summary: "A student-focused campus platform concept designed to bring useful campus information, events, clubs, academic resources and student contributions into one modern experience.",
    overview: "CampusConnect explores a single, student-centered home for the fragmented information and communities that shape campus life.",
    role: "Product designer and Android developer",
    technologies: ["Android", "Kotlin", "Jetpack Compose", "UI/UX", "Product Design"],
    built: ["The product concept and information structure", "Core student journeys", "A modern mobile visual system"],
    features: ["Campus events and clubs", "Academic resources", "Campus information", "Student contributions"],
    learnings: ["Organizing broad product requirements", "Designing around real student needs", "Prioritizing clarity in information-heavy products"],
    tone: "oxide",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
