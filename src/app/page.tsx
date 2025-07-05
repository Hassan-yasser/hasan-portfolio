import ScrollControll from "@/components/scroll-color/ScrollControll";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Header = dynamic(() => import("@/components/navbar/Header"), {
  ssr: true,
});
// const Bupples = dynamic(() => import("@/components/background/ServerBupples"), {
//   ssr: true,
// });
const HeroSection = dynamic(() => import("@/components/hero/HeroSection"), {
  ssr: true,
});
const AboutSection = dynamic(() => import("@/components/about/AboutSection"), {
  ssr: true,
});
const ScrollTriggered = dynamic(
  () => import("@/components/projects/Projects"),
  {
    ssr: true,
  }
);
const ExperienceSection = dynamic(
  () => import("@/components/exp/ExperienceSection"),
  {
    ssr: true,
  }
);
const Contact = dynamic(() => import("@/components/Contact/Contact"), {
  ssr: true,
});

export default function Home() {
  return (
    <main className="relative space-y-10  overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 animate-bg-shift bg-gradient-to-r from-black/5 via-[#1a0027] to-violet-600 bg-[length:200%_200%] opacity-20" />
      <Suspense>
        <ScrollControll />
      </Suspense>

      {/* <Suspense>
        <Bupples />
      </Suspense> */}
      <Suspense>
        <Header />
      </Suspense>
      <Suspense>
        <HeroSection />
      </Suspense>
      <Suspense>
        <AboutSection />
      </Suspense>
      <Suspense>
        <ScrollTriggered />
      </Suspense>
      <Suspense>
        <ExperienceSection />
      </Suspense>
      <Suspense>
        <Contact />
      </Suspense>
    </main>
  );
}
