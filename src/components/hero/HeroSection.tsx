import FramerSwiper from "./ToolSwiper";
import FirstSectionHeader from "./FirstSectionHeader";
// import Bupples from "../background/Bupples";

const HeroSection = () => {
  return (
    <section
      id="Home"
      className="min-h-screen   flex  flex-col gap-10 xl:gap-20 items-center justify-center pt-10 sm:pt-36 lg:px-24  sm:px-10 relative overflow-hidden"
    >
      {/* <Bupples /> */}
      <FirstSectionHeader />
      <FramerSwiper />
    </section>
  );
};

export default HeroSection;
