import { ProductGrap } from "./ProjectGrap";
import ProjectHomePageTitle from "./ProjectHomePageTitle";
import ViewAllButton from "./ViewAllButton";
const projects: [string, number, number, string][] = [
  ["/audit.svg", 340, 10, "#8027fe"],
  ["/textlogo.svg", 20, 40, "#8027fe"],
  ["/logo2.svg", 340, 10, "#ffffff"],
];

export default function ProjectsSection() {
  return (
    <section
      id="Projects"
      className="relative z-10 min-h-screen py-16  justify-center px-4   overflow-hidden"
    >
      <ProjectHomePageTitle />

      <div className="flex items-center">
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="space-y-10">
            {projects.map(([emoji, hueA, hueB, background], i) => (
              <ProductGrap
                key={i}
                i={i}
                emoji={emoji}
                hueA={hueA}
                hueB={hueB}
                background={background}
              />
            ))}
          </div>
          <ViewAllButton />
        </div>
      </div>
    </section>
  );
}
