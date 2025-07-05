import ExpCards from "./ExpCards";
import ExpTitle from "./ExpTitle";

export default function ExperienceSection() {
  return (
    <section id="Experience" className="px-4 py-20 text-white ">
      <div className="max-w-5xl mx-auto">
        <ExpTitle />
        <ExpCards />
      </div>
    </section>
  );
}
