import { HeroSection } from "./HeroSection";
import { CommunitySection } from "./CommunitySection";
import { FaqSection } from "./FaqSection";
import { ScrollAnimation } from "./ScrollAnimation";
import { SecondLifeSection } from "./SecondLifeSection";
import { SpeedSection } from "./SpeedSection";
import { GamingSection } from "./GamingSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <SecondLifeSection />
      <SpeedSection />
      <GamingSection />
      <CommunitySection />
      <FaqSection />
    </>
  );
}