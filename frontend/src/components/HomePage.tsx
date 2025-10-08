import { HeroSection } from "./HeroSection";
import { CommunitySection } from "./CommunitySection";
import { FaqSection } from "./FaqSection";
import { ScrollAnimation } from "./ScrollAnimation";
import { SecondLifeSection } from "./SecondLifeSection";
import { SpeedSection } from "./SpeedSection";
import { GamingSection } from "./GamingSection";
import { FamiliarUISection } from "./FamiliarUISection";
import { FeaturesSection } from "./FeaturesSection";
import { MaintainerSection } from './MaintainerSection'; 

export function HomePage() {
  return (
    <>
      <HeroSection />
      <SecondLifeSection />
      <SpeedSection />
      <FamiliarUISection />
      <FeaturesSection />
      <GamingSection />
      <MaintainerSection />
      <CommunitySection />
      <FaqSection />
    </>
  );
}